<script lang="ts">
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
</script>

<svelte:head>
	<title>Amiteye Favour Ofeoritse | Frontend & Full-Stack Engineer</title>
	<meta
		name="description"
		content="Portfolio of Ofeoritse, product-focused frontend and full-stack engineering across marketplaces, realtime systems, and fintech flows."
	/>
</svelte:head>

<Hero />
<AboutSection />
<ProjectsSection />
<SkillsSection />
<ContactSection />
<SiteFooter />
