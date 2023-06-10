<template>
	<div class="root w-full flex flex-col items-center relative">
		<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/60db7f22ede1551c05ba11bc_desk-rocket-new.svg"
				loading="lazy" width="360" height="463" alt="Awesomic Rocket Image"
				class="new-rocket desk absolute right-0 top-[10%] max-md:top-[8%] max-md:w-32">
		<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/60db7f22ede1551c05ba11bc_desk-rocket-new.svg"
		loading="lazy" width="360" height="463" alt="Awesomic Rocket Image"
		class="new-rocket desk absolute left-0 rotate-180 top-[50%]">
		<div class="max-w-[1240px] ">
			<hero-home class=" px-5 mt-20 max-md:mt-10"/>	
			<slide-banner class=" max-md:w-full mt-32 max-md:mt-5"/>
			<about-section class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<previous-camping class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<section-video class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<section-quote class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
		</div>
	</div>
</template>
<script>
import HeroHome from '~/components/layout/mainHome/HeroHome.vue';
import SlideBanner from '~/components/layout/mainHome/SlideBanner.vue';
import AboutSection from '~/components/layout/mainHome/AboutSection.vue';
import PreviousCamping from '~/components/layout/mainHome/PreviousCamping.vue';
import SectionVideo from '~/components/layout/mainHome/SectionVideo.vue';
import SectionQuote from '~/components/layout/mainHome/SectionQuote.vue';
export default {
	auth: false,
	components: {
		HeroHome,
		AboutSection,
		PreviousCamping,
		SectionVideo,
		SectionQuote,
		SlideBanner,
	},
}
</script>