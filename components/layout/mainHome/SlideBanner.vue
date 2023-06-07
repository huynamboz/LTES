<template>
	<div class="container overflow-x-hidden">
		<div class="max-w-[1840px]
		max-[1000px]:max-w-[100vw] mt-10 h-[300px]">
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
						'background': 'url(https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/343926191_224390966948640_6091353183993846880_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d9xgUT3lQwcAX8JGXs8&_nc_ht=scontent.fdad2-1.fna&oh=00_AfBf_gVHGBd69IdAgWYSlyL_xUSkibaeDJBkGVe91kl6iw&oe=647DBF87)',
						'width': '400px',
						'background-size': 'contain',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					style: {
						'background': 'url(https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/346477906_935418644368585_4359001365707116498_n.jpg?stp=dst-jpg_p843x403&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=Oz99bDrKVgoAX95-kto&_nc_ht=scontent.fdad1-1.fna&oh=00_AfD7y_OMiWpnlXYKBD6hJvAkOh5wuv03glc-q4Rexf0sZg&oe=647E5A7F)',
						'width': '400px',
						'background-size': 'contain',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				},
				{
					html: 'slide3',
					style: {
						'background': '#7baabe',
						'width': '20%',
						'margin-right': '20px',
						'border-radius': '10px'
					}
				}
			],
			//Slider configuration [obj]
			options: {
				currentPage: 0
			}
		}
	},
	components: {
		slider,
		slideritem
	}
}
</script>