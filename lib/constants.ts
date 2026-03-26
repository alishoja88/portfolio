export const SITE_CONFIG = {
  name: "Ali Shoja",
  title: "Ali Shoja — Front-End Developer",
  description:
    "Personal portfolio showcasing front-end development work, projects, and experience.",
  url: "https://alishoja.dev",
  email: "alishojaa88@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const ABOUT_BULLETS = [
  {
    title: "React & Component Architecture",
    description:
      "Scalable component systems with hooks, state management, and design patterns",
  },
  {
    title: "TypeScript & Type Safety",
    description:
      "Strong typing systems that prevent bugs and enable confident refactoring",
  },
  {
    title: "Design Systems & Craft",
    description:
      "Attention to detail in typography, spacing, and micro-interactions that delight",
  },
] as const;

export const PROJECTS = [
  {
    number: "01",
    slug: "receipttrack",
    category: "Full Stack Product",
    title: "ReceiptTrack",
    subtitle: "AI-powered receipt and expense tracking",
    highlight:
      "Upload receipts, extract data with OCR + AI, and organize expenses automatically.",
    description:
      "Upload receipt images or PDFs, extract purchase data automatically with OCR and AI, and organize expenses in a searchable analytics dashboard.",
    role: "Full Stack Developer",
    features: [
      "Upload receipts (image / PDF)",
      "OCR + AI data extraction pipeline",
      "Analytics dashboard & charts",
      "Categorization & smart filters",
      "Store tracking & search",
      "Expense history & reporting",
    ],
    impact: [
      "OCR + AI extraction pipeline",
      "Full-stack: React + NestJS",
    ],
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL", "OCR", "OpenAI"],
    liveUrl: "https://receipts-tracker.up.railway.app/",
    githubUrl: "https://github.com/alishoja88",
    previewType: "interface" as const,
    image: "/images/projects/receipttracker/receipt-tracker-1.png",
    images: [
      "/images/projects/receipttracker/receipt-tracker-1.png",
      "/images/projects/receipttracker/receipt-tracker-2.png",
      "/images/projects/receipttracker/receipt-tracker-3.png",
      "/images/projects/receipttracker/receipt-tracker-4.png",
      "/images/projects/receipttracker/receipt-tracker-5.png",
    ],
    caseStudy: {
      valueBullets: [
        "Extract receipt data from images and PDFs",
        "Transform raw OCR text into structured expense records",
        "Explore spending through analytics, filters, and search",
      ],
      overview: {
        what: "ReceiptTrack lets users upload receipt images or PDFs and automatically extracts key purchase information — merchant, date, amount, and category. The structured data is stored and displayed in a searchable analytics dashboard.",
        howSteps: [
          "Upload a receipt image or PDF",
          "OCR extracts raw text from the receipt",
          "OpenAI parses the raw text into structured fields",
          "NestJS validates and stores the data in PostgreSQL",
          "The dashboard updates with searchable records and analytics",
        ],
      },
      features: [
        { title: "Receipt Upload", description: "Drag and drop receipt images or PDFs through a clean upload interface." },
        { title: "OCR Extraction", description: "Automatically extract raw receipt text using Google Cloud Vision API." },
        { title: "AI Structuring", description: "Convert noisy OCR output into clean structured fields: merchant, date, total, and category." },
        { title: "Analytics Dashboard", description: "Visualize spending patterns with summaries, charts, and transaction overviews." },
        { title: "Smart Categorization", description: "Automatically group expenses by category with support for manual review." },
        { title: "Search & Filters", description: "Find receipts using text search, date range, amount, and category filters." },
      ],
      techStack: {
        Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query", "Zustand"],
        Backend: ["NestJS", "TypeORM", "PostgreSQL"],
        Integrations: ["OpenAI API", "Google Cloud Vision API"],
        Tooling: ["Docker", "ESLint", "Prettier"],
      },
      techDescriptions: {
        Frontend: "Type-safe UI, responsive layout, state management, and efficient server-state handling.",
        Backend: "Structured API layer, validation, persistence, and scalable data handling.",
        Integrations: "OCR text extraction and AI-based parsing for structured expense data.",
        Tooling: "Consistent development workflow and maintainable code quality.",
      } as Record<string, string>,
      challenges: [
        { title: "OCR Reliability", description: "Receipt text can be inconsistent, noisy, or incomplete depending on image quality and vendor formatting." },
        { title: "Structured Parsing", description: "OpenAI is used to transform unstructured OCR text into consistent structured fields before saving." },
        { title: "Full-Stack Architecture", description: "The app separates upload, parsing, validation, and persistence responsibilities across the frontend and backend to keep the system maintainable." },
      ],
      highlights: [
        "Eliminates manual expense entry through OCR and AI parsing",
        "Combines OCR extraction with AI-based structured data processing",
        "Supports responsive analytics and searchable transaction history",
        "Built with a full-stack TypeScript architecture for maintainability",
      ],
    },
  },
  {
    number: "02",
    slug: "photography-portfolio",
    category: "Portfolio Website",
    title: "Photography Portfolio",
    subtitle: "A modern photography portfolio focused on gallery presentation, responsive design, and image performance.",
    highlight:
      "Clean visual storytelling through responsive galleries and optimized image delivery.",
    description:
      "A modern photography portfolio built with Next.js, focused on gallery presentation, responsive design, and image performance.",
    role: "Full Stack Developer",
    features: [
      "Category-based gallery browsing",
      "Responsive layout for all devices",
      "Smooth navigation and page flow",
      "Large image presentation with balanced spacing",
      "Authentication for admin actions",
      "Built-in contact structure",
    ],
    impact: [
      "Next.js + MongoDB",
      "Responsive gallery UX",
    ],
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "NextAuth", "Docker"],
    liveUrl: "https://alishoja-photography-1.vercel.app/",
    githubUrl: "https://github.com/alishoja88",
    previewType: "platform" as const,
    image: "/images/projects/photographi/photographi-1.png",
    images: [
      "/images/projects/photographi/photographi-1.png",
      "/images/projects/photographi/photographi-2.png",
      "/images/projects/photographi/photographi-3.png",
    ],
    caseStudy: {
      valueBullets: [
        "Browse photography by category and featured collections",
        "Responsive gallery optimized for every screen size",
        "Clean, distraction-free image viewing experience",
      ],
      overview: {
        what: "A portfolio website designed to present photography work through a clean and immersive gallery experience. It organizes visual content and gives visitors an easy way to browse categories and explore featured images.",
        howSteps: [
          "Browse photos by category (nature, street, daily life)",
          "View full-size images in a distraction-free layout",
          "Responsive grid adapts to desktop, tablet, and mobile",
          "Admin authentication for managing gallery content",
          "Dockerized setup for consistent local development",
        ],
      },
      features: [
        { title: "Category Gallery", description: "Browse photos by category such as nature, street, and daily life." },
        { title: "Responsive Layout", description: "Optimized for desktop, tablet, and mobile viewing experiences." },
        { title: "Smooth Navigation", description: "Clean page flow and intuitive movement across sections." },
        { title: "Image Presentation", description: "Large visuals with balanced spacing and minimal distractions." },
        { title: "Authentication", description: "Secure login support for protected admin actions via NextAuth." },
        { title: "Contact Integration", description: "Built-in structure for communication and portfolio engagement." },
      ],
      techStack: {
        Frontend: ["Next.js 14", "Tailwind CSS"],
        "Backend / Data": ["MongoDB", "Next.js API Routes"],
        "UX / Animation": ["Framer Motion", "React Spring"],
        Tooling: ["Docker", "Zustand", "ESLint", "Prettier"],
      },
      techDescriptions: {
        Frontend: "Server-side rendering, responsive layout, and optimized image delivery.",
        "Backend / Data": "Document-based storage and API routes for dynamic content.",
        "UX / Animation": "Smooth transitions and gallery interactions.",
        Tooling: "Containerized development and consistent code quality.",
      } as Record<string, string>,
      challenges: [
        { title: "Visual Consistency", description: "Handling consistent presentation across varying image sizes and aspect ratios." },
        { title: "Performance Balance", description: "Balancing large, high-quality image display with fast loading and responsiveness." },
      ],
      highlights: [
        "Responsive gallery layout built for multiple screen sizes",
        "Optimized image loading and presentation",
        "Reusable component structure across pages",
        "Dockerized project setup for consistent development",
      ],
    },
  },
] as const;

