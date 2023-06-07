<template>
	<div class="position-relative">
		<header-top class=" fixed  z-[999]"/>
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