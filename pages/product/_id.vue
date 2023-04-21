<template>
	<section class="product-container">
		<div class="page-product">
			<section class="overview-product">
				<div class="list-thumbnail">
					<div class="main-thumbnail">
						<img v-if="currentThumbnail" :src="currentThumbnail" alt="" class="product-thumbnail">
						<img v-else src="~/assets/img/img-none.png" alt="" class="product-thumbnail">
					</div>
					<div class="list-item-thumbnail">
						<div v-if="products.thumbnails.length > 0" class="item-thumbnail" v-for="(item, index) in products?.thumbnails" :key="index">
							<img :src="products.thumbnails[index]" alt="" class="thumbnail-list-item-img" @click="changeThumbnail(index,$event)">
						</div>
					</div>
				</div>

				<div class="info-product-section-2">
					<div class="product-info">
					<div class="product-info-content">
						<h1 class="name-product">
							{{ products?.name }}
						</h1>
						<div class="product-cost">
							<p class="product-label-cost">
								Giá :
								<span class="main-cost">{{ formatPrice(products?.price - (products?.price * products?.discount /100)) }}</span>
								<span class="discount-cost" v-if="products?.discount > 0"><del>{{ formatPrice(products?.price) }}</del></span>
							</p>
						</div>
						<div class="product-type">
							<p class="product-label">
								Loại 
							</p>
							<span class="type-of-product">: {{ products?.status }}</span>
						</div>
						<div class="status">
							<p class="product-label">
								Trạng thái 
							</p>
							<span class="status-of-product">: {{ products?.product_status }}</span>
						</div>
					</div>
				</div>
				<div class="supplier-info">
					<div class="supplier-header">
						<div class="supplier-header-left">
							<div class="supplier-avatar">
								<img src="https://st.chotot.com/storage/images/tips/1_mobile.png" alt="" class="avatar-img">
							</div>
							<div class="supplier-name">
								Trinh huy nammm
							</div>
						</div>
						<div class="supplier-header-right">
							<div class="supplier-view-btn">
								<button class="view-profile-btn"><i class="fi fi-rr-shop"></i> Xem trang</button>
							</div>
						</div>
					</div>
					<div class="supplier-action-contact">
						<div class="contact-call" @click="makeCall()">
							 <span class="contact-left-text">0984619309</span>
							<span class="contact-right-text">Gọi cho người bán</span></div>
						<div class="contact-message"><i class="fi fi-rr-comment-alt"></i>Chat với người bán</div>
					</div>
				</div>
				</div>
			</section>
			<section class="compare-container">
				<div class="compare-container-main">
					<div class="cmp-header">
						<h1 class="compare-title">Xem giá ở những nơi khác</h1>
						<button class="request-new-cmp" @click="fetchCompare()">generate dữ liệu so sánh mới</button>
						<mini-loading v-if="isCrawling"/>
					</div>
					<div class="compare-list">
						<div class="compare-item" v-for="(item,index) in listCompare" :key="index">
							<div class="compare-item-thumbnail">
								<img :src="item?.url_img" alt="" class="compare-item-thumbnail-img">
							</div>
							<div class="compare-item-content">
								<div class="cmp-item-name">
									{{ item?.name }}
								</div>
								<div class="cmp-item-cost">
									{{ item?.cost }}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="product-description">
					<div class="product-description-content">
							<div class="product-description-header">
							<h2 class="product-description-header-text">Mô tả sản phẩm</h2>
						</div>
						<div class="product-description-content">
							<pre class="product-description-content-text">
								{{ products?.description }}
								<!-- <textarea name="" :value="product?.description" id="" readonly cols="30" rows="10"></textarea> -->
							</pre>
						</div>
					</div>

					<div class="product-description-recommend">
						<div class="product-description-header-recommend">
							<h2 class="product-description-header-text header-recommend-text">Sản phẩm liên quan</h2>
						</div>
						<div class="product-description-content-recommend">
							<div class="product-description-content-text-recommend">
								<div class="product-item-recommend">
									<div class="product-item-recommend-thumbnail">
										<img :src="currentThumbnail" alt="" class="product-item-thumbnail-img img-item-recommend-right">
									</div>
									<div class="product-item-recommend-info">
										<div class="product-item-recommend-info-name">
											dsvdvsdv
										</div>
										<div class="product-item-recommend-info-cost">
											120.222
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
			</section>
		</div>
		
		<!-- <textarea type="text" name="" v-model="t" id=""> </textarea><button @click="test()">acscascascas</button> -->
	</section>
