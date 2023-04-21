<template>
	<div class="container-top">
		<div class="search-container">
			<tab-left/>
			<div class="tab-right-container">
				<div class="tab-right-header">
					<div class="list-filter-header">
						<p>Sắp xếp tin đăng</p>
						<button class="fil-btn" :class="{'is-active': isNewest}" @click="handleFilterBtn('isNewest')">Mới nhất</button>
						<button class="fil-btn" :class="{'is-active': isSearchMore}"  @click="handleFilterBtn('isSearchMore')">Tìm kiếm nhiều</button>
					</div>
				</div>
				<div class="tab-right-list-item">
					<div v-for="item in listProduct" :key="item.id">
						<product-card :product="item"/>
					</div>
				</div>
			</div>
		</div>
		<loading v-show="isLoading"/>
	</div>
</template>
<script>
import tabLeft from '~/components/filter/tabLeft.vue';
import loading from '~/components/loading/main.vue';
import productCard from '~/components/products/productCard.vue';
export default{
	layout:'default',
	auth:false,
	components:{
		tabLeft,
		loading,
		productCard
	},
	data(){
		return{
			isLoading: false,
			isNewest: true,
			isSearchMore: false,
			listProduct:[],
			baseUrl: process.env.baseUrl,
			fallbackImageUrl: 'https://via.placeholder.com/300x300'
		}
	},
	mounted(){
		this.fetchData();
	},
	methods:{
		handleFilterBtn(key){
			switch(key){
				case 'isNewest':
					this.isNewest = true;
					this.isSearchMore = false;
					break;
				case 'isSearchMore':
					this.isNewest = false;
					this.isSearchMore = true;
					break;
			}
		},
		formatPrice(price){
			let formatter = new Intl.NumberFormat('vi-VN', {
				style: 'currency',
				currency: 'VND',
				minimumFractionDigits: 0
				});
			let formatted = formatter.format(price);
			return formatted;
		},
		handleError(event) {
      event.target.src = this.fallbackImageUrl
    	},
		async fetchData(){
			console.log('fetch data', this.$route);
			await this.$api.products.getAllProduct()
			.then(resp => {
				this.listProduct = resp["data"]["data"];
				console.log(resp.data);
			})
			.catch(err => {
				console.log(err);
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.container-top{
	display: flex;
	justify-content: center;
}
.search-container{
	display: flex;
	padding: 20px;
	padding-top: 40px;
	justify-content: center;
	max-width: 1240px;
}
.list-filter-header{
	display: flex;
	gap: 10px;
	align-items: center;
	padding: 10px;
	background-color: #ffffff;
	align-items: center;
	margin-bottom: 10px;
	border-radius: 10px;
}

.fil-btn{
	border: none;
	background-color: #dcdcdc;
	color: #000000;
	font-weight: 400;
	padding: 10px;
	border-radius: 6px;
	font-size: 16px;
	cursor: pointer;
}
.is-active{
	color: #ffffff;
	background-color: #3d8bfd;
}
.tab-right-list-item{
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}


</style>