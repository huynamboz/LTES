<template>
	<div class="flex gap-32 justify-center max-md:flex-col max-md:gap-20">
		<div class="flex flex-col gap-20 max-md:items-center">
			<p class="text-3xl font-semibold">Lợi ích khi tham gia trại hè <span class="hight-light-title">LTES</span></p>
			<img src="~/assets/img/astronau@3x.png" class="max-w-[300px] object-cover" alt="">
		</div>
		<div class="flex flex-col gap-5 relative">
			<img src="~/assets/img/glow-new.png" class="w-full h-full absolute top-0" alt="">
			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/star.png" class="w-7 h-7" alt="">
				<p> Giấy chứng nhận tham gia trại hè.</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/star.png" class="w-7 h-7" alt="">
				<p>Phát triển các kỹ năng sống như làm việc nhóm, giao tiếp, xử lý tình huống và tư duy lãnh đạo. </p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/star.png" class="w-7 h-7" alt="">
				<p>Môi trường năng động, phù hợp để rèn luyện sự tự tin và phát triển các kỹ năng mềm.
</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/star.png" class="w-7 h-7" alt="">
				<p>Thăm thú những di tích và địa điểm mới lạ, trải nghiệm những hoạt động nhằm rèn luyện trí óc, sức khỏe.

</p>
			</div>

			<div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/star.png" class="w-7 h-7" alt="">
				<p>Những mối quan hệ gắn kết và dài lâu với bạn bè đồng trang lứa cũng như các anh, chị, em có chung sở thích, chung niềm đam mê.
</p>
			</div>
			
			<!-- <div class="bg-[#2c2b46] card-item flex p-3 rounded-md justify-start items-center gap-5">
				<img src="~/assets/icon/star.png" class="w-7 h-7" alt="">
				<p>Đặc biệt, sẽ có một buổi hòa nhạc hóa thân, tiệc BBQ và đêm lửa trại</p>
			</div> -->
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