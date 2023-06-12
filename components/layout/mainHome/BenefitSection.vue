<template>
	<div class="flex gap-32 justify-center max-md:flex-col max-md:gap-20">
		<div class="flex flex-col gap-20 max-md:items-center">
			<p class="text-3xl font-semibold">Lợi ích khi tham gia <span class="hight-light-title">LTES</span></p>
			<img src="~/assets/img/astronau@3x.png" class="max-w-[300px] object-cover" alt="">
		</div>
		<div class="flex flex-col gap-5 relative">
			<img src="~/assets/img/glow-new.png" class="w-full h-full absolute top-0" alt="">
			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/tick.png" class="w-7 h-7" alt="">
				<p>Rèn luyện khả năng teamwork</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/tick.png" class="w-7 h-7" alt="">
				<p>Kết bạn với những bạn từ các trường khác</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/tick.png" class="w-7 h-7" alt="">
				<p>Nhận được sự chia sẻ kinh nghiệm từ các anh chị</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/tick.png" class="w-7 h-7" alt="">
				<p>Tham gia những hoạt động bổ ích</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/tick.png" class="w-7 h-7" alt="">
				<p>Tham gia những hoạt động bổ ích</p>
			</div>
			
		</div>
	</div>
</template>
<style lang="scss" scoped>
.card-item{
	-webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(26px);
	cursor: pointer;
	position: relative;
    background-color: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.08);
	transition: all 0.3s ease-in-out;
	&:hover{
		box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
		transform: translateY(-10px);
		transition: all 0.3s ease-in-out;
	}
}
.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #e88d35, #e68b3d 38%, #cb65a5 75%, #bc51de);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}
</style>