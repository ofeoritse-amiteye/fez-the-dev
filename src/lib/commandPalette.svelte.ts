export const palette = $state({ open: false });

export function toggleCommandPalette(): void {
	palette.open = !palette.open;
}

export function openCommandPalette(): void {
	palette.open = true;
}

export function closeCommandPalette(): void {
	palette.open = false;
}
