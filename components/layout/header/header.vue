<template>
	<div class="root w-[100vw] flex justify-center">
		<div class="main flex justify-between items-center max-[1240px] w-full py-3 px-5 max-w-[1240px]">
			<div class="content-left flex gap-5">
				<img class="h-[30px]"
					src="https://assets-global.website-files.com/6372338e5477e047032b37a5/6372be763e75b42883c24d2c_Shortcut%20Logo.svg"
					alt="">
				<div class="
				max-md:hidden
				menu-list text-sm flex gap-5 items-center">
					<div class="menu-item">
						<a href="#">Trang chủ</a>
					</div>
					<div class="menu-item">
						<a href="#">Về LTES</a>
					</div>
					<div class="menu-item cursor-pointer">
						<a href="https://www.facebook.com/traihekinang">Liên hệ</a>
					</div>
					<button class="bg-[#131e2f] rounded-10 py-2 px-3 border-solid border-1 border-[#2b3544]">Switch
						now</button>
				</div>
			</div>
			<div class="content-right">
				<button
				@click="active = true"
				class="
					text-sm
					flex justify-center rounded-md py-2 px-2 text-white rounded-5 items-center bg-[#3a95c9]">Sign up now</button>
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
		open() {
			this.active = true
		},
		close() {
			this.active = false
		},
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