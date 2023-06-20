<template>
	<div class="w-[360px] 
	max-md:w-full
	flex flex-col gap-5 justify-between">
		<p class=" break-words">
			<i class=" text-sm font-light text-center">
				"Không eo ai chỉ LTES <br>
				Vì Anh Thư eo trong LTES"
			</i>
		</p>
		<div class="flex gap-4">
			<img :src="Avatar" class="w-[40px] h-[40px] rounded-full object-cover" alt="">
			<div class="flex flex-col">
				<p>Đoàn Nguyễn Anh Thư</p>
				<p class=" font-light text-xs">Trưởng BTC</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		break: {
			type: Boolean,
			default: false,
		},
		Name: {
			type: String,
			default: "Trịnh Huy Nam",
		},
		Position: {
			type: String,
			default: "Founder",
		},
		Avatar: {
			type: String,
			default: "",
		},
		Content: {
			type: String,
			default: "LTES là tổ chức phi lợi nhuận do các bạn trẻ tại Quảng Nam thành lập và điều hành, hướng tới mục tiêu phát triển các dự án cộng đồng và rèn luyện các kĩ năng cho các học sinh trung học.",
		},
	},
	data() {
		return {
			isActive: false,
		}
	},
}
</script>