</template>
<script>
import miniLoading from '~/components/loading/mini-loading.vue'
export default {
	components: {
		miniLoading
	},
	auth:false,
	layout: 'default',
	data() {
		return {
			// data
			t: "test",
			products: {
				thumbnails: [],
			},
			user: null,
			thumbnail: null,
			currentThumbnail: "",
			listCompare: [],
			isCrawling: false,
		}
	},
	async mounted() {
		await this.fetchData();
		console.log(this.$auth.$storage.getUniversal('user'))
		//wait 3s to fetch compare
		setTimeout(() => {
			this.fetchCompare();
		}, 3000);
		// await this.fetchCompare();
	},
	methods: {
		async fetchCompare(){
			this.isCrawling = true;
			await this.$axios.get(`/products/${this.products.id}/comparisons`,
			//add header
			)
			.then(res=>{
				//search items same name in array
				this.listCompare = res["data"];
				console.log(this.listCompare);
				this.isCrawling = false;
			})
			.catch(err=>{
				console.log(err);
				this.isCrawling = false;
			})
		// 	await this.$axios.post(`https://api.goship.io/api/ext_v1/rates`,
		// 	{"shipment":{"address_from":{"city":"220000","district":"230400"},"address_to":{"city":"230000","district":"231000"},"parcel":{"cod":0,"weight":500,"length":0,"width":0,"height":0}}}).then(res=>{
		// 		console.log(res);
		// 	})
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
		makeCall(){
			window.location.href = `tel:${this.products?.phone_number}`
		},
		changeThumbnail(index,ele){
			console.log(ele.target)
			ele.target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
			this.currentThumbnail = this.products.thumbnails[index]
			let listEle = document.querySelectorAll(".thumbnail-list-item-img")
			listEle.forEach((ele) => {
				if (ele.classList.contains("active")) {
					ele.classList.remove("active")
				}
			})
			ele.target.classList.add("active")
			console.log(ele.target)
		},
		async fetchData() {
			// await this.$axios.get(process.env.BASE_URL_API +`${this.$route.params.id}`)
			await this.$api.products.getProductById(this.$route.params.id)
			.then((response) => {
					this.products = response['data']
					// this.products.thumbnails.forEach((ele,index) => {
					// 	this.products.thumbnails[index] = process.env.BASE_URL_IMG + ele
					// })
					console.log("ré",this.products.thumbnails[0])
					this.currentThumbnail = this.products.thumbnails[0]
					this.products.description = JSON.parse(this.products.description)
				})
				.catch((error) => {
					console.log(error)
				})
			console.log(this.products)
			// await this.$axios.get(`https://640b058281d8a32198d72c54.mockapi.io/images/${this.products.id}`)
			// 	.then((response) => {
			// 		this.thumbnail = response.data
			// 		this.currentThumbnail = this.thumbnail.thumbnails[0]
			// 	})
		}
	}
}
</script>
<style lang="scss" scoped>
.product-container {
	margin-top: 60px;
	display: flex;
	justify-content: center;
	@media screen and (max-width:768px) {
		padding: 0 12px;
	}
}
.page-product{
	width: 1180px;
	@media screen and (max-width:768px) {
		width: 100%;
	}
}
.overview-product {
	display: flex;
	background-color: #ffffff;
	padding: 40px;
	border-radius: 5px;
	gap: 30px;
	@media screen and (max-width:768px) {
		flex-direction: column;
		padding: 20px;
	}
}
.main-thumbnail{
	display: flex;
	justify-content: center;
	background-color: #e5e5e5;
	border-radius: 5px;
	@media screen and (max-width:768px) {
		width: 100%;
	}
}
.list-item-thumbnail {
	display: flex;
	gap: 12px;
	margin-top: 20px;
	cursor: pointer;
	max-width: 500px;
	overflow-y: auto;
	@media screen and (max-width:768px) {
		width: calc(100vw - 40px);
		max-width: 100%;
	}
}
.product-thumbnail{
	width: 500px;
	height: 500px;
	display: block;
	object-fit: cover;
	@media screen and (max-width:768px) {
		width: 100%;
		
	}
}
.thumbnail-list-item-img {
	width: 100px;
	height: 100px;
	object-fit: contain;
}
.active{
	border: 2px solid #3d8bfd;
	border-radius: 5px;
}
.name-product{
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 20px;
}
.product-cost{
	border-radius: 5px;
}
.product-label{
	display: flex;
	align-items: center;
	gap: 10px;
}
.product-label-cost{
	display: flex;
	gap: 20px;
	align-items: center;
}
.main-cost{
	font-size: 30px;
	font-weight: 500;
	color: #fa3434;
	margin-right: 0px;
}
.discount-cost{
	font-size: 18px;
	font-weight: 400;
	color: #9b9b9b;
}
.product-type{
	display: flex;
	margin-top: 20px;
	margin-bottom: 12px;
}
.product-label{
	width: 150px;
	color: #909090;
}
.status{
	display: flex;
}
.supplier-info{
	border: 1px solid #e5e5e5;
	padding: 20px;
	border-radius: 5px;
	width: fit-content;
	margin-top: 24px;
}
.avatar-img{
	width: 50px;
	height: 50px;
	object-fit: cover;
	border-radius: 50%;
	border: 1px solid #e5e5e5;
}
.supplier-header{
	display: flex;
	gap: 30px;
}
.view-profile-btn{
	border:1px solid #3d8bfd;
	background-color: transparent;
	padding: 10px 20px;
	color: #3d8bfd;
	font-weight: 500;
	border-radius: 5px;
	display: flex;
	align-items: center;
	gap: 5px;
	//make box shadow slightly 
	// box-shadow: 1px 7px 20px 0px rgb(223 139 139 / 75%);
}
.supplier-name{
	font-size: 18px;
	font-weight: 500;
}
.supplier-header-left{
	display: flex;
	gap: 20px;
	align-items: center;
}
.supplier-action-contact{
	margin-top: 20px;
	&:hover{
		cursor: pointer;
	}
}
.contact-call{
	background-color: transparent;
	padding: 12px 20px;
	background-color: #3d8bfd;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	color: #ffffff;
	align-items: center;
}
.contact-left-text{
	font-size: 24px;
	font-weight: 500;
	color: #ffffff;
}
.contact-message{
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #3d8bfd;
	padding: 15px 20px;
	border-radius: 5px;
	color: #3d8bfd;
	text-align: center;
	font-size: 18px;
	font-weight: 500;
	cursor: pointer;
	margin-top: 12px;
	& > i{
		margin-right: 20px;
		font-size: 30px;
		font-weight: 300;
	}
}
.product-description-header{
	margin-bottom: 20px;
}
.product-description{
	width: 1180px;
	margin-top: 40px;
	display: flex;
	gap: 14px;
	@media screen and (max-width:768px) {
		flex-direction: column;
		width: 100%;
		
	}
}
.product-description-content{
	border: 1px solid #e5e5e5;
	padding: 20px;
	background-color: #ffffff;
}
.product-description-recommend{
	border: 1px solid #e5e5e5;
	padding: 20px;
	background-color: #ffffff;
}
.product-description-content-text{
	word-wrap: break-word;
	white-space: pre-line;
}
.img-item-recommend-right{
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.product-description-header-text{
	font-size: 20px;
	font-weight: 500;
}
.img-item-recommend-right{
	width: 200px;
	height: 200px;
	object-fit: cover;
	border-radius: 5px;
}
.header-recommend-text{
	font-size: 14px;
	font-weight: 400;
}
.product-description-header-recommend{
	background-color: #3d8bfd;
	padding: 10px;
	color: #ffffff;
	margin-bottom: 20px;
	border-radius: 5px;
	box-shadow: 1px 7px 20px 1px #5698fc63;

}
.compare-container-main{
	padding-top: 20px;
}
.compare-title{
	font-size: 24px;
	font-weight: 500;
	padding-bottom: 5px;
	border-bottom: 2px solid #fa3434;
}
.compare-list{
	border: 1px solid #fa3434;
	display: flex;
	flex-direction: column;
	gap: 20px;
	border-radius: 10px;
	background-color: #ffffff;
	padding: 10px;
}
.cmp-header{
	display: flex;
	margin-bottom: 20px;
	gap: 50px;
	align-items: center;
	@media screen and (max-width:768px) {
		flex-direction: column;
	}
}
.request-new-cmp{
	border: none;
	padding: 10px;
	background-color: #ff4131;
	color: #ffffff;
	font-size: 18px;
	border-radius: 6px;
	cursor: pointer;
}
.compare-item{
	padding: 20px;
	display: flex;
	gap: 30px;
	border-radius: 10px;
	//make box shadow slightly
	&:hover{
		box-shadow: 1px 7px 20px 0px rgba(189, 189, 189, 0.75);
	}
}
.cmp-item-name{
	font-size: 18px;
	font-weight: 500;
}
.compare-item-thumbnail-img{
	width: 120px;
	height: 120px;
}
.compare-item-content{
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.cmp-item-cost{
	font-size: 24px;
	color: #fa3434;
	font-weight: 500;
}
</style>