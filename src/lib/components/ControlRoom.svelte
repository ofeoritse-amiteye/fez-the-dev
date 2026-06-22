<script lang="ts">
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import { experienceTimeline, focusTracks } from '$lib/data/portfolio';
	import { theme } from '$lib/theme.svelte';

	let activeId = $state(focusTracks[0]?.id ?? '');

	const activeTrack = $derived(
		focusTracks.find((track) => track.id === activeId) ?? focusTracks[0]
	);

	const codeLeadClass = $derived(
		theme.mode === 'light'
			? 'font-medium text-[var(--text)]'
			: 'font-medium text-[color-mix(in_oklab,var(--accent-a)_78%,#f4fffd)]'
	);

	const codeSnippetBoxClass = $derived(
		theme.mode === 'light'
			? 'mt-5 rounded-[1.15rem] border border-[var(--glass-border)] bg-[var(--surface-2)] px-4 py-3 font-mono text-[0.72rem] leading-relaxed text-[var(--text)]'
			: 'mt-5 rounded-[1.15rem] border border-[var(--glass-border)] bg-[var(--surface-0)] px-4 py-3 font-mono text-[0.72rem] leading-relaxed text-[var(--text-muted)]'
	);

	const kickerClass = $derived(
		theme.mode === 'light'
			? 'font-mono text-[0.72rem] tracking-[0.32em] text-[#1f5c48] uppercase'
			: 'font-mono text-[0.72rem] tracking-[0.32em] text-[color-mix(in_oklab,var(--accent-a)_90%,transparent)] uppercase'
	);
</script>

<section
	id="focus"
	class="relative scroll-mt-28 px-4 py-28 sm:px-6 md:px-10 lg:px-14"
	aria-labelledby="focus-heading"
