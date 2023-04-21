<template>
	<div class="position-relative">
		<header-top />
		<nuxt id="body" />
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