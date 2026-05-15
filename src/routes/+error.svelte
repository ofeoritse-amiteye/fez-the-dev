<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} — Jordan Vale</title>
</svelte:head>

<main class="flex min-h-[100svh] flex-col items-center justify-center px-4 py-24 text-center">
	<p class="font-mono text-xs tracking-[0.3em] text-[var(--text-muted)] uppercase">
		{page.status}
	</p>
	<h1 class="mt-4 max-w-md font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
		This path is not wired yet.
	</h1>
	<p class="mt-3 max-w-sm text-sm text-[var(--text-muted)]">
		{#if page.error?.message}{page.error.message}{:else}Check the URL or open the command palette.{/if}
	</p>
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a
			href="/"
			class="focus-ring inline-flex rounded-lg bg-[var(--text)] px-5 py-2.5 font-mono text-xs font-medium text-[var(--surface-0)]"
		>
			Home
		</a>
		<a
			href="/#work"
			class="focus-ring glass-panel inline-flex rounded-lg px-5 py-2.5 font-mono text-xs font-medium"
		>
			Work
		</a>
	</div>
</main>
