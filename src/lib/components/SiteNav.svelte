<script lang="ts">
	import { page } from '$app/state';
	import { openCommandPalette } from '$lib/commandPalette.svelte';
	import { profile } from '$lib/data/portfolio';
	import { theme, toggleTheme } from '$lib/theme.svelte';

	const links = [
		{ href: '/#focus', label: 'Focus' },
		{ href: '/#work', label: 'My projects' },
		{ href: '/#skills', label: 'Stack' },
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
</script>

<header class="fixed inset-x-0 top-0 z-[60] px-4 pt-4 sm:px-6 lg:px-10 pb-2 ">
	<div
		class="mx-auto flex max-w-[88rem] items-center justify-between gap-3 rounded-[1.5rem] border border-[var(--glass-border)] bg-[var(--surface-1)] px-4 py-3 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] sm:px-6 sm:py-3.5"
	>
		<a href="/" class="focus-ring rounded-[1rem] px-3 py-2">
			<p class="font-display text-base font-semibold tracking-[-0.03em]">{profile.shortName}</p>
			<p class="font-mono text-[0.62rem] tracking-[0.22em] text-[var(--text-muted)] uppercase hidden lg:block">
				Frontend-focused, full-stack capable
			</p>
		</a>

		<div class="hidden items-center gap-1 lg:flex">
			{#each links as link}
				<a
					href={link.href}
					class="ease-cinematic focus-ring rounded-full px-4 py-2 font-mono text-[0.72rem] tracking-[0.16em] text-[var(--text-muted)] uppercase [transition-duration:calc(260ms*var(--motion))] hover:bg-[color-mix(in_oklab,var(--accent-a)_8%,transparent)] hover:text-[var(--text)]"
					aria-current={isActive(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}

			<a
				href={profile.resumeHref}
				class="ease-cinematic focus-ring inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 font-mono text-[0.72rem] font-medium tracking-[0.08em] text-[var(--surface-0)] [transition-duration:calc(260ms*var(--motion))] hover:opacity-[0.92]"
				download
			>
				<svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" x2="12" y1="15" y2="3" />
				</svg>
				Download resume
			</a>

			<button
				type="button"
				class="ease-cinematic focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-white [transition-duration:calc(260ms*var(--motion))] {theme.mode === 'dark'
					? 'border-[#a86416] bg-[#c87620] hover:bg-[#b86a18]'
					: 'border-[#2f3d6e] bg-[#3f4f8a] hover:bg-[#364578]'}"
				onclick={() => toggleTheme()}
				aria-label={theme.mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				{#if theme.mode === 'dark'}
					<svg class="h-[1.2rem] w-[1.2rem] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
					</svg>
				{:else}
					<svg class="h-[1.2rem] w-[1.2rem] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				{/if}
			</button>
		</div>

		<button
			type="button"
			class="focus-ring rounded-xl px-4 py-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase [transition-duration:calc(220ms*var(--motion))] lg:hidden {theme.mode === 'dark'
				? 'border border-neutral-200 bg-white text-black hover:bg-neutral-100'
				: 'border border-neutral-900 bg-black text-white hover:bg-neutral-800'}"
			aria-controls={navId}
			aria-expanded={open}
			onclick={() => (open = !open)}
		>
			Menu
		</button>
	</div>

	{#if open}
		<div
			id={navId}
			class="mx-auto mt-4 max-w-[88rem] rounded-[1.5rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)] lg:hidden"
			role="navigation"
			aria-label="Mobile navigation"
		>
			<div class="flex flex-col gap-2">

			<button
					type="button"
					class="ease-cinematic absolute right-6 md:right-10 focus-ring mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-white [transition-duration:calc(260ms*var(--motion))] {theme.mode === 'dark'
						? 'border-[#a86416] bg-[#c87620] hover:bg-[#b86a18]'
						: 'border-[#2f3d6e] bg-[#3f4f8a] hover:bg-[#364578]'}"
					onclick={() => {
						toggleTheme();
						open = false;
					}}
					aria-label={theme.mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
				>
					{#if theme.mode === 'dark'}
						<svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
							<circle cx="12" cy="12" r="4" />
							<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
						</svg>
					{:else}
						<svg class="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
					{/if}
				</button>
				{#each links as link}
					<a
						href={link.href}
						class="focus-ring rounded-xl px-4 py-3 font-mono text-[0.8rem] tracking-[0.12em] uppercase hover:bg-[var(--surface-2)]"
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}

				<a
					href={profile.resumeHref}
					class="ease-cinematic focus-ring inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[var(--text)] px-4 py-3.5 font-mono text-[0.78rem] font-medium tracking-[0.06em] text-[var(--surface-0)] [transition-duration:calc(260ms*var(--motion))] hover:opacity-[0.92]"
					download
					onclick={() => (open = false)}
				>
					<svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
						<polyline points="7 10 12 15 17 10" />
						<line x1="12" x2="12" y1="15" y2="3" />
					</svg>
					Download resume
				</a>


			</div>
		</div>
	{/if}
</header>
