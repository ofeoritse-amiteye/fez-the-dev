<script lang="ts">
	import { profile } from '$lib/data/portfolio';
</script>

<footer class="border-t-[2.5px] border-[var(--ink)] bg-[var(--paper)] py-8">
	<div class="section-wrap">
		<p class="text-sm font-semibold text-[color-mix(in_srgb,var(--ink)_70%,transparent)]">
			© {new Date().getFullYear()} {profile.name}
		</p>
	</div>
</footer>
