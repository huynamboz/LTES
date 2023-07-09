<template>
	<section class="pt-20 relative w-full">
		<div class="root flex relative flex-col items-center justify-center">
			<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/611237e7f56b2b6bf25911fd_home-stars-1-new.svg"
						loading="lazy" width="1440" height="954" alt="" class="absolute -top-10 rotate-180 z-[-1]">
			<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/611237e7f56b2b6bf25911fd_home-stars-1-new.svg"
						loading="lazy" width="1440" height="954" alt="" class="absolute top-0 z-[-1]">
			<img src="~/assets/img/planet-red.png" id="image2" class=" 
			max-md:-top-10
			h-[40px] w-[40px] absolute -top-5 right-[10%]" alt="">
			<img src="~/assets/img/planet-brown.png" id="image"  class=" h-[60px] w-[60px] absolute top-[60%] right-[20%]" alt="">
			<img src="~/assets/img/planet-yellow@3x.png" class="
			max-md:-top-[15%]
			absolute top-[3%] left-[10%]" alt="">
			<div class="stars-bg_wrapper absolute top-0 left-0 overflow-hidden w-full flex justify-center">
				<div class="relative w-full">
					
				</div>
			</div>
			<div class="flex relative z-50 flex-col items-center gap-7">
				<p class=" title max-md:text-[45px] text-[52px] font-bold text-center">
					<span class="relative 
					hight-light-title">LTES - LET'S FLY HIGH</span> <br>
					IS COMING IN JULY <span class="relative">28
					<span class="absolute top-0 text-sm">th</span>
					</span>
					<span>
					</span>
				</p>
				<p>Với sự mệnh tạo ra một trại hè kỹ năng dành cho các bạn trẻ trên toàn địa bàn tỉnh Quảng Nam</p>
				<img width="52" height="72" src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/63a04b240b11587edcd5724c_tab-block_arrow.svg" 
				loading="lazy" alt="" class="absolute left-[20%] top-[30%]">
				<div class=" 
				max-md:flex-col 
				max-md:gap-3
				relative flex mt-[50px] gap-12">
					<div class="relative h-[70px] w-[250px]">
						<div class="absolute z-10 rounded-[4px] bottom-0 left-0 border-[2px] border-white h-[90%] w-[95%]"></div>
						<div  @click="$router.push('/result-apply')" class="btn-primary right-0 top-0 z-20 absolute h-[90%] w-[95%]">
							<p class=" flex gap-2 text-white font-bold text-lg">
								Kết quả ứng tuyển
							<img src="~/assets/icon/rocket-mini.png" 
							class="w-[30px] h-[30px]"
							alt="">
							</p>
						</div>
					</div>
					<a href="https://www.facebook.com/traihekinang" class=" bg-white 
					text-[#222236]
					hover:-translate-y-3 
					font-semibold 
					transition-all
					duration-300
					cursor-pointer mt-2 border-[2px] w-[250px] justify-center h-[60px] rounded-md flex items-center">
						Truy cập Page 
					</a>
				</div>
				<div class="photo-hero-container flex">
					<img src="~/assets/img/hero-bg.png" 
					class=" max-md:w-full top-[0%] left-[10%]" alt="">
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import SlideBanner from './SlideBanner.vue';
export default {
	data(){
		return {
			positions: [
			{ top: '10%', left: '20%' },
			{ top: '20%', left: '40%' },
			{ top: '30%', left: '50%' },
			{ top: '40%', left: '80%' },
			{ top: '50%', left: '85%' }
			],
			currentPosition: 0,
			currentPosition2: 0
		}
	},
	mounted(){
		setTimeout(() => {
			this.moveIcon();
		}, 1000);
		setInterval(this.moveIcon, 10000);
	},
	beforeDestroy(){
		clearInterval(this.moveIcon);
	},
	methods:{
		moveIcon() {
		try {
			let icon = document.getElementById('image');

			icon.style.top = this.positions[this.currentPosition].top;
			icon.style.left = this.positions[this.currentPosition].left;
			this.currentPosition = (this.currentPosition + 1) % this.positions.length;
		} catch (error) {
			console.log(error);
		}
		},
		goToSildeSection(){
			try {
				let slideSection = document.getElementById('slide-banner');
				slideSection.scrollIntoView({behavior: "smooth", block: "center"});
			} catch (error) {
				console.log(error);
			}
		}
	}
}
</script>
<style lang="scss" scoped>
#image, #image2{
	transition: 10s ease-in-out;
}

.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #f79393, #fee4a5 38%, #9ae8b0 75%, #5ba5d0);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}
.btn-primary {
	text-align: center;
	cursor: pointer;
	background-color: #ec7a7a;
	background-image: linear-gradient(122deg, #fee5a5, #fea5a5 62%, #f69393 100%, #fff);
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	padding: 20px 0px;
	text-decoration: none;
	/* transition: opacity .3s; */
	display: flex;
	transform: translate(3px, -7px);
	transition: all .3s;
	&:hover {
		transform: translate(-3px,0);
	}
}

.title {
	letter-spacing: 5px;
}
</style>