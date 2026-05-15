<script lang="ts">
	import { browser } from '$app/environment';
	import { animate } from 'motion';
	import { onDestroy, onMount } from 'svelte';

	let active = $state(false);
	let bar: HTMLDivElement | undefined = $state();

	let control: undefined | ReturnType<typeof animate>;

	onMount(() => {
		if (!browser) return () => {};

		const root = document.documentElement;
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (reducedMotion.matches) return () => {};

		active = true;
		root.style.setProperty('overflow', 'hidden');
		root.style.setProperty('overflow-y', 'hidden');
		root.dataset.boot = '1';

		const finish = () => {
			active = false;
			root.style.removeProperty('overflow');
			root.style.removeProperty('overflow-y');
			delete root.dataset.boot;
		};

		const start = () => {
			if (!bar) {
				finish();
				return;
			}

			control = animate(
				bar,
				{ transform: ['scaleX(0)', 'scaleX(1)'] },
				{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }
			);

			void control.finished
				.then(() => new Promise((resolve) => setTimeout(resolve, 180)))
				.then(finish)
				.catch(finish);
		};

		window.requestAnimationFrame(() => window.requestAnimationFrame(start));

		return () => {
			control?.cancel?.();
			root.style.removeProperty('overflow');
			root.style.removeProperty('overflow-y');
			delete root.dataset.boot;
		};
	});

	onDestroy(() => control?.cancel?.());
</script>

{#if active}
	<div class="fixed inset-0 z-[100] bg-[var(--surface-0)]" aria-busy="true" aria-live="polite">
		<div class="grain-overlay absolute inset-0 opacity-[0.12]" aria-hidden="true"></div>
		<div class="relative flex h-full flex-col justify-center px-8">
			<div class="mx-auto w-full max-w-md">
				<p class="font-mono text-[0.7rem] tracking-[0.4em] text-[var(--text-muted)] uppercase">
					Ofeoritse OS
				</p>
				<h2 class="mt-8 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
					Loading interactive systems
				</h2>
				<p class="mt-5 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
					The boot sequence is brief and motion-safe. It gives the experience a clean handoff
					without turning the first second into friction.
				</p>
				<div class="relative mt-10 h-[2px] overflow-hidden rounded-full bg-[var(--glass-border)]">
					<div
						bind:this={bar}
						class="absolute inset-y-0 left-0 w-full origin-left scale-x-0 rounded-full bg-[linear-gradient(90deg,var(--accent-a)_0%,var(--accent-c)_48%,var(--accent-b)_100%)]"
						aria-hidden="true"
					></div>
				</div>
			</div>
		</div>
	</div>
{/if}
