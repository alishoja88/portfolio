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
    tags: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "OCR",
      "OpenAI",
      "Google Cloud Run",
      "Cloud SQL",
    ],
    liveUrl: "https://receipt-tracker-frontend-827118437630.us-central1.run.app/",
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
          "The app is containerized with Docker and deployed on Google Cloud Run with Cloud SQL",
        ],
      },
      features: [
        { title: "Receipt Upload", description: "Drag and drop receipt images or PDFs through a clean upload interface." },
        { title: "OCR Extraction", description: "Automatically extract raw receipt text using Google Cloud Vision API." },
        { title: "AI Structuring", description: "Convert noisy OCR output into clean structured fields: merchant, date, total, and category." },
        { title: "Analytics Dashboard", description: "Visualize spending patterns with summaries, charts, and transaction overviews." },
        { title: "Smart Categorization", description: "Automatically group expenses by category with support for manual review." },
        { title: "Search & Filters", description: "Find receipts using text search, date range, amount, and category filters." },
        { title: "Cloud Deployment", description: "Dockerized and deployed on Google Cloud Run with managed Cloud SQL for production-grade scalability." },
      ],
      techStack: {
        Frontend: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query", "Zustand"],
        Backend: ["NestJS", "TypeORM", "PostgreSQL"],
        Integrations: ["OpenAI API", "Google Cloud Vision API"],
        Tooling: ["Docker", "ESLint", "Prettier", "Google Cloud Run", "Cloud SQL", "Artifact Registry"],
        Infrastructure: ["Google Cloud Run", "Cloud SQL (PostgreSQL)", "Artifact Registry"],
      },
      techDescriptions: {
        Frontend: "Type-safe UI, responsive layout, state management, and efficient server-state handling.",
        Backend: "Structured API layer, validation, persistence, and scalable data handling.",
        Integrations: "OCR text extraction and AI-based parsing for structured expense data.",
        Tooling: "Consistent development workflow and maintainable code quality with deployment-ready tooling.",
        Infrastructure:
          "Containerized deployment on Google Cloud with managed PostgreSQL and private image registry.",
      } as Record<string, string>,
      challenges: [
        { title: "OCR Reliability", description: "Receipt text can be inconsistent, noisy, or incomplete depending on image quality and vendor formatting." },
        { title: "Structured Parsing", description: "OpenAI is used to transform unstructured OCR text into consistent structured fields before saving." },
        { title: "Full-Stack Architecture", description: "The app separates upload, parsing, validation, and persistence responsibilities across the frontend and backend to keep the system maintainable." },
        { title: "Cloud Deployment", description: "Deployed on Google Cloud Run with Cloud SQL, Docker multi-stage builds for both frontend and backend, and secure environment configuration." },
      ],
      highlights: [
        "Eliminates manual expense entry through OCR and AI parsing",
        "Combines OCR extraction with AI-based structured data processing",
        "Supports responsive analytics and searchable transaction history",
        "Built with a full-stack TypeScript architecture for maintainability",
        "Deployed on Google Cloud Run with Cloud SQL for production-ready infrastructure",
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
  {
    number: "03",
    slug: "atelier",
    category: "E-COMMERCE PROJECT",
    title: "Atelier Fashion Store",
    subtitle:
      "A modern, premium fashion e-commerce experience built for performance, design quality, real-world API integration, and production-level testing.",
    highlight:
      "Premium e-commerce experience with cinematic motion, real API data, and comprehensive automated tests.",
    description:
      "A premium fashion e-commerce platform built with Next.js 16, featuring cinematic animations, real API integration, and 91 passing tests across unit, integration, and E2E suites.",
    role: "Front-End Developer",
    features: [
      "Cinematic landing page with fullscreen hero and scroll-triggered animations",
      "Product listing with filtering, search, and category navigation across 194 real products",
      "Product detail page with animated gallery, size/color selection, ratings, and reviews",
      "Cart management with fly-to-cart animation and Zustand global state",
      "Quick View modal for instant product preview",
      "91 passing tests across unit, integration, and E2E",
      "Fully responsive across all screen sizes",
    ],
    impact: [
      "194 real products from DummyJSON API",
      "6 pages: Landing, Shop, Detail, Cart, Wishlist, Checkout",
      "91 passing tests",
      "2 tested browsers: Chrome + Mobile Safari",
      "0 failed tests",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion v12",
      "TanStack Query v5",
      "Zustand v5",
      "Axios",
      "DummyJSON API",
      "Vitest",
      "Playwright",
    ],
    liveUrl: "https://atelier-ecommerce-psi.vercel.app",
    githubUrl: "https://github.com/alishoja88/atelier-ecommerce",
    previewType: "platform" as const,
    image: "/images/projects/ecommerce/Screenshot1.png",
    images: [
      "/images/projects/ecommerce/Screenshot1.png",
      "/images/projects/ecommerce/Screenshot2.png",
      "/images/projects/ecommerce/Screenshot3.png",
      "/images/projects/ecommerce/Screenshot4.png",
    ],
    caseStudy: {
      heroDescription:
        "Atelier is a full-featured fashion e-commerce platform designed as a senior front-end portfolio piece. It demonstrates production-level code architecture, modern UI patterns, seamless API integration, and comprehensive test coverage — built entirely with Next.js 16 and the latest React ecosystem.",
      valueBullets: [
        "Cinematic landing page with fullscreen hero and scroll-triggered animations",
        "Product listing with real-time filtering, search, and category navigation across 194 real products",
        "Product detail page with animated image gallery, size/color selection, real ratings, and customer reviews",
        "Cart management with fly-to-cart animation and Zustand global state",
        "Quick View modal for instant product preview",
        "91 passing tests: unit, integration, and E2E",
        "Fully responsive across all screen sizes",
      ],
      overview: {
        what: "Atelier simulates a real-world premium fashion store. Users can browse 194 real products from the DummyJSON API, filter by category, search by keyword, view detailed product pages with image galleries, add items to cart, and manage their wishlist — all with smooth animations and a polished editorial design aesthetic.",
        howSteps: [
          "DummyJSON API provides 194 real products with images, ratings, reviews, and categories",
          "TanStack Query handles all data fetching, caching, and pagination automatically",
          "Zustand manages cart and wishlist state globally across all pages",
          "Framer Motion powers all animations including scroll-triggered and fly-to-cart effects",
          "Next.js App Router handles routing, layouts, and server/client component boundaries",
        ],
      },
      features: [
        {
          title: "Cinematic Hero",
          description:
            "Fullscreen editorial hero with floating transparent navbar, product thumbnail strip, and Framer Motion entrance animations.",
        },
        {
          title: "Product Listing",
          description:
            "194 real products with category filtering, keyword search, sort by price/rating, and numbered pagination with total count.",
        },
        {
          title: "Product Detail",
          description:
            "Full-page product view with animated image gallery, size selector, color picker, real star ratings, and reviews.",
        },
        {
          title: "Cart Management",
          description:
            "Real-time cart with quantity controls, fly-to-cart animation via React portal, and live order summary.",
        },
        {
          title: "Quick View Modal",
          description:
            "Preview any product without leaving the current page via an animated modal overlay with full product info.",
        },
        {
          title: "Wishlist",
          description:
            "Save favorite products with heart toggle animation and persistent Zustand state across all pages.",
        },
      ],
      testing: {
        subtitle:
          "91 tests across three layers ensure every feature works correctly — from isolated business logic to full user flows in real browsers.",
        layers: [
          {
            title: "Unit Tests",
            count: "31 tests (Vitest)",
            details: [
              "adaptProduct(): badge assignment, price calculation, category formatting, originalPrice logic",
              "cartStore: add, remove, quantity increment, totalCount calculation",
              "wishlistStore: toggle, isWishlisted, empty state",
              "cn() utility: class merging, Tailwind conflict resolution",
            ],
          },
          {
            title: "Integration Tests",
            count: "22 tests (Vitest + Testing Library)",
            details: [
              "ProductCard: renders name/price/badge, add-to-cart updates Zustand store, wishlist toggle",
              "Cart flow: add -> remove -> quantity -> totalCount lifecycle",
              "Pagination: page numbers, active highlight, prev/next disabled states, ellipsis rendering",
            ],
          },
          {
            title: "E2E Tests",
            count: "38 tests (Playwright)",
            details: [
              "Navigation: homepage, shop, product detail, cart, wishlist flows",
              "Shop: product display, category filter, pagination, sort dropdown",
              "Cart: add/remove items, badge increment, quantity selector",
              "Product Detail: info display, image gallery, size selector, add to cart, wishlist toggle",
            ],
          },
        ],
        results: [
          { label: "Unit/Integration", value: "53 passed / 0 failed" },
          { label: "E2E Chrome", value: "19 passed / 0 failed" },
          { label: "E2E Mobile Safari", value: "19 passed / 0 failed" },
          { label: "Total", value: "91 passed / 0 failed" },
        ],
      },
      techStack: {
        Frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion v12"],
        "State Management": ["Zustand v5", "TanStack Query v5"],
        "API & Data": ["Axios", "DummyJSON API (194 products)"],
        Testing: ["Vitest", "Testing Library", "Playwright"],
        Tooling: ["ESLint", "Prettier", "Cursor AI"],
      },
      techDescriptions: {
        Frontend:
          "Modern React architecture with premium UI polish and performance-focused rendering.",
        "State Management":
          "Separation of server-state and app-state for predictable, scalable behavior.",
        "API & Data":
          "Real product data with adapter-driven transformation and type-safe usage in the UI.",
        Testing:
          "Three-layer strategy covering logic, component behavior, and browser-level user flows.",
        Tooling: "Linting, formatting, and AI-assisted development workflow for consistent delivery.",
      } as Record<string, string>,
      challenges: [
        {
          title: "Adapter Pattern for API Stability",
          description:
            "DummyJSON returns data in a format that does not directly match app needs. A custom adapter layer transforms all API responses into app-specific types, centralizing badge assignment, price calculation, and category formatting.",
        },
        {
          title: "Server & Client Boundary in Next.js",
          description:
            "With App Router, server and client responsibilities must be deliberate. Pages stay server components for performance while TanStack Query and Framer Motion run only where needed.",
        },
        {
          title: "Testing Complex Animations",
          description:
            "Fly-to-cart uses React portals and real DOM position reads via getBoundingClientRect(). Tests required portal mocking and Playwright synchronization to assert badge updates after animation completes.",
        },
      ],
      highlights: [
        "194 real products from DummyJSON API with automatic caching and background refetching",
        "Editorial design inspired by Nike, SSENSE, and Net-a-Porter — not a generic template",
        "Fly-to-cart animation using React portals, Framer Motion, and real DOM position tracking",
        "91 tests covering unit logic, component behavior, and full E2E flows across 2 browsers",
        "Clean architecture: feature-based folders, adapter pattern, strict TypeScript, no any types",
        "Fully responsive from 375px mobile to 1440px desktop with Tailwind CSS v4",
      ],
    },
  },
  {
    number: "04",
    slug: "devprep-ai",
    category: "AI PRODUCT",
    title: "DevPrep AI",
    subtitle: "AI-powered frontend interview coach",
    highlight:
      "Practice technical interviews with personalized AI questions, instant scoring, and actionable feedback.",
    description:
      "Practice technical interviews with a personalized AI coach. Get real questions tailored to your role and level, submit answers, and receive detailed feedback with scores, strengths, and model answers — instantly.",
    role: "Front-End Developer",
    features: [
      "Generate interview questions by role, level, and tech stack",
      "Receive instant AI feedback with score, strengths, and improvements",
      "Track your progress across sessions with a full history dashboard",
    ],
    impact: [
      "GPT-4o powered question and feedback flows",
      "Next.js App Router architecture",
      "Session history with local persistence",
    ],
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Zustand",
      "Tailwind CSS",
    ],
    liveUrl: "https://developer-prepare-kttnhfelx-ali-shojas-projects.vercel.app/",
    githubUrl: "https://github.com/alishoja88",
    previewType: "platform" as const,
    image: "/images/projects/AiPrep/ai-prep-1.png",
    images: [
      "/images/projects/AiPrep/ai-prep-1.png",
      "/images/projects/AiPrep/ai-prep-2.png",
      "/images/projects/AiPrep/ai-prep-3.png",
      "/images/projects/AiPrep/ai-prep-4.png",
      "/images/projects/AiPrep/ai-prep-5.png",
    ],
    caseStudy: {
      heroDescription:
        "DevPrep AI lets developers practice technical interviews at their own pace. Users configure a session by selecting their role (Frontend, Backend, Full Stack), experience level, and tech stack. The AI generates targeted questions, evaluates each answer with a score out of 10, and provides actionable feedback including strengths, areas to improve, and a model answer.",
      valueBullets: [
        "Generate interview questions by role, level, and tech stack",
        "Receive instant AI feedback with score, strengths, and improvements",
        "Track your progress across sessions with a full history dashboard",
      ],
      overview: {
        what: "DevPrep AI lets developers practice technical interviews at their own pace. Users configure a session by selecting their role (Frontend, Backend, Full Stack), experience level, and tech stack. The AI generates targeted questions, evaluates each answer with a score out of 10, and provides actionable feedback including strengths, areas to improve, and a model answer.",
        howSteps: [
          "Configure your session — role, level, topic, and question count",
          "AI generates tailored interview questions via OpenAI GPT-4o",
          "Answer each question in your own words within the session",
          "Submit and receive instant feedback: score, strengths, improvements",
          "Review the session summary with per-topic performance breakdown",
          "Browse your full history and track progress over time",
        ],
      },
      features: [
        {
          title: "Role-based Question Generation",
          description:
            "Questions adapt to your role — Frontend, Backend, or Full Stack.",
        },
        {
          title: "AI Feedback Engine",
          description:
            "GPT-4o evaluates each answer and returns a score, three strengths, areas to improve, and a model answer.",
        },
        {
          title: "Session Configuration",
          description:
            "Choose your level (Junior / Mid / Senior), topic, and number of questions.",
        },
        {
          title: "Session Summary",
          description:
            "Radar chart showing performance per topic, question breakdown, and score trends.",
        },
        {
          title: "Hint System",
          description:
            "Request an AI-generated hint for any question without revealing the full solution.",
        },
        {
          title: "Progress History",
          description:
            "All sessions are stored locally with filters and sorting by score or date.",
        },
      ],
      techStack: {
        Frontend: [
          "Next.js 15",
          "React 18",
          "TypeScript",
          "Tailwind CSS v4",
          "Framer Motion",
          "Zustand",
          "Recharts",
        ],
        "AI / Backend": ["OpenAI GPT-4o", "Next.js API Routes"],
        Data: ["localStorage"],
        Tooling: ["Vercel"],
      },
      techDescriptions: {
        Frontend:
          "App Router architecture with client/server component separation, smooth animations, and global state management via Zustand.",
        "AI / Backend":
          "Server-side API routes call GPT-4o with structured JSON prompts to generate questions, evaluate answers, and produce hints — all with enforced response schemas.",
        Data:
          "Session history is persisted client-side with deduplication logic, supporting up to 20 past sessions with full Q&A and feedback data.",
        Tooling: "Zero-config deployment and hosting on Vercel.",
      } as Record<string, string>,
      challenges: [
        {
          title: "Preventing Stale Questions",
          description:
            "The session store persists across navigations. When users returned from a session and started a new one, old questions from the previous topic were still being shown. Fixed by calling reset() when the user clicks Start, plus a useRef guard to prevent React Strict Mode from double-invoking duplicate API calls.",
        },
        {
          title: "Role-Aware Topic Filtering",
          description:
            "Different roles require different tech stacks (for example, a Backend developer should not see CSS or React questions). Implemented a TOPICS_BY_ROLE map that filters available topics and selects a sensible default whenever the role changes.",
        },
        {
          title: "Reliable AI Response Parsing",
          description:
            "GPT-4o is used with response_format: json_object, but the model can return arrays in varying shapes depending on the prompt. Built a multi-fallback parser for plain arrays, { questions: [...] }, { data: [...] }, and top-level arrays, with a final step that enforces the topic field for correctness.",
        },
      ],
      highlights: [
        "Generates role-specific and level-appropriate interview questions using GPT-4o",
        "Evaluates free-text answers with structured feedback: score, strengths, and improvements",
        "Tracks full session history with per-topic performance analytics and radar charts",
        "Built with a type-safe Next.js App Router architecture and zero external database",
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
