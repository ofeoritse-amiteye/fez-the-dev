/** Strip common HTML/script injection for display-safe strings (client-side guardrail). */
export function sanitizePlainText(input: string, maxLength = 8000): string {
	const trimmed = input.trim().slice(0, maxLength);
	return trimmed.replace(/</g, '').replace(/>/g, '').replace(/\0/g, '');
}

export function isValidEmail(email: string): boolean {
	const s = email.trim();
	if (s.length > 254) return false;
	// Practical RFC-like check without full RFC parser
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
