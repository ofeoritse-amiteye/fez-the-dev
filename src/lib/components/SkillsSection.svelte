<script lang="ts">
	import MotionReveal from '$lib/components/MotionReveal.svelte';
	import { skillGroups } from '$lib/data/portfolio';

	const cardTones = ['bg-[var(--paper)]', 'bg-[var(--aqua)]', 'bg-[var(--sun)]', 'bg-[var(--paper)]', 'bg-[var(--cream)]'];
</script>

<section
	id="skills"
	class="scroll-mt-24 bg-[var(--section-alt)]"
	aria-labelledby="skills-heading"
>
	<div class="section-wrap section-pad">
		<MotionReveal>
			<h2 id="skills-heading" data-reveal class="section-title">Skills</h2>
			<p data-reveal class="text-muted mt-4 max-w-2xl text-base leading-relaxed">
				From the resume stack: React / Next.js product UI, Node and Django backends, Paystack and auth,
				realtime (Pusher, WebSockets, SSE), plus Cloudflare, Sentry, and PostHog in production.
			</p>

			<div class="mt-10 grid gap-5 sm:grid-cols-2">
				{#each skillGroups as group, i}
					<div data-reveal class="card-surface p-5 sm:p-6 {cardTones[i % cardTones.length]}">
						<h3 class="font-display text-sm font-extrabold tracking-widest uppercase">
							{group.title}
						</h3>
						<div class="mt-4 flex flex-wrap gap-2">
							{#each group.items as item}
								<span class="chip">{item}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</MotionReveal>
	</div>
</section>
