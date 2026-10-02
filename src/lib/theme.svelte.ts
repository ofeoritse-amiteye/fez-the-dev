export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

function readStored(): ThemeMode {
	if (typeof localStorage === 'undefined') return 'light';
	const v = localStorage.getItem(STORAGE_KEY);
	/* Neo-brutal portfolio defaults to cream/light */
	return v === 'light' || v === 'dark' ? v : 'light';
}

export const theme = $state<{ mode: ThemeMode }>({ mode: 'light' });

export function syncThemeFromStorage(): void {
	const m = readStored();
	theme.mode = m;
	applyDocumentTheme(m);
}

export function toggleTheme(): void {
	const next: ThemeMode = theme.mode === 'dark' ? 'light' : 'dark';
	setTheme(next);
}

export function setTheme(mode: ThemeMode): void {
	theme.mode = mode;
	applyDocumentTheme(mode);
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem(STORAGE_KEY, mode);
	}
}

function applyDocumentTheme(mode: ThemeMode): void {
	if (typeof document === 'undefined') return;
	document.documentElement.dataset.theme = mode;
}
