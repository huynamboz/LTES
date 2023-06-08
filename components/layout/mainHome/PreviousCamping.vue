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
					<detail-card class="card-previous card-previous-camp-left" :img="'https://i.imgur.com/LTohiqf.png'" :year="'2017'" :title="'UP 1'" :detail="'Là một mùa trại cực provip'"/>
				</a>
				<detail-card class="card-previous card-previous-camp-left" :title="'UP 2'" :img="'https://i.imgur.com/Mz94N8L.jpg'" :detail="'Là một mùa trại cực provip'"/>
				<detail-card class="card-previous card-previous-camp-left" :title="'WARRIORS WANDERLUST'" :year="'2022'" :img="'https://i.imgur.com/hYqh9CU.png'" :detail="'Là một mùa trại cực provip'"/>
			</div>
		</div>
		<div class="flex flex-col 
		max-md:w-full 
		gap-20 w-[40%]">
			<detail-card class="card-previous card-previous-camp-right" :img="'https://i.imgur.com/SUmpVFW.jpg'" :title="'Trại UP 1'" :detail="'Là một mùa trại cực provip'"/>
			<detail-card class="card-previous card-previous-camp-right" :title="'UP 4'" :year="'2020'" :img="'https://i.imgur.com/Y6jua21.jpg'" :detail="'Là một mùa trại cực provip'"/>
			<detail-card class="card-previous card-previous-camp-right" :title="'THE OUTCASTS ACADEMY'" :className="'hight-light-title'" :year="'2023'" :img="'https://i.imgur.com/Kgk6U5B.jpg'" :detail="'Là một mùa trại cực provip'"/>
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
	mounted() {
		let slideHeadPhone = new IntersectionObserver((entries, observer) => { 
		// entries : Danh sách các đối tượng chúng ta theo dỏi
			entries.forEach(entry => {
			// Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
			if(entry.isIntersecting){
				if (entry.target.classList.contains("card-previous-camp-left")) {
					entry.target.classList.add("active-left");
				} else if (entry.target.classList.contains("card-previous-camp-right")) {
					entry.target.classList.add("active-right");
				}
			} 
		});
	}, {rootMargin: "0px 0px -200px 0px"});
	// nexttick
	this.$nextTick(() => {
		let listCard = document.querySelectorAll(".card-previous");
		console.log(listCard)
		listCard.forEach(card => {
			slideHeadPhone.observe(card);
		});
	});
	},
	methods: {
		animateCard(){
			console.log('ok')
		}
	},
}
</script>
<style lang="scss" scoped>

.card-previous-camp-left {
	opacity: 0;
}
.card-previous-camp-right {
	opacity: 0;
}
.card-previous-camp{
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover{
		box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
		transform: translateY(-10px);
		transition: all 0.3s ease-in-out;
	}
}
@keyframes slideInFromLeft {
	0% {
		transform: translateX(-50px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slideInFromRight {
	0% {
		transform: translateX(50px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
.active-right{
	animation: slideInFromRight 1s ease-in-out forwards;
}
.active-left{
	animation: slideInFromLeft 1s ease-in-out forwards;
}
</style>
