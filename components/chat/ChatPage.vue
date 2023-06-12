<template>
	<section class="flex justify-center">
		<div class="card-item rounded-xl w-[90%] h-[400px] max-md:h-[500px] flex flex-col p-2 items-center relative">
			<img src="~/assets/img/glow-new.png" class="w-full h-full absolute top-0 z-0" alt="">
			<p class="text-xl font-bold hight-light-title">Trò chuyện</p>
			<div id="message-container" class="h-full w-full overflow-y-scroll gap-2 flex flex-col relative z-10 pb-6 px-5">
				<div v-for="(item, index) in messages" class="flex flex-col rounded-xl"
					:class="{ 'ml-[auto] flex flex-col items-end': item.id == user.id }">
					<p class="text-sm" v-if="item.role != 'admin'" :class="{ 'mr-1 hidden': item.id == user.id }">{{ item.name }}</p>
					<p class="text-sm flex gap-1" v-else :class="{ 'mr-1 hidden': item.id == user.id }">
						<span class="hight-light-name">Hỗ trợ: </span>
						{{ item.name }}
						<img src="~/assets/icon/verify.png" class="w-[18px] h-[18px]" alt="">
					</p>
					<p class="w-fit rounded-xl max-w-[350px] max-md:max-w-[200px] break-words"
						:class="{ ' mess-owner': item.id == user.id, ' mess-sender': item.id != user.id }">
						{{ item.message }}
					</p>
				</div>
			</div>
			<div class="flex gap-5 w-full relative z-10 px-2 justify-center">
				<img v-if="isLogin" src="~/assets/icon/edit.png" class="w-[20px] object-contain" @click="openRenameName = true" alt="">
				<div v-if="isLogin" class="border-[1px] border-[rgba(255,255,255,.08)] rounded-lg p-2 w-[100%]">
					<input @keyup.enter="sendMess()" maxlength="600" v-model="message" type="text" placeholder="tin nhắn...." class=" bg-transparent w-full">
				</div>
				<button v-if="isLogin" @click="sendMess()" class="mr-2">Gửi</button>
				<div v-else class="bg-[rgba(255,255,255,.08)] py-2 px-3 rounded-xl" @click="openInputName = true"> Nhập tên để trò chuyện nào</div>
			</div>
		</div>
		<vs-dialog v-model="openInputName">
			<template #header>
				<h4 class="not-margin">
					<b class="text-gray-700">Nhập tên để băt đầu cuộc trò chuyện</b>
				</h4>
			</template>
			<input type="text" v-model="user.name" @keyup.enter ="login()" class=" bg-slate-300 w-full p-2 rounded-lg text-gray-950">
			<template #footer>
				<vs-button @click="login()">Đồng ý</vs-button>
			</template>
		</vs-dialog>

		<vs-dialog v-model="openRenameName">
			<template #header>
				<h4 class="not-margin">
					<b class="text-gray-700">Đổi tên</b>
				</h4>
			</template>
			<input type="text" v-model="user.name" @keyup.enter ="rename()" class=" bg-slate-300 w-full p-2 rounded-lg text-gray-950">
			<template #footer>
				<vs-button @click="rename()">Đồng ý</vs-button>
			</template>
		</vs-dialog>
	</section>
