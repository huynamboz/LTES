<template>
	<div class="w-full flex flex-col items-center">
		<!-- <p class=" text-3xl font-bold">Khoảnh khắc của LTES</p> -->
		<div class="w-full flex justify-center mt-10">
			
			<img class=" rounded-lg" @click="showVideo = true"
				src="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png.webp"
				alt="">
		</div>
		<div class="video-container fixed top-0 left-0 flex justify-center items-center w-[100vw] h-[100vh] z-[999]" v-show="showVideo">
			<div class="w-full h-full flex justify-center items-center max-md:p-5">
				<div class="p-5 bg-white rounded-md z-20 relative w-[600px] h-[400px] max-md:w-full max-md:h-fit" ref="content">
					<div class="w-8 cursor-pointer h-8 rounded-full bg-white flex justify-center items-center absolute -right-2 shadow-xl -top-5"
					@click="showVideo = false">
						<img src="~/assets/icon/x.png" class="w-4 h-4" alt="">
					</div>
					<iframe
					src="https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fwww.facebook.com%2Ftraihekinang%2Fvideos%2F1585437415236551%2F&show_text=false&width=560&t=0"
					width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
					allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
					allowFullScreen="true"></iframe>
				</div>
				<div class="w-full h-full bg-slate-600 opacity-30 absolute top-0 left-0 z-10" @click="showVideo = false"></div>
			</div>
		</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			showVideo: false
		}
	},
	methods: {
		closeVideo() {
			this.showVideo = false
		}
	}
}
</script>
<style scoped>
/* make animation for video-container when display none to display block from opacity 0 to 1 */
.video-container {
	opacity: 0;
	animation: fadeIn 0.3s ease-in-out forwards;
}
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>