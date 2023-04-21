<template>
	<div class="profile-container">
		<div class="profile-content">
			<div class="profile-header">
				<!-- <h1 class="profile-title">Chỉnh sửa thông tin</h1> -->
				<img src="~/assets/img/avatar-default.png" alt="" class="icon-avatar">
				<div class="detail-user">
					<p>{{ user.name }}</p>
					<p>Dang city with love</p>
				</div>
			</div>
			<div class="profile-content-info">
				<div class="info-inp">
					<label for="name">Tên</label>
					<input type="text" placeholder="Nguyễn Văn A" class="inp" id="name" v-model="user.name">
				</div>
				<div class="info-inp">
					<label for="name">Email</label>
					<input type="text" class="inp" placeholder="email@gmail.com" id="name" v-model="user.email">
				</div>
				<div class="info-inp">
					<label for="name">Số điện thoại</label>
					<input type="text" class="inp" placeholder="09876xx" id="name" v-model="user.number">
				</div>
					<div class="address-inp">
						<div class="address">
						<label for="City">Thành phố</label>
						<div class="choose-city" >
							<div class="list-select" @click="isOpenListCity = !isOpenListCity">{{ currentCity ? currentCity.name : 'Chọn thành phố' }}</div>
							<div class="list-city" :class="{'open':isOpenListCity,'close':!isOpenListCity}" >
							<div v-for="city in cities" :value="city.id" @click="getDistrict(city)">{{ city.name }}</div>
							</div>
						</div>
					</div>
					<div class="address">
						
						<label for="District">Quận huyện</label>
						<div class="choose-city" >
							<div class="list-select" @click="isOpenListDistrict = !isOpenListDistrict">{{ currentDistrict ? currentDistrict.name : 'Chọn quận huyện' }}</div>
							<div class="list-city" v-if="districts" :class="{'open':isOpenListDistrict,'close':!isOpenListDistrict}" >
							<div  v-for="district in districts" :value="district.id" @click="chooseDistrict(district)">{{ district.name }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button class="submit">Thay đổi</button>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			name: '',
			email: '',
			number: '',
			currentCity: null,
			isOpenListCity: false,
			isOpenListDistrict: false,
			cities: [],
			currentDistrict: null,
			districts: [],
			user: this.$auth.user
		}
	},
	mounted(){
		this.getCities();
	},
methods: {
		chooseDistrict(val){
			this.currentDistrict = val;
			this.isOpenListDistrict = false;
		},
		getCities(){
			this.$axios.get('https://api.goship.io/api/ext_v1/cities')
			.then(res => {
				this.cities = res.data.data;
				console.log(this.cities,"cityyyy");
			})
			.catch(err => {
				console.log(err);
			})
		},
		getDistrict(val){
			this.currentCity = val;
			this.isOpenListCity = false;
			console.log(val,"val");
			this.$axios.get(`https://api.goship.io/api/ext_v1/cities/${val.id}/districts`)
			.then(res => {
				this.districts = res.data.data;
				console.log(this.districts,"district");
			})
			.catch(err => {
				console.log(err);
			})
		},
		submit(){
			this.$axios.put('/')
		}
	}
}
</script>
<style lang="scss" scoped>
.list-city{
	max-height: 200px;
	overflow-y: scroll;
}
.profile-container{
	width: 100%;
	max-width: 500px;
}
.icon-avatar{
	width: 100px;
	height: 100px;
	border-radius: 50%;
	object-fit: cover;
	box-shadow: 2px 18px 20px 1px rgb(153 153 153 / 56%);
}
.profile-header{
	display: flex;
	gap: 20px;
	align-items: center;
	margin-bottom: 40px;
}
.detail-user{
	display: flex;
	flex-direction: column;
	& > p:nth-child(1){
		font-size: 20px;
	}
	& > p:nth-child(2){
		font-size: 14px;
		color: #6f6f6f;
	}
}
.profile-content{
	width: 100%;
	position: relative;
	z-index: 1;
	background-color: #ffffff;
	border-radius: 20px;
	padding: 20px;
}
.overlay{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	z-index: 0;
}
.choose-city{
	position: relative;
	cursor: pointer;
}
.list-select{
	border: 1px solid #e5e5e5;
	border-radius: 5px;
	padding: 5px 10px;
	width: 200px;
}
.list-city{
	position: absolute;
	background-color: #ffffff;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	transition: .2s ease-in-out;
	& > div{
		padding: 5px 10px;
		&:hover{
			background-color: #e2e2e2;
			transition: .2s ease-in-out;
		}
	}
}
.open{
	animation: open .5s forwards;
}
.close{
	animation: close .5s forwards;
}
@keyframes open {
	0% {
		height: 0;
	}
	100% {
		height: 200px;
	}
}
@keyframes close {
	0% {
		height: 200px;
	}
	100% {
		height: 0;
	}
}
.profile-content-info{
}
.info-inp{
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	gap:10px
}
.address-inp{
	display: flex;
	gap:20px;
}
.inp{
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
	height: 40px;
	background-color: #f1f3f5;
	color: #091A75;
}
.submit{
	margin-top: 20px;;
	background-color: #ff4131;
	color: #ffffff;
	border: none;
	padding: 10px 20px;
	border-radius: 2px;
	cursor: pointer;
	&:hover{
		background-color: #d11909;
		transition: .2s ease-in-out;
	}
}
</style>