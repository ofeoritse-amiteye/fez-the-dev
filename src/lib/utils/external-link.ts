/**
 * `mailto:` / `tel:` / `sms:` must stay in the same browsing context.
 * With `target="_blank"`, many browsers open a blank tab and never hand off to the OS mail / dialer UI.
 */
export function externalAnchorProps(href: string): {
	target?: '_blank';
	rel?: string;
} {
	const h = href.trim();
	if (/^(mailto:|tel:|sms:)/i.test(h)) return {};
	if (/^https?:\/\//i.test(h)) return { target: '_blank', rel: 'noreferrer noopener' };
	return {};
}
