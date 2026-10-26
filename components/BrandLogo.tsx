import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" aria-label="MindCraft Academy home" className="focus-ring inline-flex items-center text-lg tracking-[-0.06em] sm:text-xl">
      <span className="font-bold text-white">MIND</span>
      <span className="text-white">{"{"}</span>
      <span className="font-light text-[#808080]">CRAFT</span>
      <span className="text-white">{"}"}</span>
    </Link>
  );
}
