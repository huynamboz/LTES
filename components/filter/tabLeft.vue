<template>
	<div class="container">
		<div class="tabLeft-main">
			<h1 class="filter-title">
				<i class="fi fi-rr-filter"></i> Bộ lọc tìm kiếm
			</h1>
			<div class="filter-category">
				<h2 class="filter-cate-title">Theo danh mục</h2>
				<div class="list-cate">
					<div class="item-cate" v-for="item in listCate" :key="item.id">
						<div class="item-cate-name">
							<input type="checkbox" name="choose" :value="item.id" id="">
							<label for="choose">{{item.name}}</label>
						</div>
					</div>
				</div>
			</div>
			<div class="line"></div>
			<div class="filter-city">
				<h2 class="filter-cate-title">Theo danh mục</h2>
				<div class="list-cate">
					<div class="item-cate" v-for="item in listCate" :key="item.id">
						<div class="item-cate-name">
							<input type="checkbox" name="choose" :value="item.id" id="">
							<label for="choose">{{item.name}}</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
			return {
			listCate:[]
		}
	},
mounted(){
	this.fetchFilter();
},
methods:{
	async fetchFilter(){
		await this.$axios.get('https://635d4fb7cb6cf98e56b20ae8.mockapi.io/api/listpost/product')
		.then((response) => {
			this.listCate = response.data;
		})
		.catch((error) => {
			console.log(error);
		})

	},

}
}
</script>
<style lang="scss" scoped>
.container{
	min-width: 250px;
}
.tabLeft-main{
	padding: 20px;
	padding-top: 0;
}
.filter-title{
	font-size: 20px;
	font-weight: 600;
	color: #333;
}
.filter-category{
	margin-top: 20px;
}
.item-cate-name{
	display: flex;
	gap: 12px;
}
.filter-cate-title{
	font-size: 16px;
	font-weight: 400;
	color: #333;
	margin-bottom: 10px;
}
.filter-city{
	margin-top: 12px;
}
.line{
	border-bottom: 1px solid #e5e5e5;
	margin-top: 20px;
}
</style>