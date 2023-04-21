<template>
	<nuxt-link :to="`/product/${product.id}`" class="card-container">
			<div class="tag-sale" v-if="product.discount > 0">{{ product.discount }}% giảm</div>
			<img v-if="product.thumbnails[0]" :src="product.thumbnails[0]" @error="handleError" alt="" class="item-bg">
			<img v-else :src="fallbackImageUrl" alt="" class="item-bg">
			<div class="item-product-content">
				<h3 class="item-product-name">{{ product.name }}</h3>
				<div class="item-cost-parent">
					<p class="item-cost-before" v-if="product.discount > 0"><del>{{ formatPrice(product.price) }} </del> - </p>
					<p class="item-cost">{{ formatPrice(product.price - (product.price * product.discount / 100)) }}</p>
				</div>
				<p class="addr">{{ product.address }}</p>
			</div>
	</nuxt-link>
</template>
<script>
export default{
	props:{
		product:{
			type: Object,
			default: () => {}
		}
	},
	data(){
		return{
			baseUrl: process.env.baseUrl,
			fallbackImageUrl: 'https://via.placeholder.com/300x300'
		}
	},
	methods:{
		formatPrice(price){
			let formatter = new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND',
				minimumFractionDigits: 0
			});
			return formatter.format(price);
		},
		handleError(e){
			e.target.src = this.fallbackImageUrl;
		}
	}
}
</script>
<style lang="scss" scoped>
.card-container{
	width: 220px;
	min-height: 328px;
	height: 346px;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	padding-bottom: 10px;
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	box-shadow: -1px 5px 20px 1px rgb(130 130 130 / 10%);
	@media screen and (max-width:768px) {
		max-width: 205px;
		width: calc( 100vw / 2 - 15px);
		min-height: unset;
		height: fit-content;
		max-height: unset;
		height: 280px;
		margin-bottom: 15px;
	}
}
.tag-sale{
	position: absolute;
	top: 10px;
	left: 5px;
	border-radius: 5px;
	background-color: #ff4131;
	color: #ffffff;
	font-weight: 400;
	padding: 5px;
	font-size: 14px;
}
.item-bg{
	width: 100%;
	height: 100%;
	max-height: 200px;
	min-height: 200px;
	object-fit: cover;
	object-fit: cover;
	@media screen and (max-width:768px) {
		max-height: 60px;
		min-height: 160px;
		max-width: unset;
	}
}
.item-product-content{
	padding: 20px 5px 0 5px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.item-cost-before{
	font-weight: 400;
	color: #adadad;
	font-size: 16px;
	@media screen and (max-width:768px) {
		font-size: 14px;
	}
}
.item-product-name{
	font-weight: 400;
	font-size: 16px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	@media screen and (max-width:768px) {
		font-size: 14px;
	}
}
.item-cost-parent{
	display: flex;
	align-items: center;
}
.item-cost{
	font-weight: 400;
	color: #ff4131;
	font-size: 18px;
	@media screen and (max-width:768px) {
		font-size: 14px;
	}
}
.addr{
	font-weight: 400;
	font-size: 14px;
}
</style>