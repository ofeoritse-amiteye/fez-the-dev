<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { categoryLabel, type Project } from '$lib/data/projects';
	import { externalAnchorProps } from '$lib/utils/external-link';

	let {
		project,
		index = 0,
		active = false,
		onActivate = () => {}
	}: {
		project: Project;
		index?: number;
		active?: boolean;
		onActivate?: (slug: string) => void;
	} = $props();

	let duration = $state(340);
	let card: HTMLElement | undefined = $state();

	let rotateX = $state(0);
	let rotateY = $state(0);
	let rotateXTarget = 0;
	let rotateYTarget = 0;
	let tiltFrame = 0;

	function tick() {
		const easing = 0.22;
		rotateX += (rotateXTarget - rotateX) * easing;
		rotateY += (rotateYTarget - rotateY) * easing;

		const needsMoreFrames =
			Math.abs(rotateXTarget - rotateX) > 0.04 ||
			Math.abs(rotateYTarget - rotateY) > 0.04 ||
			Math.abs(rotateX) > 0.04 ||
			Math.abs(rotateY) > 0.04;

		if (needsMoreFrames) tiltFrame = window.requestAnimationFrame(tick);
		else tiltFrame = 0;
	}

	function pulse() {
		if (!tiltFrame) tiltFrame = window.requestAnimationFrame(tick);
	}

	function attachTilt(node: HTMLElement) {
		const move = (event: MouseEvent) => {
			const rect = node.getBoundingClientRect();
			const px = (event.clientX - rect.left) / rect.width - 0.5;
			const py = (event.clientY - rect.top) / rect.height - 0.5;
			rotateYTarget = Math.max(Math.min(px * 8, 9), -9);
			rotateXTarget = Math.max(Math.min(-py * 7, 8), -8);
			pulse();
		};

		const leave = () => {
			rotateXTarget = 0;
			rotateYTarget = 0;
			pulse();
		};

		node.addEventListener('mousemove', move, { passive: true });
		node.addEventListener('mouseleave', leave, { passive: true });

		return () => {
			node.removeEventListener('mousemove', move);
			node.removeEventListener('mouseleave', leave);
			window.cancelAnimationFrame(tiltFrame);
			tiltFrame = 0;
			rotateX = 0;
			rotateY = 0;
			rotateXTarget = 0;
			rotateYTarget = 0;
		};
	}

	onMount(() => {
		if (!browser) return () => {};
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			duration = 0;
			return () => {};
		}

		const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
		if (!finePointer.matches || !card) return () => {};

		return attachTilt(card);
	});
</script>

<article
	bind:this={card}
	class="group/card ease-cinematic relative [transition-duration:calc(420ms*var(--motion))]"
	transition:fly={{
		y: 24,
		duration,
		delay: index * 38,
		opacity: 0,
		easing: (value) => 1 - Math.pow(1 - value, 3)
	}}
	style="perspective: 1200px;"
	onmouseenter={() => onActivate(project.slug)}
	onfocusin={() => onActivate(project.slug)}
>
	<div
		class="ease-cinematic rounded-[1.8rem] border p-[1px] [transition-duration:calc(420ms*var(--motion))] {active
			? 'border-[color-mix(in_oklab,var(--accent-a)_36%,transparent)] bg-[linear-gradient(155deg,color-mix(in_oklab,var(--accent-a)_26%,transparent),color-mix(in_oklab,var(--accent-c)_18%,transparent))] shadow-[0_34px_90px_-52px_color-mix(in_oklab,var(--accent-a)_46%,transparent)]'
			: 'border-transparent bg-transparent'}"
		style={`transform: rotateX(${rotateX}deg) rotateY(${rotateY}deg)`}
	>
		<div
			class="glass-panel overflow-hidden rounded-[1.75rem] bg-[color-mix(in_oklab,var(--surface-1)_92%,transparent)]"
		>
			<div
				class="relative overflow-hidden border-b border-[var(--glass-border)] px-5 py-5 sm:px-6"
				style={`background:
					radial-gradient(circle at 12% 18%, color-mix(in oklab, ${project.visual.glow} 34%, transparent), transparent 32%),
					linear-gradient(145deg, ${project.visual.from}, ${project.visual.to});`}
			>
				<div
					class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_55%,rgba(0,0,0,0.08))]"
				></div>
				<div class="relative flex items-start justify-between gap-4">
					<div>
						<p class="font-mono text-[0.66rem] tracking-[0.18em] text-white/72 uppercase">
							{project.year} - {project.status}
						</p>
						<h3
							class="mt-3 font-display text-[1.45rem] font-semibold tracking-[-0.04em] text-white sm:text-[1.8rem]"
						>
							{project.title}
						</h3>
					</div>
					<span
						class="rounded-full border border-white/18 bg-black/16 px-3 py-1.5 font-mono text-[0.66rem] tracking-[0.14em] text-white/78 uppercase"
					>
						{categoryLabel(project.category)}
					</span>
				</div>
				<p
					class="relative mt-4 max-w-[34rem] text-sm leading-relaxed text-white/82 sm:text-[0.95rem]"
				>
					{project.tagline}
				</p>

				<div class="relative mt-5 grid gap-3 sm:grid-cols-3">
					{#each project.metrics as metric}
						<div class="rounded-[1rem] border border-white/12 bg-black/18 px-3 py-3">
							<p class="font-mono text-[0.62rem] tracking-[0.16em] text-white/60 uppercase">
								{metric.label}
							</p>
							<p class="mt-2 text-sm font-medium text-white">{metric.value}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="px-5 py-5 sm:px-6 sm:py-6">
				<div class="flex flex-wrap items-center gap-2">
					{#each project.technologies.slice(0, 5) as technology}
						<span
							class="rounded-full border border-[var(--glass-border)] bg-[var(--surface-0)] px-3 py-1.5 font-mono text-[0.68rem] text-[var(--text-muted)]"
						>
							{technology}
						</span>
					{/each}
				</div>

				<p
					class="mt-5 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_74%,transparent)]"
				>
					{project.description}
				</p>

				<div
					class="mt-5 rounded-[1.2rem] border border-[var(--glass-border)] bg-[color-mix(in_oklab,var(--surface-0)_72%,transparent)] px-4 py-3"
				>
					<p class="font-mono text-[0.66rem] tracking-[0.18em] text-[var(--text-muted)] uppercase">
						Build note
					</p>
					<p
						class="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--text)_78%,transparent)]"
					>
						{project.accentNote}
					</p>
				</div>

				<div class="mt-6 flex flex-wrap gap-3">
					<a
						href={`/projects/${project.slug}`}
						class="ease-cinematic focus-ring inline-flex items-center justify-center rounded-xl bg-[var(--text)] px-4 py-2.5 text-sm font-semibold text-[var(--surface-0)] [transition-duration:calc(220ms*var(--motion))] hover:-translate-y-0.5"
					>
						Open case study
					</a>
				</div>
			</div>
		</div>
	</div>
</article>
