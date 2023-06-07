<template>
	<div class="
	w-full 
	flex 
	justify-center 
	gap-10 pt-10
	max-md:flex-col ">
		<div class="
		max-md:w-full 
		w-[40%] flex flex-col">
			<p>CÙNG NHÌN LẠI</p>
			<p class=" flex gap-4 text-2xl font-semibold max-md:mb-2 mb-5">CÁC MÙA TRẠI TRƯỚC 
				<img src="~/assets/icon/rocket-mini.png" class=" w-[30px] h-[30px]" alt="">
			</p>
			<div class="flex flex-col gap-20 mt-10">
				<detail-card class="card" :title="'Trại UP 1'" :detail="'Là một mùa trại cực provip'"/>
				<detail-card class="card" :title="'Trại UP 1'" :detail="'Là một mùa trại cực provip'"/>
			</div>
		</div>
		<div class="flex flex-col 
		max-md:w-full 
		gap-20 w-[40%]">
			<detail-card class="card" :title="'Trại UP 1'" :detail="'Là một mùa trại cực provip'"/>
			<detail-card class="card" :title="'Trại UP 1'" :detail="'Là một mùa trại cực provip'"/>
		</div>
	</div>
</template>
<script>
import DetailCard from '~/components/layout/item/DetailCard.vue';
export default {
	auth: false,
	components: {
		DetailCard,
	},
}
</script>
<style lang="scss" scoped>
.card{
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover{
		box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
		transform: translateY(-10px);
		transition: all 0.3s ease-in-out;
	}
}</style>
