<script lang="ts">
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import { profile, skillGroups } from '$lib/data/portfolio';

	const principles = [
		{
			title: 'Engineered polish',
			body: 'The interface should feel considered from motion and spacing all the way down to empty, loading, and failure states.'
		},
		{
			title: 'Performance with intent',
			body: 'I care about smoothness because it affects trust. Product quality falls fast when the UI starts to hesitate under real use.'
		},
		{
			title: 'Accessibility that survives styling',
			body: 'Semantic structure, keyboard support, visible focus, and reduced-motion respect stay part of the design system rather than an afterthought.'
		}
	];
</script>

<section
	id="skills"
	class="relative scroll-mt-28 px-4 py-28 sm:px-6 md:px-10 lg:px-14"
	aria-labelledby="skills-heading"
>
	<div
		class="pointer-events-none absolute inset-x-0 top-[8%] -z-[1] h-[28rem] bg-[radial-gradient(circle_at_50%_0%,rgba(145,169,255,0.12),transparent_52%)]"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-[88rem]">
		<MotionReveal>
			<div class="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
				<div>
					<p
						data-reveal
						class="font-mono text-[0.72rem] tracking-[0.32em] text-[color-mix(in_oklab,var(--accent-b)_92%,transparent)] uppercase"
					>
						Operating system
					</p>
					<h2
						id="skills-heading"
						data-reveal
						class="mt-4 max-w-[12ch] font-display text-[clamp(2.9rem,5.1vw,4.8rem)] leading-[0.95] font-semibold tracking-[-0.05em]"
					>
						The stack is broad. The craft stays focused.
					</h2>
				</div>
				<p
					data-reveal
					class="max-w-3xl text-[1.02rem] leading-relaxed text-[color-mix(in_oklab,var(--text)_74%,transparent)]"
				>
					{profile.summary}
				</p>
			</div>
		</MotionReveal>

		<div class="mt-12 grid gap-7 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
			<div class="space-y-5">
				{#each principles as principle}
					<div class="glass-panel rounded-[1.8rem] p-6 sm:p-7">
						<p
							class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							{principle.title}
						</p>
						<p
							class="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
						>
							{principle.body}
						</p>
					</div>
				{/each}
			</div>

			<div class="grid gap-5 md:grid-cols-2">
				{#each skillGroups as group}
					<div class="glass-panel rounded-[1.8rem] p-6">
						<p
							class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
						>
							{group.title}
						</p>
						<div class="mt-5 flex flex-wrap gap-2.5">
							{#each group.items as item}
								<span
									class="rounded-full border border-[var(--glass-border)] bg-[var(--surface-1)] px-3 py-1.5 font-mono text-[0.7rem] text-[var(--text-muted)]"
								>
									{item}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
