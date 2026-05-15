<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type Props = { children: Snippet };
</script>

<script lang="ts">
	import { animate } from 'motion';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { motionDuration } from '$lib/utils/motion';

	let { children }: Props = $props();

	let root: HTMLElement | undefined = $state();

	function revealNodes() {
		if (!root) return;
		const kids = [...root.querySelectorAll<HTMLElement>('[data-reveal]')];
		if (!kids.length) return;

		const reduced = browser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const zero = motionDuration(420) === 0 || reduced;
		if (zero) {
			for (const node of kids) {
				node.style.opacity = '';
				node.style.transform = '';
			}
			return;
		}

		for (const node of kids) {
			node.style.opacity = '0';
			node.style.transform = 'translateY(22px)';
		}

		const sec = motionDuration(540) / 1000;
		kids.forEach((node, i) => {
			animate(
				node,
				{ opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] },
				{
					duration: sec,
					delay: i * 0.068,
					ease: [0.18, 1, 0.32, 1]
				}
			);
		});
	}

	onMount(() => {
		if (!browser || !root) return;

		let ran = false;
		const kick = () => {
			if (ran) return;
			ran = true;
			observer.disconnect();
			revealNodes();
		};

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) kick();
			},
			{ threshold: 0.13, rootMargin: '0px 0px -8% 0px' }
		);
		observer.observe(root);

		queueMicrotask(() => {
			if (!root) return;
			const rect = root.getBoundingClientRect();
			if (rect.top < window.innerHeight * 0.92 && rect.bottom > 24) kick();
		});

		return () => observer.disconnect();
	});
</script>

<div bind:this={root} class="reveal-root w-full">
	{@render children()}
</div>
