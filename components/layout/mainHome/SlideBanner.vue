<template>
	<div class="container overflow-x-hidden">
		<div class="max-w-[100vw]
		max-[1000px]:max-w-[100vw] mt-10 h-[400px] max-md:h-[200px]">
		<!-- Using the slider component -->
		<slider ref="slider" :options="options">
			<!-- slideritem wrapped package with the components you need -->
			<slideritem v-for="(item, index) in someList" :key="index" :style="item.style">{{ item.html }}
			</slideritem>
			<!-- Customizable loading -->
			<div slot="loading">loading...</div>
		</slider>
	</div>
	</div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
	data() {
		return {
			//data list [array]
			someList: [
				{
					style: {
						'background': 'url(https://i.imgur.com/QW6NUgp.jpg)',
						'background-size': 'contain',
						'margin-right': '20px',
						'border-radius': '10px'
					},
					class: 'card1',
				},
				{
					style: {
						'background': 'url(https://i.imgur.com/q1PPbW9.png)',
						'background-size': 'contain',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					style: {
						'background': 'url(https://i.imgur.com/dDcSB37.png)',
						'background-size': 'cover',
						'background-position': 'center',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					style: {
						'background': 'url(https://i.imgur.com/hYqh9CU.png)',
						'background-size': 'cover',
						'background-position': 'center',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					style: {
						'background': 'url(https://i.imgur.com/ced4eV6.jpg)',
						'background-size': 'cover',
						'background-position': 'center',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					style: {
						'background': 'url(https://i.imgur.com/iSgd2no.jpg)',
						'background-size': 'cover',
						'background-position': 'center',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					style: {
						'background': 'url(https://i.imgur.com/pUzz55D.jpg)',
						'background-size': 'cover',
						'background-position': 'center',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				}
			],
			//Slider configuration [obj]
			options: {
				currentPage: 0,
				loop:true,
				autoplay:1500,
				speed: 500
			}
		}
	},
	components: {
		slider,
		slideritem
	}
}
</script>
<style lang="scss" scoped>
.slider-item{
	width: 400px;
	height: 400px;
	@media screen and (max-width: 768px) {
		width: 200px;
		height: 200px;
	}
}

</style>
