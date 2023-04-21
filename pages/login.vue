<template>
    <div class="login-container">
        <loading v-if="isLoading"/>
        <div class="login-content-main">
            <img src="~/assets/img/bg-login.png" alt="" class="login-img-banner">
            <div class="login-fiels">
                <h1 class="login-title">Hi Everyone :)</h1>
                <p class="login-subtitle">Welcome to our website, </p>
                <div class="login-input-email" :class="[{'gray-bg' : email.length > 0}]">
                    <img src="~/assets/img/mail.png" alt="" class="input-email-img">
                    <div class="fiels-input">
                        <span>Email address</span>
                        <input :class="[{'gray-bg' : email.length > 0}]" type="email" v-model="email" placeholder="Email" class="input-email">
                    </div>
                </div>
                <div class="login-input-pass" :class="[{'gray-bg' : password.length > 0}]">
                    <img src="~/assets/img/lock.png" alt="" class="input-email-img">
                    <div class="fiels-input">
                        <span>Password</span>
                        <input :class="[{'gray-bg' : password.length > 0}]" type="password" v-model="password" placeholder="Password" class="input-email">
                    </div>
                </div>

                <span class="forgot">Forgot password?</span>
                <div class="login-list-btn">
                    <button class="login-btn" @click="signin()">LOGIN</button>
                    <button class="create-btn" @click="$router.push('/register')">CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import loading from '~/components/loading/main.vue'
export default {
	layout:'empty',
    components: {
        loading
    },
    name: 'login',
    data() {
        return {
            isLoading: false,
            email: '',
            password: '',
			userID: '',
			authError: false
        }
    },
	mounted() {
	},
    methods: {
		closePopup(){
			this.authError = false;
		},
		async fetchUserData(){
			// let user = {
			// 	id : 1,
			// 	name: "Nguyen Van A",
			// 	avatar: "https://i.pinimg.com/originals/1c/0d/0d/1c0d0d1b1f1f1b1b1f1f1b1b1f1f1b1b.jpg",
			// }
			// this.$auth.$storage.setUniversal('user', user, true)
			// await this.$api.auth.getUserById(this.userID)
			// 	.then(resp => {
			// 		console.log(resp.data, "get by id done")
			// 		this.$auth.$storage.setUniversal('user', resp.data, true)
			// 		console.log(this.$auth.$storage.getUniversal('user'), "get universal");
			// 		this.$router.push('/')
			// 	})
			// 	.catch(err => {
			// 			this.isLoading = false;
			// 	})
			await this.$api.users.getInfoMe()
				.then(resp => {
					console.log(resp.data, "get by id done")
					this.$auth.$storage.setUniversal('user', resp.data, true)
					console.log(this.$auth.$storage.getUniversal('user'), "get universal");
					this.$router.push('/')
				})
				.catch(err => {
						this.isLoading = false;
				})
		},
        async signin() {
            this.isLoading = true;
            await this.$auth.loginWith('local',
            {
                data: {
						email: this.email,
						password: this.password,
					}
            })
                .then(resp => {
					this.$router.push('/')
					console.log(this.$auth, "auth");
					this.$toast.success('Đăng nhập thành công');
                    this.isLoading = false;
                })
                .catch(err => {
                    console.log(err);
					this.authError = true;
					this.$toast.error('Đăng nhập thất bại');
					console.log(this.authError);
					this.isLoading = false;
                })
        }
    }
}
</script>
<style lang="scss" scoped>
.popup-container{
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	display: flex;
	animation: blur 0.3s;
	@media screen and (max-width: 768px) {
		padding: 0 20px;
	}
}
// make animation keyframe from blur 0 to 1
@keyframes blur {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.popup-blur{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
}
.popup{
	padding: 82px 105px;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	background: #FFFFFF;
	border-radius: 40px;
	z-index: 999;
	@media screen and (max-width: 768px){
		padding: 40px 20px;
	}
}
.popup-title{
	font-weight: 700;
font-size: 38px;
line-height: 150%;
color: #E02D3C;
@media screen and (max-width: 768px){
	font-weight: 700;
font-size: 24px;
line-height: 150%;
	
}
}
.popup-text{
	max-width: 400px;
	font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #3E3F66;
&> span{
	font-weight: 500;
}
@media screen and (max-width: 768px){
	font-weight: 400;
font-size: 14px;
line-height: 150%;
	max-width: 100%;
}
}
.popup-btn{
	@media screen and (max-width: 768px) {
		width: 100%;
	}
}
.btn-popup-close{
	background: #E02D3C;
border-radius: 80px;
padding: 9.5px 24px;
gap: 4px;
color: #FFFFFF;
font-weight: 700;
font-size: 14px;
line-height: 150%;
border: none;
width: 298px;
@media screen and (max-width: 768px){
	width: 100%;
	
}
}
.popup-content{
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
}
span,p{
    margin: 0;
}
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.login-content-main{
    display: flex;
    width: 95%;
    height: 95%;
    align-items: center;
    justify-content: center;
    gap: 60px;
    background-color: 
#f9fafc;
    border-radius: 20px;
    padding: 20px 50px;
    // make box shadow
    box-shadow: 0 0 20px 10px rgba(179, 179, 179, 0.2);
}
.login-img-banner{
	@media screen and (max-width:768px) {
		display: none;
	}
}
.input-email-img{
    width: 20px;
    height: 20px;
}
.login-input-email{
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 6px;
}
input{
    border: none;
    outline: none;
    width: 250px;
}
.fiels-input{
    & > span{
        font-size: 12px;
        color: #9e9e9e;
        margin-bottom: 5px;
    }
}
.login-input-pass{
    margin-top: 2px;
display: flex;
align-items: center;
gap: 20px;
padding: 10px 20px;
background-color: #ffffff;
    border-radius: 6px;
}
.gray-bg{
    background-color: #eef2f5;
}
.fiels-input{
    display: flex;
    flex-direction: column;
}
.login-title{
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 10px;
}
.forgot{
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 12px;
    color: #9e9e9e;
}
.login-btn{
    background-color: #8accf8;
    color: #ffffff;
    border: none;
    outline: none;
    padding: 9px 20px;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 8px;
    transition: .2s ease-in-out;
    &:hover{
        // make box shadow
        box-shadow: 0 13px 20px 10px rgba(151, 207, 244, 0.242);
    }
}
.create-btn{
    background-color: #ffffff;
    color: #8accf8;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s ease-in-out;
    &:hover{
        // make box shadow
        box-shadow: 0 13px 20px 10px rgba(151, 207, 244, 0.242);
    }
}
</style>