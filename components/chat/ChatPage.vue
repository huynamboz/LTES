<template>
	<section class="flex w-full h-full justify-center">
		<div
			class="card-item rounded-xl w-[90%] max-md:w-full h-[400px] max-md:h-[500px] flex flex-col p-2 items-center relative">
			<img src="~/assets/img/glow-new.png" class="w-full h-full absolute top-0 z-0" alt="">
			<p class="text-xl font-bold hight-light-title">Trò chuyện</p>
			<div id="message-container" class="h-full w-full overflow-y-scroll gap-2 flex flex-col relative z-10 pb-6 px-5">
				<div v-for="(item, index) in messages" class="flex flex-col rounded-xl"
					:class="{ 'ml-[auto] flex flex-col items-end': item.user_id == user.id && item?.type != 'join', 'items-center': item?.type == 'join' }">

					<p class="font-light text-xs" v-if="item?.type == 'join'"><b>{{ item.name }}</b> vừa tham gia phòng chat
					</p>

					<p class="text-sm" v-if="item.role != 'admin' && item.role != $config.ID_ADMIN && item?.type != 'join'"
						:class="{ 'mr-1 hidden': item.user_id == user.id }">{{ item.name }}</p>

					<p class="text-sm flex gap-1"
						v-if="item.role == 'admin' || item.role == $config.ID_ADMIN && item?.type != 'join'"
						:class="{ 'mr-1 hidden': item.user_id == user.id }">
						<span v-if="item.role == 'admin'" class="hight-light-name">Hỗ trợ: </span>
						<span v-else class="hight-light-name">admin: </span>
						{{ item.name }}
						<img src="~/assets/icon/verify.png" class="w-[18px] h-[18px]" alt="">
					</p>

					<div class="flex group items-center gap-2"
						:class="{ 'flex-row-reverse justify-end': item.user_id != user.id }">
						<i @click="openDelete = true; messageDelete = item"
							v-if="user.role == $config.ID_ADMIN && item?.type != 'join'"
							class="hidden group-hover:block fi fi-rr-trash"></i>
						<p v-if="item?.type != 'join' && item?.type != 'delete'"
							class="w-fit text-sm rounded-xl max-w-[350px] max-md:max-w-[200px] break-words"
							:class="{ ' mess-owner': item.user_id == user.id, ' mess-sender': item.user_id != user.id }">
							{{ item.message }}
						</p>
						<p v-if="item?.type == 'delete'"
							class="w-fit rounded-xl max-w-[350px] max-md:max-w-[200px] break-words"
							:class="{ ' mess-owner': item.user_id == user.id, ' mess-sender': item.user_id != user.id }">
							<i class="text-xs">Bị admin xóa</i>
						</p>
					</div>

				</div>
			</div>
			<div class="absolute bottom-14 text-sm " v-if="unread">Tin nhắn chưa đọc <i class="fi fi-rr-arrow-down"></i></div>
			<div class="flex gap-5 w-full relative z-10 px-2 justify-center">
				<img v-if="isLogin" src="~/assets/icon/edit.png" class="w-[20px] object-contain"
					@click="openRenameName = true" alt="">
				<div v-if="isLogin" class="border-[1px] border-[rgba(255,255,255,.08)] rounded-lg p-2 w-[100%]">
					<input @keyup.enter="sendMess()" maxlength="600" v-model="message" type="text"
						placeholder="tin nhắn...." class=" bg-transparent w-full">
				</div>
				<button v-if="isLogin" @click="sendMess()" class="mr-2">Gửi</button>
				<div v-else class="bg-[rgba(255,255,255,.08)] py-2 px-3 rounded-xl cursor-pointer" @click="openInputName = true"> Nhập tên
					để trò chuyện nào</div>
			</div>
		</div>
		<vs-dialog v-model="openDelete">
			<template #header>
				<h4 class="not-margin">
					<b class="text-gray-700">Xác nhận</b>
				</h4>
			</template>
			<p class="text-center text-gray-900">Mún xóa tin nhắn hã, khum đc dow, thu hồi được hoi</p>
			<template #footer>
				<vs-button @click="updateMessage()">Đồng ý</vs-button>
			</template>
		</vs-dialog>

		<vs-dialog v-model="openInputName">
			<template #header>
				<h4 class="not-margin">
					<b class="text-gray-700">Nhập tên để băt đầu cuộc trò chuyện</b>
				</h4>
			</template>
			<input type="text" v-model="user.name" @keyup.enter="login()"
				class=" bg-slate-300 w-full p-2 rounded-lg text-gray-950">
			<template #footer>
				<vs-button @click="login('JOIN')">Đồng ý</vs-button>
			</template>
		</vs-dialog>

		<vs-dialog v-model="openRenameName">
			<template #header>
				<h4 class="not-margin">
					<b class="text-gray-700">Đổi tên</b>
				</h4>
			</template>
			<input type="text" v-model="user.name" @keyup.enter="rename()"
				class=" bg-slate-300 w-full p-2 rounded-lg text-gray-950">
			<template #footer>
				<vs-button @click="rename()">Đồng ý</vs-button>
			</template>
		</vs-dialog>
	</section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
	computed: {
		...mapState(['message_store']), // Kết nối state `message_store` từ Vuex store vào component
	},
	watch: {
		message_store(newValue, oldValue) {
			switch (newValue.type) {
				case 'delete':
					const index = this.messages.findIndex((item) => item.id == newValue.id);
					this.messages[index].type = 'delete';
					break;
				case 'join':
				case 'send':
					this.messages.push(newValue);
					break;
				default:
					break;
			}
			this.$nextTick(() => {
				let listCard = document.getElementById("message-container");
				if (this.checkBottom(listCard)) {
					listCard.scrollTop = listCard.scrollHeight;
				}
			});
		},
	},
	data() {
		return {
			messages: [],
			message: '',
			openRenameName: false,
			unread: false,
			user: {
				name: '',
				id: '',
				role: '',
			},
			isLogin: false,
			openInputName: false,
			openDelete: false,
			messageDelete: '',
		}
	},
	mounted() {
		this.initSocket();
		this.getIdLocalStorage();
		this.getMessage();
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
		...mapActions(['initSocket']),
		async updateMessage() {
			try {
				this.$axios.delete('https://api.ltesletsflyhigh.com/messages/'+ this.messageDelete.id)
				.then((res) => {
					this.openDelete = false;
				})
			} catch (error) {
				this.openDelete = false;
				console.log(error);
			}
		},
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
				} else if (this.user.name.includes(`#${this.$config.ID_ADMIN}#`)) {
					this.user.role = this.$config.ID_ADMIN;
					this.user.name = this.user.name.replace(`#${this.$config.ID_ADMIN}#`, "").trim();
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
		async login() {
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
				} else if (this.user.name.includes(`#${this.$config.ID_ADMIN}#`)) {
					this.user.role = this.$config.ID_ADMIN;
					this.user.name = this.user.name.replace(`#${this.$config.ID_ADMIN}#`, "").trim();
				} else {
					this.user.role = 'user';
				}
				localStorage.setItem('user', JSON.stringify(this.user));
				this.$axios.post('https://api.ltesletsflyhigh.com/messages', {
					user_id: this.user.id,
					name: this.user.name,
					role: this.user.role,
					type: 'join',
				})
				var container = document.getElementById("message-container");
				container.scrollTop = container.scrollHeight + 20;
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
		checkBottom(el) {
			if (el.scrollTop + el.clientHeight + 200 >= el.scrollHeight) {
				return true;
			} else {
				return false;
			}
		},
		async getMessage() {
			try {
				await this.$axios.get('https://api.ltesletsflyhigh.com/messages').then((res) => {
					this.messages = res.data.data;
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
					this.$axios.post('https://api.ltesletsflyhigh.com/messages', {
						user_id: this.user.id,
						name: this.user.name,
						role: this.user.role,
						message: this.message.trim(),
						type: 'send',
					})
					this.message = '';
					var container = document.getElementById("message-container");
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
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

.card-item {
	-webkit-backdrop-filter: blur(16px);
	backdrop-filter: blur(16px);
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
}</style>