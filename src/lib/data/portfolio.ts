export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'phone' | 'whatsapp';

export type SocialLink = {
	label: string;
	href: string;
	external?: boolean;
	platform: SocialPlatform;
};

export type SignalMetric = {
	label: string;
	value: string;
	detail: string;
};

export type FocusTrack = {
	id: string;
	label: string;
	title: string;
	summary: string;
	stack: string[];
	signal: string;
	details: string[];
	metrics: SignalMetric[];
};

export type SkillGroup = {
	title: string;
	items: string[];
};

export type ExperienceEntry = {
	role: string;
	timeline: string;
	company: string;
	location: string;
	details: string[];
};

export const profile = {
	name: 'Amiteye Favour Ofeoritse',
	shortName: 'Ofeoritse',
	heroLabel: 'Frontend Developer · Full-Stack Engineer',
	eyebrow: 'Product UI, realtime systems, and payment flows',
	location: 'Lagos, Nigeria',
	email: 'ofeoritseamiteye03@gmail.com',
	phone: '+234 912 207 2401',
	phoneHref: 'tel:+2349122072401',
	githubUrl: 'https://github.com/ofeoritse-amiteye',
	githubHandle: 'github.com/ofeoritse-amiteye',
	linkedinUrl: 'https://www.linkedin.com/in/ofeoritse-amiteye-760527263',
	linkedinHandle: 'linkedin.com/in/ofeoritse-amiteye-760527263',
	whatsAppUrl: 'https://wa.me/2349122072401',
	website: 'https://trim-hq.com',
	resumeHref: '/AMITEYE_OFEORITSE_RESUME_2026_O.pdf',
	profileImage: '/ofeoritse-profile.jpg',
	intro:
		'Frontend-focused full-stack engineer with 4+ years shipping production web and mobile apps, AI tools, realtime systems, and fintech with live payments. I own features end-to-end, from system design to deployment.',
	summary:
		'Strong in React, Next.js, TypeScript, and Node.js. I design scalable architectures with SSE/WebSockets, secure auth, and payment integrations, owning features from system design to deployment.',
	availability:
		'Open to frontend and product engineering roles, plus selective full-stack freelance builds.'
};

