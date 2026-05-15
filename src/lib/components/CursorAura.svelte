<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let enabled = $state(false);

	let tx = $state(0);
	let ty = $state(0);
	let lx = $state(0);
	let ly = $state(0);

	onMount(() => {
		if (!browser) return;

		const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
		if (motion.matches || !fine.matches) return;

		enabled = true;

		tx = window.innerWidth * 0.5;
		ty = window.innerHeight * 0.45;
		lx = tx;
		ly = ty;

		const move = (e: MouseEvent) => {
			tx = e.clientX;
			ty = e.clientY;
		};

		let raf = 0;
		const loop = () => {
			const k = 0.13;
			lx += (tx - lx) * k;
			ly += (ty - ly) * k;
			raf = window.requestAnimationFrame(loop);
		};
		window.addEventListener('mousemove', move, { passive: true });
		raf = window.requestAnimationFrame(loop);

		return () => {
			window.removeEventListener('mousemove', move);
			window.cancelAnimationFrame(raf);
		};
	});
</script>

{#if enabled}
	<div class="pointer-events-none fixed inset-0 z-[30]" aria-hidden="true">
		<div
			class="ease-cinematic absolute h-[clamp(340px,55vw,640px)] w-[clamp(340px,55vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[92px]"
			style="left:{lx}px;top:{ly}px;background:radial-gradient(circle,rgba(102,239,247,0.26) 0%,rgba(157,139,251,0.18) 36%,transparent 68%);opacity:0.32;mix-blend-mode:screen;"
		></div>
		<div
			class="ease-cinematic absolute h-[min(82vw,900px)] w-[min(82vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
			style="left:{lx + 220}px;top:{ly -
				120}px;background:radial-gradient(circle,rgba(255,209,154,0.16),transparent 60%);opacity:0.22;mix-blend-mode:screen;"
		></div>
	</div>
{/if}
