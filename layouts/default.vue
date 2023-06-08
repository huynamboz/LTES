<template>
	<div class="position-relative relative">
		<div class="bg"></div>
		<header-top />
		<nuxt id="body" class=" pt-5"/>
	</div>
</template>
<script>
import headerTop from '~/components/layout/header/header.vue';
export default {
	auth: false,
	components: {
		headerTop,
	},
}
</script>
<style lang="scss" scoped>
.bg{
    background-image: url(https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6438c3059d443cd7a78762eb_stars-bg.png);
    background-position: 50%;
    background-size: 1090px;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden;
}
</style>
