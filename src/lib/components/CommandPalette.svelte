<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { closeCommandPalette, palette, toggleCommandPalette } from '$lib/commandPalette.svelte';
	import { profile } from '$lib/data/portfolio';
	import { projects } from '$lib/data/projects';
	import { setTheme, theme, toggleTheme } from '$lib/theme.svelte';

	type Command = {
		id: string;
		label: string;
		hint?: string;
		keywords?: string;
		run: () => void;
	};

	let query = $state('');
	let panel: HTMLDivElement | undefined = $state();
	let input: HTMLInputElement | undefined = $state();
	let activeIndex = $state(0);

	const open = $derived(palette.open);

	const baseCommands: Command[] = [
		{
			id: 'home',
			label: 'Go to homepage',
			hint: 'Navigation',
			keywords: 'hero start portfolio',
			run: () => goto('/')
		},
		{
			id: 'control',
			label: 'Jump to control room',
			hint: 'Navigation',
			keywords: 'focus tracks systems',
			run: () => goto('/#control')
		},
		{
			id: 'work',
			label: 'Jump to selected builds',
			hint: 'Navigation',
			keywords: 'projects case studies showcase',
			run: () => goto('/#work')
		},
		{
			id: 'skills',
			label: 'Jump to operating system',
			hint: 'Navigation',
			keywords: 'skills stack',
			run: () => goto('/#skills')
		},
		{
			id: 'contact',
			label: 'Jump to contact section',
			hint: 'Navigation',
			keywords: 'hire collaborate email',
			run: () => goto('/#contact')
		},
		{
			id: 'resume',
			label: 'Download resume',
			hint: 'Document',
			keywords: 'cv pdf',
			run: () => {
				window.location.href = profile.resumeHref;
			}
		},
		{
			id: 'email',
			label: 'Email Ofeoritse',
			hint: 'Contact',
			keywords: 'mail reach out',
			run: () => {
				window.location.href = `mailto:${profile.email}`;
			}
		},
		{
			id: 'theme-dark',
			label: 'Switch theme to dark',
			hint: 'Theme',
			keywords: 'appearance',
			run: () => setTheme('dark')
		},
		{
			id: 'theme-light',
			label: 'Switch theme to light',
			hint: 'Theme',
			keywords: 'appearance',
			run: () => setTheme('light')
		},
		{
			id: 'theme-toggle',
			label: 'Toggle active theme',
			hint: 'Theme',
			keywords: 'switch appearance',
			run: () => toggleTheme()
		}
	];

	function projectCommands(): Command[] {
		return projects.map((project) => ({
			id: `project-${project.slug}`,
			label: `Open case study: ${project.title}`,
			hint: 'Project',
			keywords: `${project.category} ${project.technologies.join(' ')}`.toLowerCase(),
			run: () => goto(`/projects/${project.slug}`)
		}));
	}

	function score(currentQuery: string, command: Command): number {
		if (!currentQuery.trim()) return 1;
		const needle = currentQuery.toLowerCase().trim();
		const haystack =
			`${command.label} ${command.hint ?? ''} ${command.keywords ?? ''} ${command.id}`.toLowerCase();

		if (haystack.includes(needle)) return 2;
		const parts = needle.split(/\s+/);
		if (parts.every((part) => haystack.includes(part))) return 1;
		return 0;
	}

	const filtered = $derived.by(() => {
		const allCommands = [...baseCommands, ...projectCommands()];
		const ranked = allCommands
			.map((command) => ({ command, rank: score(query, command) }))
			.filter((item) => item.rank > 0)
			.sort(
				(left, right) =>
					right.rank - left.rank || left.command.label.localeCompare(right.command.label)
			);
		return ranked.map((item) => item.command).slice(0, 10);
	});

	$effect(() => {
		filtered;
		activeIndex = 0;
	});

	function close() {
		closeCommandPalette();
		query = '';
	}

	function execute(command: Command) {
		command.run();
		close();
	}

	function onGlobalKey(event: KeyboardEvent) {
		const usesModifier = event.ctrlKey || event.metaKey;
		if (usesModifier && event.key.toLowerCase() === 'k') {
			event.preventDefault();
			toggleCommandPalette();
			queueMicrotask(() => input?.focus());
			return;
		}

		if (event.key === 'Escape' && palette.open) {
			event.preventDefault();
			close();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', onGlobalKey);
		return () => window.removeEventListener('keydown', onGlobalKey);
	});

	$effect(() => {
		if (!palette.open) return;
		queueMicrotask(() => input?.focus());
	});
</script>

<svelte:window
	onclick={(event) => {
		if (!palette.open || !panel) return;
		if (event.target instanceof Node && !panel.contains(event.target)) close();
	}}
/>

{#if open}
	<div
		class="fixed inset-0 z-[80] flex items-start justify-center bg-black/36 px-3 pt-[16vh] backdrop-blur-[3px] sm:px-4"
		role="presentation"
	>
		<div
			bind:this={panel}
			class="glass-panel w-full max-w-xl overflow-hidden rounded-[1.8rem] shadow-2xl"
			role="dialog"
			aria-modal="true"
			aria-label="Command palette"
		>
			<div class="border-b border-[var(--glass-border)] px-4 py-3">
				<div class="flex items-center gap-3 font-mono text-[0.75rem] text-[var(--text-muted)]">
					<span aria-hidden="true">></span>
					<input
						bind:this={input}
						bind:value={query}
						class="focus-ring min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)]"
						placeholder="Type a section, project, or action..."
						autocomplete="off"
						autocapitalize="off"
						spellcheck="false"
						onkeydown={(event) => {
							if (event.key === 'ArrowDown') {
								event.preventDefault();
								activeIndex = Math.min(activeIndex + 1, Math.max(filtered.length - 1, 0));
							} else if (event.key === 'ArrowUp') {
								event.preventDefault();
								activeIndex = Math.max(activeIndex - 1, 0);
							} else if (event.key === 'Enter') {
								event.preventDefault();
								const command = filtered[activeIndex];
								if (command) execute(command);
							}
						}}
					/>
				</div>
			</div>

			<ul class="max-h-[min(54vh,24rem)] overflow-y-auto py-2" role="listbox" aria-label="Commands">
				{#each filtered as command, index}
					<li role="option" aria-selected={index === activeIndex}>
						<button
							type="button"
							class="flex w-full items-start gap-3 px-4 py-3 text-left font-mono text-xs transition-colors sm:text-[0.8rem] {index ===
							activeIndex
								? 'bg-[var(--glass-highlight)]'
								: 'hover:bg-[var(--glass-highlight)]'}"
							onclick={() => execute(command)}
							onmouseenter={() => (activeIndex = index)}
						>
							<span class="min-w-0 flex-1 text-[var(--text)]">{command.label}</span>
							{#if command.hint}
								<span
									class="shrink-0 text-[0.66rem] tracking-[0.14em] text-[var(--text-muted)] uppercase"
								>
									{command.hint}
								</span>
							{/if}
						</button>
					</li>
				{:else}
					<li class="px-4 py-8 text-center font-mono text-xs text-[var(--text-muted)]">
						No matches yet. Try "work", "resume", "theme", or a project name.
					</li>
				{/each}
			</ul>

			<div
				class="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--glass-border)] px-4 py-3 font-mono text-[0.68rem] text-[var(--text-muted)]"
			>
				<span>Theme: {theme.mode}</span>
				<span>Arrow keys navigate. Enter runs.</span>
			</div>
		</div>
	</div>
{/if}
