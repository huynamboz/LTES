<template>
	<section class="flex justify-center">
		<div class="card-register w-[90%] h-[400px] max-md:h-fit max-md:py-10 p-20 rounded-xl bg-[#2b3244] relative overflow-hidden flex justify-center">
			<img src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/60db7f22ede1551c05ba11bc_desk-rocket-new.svg"
				loading="lazy" width="360" height="463" alt="Awesomic Rocket Image"
				class="new-rocket desk absolute right-0 w-[200px] bottom-0 max-md:top-[8%] max-md:w-32 z-10">
				<img src="~/assets/img/glow-new.png" class="w-full h-full absolute top-0" alt="">
				<div class="flex flex-col items-center relative z-20 gap-5">
					<!-- <p>Còn chần chờ gì nữa</p> -->
					<p class="text-3xl font-bold text-center">Đăng ký tham gia mùa trại <br>
					</p>
						<span class="hight-light-title text-4xl"> THE OUTCASTS ACADEMY 2023</span>
					<p>ngay thôi nào !!</p>
				<button class="bg-[#bc52da] mt-10 px-5 py-3 rounded-3xl gap-2 flex items-center">Đăng ký ngay <i class="fi h-[18px] fi-rr-arrow-small-right"></i></button>

				</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');
.card-register{
	-webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(26px);
	cursor: pointer;
	position: relative;
    border: 1px solid rgba(255,255,255,.08);
}
.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #e88d35, #e68b3d 38%, #cb65a5 75%, #bc51de);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}
</style>
