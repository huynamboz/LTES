<template>
	<section>
		
		<div class="w-full flex justify-center mt-20 relative z-20 px-5">
			<img src="~/assets/img/glow-new.png" class="w-full z-10 h-full absolute top-0" alt="">
			<div class="w-[600px] bg-[#2d2d3c] h-fit max-md:w-full relative z-20 rounded-lg p-4 card-item">
				<h1 class="text-center font-bold hight-light-title text-2xl">Kết quả ứng tuyển</h1>
				<p class="mt-4 text-sm">Lời đầu tiên tụi mình cám ơn các bạn đã tham gia ứng tuyển để trở thành camper của
					trại hè <b>THE OUTCASTS ACADEMY 2023</b>, sau vòng phỏng vấn tụi mình đã
					chọn ra được những ứng viên tiềm năng nhất có thể trở thành camper chính thức của trại hè.
					<br> Các bạn vui lòng nhập email hoặc số điện thoại đã đăng ký để xem kết quả nhé.
				</p>
				<div class="mt-5 flex gap-4">
					<div
						class="border-0 flex w-[80%] bg-[rgba(255,255,255,.08)] text-xs p-1 py-2 pr-5 h-[33px] pl-2 rounded-lg">
						<img v-if="doneLoading" src="~/assets/icon/loading.gif" class="w-[18px] mr-2" alt="">
						<input v-model="key" placeholder="Nhập email hoặc số điện thoại" type="email" class=" bg-transparent w-full">
					</div>
					<button class="bg-[rgba(255,255,255,.08)] hover:shadow-lg text-xs p-1 py-2 px-5 rounded-lg"
						@click="getData()">Submit</button>
				</div>
			<div class="flex gap-2 mt-4">
				<p class="text-xs">Nếu bạn có thắc mắc gì hãy nhắn tin cho bọn mình nhé</p>
				<a href="https://m.me/779706172199114" target="_blank" class="block">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
					<path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
				</svg>
				</a>
			</div>
				<!-- <div class="w-full flex justify-center mt-5" v-if="data">
					<p class="hight-light-title text-2xl text-center">Bạn đã trở thành camper chính thức của trại hè LTES
						2023</p>
				</div> -->
			</div>
			
			<vs-dialog width="550px" not-center not-close blur v-model="show">
				<div class="absolute z-[9999] w-[300px] h-[300px] left-[48%] -top-[187px] max-md:left-[40%] max-md:bottom-[20px] " v-if="show">
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800"
							style="enable-background:new 0 0 800 800;" xml:space="preserve">
							<g class="confetti-cone">
								<path class="conf0"
									d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l65.5-170.7L131.5,172.6z" />
								<path class="conf1"
									d="M131.5,172.6L196,343c2.3,6.1,11,6.1,13.4,0l6.7-17.5l-53.6-152.9L131.5,172.6z" />

								<path class="conf2" d="M274.2,184.2c-1.8,1.8-4.2,2.9-7,2.9l-129.5,0.4c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.9-9.9l129.5-0.4
     				c5.4,0,9.8,4.4,9.8,9.8C277,180,275.9,182.5,274.2,184.2z" />
								<polygon class="conf3" points="231.5,285.4 174.2,285.5 143.8,205.1 262.7,204.7 			" />
								<path class="conf4" d="M166.3,187.4l-28.6,0.1c-5.4,0-9.8-4.4-9.8-9.8c0-5.4,4.4-9.8,9.9-9.9l24.1-0.1c0,0-2.6,5-1.3,10.6
     				C161.8,183.7,166.3,187.4,166.3,187.4z" />
								<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -89.8523 231.0278)" class="conf2"
									cx="233.9" cy="224" rx="5.6" ry="5.6" />
								<path class="conf5" d="M143.8,205.1l5.4,14.3c6.8-2.1,14.4-0.5,19.7,4.8c7.7,7.7,7.6,20.1-0.1,27.8c-1.7,1.7-3.7,3-5.8,4l11.1,29.4
     				l27.7,0l-28-80.5L143.8,205.1z" />
								<path class="conf2"
									d="M169,224.2c-5.3-5.3-13-6.9-19.7-4.8l13.9,36.7c2.1-1,4.1-2.3,5.8-4C176.6,244.4,176.6,231.9,169,224.2z" />
								<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.0946 221.1253)" class="conf6"
									cx="207.4" cy="254.3" rx="11.3" ry="11.2" />
							</g>

							<rect x="113.7" y="135.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -99.5348 209.1582)"
								class="conf7" width="178" height="178" />
							<line class="conf7" x1="76.8" y1="224.7" x2="328.6" y2="224.7" />
							<polyline class="conf7" points="202.7,350.6 202.7,167.5 202.7,98.9 	" />
							<!-- here comes the confettis-->

							<circle class="conf2" id="b1" cx="195.2" cy="232.6" r="5.1" />
							<circle class="conf0" id="b2" cx="230.8" cy="219.8" r="5.4" />
							<circle class="conf0" id="c2" cx="178.9" cy="160.4" r="4.2" />
							<circle class="conf6" id="d2" cx="132.8" cy="123.6" r="5.4" />
							<circle class="conf0" id="d3" cx="151.9" cy="105.1" r="5.4" />

							<path class="conf0" id="d1" d="M129.9,176.1l-5.7,1.3c-1.6,0.4-2.2,2.3-1.1,3.5l3.8,4.2c1.1,1.2,3.1,0.8,3.6-0.7l1.9-5.5
      		C132.9,177.3,131.5,175.7,129.9,176.1z" />
							<path class="conf6" id="b5" d="M284.5,170.7l-5.4,1.2c-1.5,0.3-2.1,2.2-1,3.3l3.6,3.9c1,1.1,2.9,0.8,3.4-0.7l1.8-5.2
      		C287.4,171.9,286.1,170.4,284.5,170.7z" />
							<circle class="conf6" id="c3" cx="206.7" cy="144.4" r="4.5" />
							<path class="conf2" id="c1" d="M176.4,192.3h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2
      		C179.3,191,178,192.3,176.4,192.3z" />
							<path class="conf2" id="b4" d="M263.7,197.4h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2
      		C266.5,196.1,265.2,197.4,263.7,197.4z" />
							<!-- yellow-strip-1-->
							<path id="yellow-strip" d="M179.7,102.4c0,0,6.6,15.3-2.3,25c-8.9,9.7-24.5,9.7-29.7,15.6c-5.2,5.9-0.7,18.6,3.7,28.2
      		c4.5,9.7,2.2,23-10.4,28.2" />
							<path class="conf8" id="yellow-strip"
								d="M252.2,156.1c0,0-16.9-3.5-28.8,2.4c-11.9,5.9-14.9,17.8-16.4,29c-1.5,11.1-4.3,28.8-31.5,33.4" />
							<path class="conf0" id="a1" d="M277.5,254.8h-3.2c-1.6,0-2.9-1.3-2.9-2.9v-3.2c0-1.6,1.3-2.9,2.9-2.9h3.2c1.6,0,2.9,1.3,2.9,2.9v3.2
      		C280.4,253.5,279.1,254.8,277.5,254.8z" />
							<path class="conf3" id="c4" d="M215.2,121.3L215.2,121.3c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3l0,0c-0.5,0.4-0.7,1.1-0.6,1.7v0
      		c0.3,1.6-1.4,2.8-2.8,2l0,0c-0.6-0.3-1.2-0.3-1.8,0h0c-1.4,0.7-3.1-0.5-2.8-2v0c0.1-0.6-0.1-1.3-0.6-1.7l0,0
      		c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1v0C212.5,119.8,214.5,119.8,215.2,121.3z" />
							<path class="conf3" id="b3" d="M224.5,191.7L224.5,191.7c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3v0c-0.5,0.4-0.7,1.1-0.6,1.7l0,0
      		c0.3,1.6-1.4,2.8-2.8,2h0c-0.6-0.3-1.2-0.3-1.8,0l0,0c-1.4,0.7-3.1-0.5-2.8-2l0,0c0.1-0.6-0.1-1.3-0.6-1.7v0
      		c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1l0,0C221.7,190.2,223.8,190.2,224.5,191.7z" />
							<path class="conf3" id="a2" d="M312.6,242.1L312.6,242.1c0.3,0.6,0.8,1,1.5,1.1l0,0c1.6,0.2,2.2,2.2,1.1,3.3l0,0c-0.5,0.4-0.7,1.1-0.6,1.7v0
      		c0.3,1.6-1.4,2.8-2.8,2l0,0c-0.6-0.3-1.2-0.3-1.8,0h0c-1.4,0.7-3.1-0.5-2.8-2v0c0.1-0.6-0.1-1.3-0.6-1.7l0,0
      		c-1.1-1.1-0.5-3.1,1.1-3.3l0,0c0.6-0.1,1.2-0.5,1.5-1.1v0C309.9,240.6,311.9,240.6,312.6,242.1z" />
							<path class="conf8" id="yellow-strip" d="M290.7,215.4c0,0-14.4-3.4-22.6,2.7c-8.2,6.2-8.2,23.3-17.1,29.4c-8.9,6.2-19.8-2.7-32.2-4.1
      		c-12.3-1.4-19.2,5.5-20.5,10.9" />
						</svg>
					</div>
				<template #header>
					<h4 class="not-margin hight-light-title text-xl text-center">
						XIN CHÚC MỪNG
					</h4>
				</template>


				<div class="con-content">
					<p class="text-gray-800">
						Chúc mừng bạn <b>{{ data.name }}</b> đã trở thành camper chính thức của trại hè <b>THE OUTCASTS
							ACADEMY 2023</b>
						<br> Chúc bạn có những trải nghiệm thật thú vị tại trại hè nhé.
					</p>
					<p class="text-gray-800">
						Chúng mình sẽ gửi email cho bạn vào địa chỉ <b>{{ data.email }}</b> để xác 
						nhận thông tin và hướng dẫn các bước tiếp theo sau khi có thông báo chính thức trên fanpage
						LTES - Let's Fly High nha.
						<br> Và đừng quên tham gia discord của tụi mình tại <a href="https://discord.gg/Q6uQfHN9xa" target="_blank" class="text-blue-500">đây</a> nhé
					</p>
				</div>

				<template #footer>
					<div class="con-footer text-gray-800">
						
					</div>
				</template>
			</vs-dialog>


		</div>
	</section>
