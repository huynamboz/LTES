<template>
	<div class="w-full flex flex-col items-center">
		<p class=" text-2xl font-bold">RECAP WARRIORS WANDERLUST 2022</p>
		<div class="w-[90%] album-container cursor-zoom-in flex gap-3 max-md:gap-2 mt-10">
			<div class="flex flex-col gap-3  max-md:gap-2 w-[40%]">
				<img src="https://i.imgur.com/6d2TKDL.jpg" @click="currentImg ='https://i.imgur.com/6d2TKDL.jpg'" class=" max-w-[100%] object-cover rounded-md " alt="">
				<div class="flex gap-3 w-full">
					<img src="https://i.imgur.com/0qLnEM6.jpg" @click="currentImg = 'https://i.imgur.com/0qLnEM6.jpg'" class=" max-w-[calc(50%-6px)] object-cover rounded-md " alt="">
					<img src="https://i.imgur.com/5VyW0E0.jpg" @click="currentImg = 'https://i.imgur.com/5VyW0E0.jpg'" class=" max-w-[calc(50%-6px)] object-cover rounded-md " alt="">
				</div>
				<img src="https://i.imgur.com/hnRzpyK.jpg" @click="currentImg = 'https://i.imgur.com/hnRzpyK.jpg'" class=" max-w-[100%] object-cover rounded-md " alt="">
				<img src="~/assets/img/albums/2.jpg" @click="currentImg = 'https://i.imgur.com/hnRzpyK.jpg'" class=" max-w-[100%] hidden max-md:block object-cover rounded-md " alt="">
			</div>
			<div class="flex flex-col gap-3 max-md:gap-2 w-[60%]">
				<div class="relative">
				<img src="https://i.imgur.com/hcsdAwt.jpg" class="relative z-10 video-item w-full object-cover rounded-md " alt="">
				<div class="video-blur z-20"></div>
				<div @click="showVideo = true" class=" cursor-pointer absolute top-0 left-0 w-full h-full flex justify-center items-center z-30">
				<img src="~/assets/icon/play.png" class="h-20 w-20" alt="">

				</div>
			</div>
				<div class="flex gap-3 max-md:gap-2 w-full">
					<img src="https://i.imgur.com/Bcr3hQF.jpg" @click="currentImg = 'https://i.imgur.com/Bcr3hQF.jpg'" class="w-[calc(50%_-_6px)] object-cover rounded-md " alt="">
					<img src="https://i.imgur.com/X3elWO9.jpg" @click="currentImg = 'https://i.imgur.com/X3elWO9.jpg'" class="w-[calc(50%_-_6px)] object-cover rounded-md " alt="">
				</div>
				<div class="flex h-full rounded-md justify-center items-center bg-[rgba(255,255,255,0.08)]">
					<p class="text-center"><span class="max-md:text-xs">
						Còn nhiều điều bất ngờ hơn đang đón chờ các bạn tại
					</span> <br> <span class="text-highlight">
						THE OUTCASTS ACADEMY 2023
					</span></p>
				</div>
			</div>
		</div>
		<div class="video-container  fixed top-0 left-0 flex justify-center flex-col items-center w-[100vw] h-[100vh] z-[999]" v-show="currentImg">
			<!-- <p class=" font-bold text-lg z-20">RECAP WARRIORS WANDERLUST 2022</p> -->
			<img :src="currentImg" class="h-[80vh] max-md:h-[auto] max-md:w-[80vw] object-cover relative z-20 rounded-md" alt="">
			<button class="z-20 mt-2" @click="currentImg = ''">Đóng</button>
			<div class="w-full h-full bg-slate-600 opacity-30 absolute top-0 left-0 z-10" @click="currentImg = ''"></div>
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
			showVideo: false,
			currentImg: "",
		}
	},
	methods: {
		closeVideo() {
			this.showVideo = false
		}
	}
}
</script>
<style lang="scss" scoped>
.text-highlight {
	-webkit-text-fill-color: transparent;
    background-image: radial-gradient(circle at 0 0, #e88d35, #e68b3d 38%, #cb65a5 75%, #bc51de);
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 800;
}
.video-blur {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgb(0, 0, 0);
	background: linear-gradient(0deg, rgba(0, 0, 0, 0.7120973389355743) 25%, rgba(249, 239, 240, 0) 77%);
}
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