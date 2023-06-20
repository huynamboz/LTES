<template>
	<div class="flex flex-col max-md:items-center gap-5 relative">
		<p class=" max-md:text-2xl text-3xl font-semibold">
			Một chút thông tin về <span class="text-title">LTES</span>
		</p>
		<div class="flex justify-between 
		flex-wrap 
		max-md:items-center
		max-md:gap-10
		relative">
				<img class="absolute top-0 left-0 z-[-1]" src="https://uploads-ssl.webflow.com/602d59da29b66668b8758391/611369747a7a9a15250c7349_new-home-stars-3.svg" loading="lazy" width="1440" height="540" alt="">
				<div class="max-w-[40%]
				max-md:max-w-full 
				text-sm text-detail">
					LTES là tổ chức phi lợi nhuận do các bạn trẻ tại Quảng Nam thành lập và điều hành, hướng tới mục tiêu phát
					triển các dự án cộng đồng và rèn luyện các kĩ năng cho các học sinh trung học.
					LTES được hình thành và phát triển như một sân chơi cho những bạn muốn tự tay mình thiết kế và tổ chức một
					chương trình trại hè, và cả những bạn muốn tham gia các hoạt động giải trí rèn luyện kỹ năng. Không gói gọn
					trong khuôn khổ trường học, LTES đón nhận thành viên tham gia từ tất cả khu vực trên địa bàn tỉnh Quảng Nam.
			</div>
			<div class="w-[50%] 
			max-md:w-full
			relative">
				<img src="~/assets/img/item-color.png" class="z-[-1] absolute w-[100%] -top-32 right-[30%]" alt="">
				<div class="item-animate item-bg w-full bg-[#2c2b46] h-full border-[#f9ad99] rounded-md absolute -top-5 -left-5 z-10"></div>
				<img src="~/assets/img/fb-page.png" alt="" class="item-animate item-img rounded-md object-contain relative z-20">
			</div>
		</div>
</div></template>
<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},
	mounted() {
		let slideCard = new IntersectionObserver((entries, observer) => { 
		// entries : Danh sách các đối tượng chúng ta theo dỏi
			entries.forEach(entry => {
			// Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
			if(entry.isIntersecting){
				if (entry.target.classList.contains("item-bg")) {
					entry.target.classList.add("active-bg");
				} else if (entry.target.classList.contains("item-img")) {
					entry.target.classList.add("active-img");
				}
			} 
		});
	}, {rootMargin: "0px 0px -200px 0px"});
	// nexttick
	this.$nextTick(() => {
		let listCard = document.querySelectorAll(".item-animate ");
		console.log(listCard)
		listCard.forEach(card => {
			slideCard.observe(card);
		});
	});
	}
}
</script>
<style lang="scss" scoped>
.item-bg {
	transform: translateY(20px);
	opacity: 0;
}
.item-img {
	transform: translateY(20px);
	opacity: 0;
}
@keyframes slideIn {
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.active-bg {
	animation: slideIn 0.5s ease-in-out forwards;
	animation-delay: 0;
}
.active-img {
	animation: slideIn 0.5s ease-in-out forwards;
	animation-delay: 0.5s;
}
.text-detail {
	line-height: 2.2rem;
	@media screen and (max-width: 768px) {
		line-height: 1.5rem;
	}
}
.text-title {
	-webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(45deg, #5ebbff -33%, #a174ff 69%);
    -webkit-background-clip: text;
    background-clip: text;
	font-weight: 800;
}
</style>
