<script lang="ts">
	import { profile } from '$lib/data/portfolio';
</script>

<footer class="border-t border-[var(--glass-border)] px-4 py-12 sm:px-6 md:px-10 lg:px-14">
	<div
		class="mx-auto flex max-w-[88rem] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
	>
		<div>
			<p class="font-display text-xl font-semibold tracking-[-0.03em]">{profile.name}</p>
			<p class="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-muted)]">
				Built with SvelteKit as a portfolio experience: cinematic layout, command-driven navigation,
				real project data, and a stronger point of view about interaction design.
			</p>
		</div>

		<div class="flex flex-wrap gap-3">
			<a
				href={profile.githubUrl}
				target="_blank"
				rel="noreferrer noopener"
				class="focus-ring rounded-full border border-[var(--glass-border)] px-4 py-2 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
			>
				GitHub
			</a>
			<a
				href={`mailto:${profile.email}`}
				class="focus-ring rounded-full border border-[var(--glass-border)] px-4 py-2 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
			>
				Email
			</a>
			<a
				href={profile.resumeHref}
				class="focus-ring rounded-full border border-[var(--glass-border)] px-4 py-2 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
				download
			>
				Resume
			</a>
		</div>
	</div>
</footer>
