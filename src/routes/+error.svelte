<script lang="ts">
	import { page } from '$app/state';
	import ButtonIcon from '$lib/components/ButtonIcon.svelte';
</script>

<svelte:head>
	<title>{page.status} | Ofeoritse</title>
</svelte:head>

<div class="section-wrap flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
	<span class="chip chip-sun">{page.status}</span>
	<h1 class="font-display mt-5 text-3xl font-extrabold tracking-tight uppercase sm:text-4xl">
		Page not found
	</h1>
	<p class="text-muted mt-3 max-w-sm text-sm">
		{#if page.error?.message}{page.error.message}{:else}Check the URL or head back home.{/if}
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a href="/" class="btn-sticker btn-sun focus-ring">
			<ButtonIcon name="home" />
			Home
		</a>
		<a href="/#work" class="btn-sticker btn-teal focus-ring">
			<ButtonIcon name="briefcase" />
			Work
		</a>
	</div>
</div>
