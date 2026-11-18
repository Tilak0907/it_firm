export const BUSINESS = {
  brandName: 'NORTHCREST SOFTWARE',
  brandDisplay: 'Northcrest Software',
  brandSub: 'IT SOFTWARE ENGINEERING',
  operatingName: '1001441404 ONTARIO LIMITED',
  shortName: 'NORTHCREST SOFTWARE',
  tagline: 'IT Software Engineering & Digital Solutions',
  ownerName: 'Nikilesh Ayushman',
  ownerRole: 'Founder & Principal',
  businessType: 'IT Software Company',
  addressLine1: '120 Wharnsby Drive',
  addressLine2: 'Scarborough, Ontario M1X 2A2',
  country: 'Canada',
  fullAddress: '120 Wharnsby Drive, Scarborough, Ontario M1X 2A2, Canada',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=120+Wharnsby+Drive,+Scarborough,+Ontario+M1X+2A2,+Canada',
  phoneDisplay: '437-463-0016',
  phoneHref: 'tel:+14374630016',
  email: 'nikiayushman@gmail.com',
  emailHref: 'mailto:nikiayushman@gmail.com',
  region: 'Scarborough, Ontario · Serving Canada & North America',
};

export const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'process', label: 'Process' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_METRICS = [
  { value: '100%', label: 'Client IP Ownership' },
  { value: '99.9%', label: 'Target Cloud Uptime' },
  { value: 'GTA & Remote', label: 'Canadian Delivery' },
];

export const SERVICES = [
  {
    number: '01',
    icon: 'Code2',
    title: 'Custom Software Engineering',
    description:
      'Bespoke business applications architected from first principles to streamline operations, eliminate manual bottlenecks, and scale cleanly with growth.',
    deliverables: ['Enterprise Web Apps', 'Internal Portals', 'Workflow Automation'],
  },
  {
    number: '02',
    icon: 'Layers',
    title: 'Web & Mobile Product Development',
    description:
      'Fast, accessible, responsive user interfaces and cross-platform experiences built with modern React ecosystems and disciplined component design.',
    deliverables: ['React & TypeScript', 'Progressive Web Apps', 'Design Systems'],
  },
  {
    number: '03',
    icon: 'Cloud',
    title: 'Cloud Architecture & DevOps',
    description:
      'Resilient cloud infrastructure, containerized deployments, and automated CI/CD pipelines engineered for security, observability, and predictable cost.',
    deliverables: ['AWS & Azure Setup', 'CI/CD Automation', 'Containerization'],
  },
  {
    number: '04',
    icon: 'Workflow',
    title: 'API Systems & Integrations',
    description:
      'Robust REST and GraphQL backends that unify ERP, CRM, billing, and third-party data platforms into a single reliable source of truth.',
    deliverables: ['REST & GraphQL APIs', 'Payment & ERP Sync', 'Webhook Pipelines'],
  },
  {
    number: '05',
    icon: 'RefreshCw',
    title: 'Legacy Modernization',
    description:
      'Incremental, low-risk re-architecture of aging codebases and brittle spreadsheets into maintainable, high-performance cloud software.',
    deliverables: ['Codebase Refactoring', 'Performance Audits', 'Zero-Downtime Migration'],
  },
  {
    number: '06',
    icon: 'ShieldCheck',
    title: 'Technical Advisory & Maintenance',
    description:
      'Ongoing software stewardship, security patching, architectural reviews, and fractional engineering leadership tailored to growing businesses.',
    deliverables: ['Architecture Audits', 'SLA Support Plans', 'Security Hardening'],
  },
];

