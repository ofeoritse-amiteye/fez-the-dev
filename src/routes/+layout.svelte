<script lang="ts">
	import { browser } from '$app/environment';
	import favicon from '$lib/assets/favicon.svg';
	import BootSequence from '$lib/components/BootSequence.svelte';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import CommandPaletteHint from '$lib/components/CommandPaletteHint.svelte';
	import CursorAura from '$lib/components/CursorAura.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import { syncThemeFromStorage } from '$lib/theme.svelte';
	import './layout.css';

	let { children } = $props();

	if (browser) syncThemeFromStorage();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Amiteye Favour Ofeoritse</title>
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<div
	class="grain-overlay pointer-events-none fixed inset-0 z-[22] opacity-[0.045]"
	aria-hidden="true"
></div>
<BootSequence />
<CursorAura />

<SiteNav />
<CommandPalette />
<CommandPaletteHint />

<PageTransition>
	{@render children()}
</PageTransition>
