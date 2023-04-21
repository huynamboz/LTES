<template>
	<div class="setting-container">
		<div class="setting-detail">
			<div class="tab-left">
				<div class="tab-left-content">
					<div class="tab-left-content-header">
						<p>Cài đặt tài khoản</p>
					</div>
					<div class="tab-left-list">
						<div class="tab-left-item" 
						:class="{'is-choosed':optionSetting == 1}"
						@click="optionSetting=1">
							<i class="fi fi-rr-user"></i>
							<p>Thông tin cá nhân</p>
						</div>
						<div class="tab-left-item" 
						:class="{'is-choosed':optionSetting==2}"
						@click="optionSetting=2">
							<i class="fi fi-rr-lock"></i>
							<p>Mật khẩu</p>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-right">
				<tab-profile />
			</div>
		</div>
	</div>
</template>
<script>
import tabProfile from '~/components/profiles/detailProfile.vue'
export default {
	name: 'headerTab',
	components: {
		tabProfile
	},
	data() {
		return {
			isShow: false,
			optionSetting: 1
		}
	},
	mounted() {
		console.log(this.optionSetting)
	},
	methods: {
		goToMessage() {
			if (!this.$auth.loggedIn) {
				this.$router.push('/login')
			}
		},
		goToCart() {
			if (!this.$auth.loggedIn) {
				this.$router.push('/login')
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.setting-container{
	display: flex;
	justify-content: center;
}
.setting-detail{
	margin-top: 40px;
	display: flex;
	justify-content: center;
	gap: 20px;
	background-color: #ffffff;
	width: 100%;
	max-width: 800px;
}
.tab-left-content-header{
	padding: 0 20px;
	padding-right: 0;
	font-weight: 600;
	font-size: 20px;
}
.tab-left{
	width: 300px;
	padding: 20px 20px;
}
.tab-left-list{
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	gap: 20px;
}
.tab-left-item{
	display: flex;
	cursor: pointer;
	gap: 10px;
	padding: 5px 5px;
	color:#6f6f6f;
}
.tab-right{
	width: 700px;
}
.is-choosed{
	border-right: 3px solid #ef0808;
	font-weight: 500;
	color: #000000;
	& > i{
		font-weight: 500;
	}
}
</style>