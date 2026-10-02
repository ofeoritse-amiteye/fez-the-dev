export type ProjectCategory = 'product' | 'ai' | 'security' | 'mobile';

export type ProjectSignal = {
	label: string;
	value: string;
};

export type ProjectVisual = {
	from: string;
	to: string;
	surface: string;
	glow: string;
};

export type Project = {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	year: string;
	role: string;
	timeline: string;
	status: string;
	category: ProjectCategory;
	technologies: string[];
	liveUrl: string;
	liveLabel: string;
	repoUrl: string;
	repoLabel: string;
	visual: ProjectVisual;
	coverImage?: string;
	accentNote: string;
	challenge: string;
	outcome: string;
	impact: string[];
	systems: string[];
	buildNotes: string[];
	metrics: ProjectSignal[];
};

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
	{ id: 'all', label: 'All builds' },
	{ id: 'product', label: 'Product' },
	{ id: 'ai', label: 'AI' },
	{ id: 'security', label: 'Security' },
	{ id: 'mobile', label: 'Mobile' }
];

export const projects: Project[] = [
	{
		slug: 'content-creator-marketplace',
		title: 'TRIM, Content Creator Marketplace',
		tagline:
			'A production marketplace for brands, creators, payments, and live campaign operations.',
		description:
			'A two-sided platform built around trust-heavy workflows: onboarding, campaign management, deliverables, direct messaging, and wallet infrastructure with Paystack-backed payouts.',
		year: '2025-present',
		role: 'Fullstack Software Engineer (Part-time)',
		timeline: 'TrimHQ · Remote · trim-hq.com',
		status: 'Production',
		category: 'product',
		technologies: [
			'Next.js 16',
			'TypeScript',
			'MongoDB',
			'Prisma',
			'Paystack',
			'Cloudflare R2',
			'Pusher',
			'PostHog',
			'Sentry',
			'Tailwind CSS v4',
			'Radix UI',
			'Zustand'
		],
		liveUrl: 'https://trim-hq.com',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye',
		repoLabel: 'GitHub profile',
		coverImage: '/trim.png',
		visual: {
			from: '#07151b',
			to: '#1c533f',
			surface: 'Campaign ops, wallet telemetry, and creator pipelines',
			glow: '#76f8cf'
		},
		accentNote: 'Money-sensitive flows were treated like product infrastructure, not UI garnish.',
		challenge:
			'Creator marketplaces collapse when trust, money movement, and communication feel inconsistent. This build had to coordinate all three without losing velocity.',
		outcome:
			'I shipped a layered system for campaign execution, wallet movement, KYC/KYB, and real-time collaboration so brands and creators could move from discovery to payout in one product surface.',
		impact: [
			'Paystack wallet deposits, withdrawals, webhook reconciliation, PIN security, and spend caps for unverified brands.',
			'Prembly KYC/KYB (BVN, ID, CAC) with verification-gated brand onboarding.',
			'Pusher Channels for messaging, wallet updates, and live campaign state, plus PostHog and Sentry in production.'
		],
		systems: [
			'Dual role Brand/Creator experiences with 20+ MongoDB models across 500+ TypeScript/React files.',
			'Wallet architecture with lock-before-transfer, compensating rollback, and Nigeria-aligned fee tiers.',
			'Cloudflare R2 storage migration, JWT/OTP/OAuth auth, Upstash Redis rate limiting, and PWA caching.'
		],
		buildNotes: [
			'Replaced SSE with Pusher private channels for scalable live updates without custom WebSocket servers.',
			'Security-hardened financial routes: jose JWT sessions, bcrypt, hashed withdrawal PINs, OTP, rate limits.',
			'Web Push, Nodemailer, Meta/TikTok/X OAuth-style flows, and cron endpoints for campaign automation.'
		],
		metrics: [
			{ label: 'Surface', value: 'Two-sided marketplace' },
			{ label: 'Trust layer', value: 'Wallet + KYC/KYB' },
			{ label: 'Realtime', value: 'Pusher Channels' }
		]
	},
	{
		slug: 'laundrolink',
		title: 'LaundroLink',
		tagline:
			'Mobile marketplace connecting customers, laundry partners, and riders for on-demand laundry pickup and delivery.',
		description:
			'A production-ready Expo (React Native) app for a multi-sided laundry marketplace: role-based auth (customer, rider, partner), email verification, onboarding, secure session restore with token refresh, GPS-based address selection, and a home experience for discovering nearby laundry partners.',
		year: '2026',
		role: 'Mobile Frontend Developer',
		timeline: 'Independent / product build',
		status: 'Production-ready',
		category: 'mobile',
		technologies: [
			'Expo',
			'React Native',
			'Expo Router',
			'TypeScript',
			'NativeWind',
			'Zustand',
			'TanStack Query',
			'Zod',
			'Axios',
			'SecureStore'
		],
		liveUrl: 'https://laundrolinkapp.com',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye',
		repoLabel: 'GitHub profile',
		coverImage: '/laundro-pic.png',
		visual: {
			from: '#0c1f2e',
			to: '#17909f',
			surface: 'Role-based auth, GPS address flows, and partner discovery',
			glow: '#7ed3de'
		},
		accentNote:
			'Multi-sided mobile products live or die on auth clarity, session restore, and location UX, not just screens.',
		challenge:
			'Laundry pickup and delivery needs three roles in one app without confusing onboarding, insecure sessions, or brittle location flows.',
		outcome:
			'I shipped LaundroLink as an Expo/React Native marketplace for laundry pickup and delivery across customers, partners, and riders, with type-safe API access and durable session handling.',
		impact: [
			'Shipped role-based auth, email verification, and onboarding for customer, rider, and partner flows.',
			'Implemented secure session restore with token refresh via SecureStore.',
			'Built GPS-based address selection and a home experience for discovering nearby laundry partners.'
		],
		systems: [
			'Expo Router file-based navigation across multi-role app surfaces.',
			'Type-safe API client with Axios, Zod validation, TanStack Query, and Zustand state.',
			'NativeWind UI with shared feature-based mobile architecture.'
		],
		buildNotes: [
			'Kept auth and token refresh as first-class infrastructure, not an afterthought.',
			'Location and partner discovery were designed for real on-demand pickup flows.',
			'Stack stayed mobile-native: Expo Router, TypeScript, NativeWind, SecureStore.'
		],
		metrics: [
			{ label: 'Platform', value: 'Expo / React Native' },
			{ label: 'Roles', value: 'Customer · Rider · Partner' },
			{ label: 'Core', value: 'Auth + location + discovery' }
		]
	},
	{
		slug: 'visual-query-builder',
		title: 'Visual Query Builder',
		tagline:
			'Schema-driven query builder with nested condition groups and multi-target SQL / MongoDB / GraphQL previews.',
		description:
			'A recursive visual query builder with normalized immutable tree state, drag-and-drop reordering, multi-target query generation, and a local execution engine against schema-owned mock data.',
		year: '2026',
		role: 'Frontend engineer',
		timeline: 'Independent build',
		status: 'Shipped',
		category: 'product',
		technologies: [
			'Next.js',
			'TypeScript',
			'Zustand',
			'TanStack Query',
			'Tailwind CSS',
			'dnd-kit',
			'Vitest'
		],
		liveUrl: 'https://visual-query-builder-fez.vercel.app/',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye',
		repoLabel: 'GitHub profile',
		coverImage: '/VQB.png',
		visual: {
			from: '#1a1028',
			to: '#4a3570',
			surface: 'Nested rule trees, SQL preview, and drag-and-drop groups',
			glow: '#c4a8ff'
		},
		accentNote: 'Unlimited nesting without flattening the UI, state stayed normalized and memoised.',
		challenge:
			'Deeply nested condition groups usually force tradeoffs between DnD correctness, preview accuracy, and render performance. This build needed all three.',
		outcome:
			'I shipped a builder with recursive groups, side-effect-free multi-target generation, scoped drag-and-drop, and an execution engine with sanitisation before tree entry.',
		impact: [
			'Recursive condition groups with normalized immutable tree state and unlimited nesting depth.',
			'Separate SQL, MongoDB, and GraphQL preview traversals, decoupled from state for independent testing.',
			'Saved presets, execution history, JSON import/export, themes, and keyboard shortcuts.'
		],
		systems: [
			'dnd-kit SortableContext scoped per group for predictable nested reordering.',
			'Query execution against mock datasets with AND/OR group logic, SQL escaping, and regex validation.',
			'Render optimization via stable node IDs, memoised recursion, and paginated results.'
		],
		buildNotes: [
			'Vitest coverage on generation and tree updates kept multi-target outputs reliable.',
			'UI stayed collapsible and keyboard-friendly so power users could move fast.',
			'Normalized updates avoided full-tree rerenders as nesting depth grew.'
		],
		metrics: [
			{ label: 'Targets', value: 'SQL · Mongo · GraphQL' },
			{ label: 'UX', value: 'Nested DnD groups' },
			{ label: 'Quality', value: 'Vitest + memoization' }
		]
	},
	{
		slug: 'whisper-secure-messaging',
		title: 'Whisper',
		tagline: 'A secure messaging platform with browser-native end-to-end encryption.',
		description:
			'A messaging product built around true end-to-end encryption using the Web Crypto API, offline-friendly state, and resilient auth flows across routing, sync, and session recovery.',
		year: '2026',
		role: 'Frontend engineer',
		timeline: 'Independent build',
		status: 'Prototype',
		category: 'security',
		technologies: [
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS v4',
			'Web Crypto API',
			'IndexedDB',
			'TanStack Query',
			'Zustand',
			'Axios'
		],
		liveUrl: 'https://github.com/ofeoritse-amiteye',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye',
		repoLabel: 'GitHub profile',
		coverImage: '/whisper.png',
		visual: {
			from: '#0b1021',
			to: '#30408d',
			surface: 'Encrypted conversations with offline outbox behavior',
			glow: '#91a9ff'
		},
		accentNote:
			'Security decisions were surfaced as experience decisions, not hidden implementation trivia.',
		challenge:
			'Messaging needs speed, resilience, and trust at the same time. The experience could not feel heavy just because the security model was serious.',
		outcome:
			'I built a conversation surface where encryption, offline recovery, and routing feel invisible to the user even though the architecture is doing hard work underneath.',
		impact: [
			'Implemented end-to-end encryption entirely with browser-native crypto without third-party encryption packages.',
			'Added an encrypted offline outbox using IndexedDB so the product degraded gracefully under unstable connectivity.',
			'Set up refresh-safe auth interceptors and routed flows cleanly across login, messaging, and recovery states.'
		],
		systems: [
			'Web Crypto based key handling and encrypted payload generation.',
			'IndexedDB storage for pending encrypted messages and local persistence.',
			'Client state split between server sync and session state for clearer operational boundaries.'
		],
		buildNotes: [
			'Focused on a quiet UI so security felt dependable rather than intimidating.',
			'Used React Router and request interceptors to reduce auth edge cases during navigation.',
			'Designed the interface around eventual consistency and recovery instead of assuming perfect network conditions.'
		],
		metrics: [
			{ label: 'Security', value: 'Browser-native E2E' },
			{ label: 'Resilience', value: 'Offline encrypted outbox' },
			{ label: 'State', value: 'Query plus Zustand' }
		]
	},
	{
		slug: 'glance-ai-browser-extension',
		title: 'Glance',
		tagline: 'An AI browser extension that summarizes any page on demand.',
		description:
			'A Chrome extension designed to collapse long-form pages into immediate summaries using Anthropic Claude through a Manifest V3 service worker architecture.',
		year: '2026',
		role: 'AI product builder',
		timeline: 'Independent build',
		status: 'Shipped experiment',
		category: 'ai',
		technologies: [
			'Chrome Extension APIs',
			'Manifest V3',
			'Vanilla JavaScript',
			'Anthropic Claude API',
			'Service Workers',
			'Fetch API',
			'chrome.storage'
		],
		liveUrl: 'https://github.com/ofeoritse-amiteye/Glance',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye/Glance',
		repoLabel: 'GitHub repo',
		coverImage: '/glance.png',
		visual: {
			from: '#180f07',
			to: '#815421',
			surface: 'Popup controls, service worker calls, and cross-context messaging',
			glow: '#ffb36b'
		},
		accentNote:
			'The interesting work was not the summary result. It was making the extension architecture feel dependable.',
		challenge:
			'Extensions cross popup, content script, and service worker boundaries. The AI interaction had to stay simple even while the execution model was fragmented.',
		outcome:
			'I shipped a browser utility that feels immediate to use while respecting the operational constraints of Manifest V3 and remote model calls.',
		impact: [
			'Built the full extension architecture around popup UI, content scripts, and service worker orchestration.',
			'Handled cross-context communication cleanly with chrome runtime messaging.',
			'Added session-safe storage and failure messaging so AI requests stayed understandable instead of brittle.'
		],
		systems: [
			'Manifest V3 service worker for API communication and durable session behavior.',
			'Popup surface tuned for fast interaction loops instead of heavy extension settings.',
			'Content script injection designed to keep page summarization contextual and low-friction.'
		],
		buildNotes: [
			'Prioritized clean UX states for loading, summarizing, and API failure scenarios.',
			'Kept the implementation framework-light so the extension stayed compact.',
			'Used Claude as a feature layer, not a substitute for product design.'
		],
		metrics: [
			{ label: 'Format', value: 'Chrome extension' },
			{ label: 'AI layer', value: 'Claude summaries' },
			{ label: 'Architecture', value: 'MV3 service worker' }
		]
	},
	{
		slug: 'fantasy-sports-platform',
		title: 'Fantasy Sports Platform',
		tagline: 'Real-time scoring, lineup management, and leaderboards for competitive play.',
		description:
			'A multiplayer sports product focused on live scoring, head-to-head matchmaking, ranking systems, and regional competition structures.',
		year: '2023-2025',
		role: 'Full-stack engineer',
		timeline: 'Freelance build',
		status: 'Released',
		category: 'product',
		technologies: ['React', 'Node.js', 'Firebase', 'Realtime data sync'],
		liveUrl: 'https://github.com/ofeoritse-amiteye',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye',
		repoLabel: 'GitHub profile',
		coverImage: '/fantasy-sports.png',
		visual: {
			from: '#08161a',
			to: '#26635f',
			surface: 'Lineups, scoreboards, and competition ladders',
			glow: '#66eedc'
		},
		accentNote:
			'Competition products only work when their scoring and ranking systems feel instantly credible.',
		challenge:
			'The product needed live energy without confusing the user. Match state, scoring, and ranking had to update in ways that felt exciting and trustworthy.',
		outcome:
			'I delivered a fantasy platform that balanced daily play loops with regional competition layers and real-time scoring visibility.',
		impact: [
			'Built live match scoring and lineup management into the core play loop.',
			'Implemented regional and continental leaderboards with slot allocation logic.',
			'Connected matchmaking and rankings into a system that encouraged repeat competitive use.'
		],
		systems: [
			'Realtime score updates synchronized through Firebase-backed data flows.',
			'Competition structures designed around local, regional, and continental progression.',
			'UI states tuned to surface urgency without overwhelming the user.'
		],
		buildNotes: [
			'Focused on readability so live sports data remained scannable.',
			'Kept the architecture flexible enough to support evolving competition logic.',
			'Designed for engagement loops rather than single-session novelty.'
		],
		metrics: [
			{ label: 'Core loop', value: 'Lineups and live scores' },
			{ label: 'Competition', value: 'Regional to continental' },
			{ label: 'Stack', value: 'React, Node, Firebase' }
		]
	},
	{
		slug: 'student-assistant-app',
		title: 'Multi-Purpose Student Assistant',
		tagline: 'A mobile companion for campus life with offline-first utility.',
		description:
			'A cross-platform student product with scheduling, reminders, campus navigation, cafeteria updates, and reliable offline usage.',
		year: '2023-2024',
		role: 'Mobile engineer',
		timeline: 'Independent build',
		status: 'Released',
		category: 'mobile',
		technologies: ['React Native', 'Expo', 'Firebase', 'Offline sync'],
		liveUrl: 'https://github.com/ofeoritse-amiteye/Icampus-Reactnative',
		liveLabel: 'Visit project',
		repoUrl: 'https://github.com/ofeoritse-amiteye/Icampus-Reactnative',
		repoLabel: 'GitHub repo',
		coverImage: '/student-assistant.png',
		visual: {
			from: '#101116',
			to: '#684b2b',
			surface: 'Campus planning, reminders, and mobile utility flows',
			glow: '#ffc07a'
		},
		accentNote:
			'Utility products earn loyalty when they continue to work during the messy parts of real life.',
		challenge:
			'Student products can quickly become cluttered. This one had to pack many features into one app without becoming noisy or fragile.',
		outcome:
			'I shipped a campus assistant that supports everyday routines, keeps information available offline, and prioritizes speed over novelty.',
		impact: [
			'Delivered more than ten campus-oriented features in one cross-platform product.',
			'Implemented Firebase sync with offline access to support daily student workflows.',
			'Improved task efficiency with reminders, navigation, and schedule-aware utilities.'
		],
		systems: [
			'Cross-platform mobile architecture built for frequent repeat interactions.',
			'Offline-first data handling to keep core tasks available without perfect connectivity.',
			'Secure authentication and realtime sync layered into a practical campus tool.'
		],
		buildNotes: [
			'Thought about the app as a daily companion rather than a one-off project demo.',
			'Balanced many features through straightforward navigation and quick task access.',
			'Used Firebase to reduce operational overhead while preserving realtime utility.'
		],
		metrics: [
			{ label: 'Platform', value: 'Cross-platform mobile' },
			{ label: 'Features', value: '10+ campus tools' },
			{ label: 'Usage mode', value: 'Offline friendly' }
		]
	}
];

export function categoryLabel(id: ProjectCategory): string {
	const match = projectCategories.find((category) => category.id === id);
	return match?.label ?? id;
}
