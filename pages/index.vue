<template>
	<div class="root">
		<hero-home />	
	</div>
</template>
<script>
import HeroHome from '~/components/layout/mainHome/HeroHome.vue';
export default {
	auth: false,
	components: {
		HeroHome,
	},
}
</script>