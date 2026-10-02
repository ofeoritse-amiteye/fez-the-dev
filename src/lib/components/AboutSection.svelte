<script lang="ts">
	import ButtonIcon from '$lib/components/ButtonIcon.svelte';
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import { educationTimeline, experienceTimeline } from '$lib/data/portfolio';

	const cardTones = [
		'bg-[var(--sun)]',
		'bg-[var(--aqua)]',
		'bg-[var(--paper)]',
		'bg-[var(--cream)]'
	];

	let expanded = $state<Record<number, boolean>>({});

	function toggle(index: number) {
		expanded = { ...expanded, [index]: !expanded[index] };
	}
</script>

<section id="about" class="scroll-mt-24 bg-[var(--section-alt)]" aria-labelledby="about-heading">
	<div class="section-wrap section-pad">
		<MotionReveal>
			<div class="flex flex-wrap items-end justify-between gap-4">
				<h2 id="about-heading" data-reveal class="section-title">About</h2>
				<span data-reveal class="chip chip-teal">Education & experience</span>
			</div>

			<div data-reveal class="mt-10">
				<p class="font-display text-sm font-extrabold tracking-widest uppercase">Education</p>
				<div class="mt-6 grid gap-6 md:grid-cols-2 md:gap-7">
					{#each educationTimeline as edu, i}
						<article class="project-card flex h-full flex-col {cardTones[i % cardTones.length]}">
							<div class="flex flex-1 flex-col p-5 sm:p-6">
								<p
									class="text-[0.65rem] font-extrabold tracking-widest uppercase text-[color-mix(in_srgb,var(--ink)_55%,transparent)]"
								>
									{edu.timeline}
								</p>
								<h3 class="font-display mt-2 text-xl font-extrabold tracking-tight">
									{edu.degree}
								</h3>
								<p class="mt-2 text-sm font-semibold">
									{edu.school} · {edu.location}
								</p>
								{#each edu.details as detail}
									<p
										class="mt-4 flex-1 text-sm leading-relaxed text-[color-mix(in_srgb,var(--ink)_78%,transparent)]"
									>
										{detail}
									</p>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>

			<div data-reveal class="mt-14">
				<p class="font-display text-sm font-extrabold tracking-widest uppercase">Experience</p>
				<div class="mt-6 grid items-start gap-6 md:grid-cols-2 md:gap-7">
					{#each experienceTimeline as entry, i}
						{@const isOpen = !!expanded[i]}
						<article
							class="project-card flex min-h-[15.5rem] flex-col {cardTones[(i + 2) % cardTones.length]}"
						>
							<div class="flex flex-1 flex-col p-4 pb-3.5 sm:p-5 sm:pb-4">
								<p
									class="text-[0.65rem] font-extrabold tracking-widest uppercase text-[color-mix(in_srgb,var(--ink)_55%,transparent)]"
								>
									{entry.timeline}
								</p>
								<h3 class="font-display mt-1.5 text-lg font-extrabold tracking-tight sm:text-xl">
									{entry.role}
								</h3>
								<p class="mt-1.5 text-sm font-semibold">
									{entry.company} · {entry.location}
								</p>

								<div
									class="experience-expand mt-3"
									class:is-open={isOpen}
									id={`experience-details-${i}`}
								>
									<div class="experience-expand-inner">
										<ul
											class="space-y-2.5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--ink)_78%,transparent)]"
										>
											{#each entry.details as detail}
												<li class="flex gap-2.5">
													<span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--ink)]"></span>
													<span>{detail}</span>
												</li>
											{/each}
										</ul>
									</div>
								</div>

								{#if entry.details.length > 1}
									<button
										type="button"
										class="focus-ring mt-3 inline-flex items-center gap-1 self-start rounded-full border-[2.5px] border-[var(--ink)] bg-[var(--paper)] px-2.5 py-1 text-[0.6rem] font-extrabold tracking-widest uppercase shadow-[2px_2px_0_var(--ink)] transition-transform active:translate-x-[1px] active:translate-y-[1px]"
										aria-expanded={isOpen}
										aria-controls={`experience-details-${i}`}
										onclick={() => toggle(i)}
									>
										<ButtonIcon name={isOpen ? 'chevron-up' : 'chevron-down'} class="size-3.5" />
										{isOpen ? 'See less' : 'See more'}
									</button>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</MotionReveal>
	</div>
</section>
