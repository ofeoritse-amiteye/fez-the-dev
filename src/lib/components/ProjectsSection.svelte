<script lang="ts">
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projectCategories, projects, type ProjectCategory } from '$lib/data/projects';
	import { externalAnchorProps } from '$lib/utils/external-link';

	let activeCategory = $state<ProjectCategory | 'all'>('all');
	let activeSlug = $state(projects[0]?.slug ?? '');

	const visibleProjects = $derived(
		activeCategory === 'all'
			? projects
			: projects.filter((project) => project.category === activeCategory)
	);

	$effect(() => {
		if (!visibleProjects.length) return;
		if (!visibleProjects.some((project) => project.slug === activeSlug)) {
			activeSlug = visibleProjects[0].slug;
		}
	});

	const activeProject = $derived(
		visibleProjects.find((project) => project.slug === activeSlug) ?? visibleProjects[0]
	);
</script>

<section
	id="work"
	class="relative scroll-mt-28 px-4 py-28 sm:px-6 md:px-10 lg:px-14"
	aria-labelledby="work-heading"
>
	<div
		class="pointer-events-none absolute inset-x-0 top-[6%] -z-[1] h-[32rem] bg-[radial-gradient(circle_at_15%_20%,rgba(255,173,94,0.12),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(145,169,255,0.12),transparent_32%)]"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-[88rem]">
		<MotionReveal>
			<div class="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] xl:items-end">
				<div>
					<p
						data-reveal
						class="font-mono text-[0.72rem] tracking-[0.32em] text-[color-mix(in_oklab,var(--accent-c)_92%,transparent)] uppercase"
					>
						My projects
					</p>
					<h2
						id="work-heading"
						data-reveal
						class="mt-4 max-w-[14ch] font-display text-[clamp(2.9rem,5.6vw,5rem)] leading-[0.94] font-semibold tracking-[-0.05em]"
					>
						Case studies that show how the engineering actually moves.
					</h2>
				</div>
			</div>
		</MotionReveal>

		<div class="mt-10 flex hidden lg:block flex-wrap gap-3" role="tablist" aria-label="Filter projects">
			{#each projectCategories as category}
				<button
					type="button"
					role="tab"
					aria-selected={activeCategory === category.id}
					class="ease-cinematic focus-ring rounded-full px-5 py-2.5 font-mono text-[0.72rem] tracking-[0.16em] uppercase [transition-duration:calc(280ms*var(--motion))] {activeCategory ===
					category.id
						? 'bg-[var(--text)] text-[var(--surface-0)] shadow-[0_24px_70px_-44px_color-mix(in_oklab,var(--accent-a)_42%,transparent)]'
						: 'border border-[var(--glass-border)] text-[var(--text-muted)] hover:border-[color-mix(in_oklab,var(--accent-a)_34%,transparent)] hover:text-[var(--text)]'}"
					onclick={() => (activeCategory = category.id)}
				>
					{category.label}
				</button>
			{/each}
		</div>

		{#if activeProject}
			<div class="mt-12 grid gap-7 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-start">
				<div class="xl:sticky xl:top-28">
					<div class="glass-panel overflow-hidden rounded-[2rem]">
						<div
							class="relative overflow-hidden px-6 py-6 sm:px-8 sm:py-8"
							style={`background:
								radial-gradient(circle at 14% 18%, color-mix(in oklab, ${activeProject.visual.glow} 38%, transparent), transparent 34%),
								radial-gradient(circle at 84% 12%, rgba(255,255,255,0.08), transparent 22%),
								linear-gradient(160deg, ${activeProject.visual.from}, ${activeProject.visual.to});`}
						>
							<div
								class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_58%,rgba(0,0,0,0.08))]"
							></div>
							<div class="relative">
								<p class="font-mono text-[0.68rem] tracking-[0.2em] text-white/72 uppercase">
									Active dossier
								</p>
								<h3
									class="mt-4 font-display text-[2.2rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.8rem]"
								>
									{activeProject.title}
								</h3>
								<p class="mt-3 max-w-2xl text-[1rem] leading-relaxed text-white/82">
									{activeProject.description}
								</p>

								<div class="mt-6 grid gap-3 sm:grid-cols-3">
									{#each activeProject.metrics as metric}
										<div class="rounded-[1.1rem] border border-white/12 bg-black/18 px-4 py-4">
											<p class="font-mono text-[0.62rem] tracking-[0.16em] text-white/56 uppercase">
												{metric.label}
											</p>
											<p class="mt-2 text-sm font-semibold text-white">{metric.value}</p>
										</div>
									{/each}
								</div>
							</div>
						</div>

						<div class="grid gap-5 px-6 py-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
							<div
								class="rounded-[1.4rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_88%,transparent)] p-5"
							>
								<p
									class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
								>
									Challenge
								</p>
								<p
									class="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
								>
									{activeProject.challenge}
								</p>
							</div>

							<div
								class="rounded-[1.4rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_88%,transparent)] p-5"
							>
								<p
									class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
								>
									Outcome
								</p>
								<p
									class="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
								>
									{activeProject.outcome}
								</p>
							</div>

							<div
								class="rounded-[1.4rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_88%,transparent)] p-5"
							>
								<p
									class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
								>
									Systems shipped
								</p>
								<ul
									class="mt-4 space-y-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
								>
									{#each activeProject.systems as system}
										<li class="flex gap-3">
											<span class="mt-1 h-2 w-2 rounded-full bg-[var(--accent-a)]"></span>
											<span>{system}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div
								class="rounded-[1.4rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_88%,transparent)] p-5"
							>
								<p
									class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
								>
									Impact
								</p>
								<ul
									class="mt-4 space-y-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
								>
									{#each activeProject.impact as item}
										<li class="flex gap-3">
											<span class="mt-1 h-2 w-2 rounded-full bg-[var(--accent-c)]"></span>
											<span>{item}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<div class="border-t border-[var(--glass-border)] px-6 py-5 sm:px-8">
							<div class="flex flex-wrap gap-3">
								<a
									href={`/projects/${activeProject.slug}`}
									class="ease-cinematic focus-ring inline-flex items-center justify-center rounded-xl bg-[var(--text)] px-5 py-2.5 text-sm font-semibold text-[var(--surface-0)] [transition-duration:calc(220ms*var(--motion))] hover:-translate-y-0.5"
								>
									Read the full case study
								</a>
								<a
									href={activeProject.repoUrl}
									{...externalAnchorProps(activeProject.repoUrl)}
									class="ease-cinematic focus-ring inline-flex items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--accent-a)_28%,transparent)] bg-[color-mix(in_oklab,var(--accent-a)_8%,transparent)] px-5 py-2.5 text-sm font-semibold [transition-duration:calc(220ms*var(--motion))] hover:-translate-y-0.5"
								>
									{activeProject.repoLabel}
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-6">
					{#each visibleProjects as project, index (project.slug)}
						<ProjectCard
							{project}
							{index}
							active={project.slug === activeProject.slug}
							onActivate={(slug: string) => (activeSlug = slug)}
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
