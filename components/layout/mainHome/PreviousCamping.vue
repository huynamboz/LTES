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
				<a href="https://www.facebook.com/traihekinang/photos/a.782481268588271/782481231921608">
					<detail-card class="card" :img="'https://i.imgur.com/LTohiqf.png'" :year="'2017'" :title="'UP 1'" :detail="'Là một mùa trại cực provip'"/>
				</a>
				<detail-card class="card" :title="'UP 2'" :img="'https://i.imgur.com/Mz94N8L.jpg'" :detail="'Là một mùa trại cực provip'"/>
				<detail-card class="card" :title="'THE OUTCASTS ACADEMY'" :className="'hight-light-title'" :year="'2023'" :img="'https://i.imgur.com/Kgk6U5B.jpg'" :detail="'Là một mùa trại cực provip'"/>
			</div>
		</div>
		<div class="flex flex-col 
		max-md:w-full 
		gap-20 w-[40%]">
			<detail-card class="card" :img="'https://i.imgur.com/SUmpVFW.jpg'" :title="'Trại UP 1'" :detail="'Là một mùa trại cực provip'"/>
			<detail-card class="card" :title="'UP 4'" :year="'2020'" :img="'https://i.imgur.com/Y6jua21.jpg'" :detail="'Là một mùa trại cực provip'"/>
			<detail-card class="card" :title="'WARRIORS WANDERLUST'" :year="'2022'" :img="'https://i.imgur.com/hYqh9CU.png'" :detail="'Là một mùa trại cực provip'"/>
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
}
</style>