</template>
<script>
import { database, ref, push, onValue } from '~/plugins/firebase.js';
export default {
	data() {
		return {
			messages: [],
			message: '',
			openRenameName: false,
			user: {
				name: '',
				id: '',
				role: '',
			},
			isLogin: false,
			openInputName: false,
		}
	},
	mounted() {
		this.getIdLocalStorage();
		console.log(this.user);
		this.getMessage();
		console.log(this.messages);
		let slideHeadPhone = new IntersectionObserver((entries, observer) => {
			// entries : Danh sách các đối tượng chúng ta theo dỏi
			entries.forEach(entry => {
				// Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
				if (entry.isIntersecting) {
					entry.target.scrollTop = entry.target.scrollHeight;
				}
			});
		}, { rootMargin: "0px 0px -200px 0px" });
		// nexttick
		this.$nextTick(() => {
			let listCard = document.getElementById("message-container");
			slideHeadPhone.observe(listCard);
		});

	},
	methods: {
		rename() {
			try {
				this.openRenameName = false;
				if (this.user.name.trim() == '') {
						this.$toast.error('Vui lòng nhập tên');
						return;
				}
				if (this.user.name.includes("#sp")) {
						this.user.role = 'admin';
						this.user.name = this.user.name.replace("#sp", "").trim();
					} else {
						this.user.role = 'user';
				}
				localStorage.setItem('user', JSON.stringify(this.user));
				this.isLogin = true;
				this.openRenameName = false;
			} catch (error) {
				console.log(error);
			}
		},
		login() {
			try {
				this.openInputName = false;
				this.user.id = this.generateUUID();
				if (this.user.name.trim() == '') {
					this.$toast.error('Vui lòng nhập tên');
					return;
				}
				if (this.user.name.includes("#sp")) {
					this.user.role = 'admin';
					this.user.name = this.user.name.replace("#sp", "").trim();
				} else {
					this.user.role = 'user';
				}
				localStorage.setItem('user', JSON.stringify(this.user));
				this.isLogin = true;
			} catch (error) {
				console.log(error);
			}
		},
		getIdLocalStorage() {
			try {
				const user = localStorage.getItem('user');
				if (!user) {
					this.isLogin = false;
					return;
				} else {
					this.isLogin = true;
					this.user = JSON.parse(user);
				}
			} catch (error) {
				console.log(error);
			}
		},
		async getMessage() {
			try {
				const messagesRef = ref(database, 'messages');
				await onValue(messagesRef, (snapshot) => {
					const data = snapshot.val();
					this.messages = Object.values(data);
					console.log("fet done");
					this.$nextTick(() => {
						let listCard = document.getElementById("message-container");
						listCard.scrollTop = listCard.scrollHeight;
					});
				})
			} catch (error) {
				console.log(error);
			}
		},
		generateUUID() {
			let d = new Date().getTime();
			if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
				d += performance.now(); // use high-precision timer if available
			}
			const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				const r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
			return uuid;
		},

		// methods
		async sendMess() {
			try {
				if (this.message.trim() == '') {
					this.$toast.error('Vui lòng nhập tin nhắn');
					return;
				} else {
					console.log(this.message.trim().length);
					await push(ref(database, 'messages'), {
						id: this.user.id,
						name: this.user.name,
						role: this.user.role,
						message: this.message.trim(),
					})
					this.message = '';
					var container = document.getElementById("message-container");
					//i want + 20px
					container.scrollTop = container.scrollHeight + 20;
				}
			} catch (error) {
				console.log(error);
			}
		}
	},
}
</script>
<style lang="scss" scoped>
.card-item {
	-webkit-backdrop-filter: blur(16px);
	backdrop-filter: blur(16px);
	cursor: pointer;
	background-color: rgba(255, 255, 255, .08);
	border: 1px solid rgba(255, 255, 255, .08);
	// &:hover{
	// 	box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
	// 	transform: translateY(-10px);
	// 	transition: all 0.3s ease-in-out;
	// }
}

.mess-owner {
	background-color: rgba(255, 255, 255, .08);
	border: 1px solid rgba(255, 255, 255, .08);
	padding: 5px 10px;
}

.mess-sender {
	background-color: rgba(255, 255, 255, .08);
	// border: 1px solid rgba(255, 255, 255, .08);
	padding: 5px 10px;
}

.hight-light-title {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #e88d35, #e68b3d 38%, #cb65a5 75%, #bc51de);
	-webkit-background-clip: text;
	background-clip: text;
	font-weight: 800;
}
.hight-light-name {
	-webkit-text-fill-color: transparent;
	background-image: radial-gradient(circle at 0 0, #e88d35, #e68b3d 38%, #cb65a5 75%, #bc51de);
	-webkit-background-clip: text;
	background-clip: text;
}
</style>