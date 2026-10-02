<script lang="ts">
	import ButtonIcon, { type ButtonIconName } from '$lib/components/ButtonIcon.svelte';
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projectCategories, projects, type ProjectCategory } from '$lib/data/projects';

	let activeCategory = $state<ProjectCategory | 'all'>('all');

	const categoryIcons: Record<ProjectCategory | 'all', ButtonIconName> = {
		all: 'grid',
		product: 'product',
		ai: 'sparkles',
		security: 'shield',
		mobile: 'smartphone'
	};

	const visibleProjects = $derived(
		activeCategory === 'all'
			? projects
			: projects.filter((project) => project.category === activeCategory)
	);
</script>

<section id="work" class="section-wrap section-pad scroll-mt-24" aria-labelledby="work-heading">
	<MotionReveal>
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<h2 id="work-heading" data-reveal class="section-title">Projects</h2>
				<p data-reveal class="text-muted mt-4 max-w-2xl text-base leading-relaxed">
					Product builds where I owned UI, systems, and delivery marketplaces, secure messaging, AI
					tooling, and mobile.
				</p>
			</div>
			<span data-reveal class="chip chip-sun">{projects.length} projects</span>
		</div>

		<div data-reveal class="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
			{#each projectCategories as category}
				<button
					type="button"
					role="tab"
					aria-selected={activeCategory === category.id}
					class="focus-ring inline-flex min-h-11 items-center gap-1.5 rounded-full border-[2.5px] border-[var(--ink)] px-4 py-2 text-xs font-extrabold tracking-widest uppercase shadow-[2px_2px_0_var(--ink)] transition-transform active:translate-x-[1px] active:translate-y-[1px] {activeCategory ===
					category.id
						? 'bg-[var(--teal)] text-white'
						: 'bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--cream)]'}"
					onclick={() => (activeCategory = category.id)}
				>
					<ButtonIcon name={categoryIcons[category.id]} class="size-3.5" />
					{category.label}
				</button>
			{/each}
		</div>

		<div class="mt-10 grid gap-6 md:grid-cols-2 md:gap-7">
			{#each visibleProjects as project, index (project.slug)}
				<div data-reveal>
					<ProjectCard {project} {index} />
				</div>
			{/each}
		</div>
	</MotionReveal>
</section>