export const SOLUTION_TABS = [
  {
    id: 'frontend',
    label: 'Frontend & UX',
    eyebrow: 'INTERFACE ENGINEERING',
    headline: 'Crisp, fast interfaces engineered for clarity and everyday speed.',
    summary:
      'We craft responsive web applications with modular component architectures, WCAG-conscious accessibility, and sub-second perceived interactions across desktop and mobile devices.',
    highlights: [
      'Component-driven design systems built for long-term consistency',
      'Mobile-first layouts optimized for field, office, and executive workflows',
      'Strict Core Web Vitals optimization and clean semantic markup',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'Vite', 'Modern CSS', 'Tailwind', 'Accessibility (WCAG)'],
    metric: { label: 'Performance Target', value: '95+ Lighthouse' },
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    eyebrow: 'SYSTEMS & DATA LAYER',
    headline: 'Structured, fault-tolerant services built to handle real business volume.',
    summary:
      'From transactional databases to distributed microservices, we design clean API contracts, predictable data schemas, and audit-ready business logic.',
    highlights: [
      'Well-documented OpenAPI & GraphQL specifications',
      'Relational and document database modeling with indexing discipline',
      'Role-based access control, logging, and automated data validation',
    ],
    stack: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'REST / GraphQL', 'Prisma'],
    metric: { label: 'API Reliability', value: 'Strict Schema QA' },
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    eyebrow: 'INFRASTRUCTURE & DELIVERY',
    headline: 'Repeatable deployments with automated testing and clear observability.',
    summary:
      'Every release moves through automated quality gates, versioned infrastructure, and monitored environments so updates ship safely without operational disruption.',
    highlights: [
      'Infrastructure as Code for reproducible staging and production environments',
      'Automated CI/CD pipelines with rollback safety',
      'Structured telemetry, uptime alerts, and cost-aware scaling',
    ],
    stack: ['AWS', 'Microsoft Azure', 'Docker', 'GitHub Actions', 'Terraform', 'Linux', 'Nginx'],
    metric: { label: 'Release Cadence', value: 'Zero-Downtime CI/CD' },
  },
  {
    id: 'security',
    label: 'Quality & Security',
    eyebrow: 'ASSURANCE & GOVERNANCE',
    headline: 'Security and maintainability woven into every sprint, not bolted on later.',
    summary:
      'We follow defensive engineering practices, automated end-to-end test coverage, and transparent documentation so your team owns a clean, auditable asset.',
    highlights: [
      'OWASP-aligned input sanitization, auth hardening, and secrets management',
      'Unit, integration, and end-to-end regression test suites',
      'Clean handover documentation and architecture decision records',
    ],
    stack: ['OAuth 2.0 / OIDC', 'OWASP Standards', 'Vitest / Jest', 'Playwright', 'SOC2-Ready Patterns'],
    metric: { label: 'Code Handover', value: '100% Documented' },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Architecture',
    duration: 'Week 1',
    description:
      'We align on business objectives, operational constraints, user journeys, and technical architecture—producing a clear scope, roadmap, and milestone plan before writing production code.',
    outputs: ['Technical Blueprint', 'Milestone Schedule', 'Clear Scope & Estimate'],
  },
  {
    step: '02',
    title: 'Iterative Sprint Engineering',
    duration: 'Sprints 1–N',
    description:
      'Software is built in focused weekly milestones with live staging previews. You see real working features early and often, keeping feedback loops tight and transparent.',
    outputs: ['Live Staging Builds', 'Weekly Progress Demos', 'Clean Git History'],
  },
  {
    step: '03',
    title: 'Verification & Hardening',
    duration: 'Pre-Launch',
    description:
      'Comprehensive responsive QA across viewports, automated testing, security review, and performance profiling ensure the platform is resilient under real-world workloads.',
    outputs: ['Cross-Device QA', 'Security Checklist', 'Speed Optimization'],
  },
  {
    step: '04',
    title: 'Launch & Ongoing Stewardship',
    duration: 'Post-Launch',
    description:
      'Smooth production rollout, complete source-code and documentation handover, and optional ongoing maintenance and feature iteration as your business evolves.',
    outputs: ['Production Rollout', 'Full Documentation', 'Optional SLA Support'],
  },
];

