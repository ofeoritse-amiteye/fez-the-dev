<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Amiteye Favour Ofeoritse</title>
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<SiteNav />

<main id="main">
	{@render children()}
</main>
