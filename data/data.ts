export const bio = {
  name: "Tomáš Randus",
  birthDay: "1981-08-01",
  location: "Prague, Czech Republic",
  summary:
    "Senior Staff Engineer (20+ years) bridging **Frontend Architecture** and **Product Management** with **Applied AI**. Specializing in **LLM Integration** and autonomous Agents to build secure, scalable, and **Intelligent User Interfaces**.",
  available: [
    {
      city: "Prague",
      type: "onsite/remote",
    },
    {
      city: "Worldwide",
      type: "remote",
    },
  ],
  email: "tom.randus@gmail.com",
  phone: "+420 724 023 901",
  position: "Staff Software Engineer | AI & Product Focus", // Upravený titulek
  experienceStart: 2002, // Opraveno podle první práce (Cleverlance 2002)
  github: "https://github.com/dizzyn",
  linkedin: "http://linkedin.com/in/randus",
  hobbies: ["Violin", "Philosophy", "Sports"],
};

export const workExperience = [
  {
    title: "Software Consultant",
    from: "2025",
    to: "present",
    description: [
      "**Security consultancy** at National Agency for Communication and IT",
      "**AI Agent development** for AppSec automation and QA processes",
    ],
  },
  {
    company: "Invicti Security",
    title: "Staff Software Engineer",
    from: "2022",
    to: "2025",
    description: [
      "Product development – TypeScript, Vue.js, Federated GraphQL",
      "Accessibility implementation (WCAG 2.1 AA compliance)",
      "Agile Leadership and cross-team collaboration",
      "Security-focused development practices",
    ],
  },
  {
    company: "Citrix",
    title: "Staff Software Engineer",
    from: "2019",
    to: "2022",
    description: [
      "React, GraphQL, large-scale JS→TS migration leadership",
      "E2E testing automation with Playwright and custom tooling",
      "Software Development Training programs and mentorship",
      "Performance optimization for enterprise applications",
    ],
  },
  {
    company: "Sapho (acquired by Citrix)",
    title: "Senior Software Engineer",
    from: "2017",
    to: "2019",
    description: [
      "Core member of development team for Business Intelligence Services (B2B)",
      "Full-stack development: React/TypeScript/Node.js/Cordova",
      "API design and microservices architecture",
    ],
  },
  {
    company: "Radio Free Europe / Radio Liberty",
    title: "Lead Front-end Developer",
    from: "2014",
    to: "2017",
    description: [
      "Architected global news platform serving 60 languages",
      "Supported 200+ countries with RTL and complex character sets",
      "Managed ~3.5M unique weekly visitors with high performance requirements",
      "Tech leadership: React, Redux, Sass, Internationalization",
    ],
  },
  {
    company: "Summit Media",
    title: "Lead Front-end Developer",
    from: "2013",
    to: "2014",
    description: [
      "Custom eCommerce solutions development",
      "WYSIWYG editor development for Magento platform",
      "Team mentorship",
    ],
  },
  {
    company: "Unity Mobile",
    title: "Senior Product Manager",
    from: "2011",
    to: "2012",
    description: [
      "Product management for automated website publishing tools",
      "Cross-functional team leadership and stakeholder management",
    ],
  },
  {
    company: "Sanoma Media",
    title: "Senior Product Manager",
    from: "2009",
    to: "2011",
    description: [
      "Product management for payment solutions and mobile applications",
      "Team education and training program development",
    ],
  },
  {
    company: "Wirenode",
    title: "Founder, CTO",
    from: "2004",
    to: "2007",
    description: [
      "Co-founded technology company (6 employees)",
      "CTO and Senior Java Developer roles",
      "Product strategy and business development",
    ],
  },
  {
    company: "Cleverlance",
    title: "Medior Java Developer",
    from: "2002",
    to: "2004",
    description: [
      "Enterprise development projects in Banking & Telecommunications",
      "Java enterprise application development",
    ],
  },
];

export const education = {
  degree: "Mgr.",
  field: "Media Studies",
  institution: "Charles University",
  location: "Prague",
  startYear: 2015,
  endYear: 2019,
};

export const memberships = ["cesko.digital", "Czechitas", "TEDxPrague"];

// Sloučil jsem Skills a ExtraSkills pro větší přehlednost
export const skills = [
  {
    name: "AI & Machine Learning",
    description:
      "**Primary Focus:** Developing AI-powered automation tools and Agents. Experience with LLM integration (OpenAI/Anthropic), RAG architectures, prompt engineering, and building intelligent workflows for AppSec.",
  },
  {
    name: "Full Stack Engineering",
    description:
      "Expert in TypeScript/JavaScript ecosystem (React, Vue.js, Node.js). Focus on large-scale architecture, performance optimization, and maintainable codebases.",
  },
  {
    name: "Application Security (AppSec)",
    description:
      "Security-focused development, vulnerability assessment automation, and secure coding standards. Bridging the gap between Engineering and Security teams.",
  },
  {
    name: "GraphQL & API Architecture",
    description:
      "Deep expertise in GraphQL Federation, Apollo ecosystem, and Microservices architecture. Designing scalable backend systems.",
  },
  {
    name: "Product Management",
    description:
      "Strategic product delivery, agile transformation, and release management. Strong background in connecting business requirements with technical execution.",
  },
  {
    name: "Accessibility (WCAG)",
    description:
      "Implementation of WCAG 2.1 AA standards and inclusive design patterns. Ensuring software is usable by everyone.",
  },
];

export const favoriteStack = [
  {
    name: "AI / LLM Integration",
    description: "AI Agents, RAG, Vercel AI SDK, LangChain concepts",
  },
  {
    name: "Frontend Core",
    description: "TypeScript, React, Vue, Svelte",
  },
  {
    name: "Backend & Data",
    description: "Node.js, GraphQL Federation, Apollo, SQL/NoSQL",
  },
  {
    name: "Testing & QA",
    description: "Playwright, Vitest, Jest, BDD Automation",
  },
  {
    name: "Cloud & DevOps",
    description: "AWS, Vercel, Docker, CI/CD pipelines",
  },
];
