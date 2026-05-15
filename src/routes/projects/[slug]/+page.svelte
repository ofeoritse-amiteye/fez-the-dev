<script lang="ts">
	import type { PageProps } from './$types';
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import { categoryLabel, getNextProject } from '$lib/data/projects';
	import { externalAnchorProps } from '$lib/utils/external-link';

	let { data }: PageProps = $props();

	const project = $derived(data.project);
	const nextProject = $derived(getNextProject(project.slug));
</script>

<svelte:head>
	<title>{project.title} | Case study</title>
	<meta name="description" content={project.description.slice(0, 155)} />
</svelte:head>

<article class="pb-8">
	<header class="relative overflow-hidden px-4 pt-28 pb-16 sm:px-6 md:px-10 md:pb-24 lg:px-14">
		<div class="grid-bg pointer-events-none absolute inset-0 opacity-55" aria-hidden="true"></div>
		<div
			class="animate-safe-only pointer-events-none absolute inset-0 opacity-30"
			aria-hidden="true"
			style={`background:
				radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 42%),
				linear-gradient(145deg, ${project.visual.from}, ${project.visual.to});`}
		></div>

		<div class="relative mx-auto max-w-[88rem]">
			<MotionReveal>
				<div class="max-w-5xl">
					<a
						data-reveal
						href="/#work"
						class="focus-ring inline-flex items-center gap-2 rounded-lg font-mono text-[0.78rem] tracking-[0.16em] text-[var(--text-muted)] uppercase hover:text-[var(--text)]"
					>
						Back to selected builds
					</a>

					<p
						data-reveal
						class="mt-6 font-mono text-[0.72rem] tracking-[0.24em] text-white/76 uppercase"
					>
						{categoryLabel(project.category)} - {project.year} - {project.status}
					</p>
					<h1
						data-reveal
						class="mt-4 max-w-[13ch] font-display text-[clamp(3.3rem,6vw,6.2rem)] leading-[0.94] font-semibold tracking-[-0.06em] text-white"
					>
						{project.title}
					</h1>
					<p
						data-reveal
						class="mt-5 max-w-3xl text-[1.08rem] leading-relaxed text-white/82 sm:text-[1.15rem]"
					>
						{project.tagline}
					</p>

					<div data-reveal class="mt-8 flex flex-wrap gap-3">
						<a
							href={project.liveUrl}
							{...externalAnchorProps(project.liveUrl)}
							class="focus-ring inline-flex rounded-xl bg-[var(--text)] px-5 py-3 text-sm font-semibold text-[var(--surface-0)]"
						>
							{project.liveLabel}
						</a>
						<a
							href={project.repoUrl}
							{...externalAnchorProps(project.repoUrl)}
							class="focus-ring glass-panel inline-flex rounded-xl px-5 py-3 text-sm font-semibold"
						>
							{project.repoLabel}
						</a>
					</div>
				</div>
			</MotionReveal>
		</div>
	</header>

	<div class="mx-auto max-w-[88rem] space-y-10 px-4 sm:px-6 md:px-10 lg:px-14">
		<section class="grid gap-7 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
			<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
				<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Project overview
				</p>
				<p
					class="mt-5 text-[1rem] leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
				>
					{project.description}
				</p>
				<div
					class="mt-6 rounded-[1.35rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_86%,transparent)] px-5 py-4"
				>
					<p class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase">
						Accent note
					</p>
					<p
						class="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_78%,transparent)]"
					>
						{project.accentNote}
					</p>
				</div>
			</div>

			<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
				<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Project signals
				</p>
				<div class="mt-5 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
					<div
						class="rounded-[1.3rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4"
					>
						<p
							class="font-mono text-[0.66rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							Role
						</p>
						<p class="mt-2 text-sm font-semibold">{project.role}</p>
					</div>
					<div
						class="rounded-[1.3rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4"
					>
						<p
							class="font-mono text-[0.66rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							Timeline
						</p>
						<p class="mt-2 text-sm font-semibold">{project.timeline}</p>
					</div>
					<div
						class="rounded-[1.3rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4"
					>
						<p
							class="font-mono text-[0.66rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							Status
						</p>
						<p class="mt-2 text-sm font-semibold">{project.status}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="grid gap-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
			<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
				<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Challenge
				</p>
				<p
					class="mt-5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
				>
					{project.challenge}
				</p>
			</div>

			<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
				<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Outcome
				</p>
				<p
					class="mt-5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
				>
					{project.outcome}
				</p>
			</div>
		</section>

		<section class="grid gap-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
			<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
				<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Systems shipped
				</p>
				<ul
					class="mt-5 space-y-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
				>
					{#each project.systems as system}
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-[var(--accent-a)]"></span>
							<span>{system}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="glass-panel rounded-[2rem] p-6 sm:p-8">
				<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
					Impact
				</p>
				<ul
					class="mt-5 space-y-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
				>
					{#each project.impact as item}
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-[var(--accent-c)]"></span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section class="glass-panel rounded-[2rem] p-6 sm:p-8">
			<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
				Implementation notes
			</p>
			<div class="mt-6 grid gap-4 md:grid-cols-3">
				{#each project.buildNotes as note}
					<div
						class="rounded-[1.4rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-5"
					>
						<p
							class="text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
						>
							{note}
						</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="glass-panel rounded-[2rem] p-6 sm:p-8">
			<p class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase">
				Technology stack
			</p>
			<div class="mt-5 flex flex-wrap gap-3">
				{#each project.technologies as technology}
					<span
						class="rounded-full border border-[var(--glass-border)] bg-[var(--surface-1)] px-4 py-2 font-mono text-[0.72rem] text-[var(--text-muted)]"
					>
						{technology}
					</span>
				{/each}
			</div>
		</section>

		{#if nextProject}
			<section class="glass-panel overflow-hidden rounded-[2rem]">
				<div
					class="px-6 py-6 sm:px-8 sm:py-8"
					style={`background:
						radial-gradient(circle at 12% 18%, color-mix(in oklab, ${nextProject.visual.glow} 34%, transparent), transparent 34%),
						linear-gradient(150deg, ${nextProject.visual.from}, ${nextProject.visual.to});`}
				>
					<p class="font-mono text-[0.72rem] tracking-[0.22em] text-white/70 uppercase">
						Next dossier
					</p>
					<h2 class="mt-4 font-display text-[2rem] font-semibold tracking-[-0.05em] text-white">
						{nextProject.title}
					</h2>
					<p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/82">{nextProject.tagline}</p>
					<a
						href={`/projects/${nextProject.slug}`}
						class="focus-ring mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--surface-0)]"
					>
						Open next case study
					</a>
				</div>
			</section>
		{/if}
	</div>

	<div class="mt-16 px-4 sm:px-6 md:px-10 lg:px-14">
		<SiteFooter />
	</div>
</article>
