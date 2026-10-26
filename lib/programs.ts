export type Program = {
  slug: string;
  title: string;
  overview: string;
  focus: string[];
  basicWeeks: { period: string; title: string; detail: string }[];
  advancedWeeks: { period: string; title: string; detail: string }[];
};

export const programs: Program[] = [
  {
    slug: "mern-stack",
    title: "MERN Stack Mentorship Intern Program",
    overview: "Build end-to-end web applications with MongoDB, Express, React, and Node.js, supported by practical mentorship and code reviews.",
    focus: ["MongoDB", "Express", "React", "Node.js", "REST APIs", "Git"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Web and JavaScript foundations", detail: "Semantic HTML, responsive CSS, modern JavaScript, Git workflows, and browser debugging." },
      { period: "Weeks 3–4", title: "React interfaces and API basics", detail: "Reusable components, state, forms, routing, and consuming REST endpoints." },
      { period: "Weeks 5–6", title: "MERN application build", detail: "Create a CRUD application with Express routes, MongoDB models, input validation, and a guided demo deployment." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Product scope and architecture", detail: "Define a user problem, plan the application architecture, data model, and delivery milestones." },
      { period: "Weeks 3–4", title: "Production-ready React", detail: "Build accessible interfaces, robust forms, client-side data flows, and meaningful loading and error states." },
      { period: "Weeks 5–6", title: "Secure API and data layer", detail: "Implement Express APIs, MongoDB indexes, authentication patterns, authorization, and server-side validation." },
      { period: "Weeks 7–8", title: "Quality and integration", detail: "Add automated tests, logging, API documentation, and review performance and common security risks." },
      { period: "Weeks 9–10", title: "Deployment and production review", detail: "Deploy the full-stack application, configure environment settings, monitor behavior, and present the final product." },
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development Mentor Internship Program",
    overview: "Practice the complete product lifecycle by building user interfaces, backend services, persistent data, and a deployed application.",
    focus: ["TypeScript", "React", "Next.js", "Node.js", "SQL", "Deployment"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Web foundations", detail: "HTML, CSS, JavaScript, responsive layouts, Git, and the browser developer tools." },
      { period: "Weeks 3–4", title: "Frontend and server fundamentals", detail: "Build component-based interfaces and connect them to simple server routes and APIs." },
      { period: "Weeks 5–6", title: "Data-backed application", detail: "Model relational data, implement CRUD operations, validate inputs, and publish a guided project." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Requirements and system design", detail: "Turn a product brief into user stories, application boundaries, data structures, and milestones." },
      { period: "Weeks 3–4", title: "Accessible frontend delivery", detail: "Build responsive pages, reusable UI, forms, navigation, and reliable client-server interactions." },
      { period: "Weeks 5–6", title: "Backend services and persistence", detail: "Design API contracts, implement server logic, connect a database, and handle validation and errors." },
      { period: "Weeks 7–8", title: "Testing and reliability", detail: "Test critical workflows, improve observability, review authorization, and address performance bottlenecks." },
      { period: "Weeks 9–10", title: "Production deployment", detail: "Deploy the application, verify production behavior, document trade-offs, and present the completed work." },
    ],
  },
  {
    slug: "python",
    title: "Python Mentorship Intern Program",
    overview: "Develop practical Python skills through scripting, data handling, APIs, testing, and a mentor-guided application project.",
    focus: ["Python", "Data structures", "Flask", "APIs", "Testing", "SQL"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Python essentials", detail: "Set up a development environment and practice variables, control flow, functions, collections, and files." },
      { period: "Weeks 3–4", title: "Structured programs and data", detail: "Organize modules, handle exceptions, work with JSON and CSV, and use a relational database." },
      { period: "Weeks 5–6", title: "Build and share a Python project", detail: "Create a small API or automation tool, add validation and tests, and document how to run it." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Python engineering practice", detail: "Use type hints, virtual environments, packaging, modular design, and maintainable development workflows." },
      { period: "Weeks 3–4", title: "Data pipelines and persistence", detail: "Read and validate external data, design schemas, write efficient queries, and handle failures safely." },
      { period: "Weeks 5–6", title: "API development", detail: "Build a Flask service with clear contracts, input validation, authentication concepts, and useful errors." },
      { period: "Weeks 7–8", title: "Testing and automation", detail: "Write unit and integration tests, automate recurring tasks, and add logging and configuration management." },
      { period: "Weeks 9–10", title: "Deployment and project review", detail: "Deploy a Python application, document operational decisions, review quality, and present a working capstone." },
    ],
  },
  {
    slug: "frontend-development",
    title: "Frontend Development Mentor Internship Program",
    overview: "Learn to translate product ideas into accessible, responsive interfaces with modern frontend tools and engineering practices.",
    focus: ["HTML", "CSS", "JavaScript", "React", "Accessibility", "Testing"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "HTML, CSS, and responsive design", detail: "Use semantic markup, layout systems, responsive breakpoints, and accessible interaction patterns." },
      { period: "Weeks 3–4", title: "JavaScript and interactive UI", detail: "Practice DOM events, state, forms, reusable components, and browser debugging." },
      { period: "Weeks 5–6", title: "React interface project", detail: "Build a multi-view interface, connect an API, handle loading and error states, and publish a portfolio piece." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Interface planning and accessibility", detail: "Break down requirements, establish semantic page structure, and test keyboard and assistive technology flows." },
      { period: "Weeks 3–4", title: "Component systems", detail: "Build reusable React components, manage state, and create consistent interaction patterns." },
      { period: "Weeks 5–6", title: "Data-driven product interfaces", detail: "Connect APIs, manage forms and asynchronous states, and handle validation and error recovery." },
      { period: "Weeks 7–8", title: "Frontend quality and performance", detail: "Add component tests, improve rendering performance, and review responsive behavior across devices." },
      { period: "Weeks 9–10", title: "Production release", detail: "Polish and deploy the application, check accessibility, document design decisions, and present the work." },
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development Mentorship Intern Program",
    overview: "Design and build dependable server-side applications, APIs, data models, and deployment workflows with mentor feedback.",
    focus: ["Node.js", "Python", "REST APIs", "SQL", "Authentication", "Testing"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Server and HTTP foundations", detail: "Understand requests and responses, routing, JSON, environment setup, and command-line workflows." },
      { period: "Weeks 3–4", title: "APIs and databases", detail: "Implement REST endpoints, model relational data, write queries, and validate incoming data." },
      { period: "Weeks 5–6", title: "Service project", detail: "Build and test a small backend service, document endpoints, and deploy a guided project." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Service architecture", detail: "Translate requirements into service boundaries, API contracts, database models, and implementation milestones." },
      { period: "Weeks 3–4", title: "Reliable API implementation", detail: "Build modular server logic, schema validation, consistent errors, and clear request handling." },
      { period: "Weeks 5–6", title: "Data modeling and migrations", detail: "Design relational schemas, indexes, migrations, transactions, and efficient query patterns." },
      { period: "Weeks 7–8", title: "Security and service testing", detail: "Review access control, secrets handling, input boundaries, automated tests, and operational logging." },
      { period: "Weeks 9–10", title: "Deploy and operate", detail: "Deploy a backend service, verify health and performance, document operations, and present the API." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design Mentor Internship Program",
    overview: "Build user-centered product design skills through research, interaction design, prototyping, usability testing, and a case study.",
    focus: ["Figma", "User research", "Wireframes", "Prototyping", "Accessibility", "Design systems"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Users and problem discovery", detail: "Plan interviews, synthesize findings, identify user needs, and frame a focused design problem." },
      { period: "Weeks 3–4", title: "Flows and interface foundations", detail: "Map user journeys, sketch wireframes, establish visual hierarchy, and build a reusable Figma file." },
      { period: "Weeks 5–6", title: "Prototype and case study", detail: "Create an interactive prototype, conduct usability checks, iterate, and present the design rationale." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Research plan and synthesis", detail: "Define research questions, conduct interviews, synthesize evidence, and communicate design opportunities." },
      { period: "Weeks 3–4", title: "Information architecture", detail: "Develop flows, structure content, sketch options, and test early concepts with users." },
      { period: "Weeks 5–6", title: "Visual language and components", detail: "Create accessible visual foundations, responsive patterns, and a maintainable component library." },
      { period: "Weeks 7–8", title: "High-fidelity prototyping", detail: "Build realistic interaction prototypes, test key workflows, and refine based on observed usability." },
      { period: "Weeks 9–10", title: "Design handoff and portfolio", detail: "Document decisions, prepare developer handoff, complete the case study, and present the final experience." },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Mentorship Intern Program",
    overview: "Build defensive security foundations through safe labs, threat modeling, secure configuration, and responsible reporting.",
    focus: ["Security fundamentals", "Linux", "Networking", "Threat modeling", "Secure coding", "Incident response"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Security and networking foundations", detail: "Learn core security principles, Linux basics, network concepts, and responsible lab boundaries." },
      { period: "Weeks 3–4", title: "Threats and defensive controls", detail: "Practice threat modeling, access control, secure configuration, and common web security concepts in local labs." },
      { period: "Weeks 5–6", title: "Defensive review and reporting", detail: "Review a deliberately vulnerable training application, document defensive findings, and propose safe mitigations." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Scope, ethics, and threat modeling", detail: "Define authorized lab scope, document assets and trust boundaries, and prioritize defensive risks." },
      { period: "Weeks 3–4", title: "Systems and network hardening", detail: "Review Linux services, permissions, network segmentation, patching, and secure baseline configuration." },
      { period: "Weeks 5–6", title: "Secure application development", detail: "Examine authentication, input handling, session safety, dependency hygiene, and secure design practices." },
      { period: "Weeks 7–8", title: "Monitoring and response", detail: "Practice log review, alert triage, incident documentation, and recovery planning using simulated scenarios." },
      { period: "Weeks 9–10", title: "Defensive assessment capstone", detail: "Assess an authorized sandbox, prioritize remediation, write a responsible report, and present defensive improvements." },
    ],
  },
  {
    slug: "java",
    title: "Java Mentorship Intern Program",
    overview: "Strengthen object-oriented programming and Java engineering practice by building tested, maintainable applications.",
    focus: ["Java", "Object-oriented design", "Spring Boot", "SQL", "JUnit", "Git"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Java programming foundations", detail: "Set up the JDK and practice types, control flow, methods, collections, and basic debugging." },
      { period: "Weeks 3–4", title: "Object-oriented applications", detail: "Model domain concepts with Java types, interfaces, encapsulation, exceptions, and simple persistence." },
      { period: "Weeks 5–6", title: "Java project and tests", detail: "Build a small application, write JUnit tests, document the code, and present the result." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Java and object design", detail: "Use modern Java features, clear domain models, interfaces, composition, and maintainable package structure." },
      { period: "Weeks 3–4", title: "Persistence and SQL", detail: "Design relational data, write queries, manage transactions, and connect application data access." },
      { period: "Weeks 5–6", title: "Spring Boot services", detail: "Build REST endpoints, validate requests, structure services, and return consistent errors." },
      { period: "Weeks 7–8", title: "Testing and application reliability", detail: "Write unit and integration tests, configure logging, review security basics, and improve maintainability." },
      { period: "Weeks 9–10", title: "Deployment and technical presentation", detail: "Package and deploy the service, verify production configuration, document the design, and present the capstone." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Mentor Internship Program",
    overview: "Plan, publish, and evaluate practical digital campaigns through audience research, content strategy, analytics, and iteration.",
    focus: ["Audience research", "Content strategy", "SEO", "Analytics", "Campaign planning", "Reporting"],
    basicWeeks: [
      { period: "Weeks 1–2", title: "Audience and channel foundations", detail: "Define an audience, map needs, compare channels, and set clear campaign objectives." },
      { period: "Weeks 3–4", title: "Content and discoverability", detail: "Plan content, practice search fundamentals, write useful copy, and establish a publishing calendar." },
      { period: "Weeks 5–6", title: "Campaign measurement", detail: "Select meaningful metrics, review sample analytics, summarize results, and propose next steps." },
    ],
    advancedWeeks: [
      { period: "Weeks 1–2", title: "Research and campaign strategy", detail: "Analyze an audience and market, define positioning, establish measurable goals, and plan channel roles." },
      { period: "Weeks 3–4", title: "SEO and content planning", detail: "Research search intent, organize content themes, optimize useful pages, and plan a coherent editorial calendar." },
      { period: "Weeks 5–6", title: "Campaign creative and execution", detail: "Develop campaign assets and messaging, plan distribution, and establish tracking before launch." },
      { period: "Weeks 7–8", title: "Analytics and experimentation", detail: "Interpret campaign signals, propose ethical experiments, and adjust work based on evidence." },
      { period: "Weeks 9–10", title: "Results and stakeholder presentation", detail: "Prepare a clear performance report, explain limitations, recommend improvements, and present the campaign." },
    ],
  },
];

export const programKeywords = [
  "IT training Pokhara",
  "software internship Pokhara",
  "tech education Nepal",
  "mentorship internship",
  "practical IT internship Nepal",
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}
