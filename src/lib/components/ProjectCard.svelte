<script lang="ts">
	import ButtonIcon from '$lib/components/ButtonIcon.svelte';
	import { fly } from 'svelte/transition';
	import { categoryLabel, type Project } from '$lib/data/projects';
	import { externalAnchorProps } from '$lib/utils/external-link';

	let { project, index = 0 }: { project: Project; index?: number } = $props();

	const badgeTones = ['chip-sun', 'chip-teal', 'chip-aqua', 'chip-grape'] as const;
	const badge = $derived(badgeTones[index % badgeTones.length]);
	const linkProps = $derived(externalAnchorProps(project.liveUrl));
</script>

<article
	class="project-card flex h-full flex-col"
	transition:fly={{ y: 18, duration: 280, delay: index * 45, opacity: 0 }}
>
	<a
		href={project.liveUrl}
		class="focus-ring group flex flex-1 flex-col outline-offset-4"
		{...linkProps}
	>
		<div
			class="relative aspect-[16/10] w-full overflow-hidden border-b-[2.5px] border-[var(--ink)]"
			style={!project.coverImage
				? `background: linear-gradient(145deg, ${project.visual.from}, ${project.visual.to});`
				: undefined}
			role="img"
			aria-label="{project.title} preview"
		>
			{#if project.coverImage}
				<img
					src={project.coverImage}
					alt=""
					class="absolute inset-0 h-full w-full object-cover object-top"
					loading="lazy"
				/>
			{/if}
			<span class="chip {badge} absolute top-3 left-3 z-[1] shadow-[2px_2px_0_var(--ink)]">
				{categoryLabel(project.category)}
			</span>
			<span class="chip absolute top-3 right-3 z-[1] bg-[var(--paper)] shadow-[2px_2px_0_var(--ink)]">
				{project.year}
			</span>
		</div>
		<div class="flex flex-1 flex-col p-5 sm:p-6">
			<h3 class="font-display text-xl font-extrabold tracking-tight group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-4">
				{project.title}
			</h3>
			<p class="text-muted mt-2 flex-1 text-sm leading-relaxed">
				{project.tagline}
			</p>
			<div class="mt-4 flex flex-wrap gap-2">
				{#each project.technologies.slice(0, 4) as technology}
					<span class="chip">{technology}</span>
				{/each}
			</div>
			<p
				class="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border-[2.5px] border-[var(--ink)] bg-[var(--sun)] px-3 py-1.5 text-[0.7rem] font-extrabold tracking-widest uppercase shadow-[2px_2px_0_var(--ink)]"
			>
				<ButtonIcon name="external" class="size-3.5" />
				{project.liveLabel}
			</p>
		</div>
	</a>
</article>
