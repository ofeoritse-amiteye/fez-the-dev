<script lang="ts">
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import ParticleCanvas from '$lib/components/ParticleCanvas.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { heroMarquee, heroMetrics, profile, socialChipTone, socialLinks } from '$lib/data/portfolio';
	import { theme } from '$lib/theme.svelte';

	const orbitTags = ['AI tooling', 'Realtime systems', 'Payment flows', 'Mobile delivery'];

	const eyebrowClass = $derived(
		theme.mode === 'light'
			? 'font-mono text-[0.68rem] tracking-[0.28em] uppercase text-[#2a332d] sm:text-[0.7rem]'
			: 'font-mono text-[0.68rem] tracking-[0.28em] uppercase text-[color-mix(in_oklab,var(--accent-a)_78%,var(--text))] sm:text-[0.7rem]'
	);

	const availabilityBadgeClass = $derived(
		theme.mode === 'light'
			? 'rounded-full border border-[#b8c4bc] bg-[#eef4ef] px-3 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[#1e2a24] sm:px-4 sm:text-[0.64rem] sm:tracking-[0.16em]'
			: 'rounded-full border border-[color-mix(in_oklab,var(--accent-c)_38%,transparent)] bg-[color-mix(in_oklab,var(--accent-c)_12%,var(--surface-2))] px-3 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-[color-mix(in_oklab,var(--accent-c)_88%,white)] sm:px-4 sm:text-[0.64rem] sm:tracking-[0.16em]'
	);

	const portraitFrameClass = $derived(
		theme.mode === 'light'
			? 'bg-[linear-gradient(165deg,var(--surface-2),var(--surface-1))]'
			: 'bg-[linear-gradient(165deg,rgba(14,17,24,0.96),rgba(17,27,34,0.9))]'
	);

	const portraitSheenClass = $derived(
		theme.mode === 'light'
			? 'bg-[linear-gradient(180deg,rgba(18,21,27,0.04),transparent_40%)]'
			: 'bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_28%,transparent_72%,rgba(255,255,255,0.04))]'
	);
</script>

<section
	class="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pt-28 pb-16 sm:px-6 sm:pb-24 lg:pt-0 md:px-10 lg:px-14"
	aria-labelledby="hero-heading"
