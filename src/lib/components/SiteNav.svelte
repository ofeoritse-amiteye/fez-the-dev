<script lang="ts">
	import { page } from '$app/state';
	import { slide, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { profile } from '$lib/data/portfolio';

	const links = [
		{ href: '/#about', label: 'About' },
		{ href: '/#work', label: 'Work' },
		{ href: '/#skills', label: 'Skills' },
		{ href: '/#contact', label: 'Contact' }
	];

	let open = $state(false);
	const navId = 'site-nav-drawer';

	function isActive(href: string): boolean {
		if (href.startsWith('/#')) {
			return page.url.pathname === '/' && page.url.hash === href.slice(1);
		}
		return page.url.pathname.startsWith(href);
	}

	function close() {
		open = false;
	}
</script>

<header class="nav-shell sticky top-0 z-50">
	<div class="section-wrap relative z-20 flex min-h-14 items-center justify-between gap-4 py-3">
		<a
			href="/"
			class="focus-ring font-display inline-flex items-center rounded-full border-[2.5px] border-[var(--ink)] bg-[var(--sun)] px-3 py-1.5 text-base font-extrabold tracking-wide uppercase shadow-[2px_2px_0_var(--ink)]"
		>
			{profile.shortName}
		</a>

		<nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
			{#each links as link}
				<a
					href={link.href}
					class="nav-link focus-ring relative min-h-11 px-3.5 py-2 text-xs font-extrabold tracking-widest uppercase text-[color-mix(in_srgb,var(--ink)_70%,transparent)] transition-colors duration-200 hover:text-[var(--ink)] {isActive(
						link.href
					)
						? 'is-active text-[var(--ink)]'
						: ''}"
					aria-current={isActive(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			type="button"
			class="focus-ring inline-flex size-11 items-center justify-center rounded-full border-[2.5px] border-[var(--ink)] bg-[var(--paper)] shadow-[2px_2px_0_var(--ink)] md:hidden"
			aria-controls={navId}
			aria-expanded={open}
			aria-label={open ? 'Close menu' : 'Open menu'}
			onclick={() => (open = !open)}
		>
			{#if open}
				<svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M6 6l12 12M18 6L6 18"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
					/>
				</svg>
			{:else}
				<svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M4 7h16M4 12h16M4 17h16"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
					/>
				</svg>
			{/if}
		</button>
	</div>

	{#if open}
		<button
			type="button"
			class="fixed inset-0 z-10 cursor-default border-0 bg-[color-mix(in_srgb,var(--ink)_40%,transparent)] p-0 md:hidden"
			transition:fade={{ duration: 280 }}
			aria-label="Close menu"
			onclick={close}
		></button>

		<nav
			id={navId}
			class="relative z-20 border-t border-[color-mix(in_srgb,var(--ink)_18%,transparent)] bg-[var(--paper)] md:hidden"
			aria-label="Mobile"
			transition:slide={{ duration: 340, easing: cubicOut, axis: 'y' }}
		>
			<div class="section-wrap flex flex-col gap-2 py-4">
				{#each links as link}
					<a
						href={link.href}
						class="focus-ring min-h-11 rounded-xl border border-[var(--ink)] bg-[var(--cream)] px-4 py-3 text-sm font-extrabold tracking-widest uppercase"
						onclick={close}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</nav>
	{/if}
</header>
