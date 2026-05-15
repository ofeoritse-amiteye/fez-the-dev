<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	let canvas: HTMLCanvasElement | undefined = $state();

	type P = {
		x: number;
		y: number;
		vx: number;
		vy: number;
		r: number;
		a: number;
		h: number;
	};

	let frame = 0;
	const particles: P[] = [];
	let w = 0;
	let h = 0;
	let observer: ResizeObserver | undefined;
	let running = false;

	function hsl(h: number, s: number, l: number, alpha: number) {
		return `hsla(${h},${s}%,${l}%,${alpha})`;
	}

	function initParticles() {
		particles.length = 0;
		if (w === 0 || h === 0) return;
		const count = Math.min(56, Math.floor((w * h) / 19800));
		for (let i = 0; i < count; i++) {
			particles.push({
				x: Math.random() * w,
				y: Math.random() * h,
				vx: (Math.random() - 0.5) * 0.26,
				vy: (Math.random() - 0.5) * 0.26,
				r: Math.random() * 1.45 + 0.35,
				a: Math.random() * 0.2 + 0.085,
				h: Math.random() * 36 + 175
			});
		}
	}

	function linkThreshold() {
		return Math.min(112, Math.max(72, Math.min(w, h) * 0.07));
	}

	function draw(ctx: CanvasRenderingContext2D, light: boolean) {
		ctx.clearRect(0, 0, w, h);

		for (const p of particles) {
			p.x += p.vx;
			p.y += p.vy;
			if (p.x < 0) p.x = w;
			if (p.x > w) p.x = 0;
			if (p.y < 0) p.y = h;
			if (p.y > h) p.y = 0;
		}

		const md = linkThreshold();
		const md2 = md * md;
		const neutral = light ? 'rgba(10,14,45,' : 'rgba(245,246,255,';
		const n = particles.length;

		for (let i = 0; i < n; i++) {
			for (let j = i + 1; j < n; j++) {
				const a = particles[i];
				const b = particles[j];
				const dx = a.x - b.x;
				const dy = a.y - b.y;
				const dd = dx * dx + dy * dy;
				if (dd >= md2) continue;
				const tension = (md2 - dd) / md2;
				ctx.beginPath();
				ctx.strokeStyle = hsl(
					(a.h + b.h) * 0.5 + (light ? 24 : -8),
					light ? 32 : 64,
					light ? 32 : 66,
					0.068 * tension
				);
				ctx.lineWidth = 0.9;
				ctx.moveTo(a.x, a.y);
				ctx.lineTo(b.x, b.y);
				ctx.stroke();
			}
		}

		for (const p of particles) {
			ctx.beginPath();
			ctx.fillStyle = hsl(
				p.h + (light ? 12 : -2),
				light ? 54 : 70,
				light ? 32 : 70,
				Math.min(0.65, p.a + (light ? 0.06 : 0.04))
			);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();

			ctx.beginPath();
			ctx.fillStyle =
				neutral + Math.min(0.6, light ? (p.a + 0.05) * 0.92 : (p.a + 0.04) * 0.92) + ')';
			ctx.arc(p.x, p.y, p.r * 0.4, 0, Math.PI * 2);
			ctx.fill();
		}
	}

	function loop() {
		if (!canvas || !running) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const light =
			browser &&
			typeof document !== 'undefined' &&
			document.documentElement.dataset.theme === 'light';
		draw(ctx, light);
		frame = requestAnimationFrame(loop);
	}

	onMount(() => {
		if (!canvas) return;
		if (!browser || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const resize = () => {
			if (!canvas) return;
			const ctx = canvas.getContext('2d');
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = Math.floor(w * dpr);
			canvas.height = Math.floor(h * dpr);
			if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			initParticles();
		};

		observer = new ResizeObserver(resize);
		observer.observe(canvas);
		resize();
		running = true;
		frame = requestAnimationFrame(loop);
	});

	onDestroy(() => {
		running = false;
		if (!browser) return;
		cancelAnimationFrame(frame);
		observer?.disconnect();
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none absolute inset-0 h-full w-full opacity-[0.76]"
	aria-hidden="true"
></canvas>