</template>
<script>
export default {
	auth: false,
	data() {
		return {
			data: {
				name: '',
				email: ''
			},
			doneLoading: false,
			key: "",
			show: false
		}
	},
	watch: {
		show() {
			console.log(this.show)
		}
	},
	mounted() {
	},
	methods: {
		async getData() {
			if (!this.key.trim()) {
				this.$toast.error("Hãy nhập email hoặc số điện thoại nhé")
				return;
			}
			this.doneLoading = true;
			await this.$axios.get('https://api.ltesletsflyhigh.com/ltes/' + this.key.trim())
				.then(res => {
					this.data = res.data.data;
					this.show = true;
				})
				.catch(err => {
					this.$toast.error("Không tìm thấy thông tin của bạn, vui lòng kiểm tra lại email hoặc số điện thoại nhé")
				})
			this.doneLoading = false;
		}
	}
}
</script>
<style scoped lang="scss">
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232300;
}
.card-item {
	-webkit-backdrop-filter: blur(16px);
	backdrop-filter: blur(16px);
	// cursor: pointer;
	background-color: rgba(255, 255, 255, .08);
	border: 1px solid rgba(255, 255, 255, .08);

}

.blur {
	--tw-blur: unset;
	filter: unset;
	z-index: 76;
}

.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #e88d35, #e68b3d 38%, #cb65a5 75%, #bc51de);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}

