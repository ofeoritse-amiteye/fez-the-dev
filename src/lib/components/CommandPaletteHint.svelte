<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount, tick } from 'svelte';
	import { fade } from 'svelte/transition';
	import { openCommandPalette } from '$lib/commandPalette.svelte';

	/** Shown in kbd chips ⌘ on Apple platforms, Ctrl elsewhere */
	let modLabel = $state('Ctrl');

	let expanded = $state(true);

	let initialTimer: ReturnType<typeof setTimeout> | null = null;
	let hoverTimer: ReturnType<typeof setTimeout> | null = null;

	function clearHoverTimer() {
		if (hoverTimer !== null) {
			clearTimeout(hoverTimer);
			hoverTimer = null;
		}
	}

	function clearInitialTimer() {
		if (initialTimer !== null) {
			clearTimeout(initialTimer);
			initialTimer = null;
		}
	}

	function scheduleHoverCollapse() {
		clearHoverTimer();
		hoverTimer = setTimeout(() => {
			expanded = false;
			hoverTimer = null;
		}, 5000);
	}

	function handleInfoEnter() {
		clearInitialTimer();
		expanded = true;
		scheduleHoverCollapse();
	}

	async function handleInfoFocus() {
		handleInfoEnter();
		await tick();
		document.getElementById('command-palette-hint-open')?.focus();
	}

	function handlePanelEnter() {
		if (!expanded) return;
		scheduleHoverCollapse();
	}

	function handlePanelLeave() {
		clearHoverTimer();
		expanded = false;
	}

	onMount(() => {
		if (!browser) return () => {};

		const ua = navigator.userAgent;
		const platform = navigator.platform ?? '';
		const mac =
			/Mac|iPhone|iPad|iPod/.test(platform) ||
			ua.includes('Mac OS') ||
			ua.includes('Macintosh');
		modLabel = mac ? '⌘' : 'Ctrl';

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			expanded = false;
			return () => {
				clearInitialTimer();
				clearHoverTimer();
			};
		}

		initialTimer = setTimeout(() => {
			expanded = false;
			initialTimer = null;
		}, 5000);

		return () => {
			clearInitialTimer();
			clearHoverTimer();
		};
	});

	onDestroy(() => {
		clearInitialTimer();
		clearHoverTimer();
	});
</script>

<!-- Large screens only: same breakpoint as desktop nav; hidden on phones and small tablets -->
<aside
	class="pointer-events-none fixed right-6 bottom-8 z-[58] hidden lg:block"
	aria-label="Keyboard shortcut for site navigation"
>
	<div class="pointer-events-auto flex flex-col items-end">
		{#if expanded}
			<div
				class="glass-panel w-[min(22rem,calc(100vw-3rem))] rounded-2xl border border-[var(--glass-border)] p-5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]"
				role="region"
				aria-label="Quick navigation shortcut"
				in:fade={{ duration: 180 }}
				out:fade={{ duration: 140 }}
				onmouseenter={handlePanelEnter}
				onmouseleave={handlePanelLeave}
			>
				<p class="font-mono text-[0.62rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Quick navigation
				</p>
				<p class="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_88%,transparent)]">
					Press
					<kbd
						class="mx-0.5 inline rounded-md border border-[var(--glass-border)] bg-[var(--surface-2)] px-1.5 py-0.5 font-mono text-[0.72rem] text-[var(--text)]">{modLabel}</kbd>
					+
					<kbd
						class="mx-0.5 inline rounded-md border border-[var(--glass-border)] bg-[var(--surface-2)] px-1.5 py-0.5 font-mono text-[0.72rem] text-[var(--text)]">K</kbd>
					anywhere to open the navigation palette, jump to sections, projects, and links without using the
					menu.
				</p>
			</div>
		{:else}
			<button
				type="button"
				class="ease-cinematic focus-ring glass-panel flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--glass-border)] text-[var(--text-muted)] shadow-[0_12px_40px_-24px_rgba(0,0,0,0.5)] [transition-duration:calc(220ms*var(--motion))] hover:border-[color-mix(in_oklab,var(--accent-a)_40%,transparent)] hover:text-[var(--text)]"
				aria-label="Show shortcut: open navigation palette with keyboard"
				aria-expanded="false"
				in:fade={{ duration: 160 }}
				out:fade={{ duration: 120 }}
				onmouseenter={handleInfoEnter}
				onfocus={handleInfoFocus}
			>
				<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<circle cx="12" cy="12" r="10" />
					<path d="M12 16v-4M12 8h.01" stroke-linecap="round" />
				</svg>
			</button>
		{/if}
	</div>
</aside>
