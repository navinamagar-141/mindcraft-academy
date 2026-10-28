export const blogCategories = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing and SEO",
  "Career Advice",
  "MindCraft News",
] as const;

export type BlogCategory = (typeof blogCategories)[number];
export type BlogAuthorType = "Student" | "Teacher" | "Team";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: BlogCategory;
  date: string;
  authorType: BlogAuthorType;
  authorName: string;
  authorRole: string;
  authorBio: string;
  readingTime: string;
  body: BlogBlock[];
};

// Replace each placeholder author name and bio with the real contributor details before launch.
export const blogPosts: BlogPost[] = [
  {
    slug: "start-learning-web-development-pokhara",
    title: "How to start learning web development in Pokhara",
    summary: "A practical local roadmap for learning the web, building a first portfolio, and finding helpful feedback without getting stuck in tutorial loops.",
    category: "Web Development",
    date: "2026-10-28",
    authorType: "Teacher",
    authorName: "Teacher Author Placeholder",
    authorRole: "Lead Mentor",
    authorBio: "A MindCraft mentor sharing practical guidance for learners in Pokhara.",
    readingTime: "5 min read",
    body: [
      { type: "paragraph", text: "Web development can feel like a huge subject when every video recommends a different framework. If you are beginning in Pokhara, you do not need to choose every tool today. Start with the parts of the web that let you make a small page, understand how it works, and improve it one decision at a time." },
      { type: "heading", text: "Start with the browser basics" },
      { type: "paragraph", text: "Learn HTML first. It gives your page structure through headings, paragraphs, links, forms, and images. Then add CSS to control spacing, color, layout, and responsive behaviour. Build a simple page about a local place, a family business, or a club you know. These familiar subjects make it easier to focus on the code instead of inventing a product idea." },
      { type: "paragraph", text: "Once you can make a page that reads well on a phone, learn JavaScript. Begin with values, conditions, functions, arrays, and events. Add one useful interaction to your page, such as a filter, a menu, or a form that checks its input. Use the browser developer tools to inspect errors and see how your page changes at different screen sizes." },
      { type: "heading", text: "Build a steady practice routine" },
      { type: "paragraph", text: "A regular, manageable routine works better than waiting for a free weekend. Set aside time several days each week. Spend part of each session learning one idea, then use the rest to apply it without copying a finished solution. When a bug appears, read the full message, check the relevant line, and test one change at a time. Keeping brief notes about what worked will help you recognise patterns." },
      { type: "list", items: ["Make a one page profile with clear headings and working links.", "Recreate a useful local service page using your own layout and content.", "Add a small feature, test it on a phone, and ask someone to try it.", "Save your work with Git and write a short note describing each project."] },
      { type: "paragraph", text: "You can practise these skills anywhere with a computer and an internet connection. In Pokhara, local businesses, community groups, and tourism services also provide real examples of problems that a clearer website could solve. Ask permission before using someone’s name or content, and treat any project for a real organisation as a conversation about their needs, not just a design exercise." },
      { type: "heading", text: "Make your work easy to review" },
      { type: "paragraph", text: "A portfolio is more useful when it explains your decisions. For each project, include what you set out to make, which parts you completed, what you found difficult, and what you would improve next. Keep the code in a repository and publish a working preview when you are ready. A mentor or peer can give more specific feedback when they can see both the result and how you approached it." },
      { type: "quote", text: "The goal is not to know every tool. It is to be able to learn the next one by building something real." },
      { type: "paragraph", text: "If you want a structured next step, compare the topics in a Mentorship Intern Program with the skills you already practise. Ask about the weekly work, feedback, and project expectations before you decide. Start small, stay curious, and let each finished project point you toward the next question." },
    ],
  },
  {
    slug: "what-mentorship-internship-teaches",
    title: "What a mentorship internship teaches you that a classroom cannot",
    summary: "Good mentoring is more than explanations. It helps you practise decisions, receive useful feedback, and take responsibility for work that has a real purpose.",
    category: "Career Advice",
    date: "2026-10-28",
    authorType: "Student",
    authorName: "Student Author Placeholder",
    authorRole: "Mentorship Intern",
    authorBio: "A student contributor reflecting on project work and learning.",
    readingTime: "5 min read",
    body: [
      { type: "paragraph", text: "A classroom can give you a clear explanation of a concept and a safe place to practise it. That foundation matters. Working with a mentor adds another kind of learning: deciding what to do when a task is not already divided into steps, explaining your reasoning, and improving an outcome after someone has reviewed it." },
      { type: "heading", text: "Learn to turn a brief into a plan" },
      { type: "paragraph", text: "Real work rarely arrives as a perfect checklist. A client might ask for a website that brings in more bookings, while the actual issue could be unclear service information or a form that is difficult to use on a phone. A mentor can show you how to ask questions, identify the user’s need, and make a small plan before reaching for code or a design tool." },
      { type: "paragraph", text: "This practice is useful for students in Pokhara, where a project might involve a local shop, a community group, a tourism service, or an idea from your own neighbourhood. You learn to listen carefully, confirm what is in scope, and explain what you can deliver. That is different from completing an exercise whose expected answer is already known." },
      { type: "heading", text: "Feedback becomes part of the work" },
      { type: "paragraph", text: "In a mentorship internship, someone looks at how the work is built, not only whether the final screen appears correct. They may ask why you chose a particular layout, how an error is handled, or whether the page works with a keyboard. Good feedback points to a specific improvement and gives you room to make it yourself." },
      { type: "list", items: ["Bring a working version, even if it is incomplete.", "Describe what you tried and what you expected to happen.", "Write down the feedback that changes your next step.", "Return with the updated work and explain what you learned."] },
      { type: "paragraph", text: "This loop helps you practise communication alongside technical skills. If a task is blocked, you learn to share the evidence rather than hide the problem. If your first idea does not work, you learn to compare alternatives. Over time, you become more comfortable saying what you know, what you need to check, and how you will find out." },
      { type: "heading", text: "Finish with work you can explain" },
      { type: "paragraph", text: "A useful portfolio project is not just a polished image. It is evidence that you can understand a problem, make decisions, test your work, and respond to feedback. A mentor can help you keep the project achievable, notice missing details, and prepare a clear explanation for a future client, teammate, or employer." },
      { type: "quote", text: "The value of mentoring is not someone doing the hard part for you. It is learning how to do the hard part with guidance." },
      { type: "paragraph", text: "When comparing a Mentor Internship Program, ask who reviews your work, how often you receive feedback, and what you will complete by the end. Ask whether you will practise presenting your decisions and testing the result. Those answers tell you more than a list of tools alone. The strongest experience leaves you with better questions, a more reliable process, and work you can confidently discuss." },
    ],
  },
  {
    slug: "seo-basics-small-business-nepal",
    title: "SEO basics every small business in Nepal should know",
    summary: "A clear starting point for helping customers find a Nepali small business in search, from accurate listings to useful pages and measurable improvements.",
    category: "Digital Marketing and SEO",
    date: "2026-10-28",
    authorType: "Team",
    authorName: "MindCraft Team Placeholder",
    authorRole: "Academy Team",
    authorBio: "The MindCraft team shares updates and practical insights from the academy.",
    readingTime: "5 min read",
    body: [
      { type: "paragraph", text: "Search engine optimisation helps people find useful information about your business when they are already looking for it. For a small business in Nepal, strong basics often matter more than complicated tactics. Start by making sure your business details are accurate, your main pages answer real customer questions, and your website works well on a phone." },
      { type: "heading", text: "Make your business information consistent" },
      { type: "paragraph", text: "Keep your business name, address, phone number, opening hours, and services consistent wherever customers may find you. If you serve a particular area in Pokhara or another Nepali city, state that clearly where it is useful. A complete business profile with current photos, service details, and a way to contact you can help customers decide whether to visit or get in touch." },
      { type: "paragraph", text: "Do not create a page for every spelling variation of a place or service. Instead, explain naturally what you offer, who it is for, and where you provide it. If you serve visitors as well as local residents, make the important information easy to understand for both. Use the language your customers use, and provide translations only when you can keep them accurate." },
      { type: "heading", text: "Build pages around customer questions" },
      { type: "paragraph", text: "Think about the questions people ask before they call or buy. A restaurant might need a clear menu, location, hours, and booking details. A repair service might explain what it can fix, the areas it serves, and how a customer can request help. Give each important service a useful page instead of squeezing every detail into a short homepage paragraph." },
      { type: "list", items: ["Write a descriptive page title and a clear main heading.", "Use helpful page addresses that describe the service.", "Compress images and add accurate alternative text.", "Link related pages so visitors can find the next useful detail.", "Check that forms, phone links, and directions work on mobile."] },
      { type: "paragraph", text: "Avoid repeating the same phrase unnaturally or promising a search position. Search engines and customers both need clear, trustworthy information. If you publish an article, make sure it answers a real question and includes practical details that reflect your experience. Review older information when prices, services, or opening hours change." },
      { type: "heading", text: "Measure what helps customers" },
      { type: "paragraph", text: "Tools such as Google Search Console can show which searches bring people to your pages and whether important pages are indexed. Analytics can help you understand what visitors do after arriving, provided you configure it responsibly and respect applicable privacy expectations. Page speed tools can highlight technical issues, but prioritise fixes that make the experience better for people using slower connections or older phones." },
      { type: "quote", text: "Good SEO begins with a useful answer, a trustworthy business, and a page that is easy to use." },
      { type: "paragraph", text: "Choose a small number of improvements and track them over time. Confirm your contact details, improve one service page, check the mobile experience, and review search data after the changes have had time to appear. Local search is not an overnight fix. Consistent, accurate information and genuinely useful pages give a small business a dependable foundation for being found online." },
    ],
  },
];
