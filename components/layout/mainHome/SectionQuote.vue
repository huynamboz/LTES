<template>
	<div class="flex w-full flex-col items-center relative overflow-hidden">
		<img src="~/assets/img/avatar/nam.jpg" class="avatar max-md:top-[15%] top-[10%] left-[10%]" alt="">
		<img src="~/assets/img/avatar/nhat.jpg" class="avatar top-[5%] right-[10%]" alt="">
		<img src="~/assets/img/avatar/thu.jpg" class="avatar max-md:bottom-[2%] bottom-[2%] left-[20%]" alt="">
		<img src="~/assets/img/avatar/ngan.jpg" class="avatar max-md:top-[2%] top-[3%] left-[50%]" alt="">
		<img src="~/assets/img/avatar/nguyet.jpg" class="avatar max-md:bottom-[5%] -bottom-[20%] right-[5%] max-md:right-[3%]" alt="">
		<p>Các thành viên</p>
		<p class="hight-light-title text-3xl font-bold">NÓI GÌ VỀ LTES</p>
		<div class="flex max-md:flex-col
		max-md:items-center
		flex-wrap justify-center
		gap-6 mt-16">
			<profile-card class="card p-4 rounded-xl" :Avatar="'https://i.imgur.com/IZQRzDF.jpg'" :Name="'Nguyễn Bùi Hoàng Ngân'" :Content="'Dù mình có lớn đến cỡ nào thì LTES vẫn luôn giúp mình có lại những niềm vui của một đứa trẻ.'" :Position="'Founder'"/>
			<profile-card class="card p-4 rounded-xl" :Avatar="'https://i.imgur.com/4fhbVaa.jpg'" :Name="'Đoàn Nguyễn Anh Thư'" :Content="'Bao lâu cũng vậy, LTES vẫn luôn là nhà.'" :Position="'Trưởng BTC'"/>
			<profile-card class="card p-4 rounded-xl" :Avatar="'https://i.imgur.com/EGC05wt.png'" :Name="'Trịnh Huy Nam'" :Content="'Trại hè LTES là mùa trại tuyệt vời mà các bạn không nên bỏ lỡ, không chỉ là 1 mùa trại mà còn là nơi lưu giữ kỷ niệm thời thanh xuân nữa.'" :Position="'LTES\'s Web dev '"/>
		</div>
	</div>
</template>
<script>
import ProfileCard from '../item/ProfileCard.vue';
import ProfileCardAT from '../item/ProfileCardAT.vue';
export default {
	auth: false,
	components: {
		ProfileCard,
		ProfileCardAT
	},
}
</script>
<style lang="scss" scoped>
.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #20aef8, #49e9e9 38%, #88f0d5 75%, #daf8b9);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}
.card{
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	-webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    background-color: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.08);
	&:hover{
		box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
		transform: translateY(-10px);
		transition: all 0.3s ease-in-out;
	}
}
.avatar{
	position: absolute;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
	animation: zoom 1s infinite;
}
// animation zoom in zoom out infiniti
@keyframes zoom {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
}
</style>