<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type Props = { children: Snippet };
</script>

<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	let { children }: Props = $props();

	const pathname = $derived(page.url.pathname);
</script>

{#key pathname}
	<div in:fade={{ duration: 260 }} out:fade={{ duration: 200 }} class="min-h-0">
		{@render children()}
	</div>
{/key}
