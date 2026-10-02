<script lang="ts">
	export type ButtonIconName =
		| 'briefcase'
		| 'mail'
		| 'download'
		| 'send'
		| 'home'
		| 'external'
		| 'chevron-down'
		| 'chevron-up'
		| 'grid'
		| 'product'
		| 'sparkles'
		| 'shield'
		| 'smartphone';

	let {
		name,
		class: className = 'size-4 shrink-0'
	}: { name: ButtonIconName; class?: string } = $props();
</script>

{#if name === 'briefcase'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M4 9h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'mail'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2.25" />
		<path d="m3 7 9 6 9-6" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" />
	</svg>
{:else if name === 'download'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'send'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="m4 12 16-7-4 7 4 7-16-7z"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'home'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M4 10.5 12 4l8 6.5V19a2 2 0 0 1-2 2h-4v-6H10v6H6a2 2 0 0 1-2-2v-8.5z"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'external'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M14 5h5v5M10 14 19 5M19 10v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'chevron-down'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
	</svg>
{:else if name === 'chevron-up'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path d="M18 15l-6-6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
	</svg>
{:else if name === 'grid'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2.25" />
		<rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2.25" />
		<rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2.25" />
		<rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" stroke-width="2.25" />
	</svg>
{:else if name === 'product'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M12 3 4 7v10l8 4 8-4V7l-8-4z"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linejoin="round"
		/>
		<path d="M4 7l8 4 8-4M12 11v10" stroke="currentColor" stroke-width="2.25" />
	</svg>
{:else if name === 'sparkles'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linecap="round"
		/>
		<circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="2.25" />
	</svg>
{:else if name === 'shield'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<path
			d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z"
			stroke="currentColor"
			stroke-width="2.25"
			stroke-linejoin="round"
		/>
	</svg>
{:else if name === 'smartphone'}
	<svg class={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
		<rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" stroke-width="2.25" />
		<path d="M11 18h2" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" />
	</svg>
{/if}
