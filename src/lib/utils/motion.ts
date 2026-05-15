export function motionDuration(baseMs: number): number {
	if (typeof window === 'undefined') return baseMs;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : baseMs;
}

export function prefersReducedMotion(): boolean {
	if (typeof window === 'undefined') return false;
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
