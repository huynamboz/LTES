<template>
	<div class="root">
		<div class="container mx-auto flex justify-center items-start mt-[20px] gap-[10px]">
			<header class="flex gap-[20px] items-center flex-col p-[20px] bg-[#ffffff]">
				<div class="container">
					<img src="https://cdn.dribbble.com/users/1134997/screenshots/6001117/det0cxnuqaaatef.jpg?compress=1&resize=800x600&vertical=top" alt="" 
				class="object-cover w-[200px] h-[200px] rounded-[10px]">
				</div>
				<div class="flex flex-col w-[fit-content] min-w-[fit-content] gap-[20px]">
					<div class="info">
						<h1 class="font-[400] text-[20px] leading-4">Shop đồ mới</h1>
						<span class="text-[12px] text-gray-100">Đà nẵng, Quảng Nam</span>
					</div>
					<div class="flex gap-[50px]">
						<div class="flex gap-[10px] items-start flex-col">
							<div class="font-[400] text-[15px] flex gap-[10px]">
								<i class="fi fi-rr-box-open"></i> 
								Số sản phẩm: <span class="text-[#3d8bfd]">34</span>
							</div>
							<div class="font-[400] text-[15px] flex gap-[10px]">
								<i class="fi fi-rr-calendar-day"></i>
								Ngày tham gia: <span class="text-[#3d8bfd]">3/04/2023</span>
							</div>
							<div class="transition-colors duration-300  hover:bg-[#6294d9] p-10 px-12 rounded-5 bg-[#8cb7f5] text-[#ffffff] text-[14px]
							cursor-pointer
							">Chỉnh sửa trang cá nhân</div>
						</div>
					</div>
				</div>
			</header>
			<div class="main">
				<div class="flex justify-center max-w-[800px] flex-wrap gap-[20px] bg-[#ffffff] p-[20px]">
					<div v-for="item in listProduct" :key="item.id" class="product-item">
						<productCard :product="item"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import productCard from '~/components/products/productCard.vue'
export default {
	auth:false,
	name: 'Detail',
	components: {
		productCard
	},
	data() {
		return {
			listProduct: [],
		}
	},
	computed: {
		// computed
	},
	mounted() {
		this.fetchProduct()
	},
	methods: {
		fetchProduct() {
			console.log('fetchProduct', this.pageParams);
			this.$api.products.getAllProduct(this.pageParams)
				.then(res =>{
					console.log('res', res);
					this.listProduct = res.data.data;
				})
		}
	},
}
</script>