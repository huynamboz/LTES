<template>
	<div class="root w-full flex flex-col items-center relative">
		<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/60db7f22ede1551c05ba11bc_desk-rocket-new.svg"
				loading="lazy" width="360" height="463" alt="Awesomic Rocket Image"
				class="new-rocket desk absolute right-0 top-[10%] max-md:top-[8%] max-md:w-32">
		<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/60db7f22ede1551c05ba11bc_desk-rocket-new.svg"
		loading="lazy" width="200" height="420" alt="Awesomic Rocket Image"
		class="new-rocket desk absolute left-0 rotate-180 top-[40%]">
		<div class="max-w-[1240px]  pb-10"> 
			<hero-home class=" px-5 mt-20 max-md:mt-10"/>	
			<slide-banner id="slide-banner" class=" max-md:w-full mt-32 max-md:mt-5"/>
			<about-section id="about-section" class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<previous-camping class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<section-video class=" px-5 relative z-10 max-md:w-full mt-32 max-md:mt-10"/>
			<section-quote class="relative px-5 max-md:w-full py-32 max-md:py10"/>
			<benefit-section class=" px-5 max-md:w-full"/>
			<time-line id="time-line" class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<chat-page class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<final-section class=" px-5 max-md:w-full mt-32 max-md:mt-10"/>
			<bottom-footer class=" px-5 max-md:w-full mt-3 max-md:mt-10"/>
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
import BenefitSection from '~/components/layout/mainHome/BenefitSection.vue';
import FinalSection from '~/components/layout/mainHome/FinalSection.vue';
// import ChatPage from '~/components/chat/ChatPage.vue';
import BottomFooter from '~/components/layout/footer/BottomFooter.vue';
import TimeLine from '../components/layout/mainHome/TimeLine.vue';
export default {
	auth: false,
	components: {
		HeroHome,
		AboutSection,
		PreviousCamping,
		SectionVideo,
		SectionQuote,
		SlideBanner,
		BenefitSection,
		FinalSection,
		ChatPage,
		BottomFooter,
		TimeLine
	},
	data() {
		return {
			// data
		}
	},
	
}
</script>