.conf0 {
	fill: #FC6394;
}

.conf1 {
	fill: #EF3C8A;
}

.conf2 {
	fill: #5ADAEA;
}

.conf3 {
	fill: #974CBE;
}

.conf4 {
	fill: #3CBECD;
}

.conf5 {
	fill: #813BBE;
}

.conf6 {
	fill: #F9B732;
}

.conf7 {
	display: none;
	fill: none;
	stroke: #000000;
	stroke-miterlimit: 10;
}

.conf8 {
	fill: none;
	stroke: #F9B732;
	stroke-width: 9;
	stroke-linecap: round;
	stroke-miterlimit: 10;
}


.confetti-cone {
	transform-origin: 200px 50px;
	animation: confetti-cone1 1.2s ease infinite;
}

@keyframes confetti-cone1 {
	0% {
		transform: translate(40px, 95px) rotate(45deg) scale(1, 1);
	}

	15% {
		transform: translate(10px, 145px) rotate(45deg) scale(1.1, 0.85);

	}

	100% {
		transform: translate(40px, 105px) rotate(45deg) scale(1, 1);
	}
}

#yellow-strip {
	fill: none;
	stroke: #F9B732;
	stroke-width: 9;
	stroke-linecap: round;
	stroke-miterlimit: 10;
	animation: confdash 1.2s ease infinite;
}