>
	<div
		class="pointer-events-none absolute inset-0 -z-40 bg-[radial-gradient(circle_at_top,rgba(118,248,207,0.12),transparent_42%),radial-gradient(circle_at_85%_18%,rgba(255,173,94,0.15),transparent_28%)] {theme.mode === 'light' ? 'opacity-85' : ''}"
		aria-hidden="true"
	></div>
	<div
		class="mesh-aurora pointer-events-none absolute -z-30 {theme.mode === 'light' ? 'opacity-65' : ''}"
		aria-hidden="true"
	></div>
	<div
		class="mesh-drift-secondary pointer-events-none absolute -z-20 {theme.mode === 'light' ? 'opacity-60' : ''}"
		aria-hidden="true"
	></div>
	<div
		class="grid-bg pointer-events-none absolute inset-0 -z-10 {theme.mode === 'light' ? 'opacity-[0.32]' : 'opacity-[0.48]'}"
		aria-hidden="true"
	></div>
	<div class="grain-overlay absolute inset-0 -z-[5] opacity-[0.08]" aria-hidden="true"></div>

	<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
		<ParticleCanvas />
	</div>

	<div class="relative mx-auto w-full max-w-[88rem]">
		<div class="-mb-10 hidden overflow-hidden lg:-mb-8 lg:block" aria-hidden="true">
			<div
				class="hero-marquee marquee-strip flex gap-16 font-mono text-[clamp(5.5rem,14vw,12rem)] font-semibold tracking-[0.16em] whitespace-nowrap text-transparent opacity-[0.085] lg:text-[clamp(6rem,16vw,14rem)]"
				style="--marquee-duration: 48s;"
			>
				{#each [...heroMarquee, ...heroMarquee] as item}
					<span class="px-8 uppercase">{item}</span>
				{/each}
			</div>
		</div>

		<MotionReveal>
			<div class="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-start lg:gap-10">
				<div
					class="glass-panel relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-9 sm:py-10 lg:min-h-0 lg:px-10 lg:py-11"
				>
					<div
						class="pointer-events-none absolute top-0 -left-14 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(118,248,207,0.18),transparent_70%)] blur-2xl"
						aria-hidden="true"
					></div>
					<div
						class="pointer-events-none absolute top-10 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,173,94,0.16),transparent_70%)] blur-3xl"
						aria-hidden="true"
					></div>

					<div class="relative">
						<div class="flex flex-wrap items-center gap-2.5 gap-y-2 sm:gap-3">
							<p data-reveal class={eyebrowClass}>
								{profile.eyebrow}
							</p>
							<span data-reveal class={availabilityBadgeClass}>
								Available for 2026 opportunities
							</span>
						</div>

						<h1
							id="hero-heading"
							data-reveal
							class="mt-6 max-w-[14ch] font-display text-[clamp(2.35rem,8vw,6.75rem)] leading-[0.95] font-semibold tracking-[-0.055em] sm:mt-8 sm:max-w-[12ch] lg:text-[clamp(3.25rem,5.2vw,6.75rem)]"
						>
							{profile.name}
						</h1>
						<p
							data-reveal
							class="mt-3 max-w-[22ch] text-[clamp(1.05rem,3.8vw,1.55rem)] font-medium tracking-[-0.025em] text-[color-mix(in_oklab,var(--text)_88%,transparent)] sm:mt-4 sm:max-w-[18ch]"
						>
							{profile.heroLabel}
						</p>
						<p
							data-reveal
							class="mt-6 max-w-2xl text-[0.94rem] leading-relaxed text-[color-mix(in_oklab,var(--text)_76%,transparent)] sm:mt-8 sm:text-[1.03rem] lg:text-[1.06rem]"
						>
							{profile.intro}
						</p>

						<div data-reveal class="mt-8 flex flex-wrap gap-2 sm:mt-9 sm:gap-2.5">
							<a
								href="#work"
								class="ease-cinematic focus-ring inline-flex min-h-[2.65rem] items-center justify-center gap-2 rounded-xl bg-[var(--text)] px-4 py-2 text-xs font-semibold text-[var(--surface-0)] [transition-duration:calc(260ms*var(--motion))] hover:-translate-y-0.5 hover:opacity-[0.94] sm:min-h-[2.85rem] sm:px-5 sm:text-sm lg:min-h-[3rem] lg:px-6"
							>
								View my work
							</a>
							<a
								href={profile.resumeHref}
								class="ease-cinematic focus-ring inline-flex min-h-[2.65rem] items-center justify-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--surface-2)] px-4 py-2 text-xs font-semibold text-[var(--text)] [transition-duration:calc(260ms*var(--motion))] hover:-translate-y-0.5 sm:min-h-[2.85rem] sm:px-5 sm:text-sm lg:min-h-[3rem] lg:px-6"
								download
							>
								<svg class="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="7 10 12 15 17 10" />
									<line x1="12" x2="12" y1="15" y2="3" />
								</svg>
								Download resume
							</a>
							<a
								href={`mailto:${profile.email}?subject=Frontend%20opportunity`}
								class="ease-cinematic focus-ring inline-flex min-h-[2.65rem] items-center justify-center gap-2 rounded-xl border border-[color-mix(in_oklab,var(--accent-a)_42%,var(--glass-border))] bg-[color-mix(in_oklab,var(--accent-a)_10%,var(--surface-2))] px-4 py-2 text-xs font-semibold text-[var(--text)] [transition-duration:calc(260ms*var(--motion))] hover:-translate-y-0.5 sm:min-h-[2.85rem] sm:px-5 sm:text-sm lg:min-h-[3rem] lg:px-6"
							>
								<svg class="h-3.5 w-3.5 shrink-0 opacity-90 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								Start a conversation
							</a>
						</div>

						<div data-reveal class="mt-8 flex flex-wrap gap-2 sm:mt-9 sm:gap-2.5">
							{#each socialLinks as link}
								<a
									href={link.href}
									target={link.external ? '_blank' : undefined}
									rel={link.external ? 'noreferrer noopener' : undefined}
									class="ease-cinematic focus-ring inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[0.68rem] font-medium tracking-wide [transition-duration:calc(220ms*var(--motion))] sm:px-3.5 sm:text-[0.72rem] {socialChipTone[link.platform]}"
								>
									<SocialIcon platform={link.platform} />
									{link.label}
								</a>
							{/each}
						</div>

						<div data-reveal class="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
							{#each heroMetrics as metric}
								<div
									class="rounded-[1.25rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4 {theme.mode === 'light'
										? 'shadow-sm'
										: 'shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]'}"
								>
									<p
										class="font-mono text-[0.62rem] tracking-[0.16em] text-[var(--text-muted)] uppercase sm:text-[0.66rem] sm:tracking-[0.18em]"
									>
										{metric.label}
									</p>
									<p class="mt-2 text-lg font-semibold tracking-[-0.03em] text-[var(--text)] sm:mt-3 sm:text-xl">
										{metric.value}
									</p>
									<p class="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
										{metric.detail}
									</p>
								</div>
							{/each}
						</div>
					</div>
				</div>

				<div class="relative lg:pt-1">
					<div class="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 lg:min-h-0 lg:p-6">
						<div
							class="pointer-events-none absolute inset-x-8 top-0 h-40 rounded-full bg-[radial-gradient(circle,rgba(145,169,255,0.22),transparent_72%)] blur-3xl {theme.mode === 'light' ? 'opacity-60' : ''}"
							aria-hidden="true"
						></div>

						<div class="relative flex h-full flex-col gap-4 sm:gap-5">
							<div
								class="flex items-center justify-between gap-3 rounded-[1.35rem] border border-[var(--glass-border)] bg-[var(--surface-1)] px-3.5 py-2.5 sm:rounded-[1.4rem] sm:px-4 sm:py-3"
							>
								<div class="min-w-0">
									<p
										class="font-mono text-[0.62rem] tracking-[0.14em] text-[var(--text-muted)] uppercase sm:text-[0.66rem] sm:tracking-[0.16em]"
									>
										Status
									</p>
									<p class="mt-1 text-xs font-medium text-[var(--text)] sm:text-sm">
										Open for product-focused frontend work
									</p>
								</div>
								<div
									class="flex shrink-0 items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--accent-a)_35%,var(--glass-border))] bg-[color-mix(in_oklab,var(--accent-a)_14%,var(--surface-2))] px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.12em] text-[var(--text)] uppercase sm:px-3 sm:text-[0.68rem] sm:tracking-[0.14em]"
								>
									<span class="h-2 w-2 rounded-full bg-[var(--accent-a)] sm:h-2.5 sm:w-2.5"></span>
									Live
								</div>
							</div>

							<div class="relative overflow-hidden rounded-[1.5rem] border border-[var(--glass-border)] p-2.5 sm:rounded-[1.65rem] sm:p-3 {portraitFrameClass}">
								<div class="pointer-events-none absolute inset-0 {portraitSheenClass}"></div>
								<img
									src={profile.profileImage}
									alt="Portrait of Ofeoritse"
									class="relative aspect-[4/5] w-full rounded-[1.15rem] object-cover object-center sm:rounded-[1.3rem]"
								/>
								<div class="relative mt-3 grid gap-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-3">
									<div
										class="rounded-[1.1rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-3.5 shadow-sm sm:rounded-[1.2rem] sm:p-4"
									>
										<p
											class="font-mono text-[0.62rem] tracking-[0.14em] text-[var(--text-muted)] uppercase sm:text-[0.66rem] sm:tracking-[0.16em]"
										>
											Base
										</p>
										<p class="mt-1.5 text-sm font-semibold text-[var(--text)] sm:mt-2 sm:text-base">
											{profile.location}
										</p>
									</div>
									<div
										class="rounded-[1.1rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-3.5 shadow-sm sm:rounded-[1.2rem] sm:p-4"
									>
										<p
											class="font-mono text-[0.62rem] tracking-[0.14em] text-[var(--text-muted)] uppercase sm:text-[0.66rem] sm:tracking-[0.16em]"
										>
											Primary stack
										</p>
										<p class="mt-1.5 text-sm font-semibold text-[var(--text)] sm:mt-2 sm:text-base">
											React, Next.js, TypeScript, Node.js
										</p>
									</div>
								</div>
							</div>

							<div class="grid gap-3 md:grid-cols-2 md:gap-4">
								<div class="rounded-[1.35rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4 sm:rounded-[1.5rem] sm:p-5">
									<p
										class="font-mono text-[0.64rem] tracking-[0.16em] text-[var(--text-muted)] uppercase sm:text-[0.68rem] sm:tracking-[0.18em]"
									>
										What I optimize
									</p>
									<ul
										class="mt-3 space-y-2.5 text-xs leading-relaxed text-[color-mix(in_oklab,var(--text)_78%,transparent)] sm:mt-4 sm:space-y-3 sm:text-sm"
									>
										<li>Interfaces that stay legible during live updates.</li>
										<li>Secure flows where payments and auth need precision.</li>
										<li>AI features that are useful, restrained, and production-aware.</li>
									</ul>
								</div>
								<div class="rounded-[1.35rem] border border-[var(--glass-border)] bg-[var(--surface-1)] p-4 sm:rounded-[1.5rem] sm:p-5">
									<p
										class="font-mono text-[0.64rem] tracking-[0.16em] text-[var(--text-muted)] uppercase sm:text-[0.68rem] sm:tracking-[0.18em]"
									>
										Interaction orbit
									</p>
									<div class="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-2.5">
										{#each orbitTags as tag}
											<span
												class="rounded-full border border-[var(--glass-border)] bg-[var(--surface-2)] px-2.5 py-1 font-mono text-[0.65rem] tracking-[0.12em] text-[var(--text-muted)] uppercase sm:px-3 sm:py-1.5 sm:text-[0.7rem] sm:tracking-[0.14em]"
											>
												{tag}
											</span>
										{/each}
									</div>
									<p class="mt-3 text-xs leading-relaxed text-[var(--text-muted)] sm:mt-4 sm:text-sm">
										Press <kbd class="rounded border border-[var(--glass-border)] bg-[var(--surface-2)] px-1 py-0.5 font-mono text-[0.65rem]">Ctrl</kbd>
										+
										<kbd class="rounded border border-[var(--glass-border)] bg-[var(--surface-2)] px-1 py-0.5 font-mono text-[0.65rem]">K</kbd>
										to move through the portfolio like a tool, not just a page.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					class="col-span-full mt-6 hidden flex-col items-center justify-center gap-2 pb-2 lg:mt-8 lg:flex"
					aria-hidden="true"
				>
					<span class="font-mono text-[0.62rem] tracking-[0.26em] text-[var(--text-muted)] uppercase sm:text-[0.66rem]">
						Scroll to inspect
					</span>
					<span
						class="h-12 w-px bg-gradient-to-b from-[var(--accent-a)] via-[var(--accent-c)] to-transparent sm:h-14"
					></span>
				</div>
			</div>
		</MotionReveal>
	</div>
</section>
