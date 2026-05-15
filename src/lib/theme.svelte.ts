export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

function readStored(): ThemeMode {
	if (typeof localStorage === 'undefined') return 'dark';
	const v = localStorage.getItem(STORAGE_KEY);
	return v === 'light' || v === 'dark' ? v : 'dark';
}

export const theme = $state<{ mode: ThemeMode }>({ mode: 'dark' });

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
