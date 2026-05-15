<script lang="ts">
	import ContactSection from '$lib/components/ContactSection.svelte';
	import ControlRoom from '$lib/components/ControlRoom.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
</script>

<svelte:head>
	<title>Amiteye Favour Ofeoritse | Frontend Developer and Full-Stack Engineer</title>
	<meta
		name="description"
		content="Interactive SvelteKit portfolio for Ofeoritse: realtime products, secure systems, AI tooling, cinematic motion, and production-grade frontend engineering."
	/>
</svelte:head>

<main id="main">
	<Hero />
	<ControlRoom />
	<ProjectsSection />
	<SkillsSection />
	<ContactSection />
	<SiteFooter />
</main>