export const FEATURED_WORK = [
  {
    id: 'operations-hub',
    category: 'Enterprise Web Platform',
    title: 'Unified Operations & Client Service Portal',
    summary:
      'A centralized multi-role web platform replacing fragmented spreadsheets with real-time order tracking, automated invoicing workflows, and executive dashboards.',
    impact: '62% faster weekly operations reporting',
    challenge:
      'Mid-market service teams often lose hours reconciling disconnected spreadsheets, email threads, and legacy desktop software across departments.',
    solution:
      'Architected a responsive React & TypeScript portal backed by a relational PostgreSQL API layer with role-based permissions, automated PDF reporting, and instant audit logs.',
    architecture: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS ECS'],
    outcomes: [
      'Single source of truth for operations, billing, and customer status',
      'Mobile-ready approval workflows for managers in the field',
      'Full role-based audit trail and automated daily backups',
    ],
  },
  {
    id: 'logistics-api',
    category: 'Cloud & API Integration',
    title: 'Real-Time Inventory & Dispatch Sync Engine',
    summary:
      'Event-driven middleware connecting warehouse scanners, e-commerce storefronts, and accounting platforms with resilient retry queues and live discrepancy alerts.',
    impact: '99.94% automated sync accuracy',
    challenge:
      'Inventory drift between storefront listings, warehouse stock, and accounting ledgers leads to overselling, delayed fulfillment, and manual reconciliation.',
    solution:
      'Designed an idempotent webhook and queue-based integration layer with structured monitoring, automatic rate-limit handling, and a clean diagnostics dashboard.',
    architecture: ['Node.js', 'Redis Queues', 'REST / Webhooks', 'Docker', 'CloudWatch'],
    outcomes: [
      'Eliminated manual CSV exports between warehouse and storefront',
      'Sub-minute stock propagation across connected sales channels',
      'Real-time exception alerts with one-click replay controls',
    ],
  },
  {
    id: 'saas-modernization',
    category: 'Legacy Modernization',
    title: 'B2B Analytics Dashboard Re-Architecture',
    summary:
      'Incremental frontend and API modernization of a legacy reporting suite into a modular, sub-second responsive web application with zero service interruption.',
    impact: '3.4× faster page load & reporting speed',
    challenge:
      'An aging monolithic interface suffered from slow report rendering, broken mobile layouts, and high maintenance cost whenever new client requirements arrived.',
    solution:
      'Introduced a clean component design system, query caching, and paginated data views—migrating critical workflows module by module without disrupting active users.',
    architecture: ['React 19', 'Modern CSS', 'GraphQL', 'PostgreSQL', 'CI/CD'],
    outcomes: [
      'Reduced initial dashboard load times by more than two-thirds',
      'Full tablet and mobile usability for on-the-go decision makers',
      'Modular codebase enabling rapid delivery of new client modules',
    ],
  },
];

export const PRINCIPLES = [
  {
    title: 'Direct Principal Accountability',
    description:
      'Work directly with leadership—no layers of account managers translating technical requirements into guesswork.',
  },
  {
    title: 'Engineered for Longevity',
    description:
      'Readable, well-structured code and sensible technology choices that remain easy to maintain years after launch.',
  },
  {
    title: 'Transparent Commercials & Timelines',
    description:
      'Clear milestone deliverables, honest engineering trade-offs, and predictable communication at every phase.',
  },
];

export const FAQS = [
  {
    question: 'What types of businesses does 1001441404 Ontario Limited work with?',
    answer:
      'We partner with startups, small-to-midsize businesses, and enterprise teams across Scarborough, the Greater Toronto Area, Canada, and North America that need dependable custom software, web applications, API integrations, or modernization.',
  },
  {
    question: 'Do we retain full ownership of the source code and intellectual property?',
    answer:
      'Yes. Upon project milestones and completion, 100% of the custom source code, architecture documentation, and intellectual property belong to your organization.',
  },
  {
    question: 'How do you structure project engagements and pricing?',
    answer:
      'Depending on your needs, we offer fixed-scope milestone engagements for well-defined builds as well as flexible monthly retainers for ongoing product engineering, modernization, and technical advisory.',
  },
  {
    question: 'Can you modernize or extend an existing software application?',
    answer:
      'Absolutely. We begin with a focused codebase and architecture audit to identify bottlenecks, security gaps, and quick wins, then execute an incremental modernization plan that minimizes disruption.',
  },
  {
    question: 'How quickly can we start a conversation about our project?',
    answer:
      'You can reach Nikilesh Ayushman directly by phone at 437-463-0016, email at nikiayushman@gmail.com, or through the consultation form below. We respond to all inquiries within one business day.',
  },
];