@keyframes confdash {
	0% {
		stroke-dasharray: 1000;
		stroke-dashoffset: 500;
		transform: translate(-30px, 30px);
		opacity: 0;
	}

	2% {
		stroke-dasharray: 1000;
		stroke-dashoffset: 500;
		transform: translate(-30px, 30px);
		opacity: 0;
	}

	35% {
		stroke-dasharray: 1000;
		stroke-dashoffset: 900;
		transform: translate(-2px, 0px);
		opacity: 1;
	}

	85% {
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		transform: translate(1px, -5px);
		opacity: 1;
	}

	90% {
		stroke-dashoffset: 1000;
		stroke-dashoffset: 1000;
		transform: translate(2px, -8px);
		opacity: 0;
	}

	100% {
		stroke-dashoffset: 1000;
		stroke-dashoffset: 500;
		transform: translate(2px, -8px);
		opacity: 0;
	}
}



#a2 {
	transform-origin: 310.9px 241px;
	animation: confa 1.2s ease-out infinite;
}

#a1 {
	transform-origin: 276px 246px;
	animation: confa 1.2s ease-out infinite;
}

@keyframes confa {
	0% {
		opacity: 0;
		transform: translate(-30px, 20px) rotate(0);
	}

	15% {
		opacity: 1;
		transform: translate(25px, -10px) rotate(60deg);
	}

	80% {
		opacity: 1;
		transform: translate(33px, -18px) rotate(180deg);
	}

	100% {
		opacity: 0;
		transform: translate(37px, -23px) scale(0.5)rotate(230deg);
	}
}


#b1 {
	transform-origin: 195.2px 232.6px;
	animation: confb 1.2s ease-out infinite;
}

#b2 {
	transform-origin: 230.8px 219.8px;
	animation: confb 1.2s ease-out infinite;
}

#b3 {
	transform-origin: 222.8px 190.6px;
	animation: confb 1.2s ease-out infinite;
}

#b4 {
	transform-origin: 262px 188.5px;
	animation: confb 1.2s ease-out infinite;
}

#b5 {
	transform-origin: 282.3px 170.6px;
	animation: confb 1.2s ease-out infinite;
}


@keyframes confb {
	0% {
		opacity: 0;
		transform: translate(-30px, 20px) rotate(0);
	}

	12% {
		opacity: 1;
		transform: translate(25px, -10px) rotate(60deg);
	}

	76% {
		opacity: 1;
		transform: translate(33px, -18px) rotate(180deg);
	}

	100% {
		opacity: 0;
		transform: translate(37px, -23px) scale(0.5) rotate(240deg);
	}
}

#c1 {
	transform-origin: 174.8px 183.4px;
	animation: confc 1.2s ease-out infinite;
}

#c2 {
	transform-origin: 178.9px 156.2px;
	animation: confc 1.2s ease-out infinite;
}

#c3 {
	transform-origin: 206.7px 140px;
	animation: confc 1.2s ease-out infinite;
}

#c4 {
	transform-origin: 213.5px 120.2px;
	animation: confc 1.2s ease-out infinite;
}

@keyframes confc {
	0% {
		opacity: 0.7;
		transform: translate(-30px, 20px) rotate(0);
	}

	18% {
		opacity: 1;
		transform: translate(5px, -10px) rotate(60deg);
	}

	76% {
		opacity: 1;
		transform: translate(13px, -18px) rotate(180deg);
	}

	100% {
		opacity: 0;
		transform: translate(17px, -23px) scale(0.5) rotate(230deg);
	}
}

#d1 {
	transform-origin: 127px 176px;
	animation: confd 1.2s ease-out infinite;
}

#d2 {
	transform-origin: 133px 118px;
	animation: confd 1.2s ease-out infinite;
}

#d3 {
	transform-origin: 152px 100px;
	animation: confd 1.2s ease-out infinite;
}

@keyframes confd {
	0% {
		opacity: 0.7;
		transform: translate(-20px, 20px) rotate(0);
	}

	18% {
		opacity: 1;
		transform: translate(-5px, -10px) rotate(60deg);
	}

	76% {
		opacity: 1;
		transform: translate(-8px, -18px) rotate(180deg);
	}

	100% {
		opacity: 0;
		transform: translate(-10px, -23px) scale(0.5) rotate(230deg);
	}
}
</style>