export const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
	profile.email
)}`;

export const socialLinks: SocialLink[] = [
	{ label: 'GitHub', href: profile.githubUrl, external: true, platform: 'github' },
	{ label: 'LinkedIn', href: profile.linkedinUrl, external: true, platform: 'linkedin' },
	{ label: 'Email', href: emailHref, external: true, platform: 'email' },
	{ label: 'WhatsApp', href: profile.whatsAppUrl, external: true, platform: 'whatsapp' }
];

/** Hero / contact chip backgrounds (brand-aligned, solid) */
export const socialChipTone: Record<SocialPlatform, string> = {
	github: 'border-[#24292f] bg-[#24292f] text-white hover:brightness-110',
	linkedin: 'border-[#0a66c2] bg-[#0a66c2] text-white hover:brightness-105',
	email: 'border-[#b3261e] bg-[#EA4335] text-white hover:brightness-105',
	phone: 'border-[#0f766e] bg-[#14b8a6] text-white hover:brightness-105',
	whatsapp: 'border-[#128C7E] bg-[#25D366] text-white hover:brightness-105'
};

export const heroMetrics: SignalMetric[] = [
	{
		label: 'Years shipping',
		value: '4+',
		detail: 'Production web and mobile products'
	},
	{
		label: 'Focus',
		value: 'AI + realtime',
		detail: 'Practical product workflows, not demos'
	},
	{
		label: 'Trust layer',
		value: 'Payments + auth',
		detail: 'Money-safe UX and hardened flows'
	}
];

export const heroMarquee = [
	'Product surfaces with signal',
	'Secure realtime systems',
	'AI tools that feel useful',
	'Payment-aware interaction design',
	'Cross-platform shipping'
];

export const focusTracks: FocusTrack[] = [
	{
		id: 'realtime',
		label: 'Realtime systems',
		title: 'Interfaces that stay calm while data keeps moving.',
		summary:
			'I design live products so the user feels clarity, not chaos. Messaging, scoring, presence, and campaign state all need hierarchy before they need animation.',
		stack: ['Pusher', 'Firebase', 'Server-Sent Events', 'WebSockets', 'PostHog', 'Sentry'],
		signal: 'Low-latency coordination across people, states, and changing context.',
		details: [
			'Realtime campaign activity and messaging in a creator marketplace.',
			'Live scoring and ranking loops in fantasy sports.',
			'State architecture that separates durable sync from fast client reaction.'
		],
		metrics: [
			{
				label: 'Realtime lanes',
				value: 'Messaging',
				detail: 'People need confidence while collaborating'
			},
			{ label: 'Competition', value: 'Scores', detail: 'Updates must feel immediate and legible' },
			{ label: 'Monitoring', value: 'Sentry', detail: 'Quality stays visible after launch' }
		]
	},
	{
		id: 'trust',
		label: 'Trust and fintech',
		title: 'Money-sensitive experiences built to feel safe and precise.',
		summary:
			'Payment flows are not just integrations. They are product trust surfaces. I pay attention to reconciliation, rollback paths, auth hardening, and the UX around irreversible actions.',
		stack: ['Paystack', 'JWT', 'jose', 'bcrypt', 'OTP flows', 'Rate limiting'],
		signal: 'Operational rigor behind every deposit, payout, and protected route.',
		details: [
			'Wallet infrastructure with payout logic, fee handling, and settlement verification.',
			'Security-hardened auth and PIN flows around financial routes.',
			'Clear UI states for pending, successful, and failed money movement.'
		],
		metrics: [
			{
				label: 'Payment rail',
				value: 'Paystack',
				detail: 'Transfers, payouts, and webhook verification'
			},
			{ label: 'Auth', value: 'JWT + OTP', detail: 'Protected routes and recovery paths' },
			{
				label: 'Risk control',
				value: 'Rate limiting',
				detail: 'Sensitive flows guarded at the edges'
			}
		]
	},
	{
		id: 'ai',
		label: 'AI product work',
		title: 'AI features that solve a real interaction problem.',
		summary:
			'I like AI when it compresses effort, not when it decorates a product. The work is in prompt quality, product framing, failure handling, and keeping the interface honest about what the model is doing.',
		stack: ['Anthropic Claude API', 'Prompt design', 'Service workers', 'Browser APIs'],
		signal: 'Useful model behavior wrapped in interfaces that stay understandable.',
		details: [
			'Built a Chrome extension that summarizes pages from a lightweight popup flow.',
			'Handled model requests inside a Manifest V3 service worker architecture.',
			'Focused on loading, failure, and retry states so the feature stayed dependable.'
		],
		metrics: [
			{
				label: 'Surface',
				value: 'Chrome extension',
				detail: 'Fast in-page utility, not a standalone app'
			},
			{ label: 'Model layer', value: 'Claude API', detail: 'Summaries triggered on demand' },
			{ label: 'Execution', value: 'MV3 worker', detail: 'Cross-context orchestration and storage' }
		]
	},
	{
		id: 'delivery',
		label: 'Cross-surface delivery',
		title: 'From browser extension to mobile app, the craft stays deliberate.',
		summary:
			'I enjoy shipping across web, mobile, and browser surfaces because each one forces sharper product decisions. The interaction model changes, but the quality bar should not.',
		stack: ['React Native', 'Expo', 'Next.js', 'React', 'Vite', 'Cloudflare'],
		signal: 'A product mindset that adapts to platform constraints instead of fighting them.',
		details: [
			'Built a campus assistant with offline-friendly daily utility.',
			'Shipped marketplaces and secure messaging flows on the web.',
			'Designed browser extension UX that stays compact and contextual.'
		],
		metrics: [
			{
				label: 'Platforms',
				value: 'Web + mobile',
				detail: 'Different surfaces, same craft standard'
			},
			{
				label: 'Performance',
				value: 'Offline aware',
				detail: 'Products stay useful without ideal conditions'
			},
			{ label: 'Delivery', value: 'End-to-end', detail: 'From system design to deployment' }
		]
	}
];

export const skillGroups: SkillGroup[] = [
	{
		title: 'Frontend',
		items: [
			'React 18',
			'Next.js 16 (App Router)',
			'React Native (Expo)',
			'Expo Router',
			'TypeScript',
			'JavaScript (ES6+)',
			'Tailwind CSS v4',
			'Radix UI',
			'HTML5',
			'CSS3'
		]
	},
	{
		title: 'Backend & realtime',
		items: [
			'Node.js',
			'Django (Python)',
			'REST APIs',
			'Server-Sent Events',
			'WebSockets',
			'Prisma ORM',
			'Axios',
			'Nodemailer'
		]
	},
	{
		title: 'Databases & state',
		items: [
			'MongoDB',
			'Firebase (Firestore & Auth)',
			'MySQL',
			'IndexedDB',
			'Zustand',
			'TanStack Query v5',
			'React Hook Form',
			'Zod'
		]
	},
	{
		title: 'Payments & auth',
		items: [
			'Paystack',
			'JWT (jose)',
			'bcrypt',
			'OTP flows',
			'OAuth (Meta/TikTok/X)',
			'Rate limiting'
		]
	},
	{
		title: 'Browser, AI & infra',
		items: [
			'Expo',
			'React Native',
			'Chrome Extension APIs (MV3)',
			'Web Crypto API',
			'Anthropic Claude API',
			'Cloudflare',
			'Pusher',
			'Sentry',
			'PostHog',
			'Vite / Turbopack'
		]
	}
];

export const experienceTimeline: ExperienceEntry[] = [
	{
		role: 'Mobile Frontend Developer',
		timeline: 'July 2026 – present',
		company: 'AdminTrack',
		location: 'Remote',
		details: [
			'Built the Admin Track mobile frontend with Expo (React Native), TypeScript, and Expo Router for file-based navigation.',
			'Designed a feature-based src/ architecture (app routes, features, providers, shared UI/lib) for scalable mobile development.',
			'Implemented core app infrastructure with Zustand, TanStack Query, Zod, and Axios for state, data fetching, validation, and API access.',
			'Established engineering standards with ESLint, Prettier, Husky, Commitlint, and lint-staged to enforce linting, formatting, type checks, and conventional commits.'
		]
	},
	{
		role: 'Frontend Developer (Part-time)',
		timeline: 'March 2026 – June 2026',
		company: 'HNG Tech',
		location: 'Remote',
		details: [
			'Worked across multiple product builds during a competitive, cohort-based tech internship, shipping under fast, stage-based deadlines.',
			'Built a real-time dashboard with live data updates and frontend state management under production-style requirements.',
			'Contributed to an AI-powered fullstack project, applying LLM integration and prompt-driven features to a real product.',
			'Collaborated with a distributed team to design, build, and deploy, strengthening code review and frontend architecture skills.'
		]
	},
	{
		role: 'Fullstack Software Engineer (Part-time)',
		timeline: 'July 2025 – present',
		company: 'TrimHQ',
		location: 'Remote · trim-hq.com',
		details: [
			'Architected a production creator–brand marketplace with campaign management, contracts, deliverables, and dual-sided dashboards, 20+ MongoDB models across 500+ TypeScript/React files.',
			'Implemented end-to-end Paystack payments: wallet deposits, creator withdrawals, webhook reconciliation, transaction PIN security, and spend caps for unverified brands.',
			'Migrated file storage from MongoDB GridFS to Cloudflare R2 with presigned S3 uploads, reducing app-server load and improving scalability for large campaign deliverables.',
			'Built dual-sided KYC/KYB verification integrating Prembly (BVN, ID upload, CAC, director BVN) with spend-limit enforcement and verification-gated brand onboarding.',
			'Shipped JWT session auth with email OTP and Google/Facebook OAuth, Sentry error monitoring, PostHog analytics, Upstash Redis rate limiting, and PWA support with HTTP caching.'
		]
	},
	{
		role: 'IT Support / System Engineer',
		timeline: 'July 2025 – May 2026',
		company: 'TopTech Engineering Ltd',
		location: 'Lagos, Nigeria',
		details: [
			'Designed and developed a full internal ticketing and support system to streamline issue reporting, tracking, and resolution, reducing average resolution time across the team.',
			'Provided end-to-end technical support for networking and hardware issues across multiple environments, maintaining near-zero downtime.',
			'Diagnosed and resolved software, hardware, and connectivity issues across 20+ devices and systems.',
			'Operated and maintained specialized data sanitization equipment (degaussing machine) in compliance with hardware handling standards.'
		]
	},
	{
		role: 'Software Engineer (Freelance)',
		timeline: 'Jan 2025 – July 2025',
		company: 'Self-employed',
		location: 'Remote',
		details: [
			'Designed, developed, and deployed 4+ full-stack web and mobile applications for clients across e-commerce, logistics, and education, all delivered on schedule.',
			'Developed a fantasy sports application with real-time match scoring, head-to-head matchmaking, regional rankings, and continental leaderboards using React, Node.js, and Firebase.',
			'Provided ongoing client support and maintained application reliability post-launch across all projects.'
		]
	},
	{
		role: 'IT Specialist (Internship)',
		timeline: 'Mar 2023 – Aug 2023',
		company: 'Heritage Energy Operational Services Ltd (HEOSL)',
		location: 'Warri, Delta State',
		details: [
			'Built a Django-based computer-based testing app that fully automated internship recruitment and eliminated manual HR effort.',
			'Developed a hospital management system prototype on two parallel stacks (HTML/CSS/PHP and Django/Python) under production constraints.',
			'Delivered IT support across the organisation, diagnosing hardware issues and minimising downtime for 50+ staff members.'
		]
	}
];

export type EducationEntry = {
	degree: string;
	timeline: string;
	school: string;
	location: string;
	details: string[];
};

export const educationTimeline: EducationEntry[] = [
	{
		degree: 'BSc Management Information Systems',
		timeline: 'Jan 2021 – Jul 2024',
		school: 'Covenant University',
		location: 'Ogun State, Nigeria',
		details: [
			'Coursework: Database Management, Software Development (Python, Java, C, C#), Data Analytics, Business Process Management, IT Strategy & Governance, Project Management.'
		]
	},
	{
		degree: 'Senior Secondary School Certificate (SSCE)',
		timeline: 'Sep 2017 – Mar 2019',
		school: 'Willen Secondary School',
		location: 'Delta State, Nigeria',
		details: []
	}
];

export const contactPrompts = [
	'Frontend roles where polish and reliability both matter',
	'Freelance builds involving realtime products, dashboards, or fintech flows',
	'Product collaborations that need AI features with thoughtful UX',
	'Teams that want someone comfortable owning features end-to-end'
];
