<template>
    <div class="login-container">
        <div class="login-content-main">
            <img src="~/assets/img/bg-login.png" alt="" class="login-img-banner">
            <div class="login-fiels">
                <h1 class="login-title">Create Your Account hi :)</h1>
                <p class="login-subtitle">Welcome to our website, </p>
                <div class="login-input-email" :class="[{'gray-bg' : email.length > 0}]">
                    <img src="~/assets/img/mail.png" alt="" class="input-email-img">
                    <div class="fiels-input">
                        <span>Email address</span>
                        <input :class="[{'gray-bg' : email.length > 0}]" type="email" v-model="email" placeholder="Email" class="input-email">
                    </div>
                </div>
                <div class="infor-more">
                    <div class="login-input-name" :class="[{'gray-bg' : name.length > 0}]">
                    <img src="~/assets/img/mail.png" alt="" class="input-email-img">
                    <div class="fiels-input">
                        <span>Name</span>
                        <input :class="[{'gray-bg' : name.length > 0}]" type="text" v-model="name" placeholder="First name" class="input-email">
                    </div>
                </div>
                </div>
                <div class="login-input-pass" :class="[{'gray-bg' : password.length > 0}]">
                    <img src="~/assets/img/lock.png" alt="" class="input-email-img">
                    <div class="fiels-input">
                        <span>Password</span>
                        <input :class="[{'gray-bg' : password.length > 0}]" type="password" v-model="password" placeholder="Password" class="input-email">
                    </div>
                </div>
                <div class="login-input-pass" :class="[{'gray-bg' : confirm_password.length > 0}]">
                    <img src="~/assets/img/lock.png" alt="" class="input-email-img">
                    <div class="fiels-input">
                        <span>Confirm password</span>
                        <input :class="[{'gray-bg' : confirm_password.length > 0}]" type="password" v-model="confirm_password" placeholder="Password" class="input-email">
                    </div>
                </div>
                
                <!-- <span class="forgot">Forgot password?</span> -->
                <div class="login-list-btn">
                    <button class="login-btn" @click="signup()">SIGN UP</button>
                    <button class="create-btn" @click="$router.push('/login')">BACK TO LOGIN</button>
					<button @click="showToast('error','ok')"> áodjslkdja</button>
					
				</div>
            </div>
        </div>
    </div>
</template>
<script>
import process from 'process';

export default {
    name: 'login',
	layout:'empty',
	auth:false,
    data() {
        return {
            email: '',
            password: '',
            confirm_password: '',
            name: '',
			err: ''
        }
    },
	mounted(){
		if (this.$auth.loggedIn){
			this.$router.push('/')
		}
	},
    methods: {
		showToast(status,message) {
			try{
			status == "success" ? this.$toast.success(message ? message : "Thành công") : this.$toast.error(message ? message : "Thất bại");
			}
			catch(err){
				console.log(err);
			}
		},
        signup() {
            this.$axios.$post(`/auth/register`,
            {
                email: this.email,
                password: this.password,
				name : this.name,
				confirm_password : this.confirm_password
            })
                .then(res => {
					this.showToast("success","Đăng ký thành công");
					this.$router.push('/login')
                    console.log(res);
                })
                .catch(err => {
					this.showToast("error",err.response.data.message);
                    console.log(err);
                })
        }
    }
}
</script>
<style lang="scss" scoped>
span,p{
    margin: 0;
}
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
	@media screen and (max-width:768px) {
		
	}
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
	@media screen and (max-width:768px) {
		height: fit-content;
	}
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
    width: 100%;
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
    margin-bottom: 20px;
}

.fiels-input{
    display: flex;
    flex-direction: column;
    width: 100%;
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
		background-color: #38aefd;
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
.infor-more{
    display: flex;
    gap: 20px;
    margin: 20px 0;
	@media screen and (max-width:768px) {
		flex-direction: column;
	}
}
.login-input-name{
    display: flex;
    align-items: center;
    gap: 20px;
	width: 100%;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 6px;
    input {
		width: 100%;
    }
}
.gray-bg{
    background-color: #eef2f5;
}
</style>