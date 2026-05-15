export type SocialPlatform = 'github' | 'email' | 'phone' | 'whatsapp';

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
	heroLabel: 'Frontend developer and full-stack engineer',
	eyebrow: 'Realtime products, AI tooling, and money-safe interfaces',
	location: 'Lagos, Nigeria',
	email: 'ofeoritseamiteye03@gmail.com',
	phone: '+234 912 207 2401',
	phoneHref: 'tel:+2349122072401',
	githubUrl: 'https://github.com/ofeoritse-amiteye',
	githubHandle: 'github.com/ofeoritse-amiteye',
	whatsAppUrl: 'https://wa.me/2349122072401',
	resumeHref: '/ofeoritse-amiteye-resume-2026.pdf',
	profileImage: '/ofeoritse-profile.jpg',
	intro:
		'I build real product experiences that stay polished under pressure: real-time systems, AI-assisted workflows, secure messaging, browser extensions, and fintech surfaces that have to earn trust.',
	summary:
		'Frontend-focused full-stack engineer with 4+ years shipping production web and mobile applications. Strong in React, Next.js, TypeScript, Node.js, realtime architecture, secure auth, and payment flows.',
	availability:
		'Open to frontend engineering, product engineering, and freelance builds that need both speed and rigor.'
};

export const socialLinks: SocialLink[] = [
	{ label: 'GitHub', href: profile.githubUrl, external: true, platform: 'github' },
	{ label: 'Email', href: `mailto:${profile.email}`, platform: 'email' },
	{ label: 'Call', href: profile.phoneHref, platform: 'phone' },
	{ label: 'WhatsApp', href: profile.whatsAppUrl, external: true, platform: 'whatsapp' }
];

/** Hero / contact chip backgrounds (brand-aligned, solid) */
export const socialChipTone: Record<SocialPlatform, string> = {
	github: 'border-[#24292f] bg-[#24292f] text-white hover:brightness-110',
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
		title: 'Frontend systems',
		items: ['React 18', 'Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Radix UI', 'HTML5', 'CSS3']
	},
	{
		title: 'Backend and realtime',
		items: [
			'Node.js',
			'Django',
			'REST APIs',
			'WebSockets',
			'Server-Sent Events',
			'Prisma',
			'Nodemailer'
		]
	},
	{
		title: 'Data, auth, and product state',
		items: ['MongoDB', 'Firebase', 'MySQL', 'IndexedDB', 'TanStack Query', 'Zustand', 'Zod']
	},
	{
		title: 'Tooling and infrastructure',
		items: [
			'GitHub',
			'Vercel',
			'Cloudflare',
			'PostHog',
			'Sentry',
			'Postman',
			'Chrome Extension APIs'
		]
	}
];

export const experienceTimeline: ExperienceEntry[] = [
	{
		role: 'IT Support / System Engineer',
		timeline: 'July 2025-present',
		company: 'TopTech Engineering Ltd',
		location: 'Lagos, Nigeria',
		details: [
			'Designed and developed an internal ticketing and support system that reduced average issue resolution time.',
			'Provided end-to-end technical support for networking and hardware across multiple environments.',
			'Maintained near-zero downtime across 20+ devices and systems.'
		]
	},
	{
		role: 'Software Engineer (Freelance)',
		timeline: 'Jan 2025-July 2025',
		company: 'Self-employed',
		location: 'Remote',
		details: [
			'Designed, developed, and deployed 4+ web and mobile applications across e-commerce, logistics, and education.',
			'Built a content creator marketplace with real-time messaging, campaign workflows, and payout infrastructure.',
			'Maintained client products after launch and kept reliability high under real usage.'
		]
	},
	{
		role: 'ICT Intern',
		timeline: 'Mar 2023-Aug 2023',
		company: 'Heritage Energy Operational Services Ltd',
		location: 'Warri, Delta State',
		details: [
			'Built a Django-based computer-based testing platform that automated internship recruitment.',
			'Developed a hospital management system prototype under production-style constraints.',
			'Delivered hardware and software support across 50+ staff workflows.'
		]
	}
];

export const contactPrompts = [
	'Frontend roles where polish and reliability both matter',
	'Freelance builds involving realtime products, dashboards, or fintech flows',
	'Product collaborations that need AI features with thoughtful UX',
	'Teams that want someone comfortable owning features end-to-end'
];