export const SKILLS = [
  {
    label: "Primary Stack",
    title: "React",
    description:
      "Component architecture, hooks, context & state management, performance optimization",
  },
  {
    label: "Type Safety",
    title: "TypeScript",
    description:
      "Strict typing, interfaces, generics, and scalable codebases that grow with confidence",
  },
  {
    label: "Design Philosophy",
    title: "Systems",
    description:
      "Design tokens, reusable components, consistent patterns that scale beautifully",
  },
] as const;

export const FOCUS_AREAS = [
  {
    icon: "Layers" as const,
    title: "Component Systems",
    description:
      "Scalable, reusable architectures that grow with your product without technical debt.",
  },
  {
    icon: "Zap" as const,
    title: "Performance",
    description:
      "Fast, optimized interfaces that respect users' time and bandwidth.",
  },
  {
    icon: "Type" as const,
    title: "Polish & Craft",
    description:
      "Attention to typography, spacing, and micro-interactions that delight.",
  },
  {
    icon: "Accessibility" as const,
    title: "Accessibility",
    description:
      "Interfaces that work for everyone, with semantic HTML and keyboard navigation.",
  },
] as const;

export const CONTACT_DETAILS = [
  {
    label: "Response Time",
    title: "24 Hours",
    description: "Usually respond within a day",
  },
  {
    label: "Location",
    title: "Moncton, Canada",
    description: "Remote \u2022 Timezone Flexible",
  },
  {
    label: "Availability",
    title: "Open Now",
    description: "Ready for new projects",
  },
] as const;

export const SOCIAL_LINKS = {
  email: "mailto:alishojaa88@gmail.com",
  github: "https://github.com/alishoja88",
  linkedin: "https://www.linkedin.com/in/alias-shoja/",
} as const;

export const MOTION = {
  duration: { fast: 0.15, base: 0.3, slow: 0.6 },
  ease: [0.16, 1, 0.3, 1] as const,
} as const;
