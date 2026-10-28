import { Resend } from "resend";
import { getProgram } from "@/lib/programs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_REQUEST_BYTES = 4.5 * 1024 * 1024;
const MAX_GOAL_LENGTH = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^(?:[0-9]|\+|\(|\)|\.| |-){7,24}$/;

class PayloadTooLargeError extends Error {}

async function parseBoundedFormData(request: Request) {
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    throw new PayloadTooLargeError();
  }

  const reader = request.body?.getReader();
  if (!reader) {
    throw new Error("Missing request body");
  }

  const chunks: Uint8Array<ArrayBuffer>[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      throw new PayloadTooLargeError();
    }
    const chunk = new Uint8Array(value.byteLength);
    chunk.set(value);
    chunks.push(chunk);
  }

  const headers = new Headers(request.headers);
  headers.delete("content-length");
  const body = new Blob(chunks, {
    type: headers.get("content-type") ?? "multipart/form-data",
  });
  return new Request(request.url, { method: "POST", headers, body }).formData();
}

function isSupportedDocument(file: File, bytes: Uint8Array) {
  const extension = file.name.toLowerCase().split(".").pop();
  const mimeType = file.type.toLowerCase();
  const zipContents = new TextDecoder("latin1").decode(bytes);
  const isPdf = extension === "pdf"
    && (mimeType === "" || mimeType === "application/pdf" || mimeType === "application/octet-stream")
    && new TextDecoder().decode(bytes.subarray(0, 5)) === "%PDF-";
  const isDoc = extension === "doc"
    && (mimeType === "" || mimeType === "application/msword" || mimeType === "application/octet-stream")
    && [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1].every((byte, index) => bytes[index] === byte);
  const isDocx = extension === "docx"
    && (mimeType === "" || mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || mimeType === "application/octet-stream")
    && bytes[0] === 0x50
    && bytes[1] === 0x4b
    && bytes[2] === 0x03
    && bytes[3] === 0x04
    && zipContents.includes("[Content_Types].xml")
    && zipContents.includes("word/document.xml");

  return isPdf || isDoc || isDocx;
}

function textField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json({ message: "This request could not be verified. Please refresh and try again." }, { status: 403 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONSULTATION_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Consultation email is not configured.");
    return Response.json({ message: "Consultation requests are temporarily unavailable. Please contact the academy by phone or WhatsApp." }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await parseBoundedFormData(request);
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return Response.json({ message: "The request is too large. Please use a CV that is 4 MB or smaller." }, { status: 413 });
    }
    return Response.json({ message: "The form data could not be read. Please check the fields and try again." }, { status: 400 });
  }

  if (textField(formData, "website")) {
    return Response.json({ message: "The request could not be submitted. Please try again." }, { status: 400 });
  }

  const name = textField(formData, "name");
  const email = textField(formData, "email");
  const phone = textField(formData, "phone");
  const programSlug = textField(formData, "program");
  const tier = textField(formData, "tier");
  const goal = textField(formData, "goal");
  const program = getProgram(programSlug);

  if (
    !name
    || name.length > 100
    || /[\u0000-\u001f\u007f]/.test(name)
    || email.length > 254
    || !EMAIL_PATTERN.test(email)
    || !PHONE_PATTERN.test(phone)
    || !program
    || (tier !== "Basic" && tier !== "Advanced")
    || !goal
    || goal.length > MAX_GOAL_LENGTH
  ) {
    return Response.json({ message: "Please review the required fields and correct any invalid values." }, { status: 400 });
  }

  const uploadedFile = formData.get("cv");
  let attachment: { filename: string; content: string } | undefined;
  if (uploadedFile instanceof File && uploadedFile.size > 0) {
    if (uploadedFile.size > MAX_FILE_BYTES) {
      return Response.json({ message: "Your CV must be 4 MB or smaller." }, { status: 400 });
    }

    const bytes = new Uint8Array(await uploadedFile.arrayBuffer());
    if (!isSupportedDocument(uploadedFile, bytes)) {
      return Response.json({ message: "Upload a valid PDF, DOC, or DOCX file." }, { status: 400 });
    }

    const filename = uploadedFile.name.replace(/[^\w.-]/g, "_").slice(-120) || `cv.${uploadedFile.name.split(".").pop()}`;
    attachment = { filename, content: Buffer.from(bytes).toString("base64") };
  } else if (uploadedFile instanceof File && uploadedFile.name) {
    return Response.json({ message: "The selected CV file is empty." }, { status: 400 });
  } else if (uploadedFile !== null && !(uploadedFile instanceof File)) {
    return Response.json({ message: "The CV upload is invalid." }, { status: 400 });
  }

  const tierDuration = tier === "Basic" ? "6 weeks" : "10 weeks";
  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from,
      to: ["atmindcraft@gmail.com"],
      replyTo: email,
      subject: `Consultation request: ${program.title} (${tier}, ${tierDuration})`,
      text: [
        "New MindCraft Academy consultation request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone or WhatsApp: ${phone}`,
        `Program: ${program.title}`,
        `Tier: ${tier} (${tierDuration})`,
        "",
        "Goal:",
        goal,
      ].join("\n"),
      ...(attachment ? { attachments: [attachment] } : {}),
    });

    if (error) {
      console.error("Resend rejected a consultation email.", { name: error.name, statusCode: error.statusCode });
      return Response.json({ message: "We couldn’t send your request right now. Please try again or contact the academy directly." }, { status: 502 });
    }
  } catch {
    console.error("Consultation email request failed unexpectedly.");
    return Response.json({ message: "We couldn’t send your request right now. Please try again or contact the academy directly." }, { status: 502 });
  }

  return Response.json({ message: "Your consultation request has been sent. The MindCraft Academy team will be in touch." });
}
