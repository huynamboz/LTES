<template>
	<section>
		<div class="listProduct">
			<div v-for="item in listProduct" :key="item.id" class="product-item">
				<productCard :product="item"/>
			</div>
		</div>
	</section>
</template>
<script>
import productCard from '~/components/products/productCard.vue'
export default{
	components:{
		productCard
	},
	props:{
		listProduct:{
			type: Array,
			default: () => []
		}
	},
	data(){
		return{
			baseUrl: process.env.baseUrl,
			fallbackImageUrl: 'https://via.placeholder.com/300x300'
		}
	}
}
</script>
<style lang="scss" scoped>
.listProduct{
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: space-around;
	@media screen and (max-width:768px) {
		gap: 5px;
		padding: 0 12px;
	}
}
</style>