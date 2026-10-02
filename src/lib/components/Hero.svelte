<script lang="ts">
	import ButtonIcon from '$lib/components/ButtonIcon.svelte';
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import { profile } from '$lib/data/portfolio';
</script>

<section
	class="section-wrap section-pad relative scroll-mt-24 overflow-hidden pt-28 md:pt-32"
	aria-labelledby="hero-heading"
>
	<div class="dot-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>

	<MotionReveal>
		<div class="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
			<div class="max-w-2xl lg:max-w-none">
				<p data-reveal class="section-kicker">{profile.location} · Open to work</p>
				<h1
					id="hero-heading"
					data-reveal
					class="font-display mt-5 text-[clamp(2.5rem,7vw,4.25rem)] font-extrabold leading-[0.98] tracking-tight"
				>
					{profile.name}
				</h1>
				<p
					data-reveal
					class="font-display mt-5 text-xl font-extrabold uppercase tracking-wide text-[var(--teal-deep)] sm:text-2xl"
				>
					{profile.heroLabel}
				</p>
				<p
					data-reveal
					class="text-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-[1.05rem]"
				>
					{profile.intro}
				</p>

				<div data-reveal class="mt-8 flex flex-wrap gap-3">
					<a href="#work" class="btn-sticker btn-sun focus-ring">
						<ButtonIcon name="briefcase" />
						View work
					</a>
					<a href="#contact" class="btn-sticker btn-teal focus-ring">
						<ButtonIcon name="mail" />
						Contact
					</a>
					<a href={profile.resumeHref} class="btn-sticker btn-paper focus-ring" download>
						<ButtonIcon name="download" />
						Download resume
					</a>
				</div>
			</div>

			<div data-reveal class="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
				<div
					class="card-surface brutal-xl relative overflow-hidden p-3 sm:p-4"
					style="transform: rotate(1.5deg);"
				>
					<div
						class="aspect-[4/5] overflow-hidden rounded-xl border-[2.5px] border-[var(--ink)] bg-[var(--aqua)]"
					>
						<img
							src={profile.profileImage}
							alt="Portrait of {profile.shortName}"
							class="h-full w-full object-cover object-center"
						/>
					</div>
				</div>
			</div>
		</div>
	</MotionReveal>
</section>
