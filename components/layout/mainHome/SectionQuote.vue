<template>
	<div class="flex w-full flex-col items-center">
		<p>Các thành viên</p>
		<p class="hight-light-title text-3xl font-bold">NÓI GÌ VỀ LTES</p>
		<div class="flex max-md:flex-col
		max-md:items-center
		flex-wrap justify-center
		gap-6 mt-16">
			<profile-card :name="'Nguyễn Văn A'" :detail="'Là một mùa trại cực provip'"/>
			<profile-card :name="'Nguyễn Văn A'" :detail="'Là một mùa trại cực provip'"/>
			<profile-card :name="'Nguyễn Văn A'" :detail="'Là một mùa trại cực provip'"/>
		</div>
	</div>
</template>
<script>
import ProfileCard from '../item/ProfileCard.vue';
export default {
	auth: false,
	components: {
		ProfileCard,
	},
}
</script>
<style lang="scss" scoped>
.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #20aef8, #49e9e9 38%, #88f0d5 75%, #daf8b9);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}
</style>