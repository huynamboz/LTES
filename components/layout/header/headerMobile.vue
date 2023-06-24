<template>
	<div class=" w-[100vw] hidden fixed z-[999] max-md:top-3 justify-center">
		<div class="root hidden max-md:flex h-[52px] justify-center items-center w-[90%] rounded-3xl">
			<div class="
				menu-list text-sm flex gap-5 items-center">
					<div class="menu-item">
						<div @click="toHome()">Trang chủ</div>
					</div>
					<div class="menu-item">
						<a href="#">Về LTES</a>
					</div>
					<div class="menu-item cursor-pointer">
						<a href="https://www.facebook.com/traihekinang">Liên hệ</a>
					</div>
					<button 
					@click="moreInfo()"
					class="bg-[#131e2f] rounded-2xl py-2 px-3 border-solid border-1 border-[#2b3544]">Đăng ký trại</button>
				</div>
		</div>

		<vs-dialog not-close v-model="active">
		<template #header>
			<h4 class="not-margin">
				Welcome to <b>LTES</b>
			</h4>
		</template>


		<div class="con-form">
			<vs-input v-model="input1" width="500px" placeholder="Email">
				<template #icon>
					@
				</template>
			</vs-input>
			<vs-input type="password" v-model="input2" placeholder="Password">
				<template #icon>
					<i class='bx bxs-lock'></i>
				</template>
			</vs-input>
			<div class="flex">
				<!-- <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox> -->
				<a href="#">Forgot Password?</a>
			</div>
		</div>

		<template #footer>
			<div class="footer-dialog">
				<vs-button block>
					Sign In
				</vs-button>

				<div class="new">
					New Here? <a href="#">Create New Account</a>
				</div>
			</div>
		</template>
		</vs-dialog>


	</div>
</template>
<script>
export default {
	data() {
		return {
			active: false,
			input1: '',
			input2: '',
			checkbox1: false,
		}
	},
	methods: {
		moreInfo(){
			try {
				let el = document.getElementById('time-line');
				console.log(el);
					el.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			} catch (error) {
				console.log(error);
			}
		},
		open() {
			this.active = true
		},
		close() {
			this.active = false
		},
		toHome(){
			this.$router.push('/');
			window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		}
	}
}
</script>

<style lang="scss" scoped>
.vs-input{
	width: 100 !important;
}
.root {
	-webkit-backdrop-filter: blur(16px);
	backdrop-filter: blur(16px);
	background-color: rgba(255, 255, 255, .08);
	border: 1px solid rgba(255, 255, 255, .08);
}
</style>