>
	<div
		class="pointer-events-none absolute inset-x-0 top-[12%] -z-[1] h-[30rem] bg-[radial-gradient(circle_at_top,rgba(118,248,207,0.12),transparent_58%)]"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-[88rem]">
		<MotionReveal>
			<div class="flex max-w-[72rem] flex-col gap-6 sm:gap-7">
				<div>
					<p data-reveal class={kickerClass}>
						Focus lanes
					</p>
					<h2
						id="focus-heading"
						data-reveal
						class="mt-4 max-w-[22ch] font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.045em] xl:max-w-[26ch] xl:text-[clamp(2.75rem,4.2vw,4.75rem)]"
					>
						How I build products that need both speed and trust.
					</h2>
				</div>

				<p
					data-reveal
					class="max-w-none text-[1.02rem] leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)] sm:text-[1.05rem] xl:max-w-[62rem]"
				>
					This section is the heart of the portfolio. Pick a lane and the interface rewires around
					the kind of engineering problem it represents: realtime collaboration, fintech rigor, AI
					workflow design, or cross-surface delivery.
				</p>
			</div>
		</MotionReveal>

		<div class="mt-14 grid gap-7 xl:grid-cols-[minmax(14rem,min(22rem,26vw))_minmax(0,1fr)] xl:gap-8 2xl:grid-cols-[minmax(16rem,24rem)_minmax(0,1fr)]">
			<div class="space-y-3">
				{#each focusTracks as track}
					<button
						type="button"
						class="ease-cinematic glass-panel focus-ring w-full rounded-[1.45rem] p-5 text-left transition-transform [transition-duration:calc(320ms*var(--motion))] hover:cursor-pointer hover:-translate-y-2 {activeId ===
						track.id
							? 'border-[color-mix(in_oklab,var(--accent-a)_42%,transparent)] bg-[color-mix(in_oklab,var(--surface-1)_92%,transparent)] shadow-[0_28px_80px_-48px_color-mix(in_oklab,var(--accent-a)_44%,transparent)]'
							: 'hover:border-[color-mix(in_oklab,var(--accent-b)_30%,transparent)]'}"
						onclick={() => (activeId = track.id)}
					>
						<p class="font-mono text-[0.72rem] tracking-[0.2em] text-[var(--text-muted)] uppercase">
							{track.label}
						</p>
						<p
							class="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_78%,transparent)]"
						>
							{track.signal}
						</p>
					</button>
				{/each}
			</div>

			<div
				class="glass-panel overflow-hidden rounded-[2rem] border-[color-mix(in_oklab,var(--accent-b)_18%,transparent)]"
			>
				<div class="border-b border-[var(--glass-border)] px-6 py-4 sm:px-8">
					<div class="flex flex-wrap items-center justify-between gap-3">
						<div>
							<p
								class="font-mono text-[0.72rem] tracking-[0.24em] text-[var(--text-muted)] uppercase"
							>
								Focus lane
							</p>
							<h3
								class="mt-2 font-display text-[1.9rem] font-semibold tracking-[-0.04em] sm:text-[2.35rem]"
							>
								{activeTrack.title}
							</h3>
						</div>
						<div
							class="rounded-full border border-[var(--glass-border)] bg-[var(--surface-1)] px-4 py-2 font-mono text-[0.72rem] tracking-[0.16em] text-[var(--text-muted)] uppercase"
						>
							/{activeTrack.id}
						</div>
					</div>
					<p
						class="mt-5 max-w-3xl text-[0.98rem] leading-relaxed text-[color-mix(in_oklab,var(--text)_74%,transparent)]"
					>
						{activeTrack.summary}
					</p>
				</div>

				<div class="grid gap-6 px-6 py-6 sm:px-8 lg:grid-cols-[1.12fr_0.88fr]">
					<div class="space-y-6">
						<div
							class="rounded-[1.5rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_88%,transparent)] p-5"
						>
							<p
								class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase"
							>
								Signal stack
							</p>
							<div class="mt-4 flex flex-wrap gap-2.5">
								{#each activeTrack.stack as item}
									<span
										class="rounded-full border border-[var(--glass-border)] bg-[var(--surface-0)] px-3 py-1.5 font-mono text-[0.72rem] text-[color-mix(in_oklab,var(--text)_82%,transparent)]"
									>
										{item}
									</span>
								{/each}
							</div>
						</div>

						<div class="grid gap-4 md:grid-cols-3">
							{#each activeTrack.metrics as metric}
								<div
									class="rounded-[1.5rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_85%,transparent)] p-5"
								>
									<p
										class="font-mono text-[0.66rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
									>
										{metric.label}
									</p>
									<p class="mt-3 text-xl font-semibold tracking-[-0.03em]">{metric.value}</p>
									<p class="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
										{metric.detail}
									</p>
								</div>
							{/each}
						</div>

						<div class="grid gap-4 md:grid-cols-2">
							<div
								class="rounded-[1.5rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_84%,transparent)] p-5"
							>
								<p
									class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase"
								>
									What shipped
								</p>
								<ul
									class="mt-4 space-y-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
								>
									{#each activeTrack.details as detail}
										<li class="flex gap-3">
											<span class="mt-1 h-2 w-2 rounded-full bg-[var(--accent-a)]"></span>
											<span>{detail}</span>
										</li>
									{/each}
								</ul>
							</div>

							<div
								class="rounded-[1.5rem] border border-[var(--glass-border)] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--surface-1)_90%,transparent),color-mix(in_oklab,var(--accent-b)_10%,transparent))] p-5"
							>
								<p
									class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase"
								>
									Operating note
								</p>
								<p
									class="mt-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_78%,transparent)]"
								>
									The work is not just implementation. It is choosing where urgency lives, where
									trust needs to show up, and how the UI tells the truth when a system is under
									load.
								</p>
								<div class={codeSnippetBoxClass}>
									<div class="flex items-center gap-2 {codeLeadClass}">
										<span class="h-2 w-2 shrink-0 rounded-full bg-[var(--accent-a)]"></span>
										<span>system.intent = clarity under pressure</span>
									</div>
									<div class="mt-2 text-[color-mix(in_oklab,var(--text-muted)_92%,var(--text))]">motion.budget = deliberate</div>
									<div class="mt-2 text-[color-mix(in_oklab,var(--text-muted)_92%,var(--text))]">failure.state = visible and recoverable</div>
								</div>
							</div>
						</div>
					</div>

					<div
						class="rounded-[1.6rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-1)_84%,transparent)] p-5"
					>
						<p
							class="font-mono text-[0.72rem] tracking-[0.22em] text-[var(--text-muted)] uppercase"
						>
							Recent experience
						</p>
						<div class="mt-5 space-y-5">
							{#each experienceTimeline as entry}
								<div
									class="rounded-[1.35rem] border border-[var(--glass-border)] bg-[var(--surface-0)] p-4"
								>
									<div class="flex flex-wrap items-start justify-between gap-3">
										<div>
											<h4 class="text-base font-semibold tracking-[-0.02em]">{entry.role}</h4>
											<p class="mt-1 text-sm text-[var(--text-muted)]">
												{entry.company} - {entry.location}
											</p>
										</div>
										<p
											class="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--text-muted)] uppercase"
										>
											{entry.timeline}
										</p>
									</div>
									<ul
										class="mt-4 space-y-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)]"
									>
										{#each entry.details as detail}
											<li>{detail}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
