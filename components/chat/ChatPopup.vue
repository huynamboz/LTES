<template>
	<div class="fixed bottom-5 right-2 z-[9999]">
		<div :class="{'hide-popup': !openPopup}" class="relative max-w-[365px] w-[365px] max-h-[600px]">
			<div
			@click="openPopup = false"
				class="bg-[rgba(255,255,255,0.08)] z-20 w-[30px] h-[30px] absolute -top-3 left-2 cursor-pointer rounded-full flex justify-center items-center">
				<i class="fi fi-br-cross-small block h-[19px]"></i>
			</div>
			<ChatPage class="z-10" />
		</div>
		<div @click="openPopup = true" class="bg-[rgba(255,255,255,0.08)] absolute bottom-0 right-0 cursor-pointer w-[150px] h-[60px] rounded-xl p-2 text-sm" v-if="!openPopup">
			Trò chuyện cùng LTES
		</div>
	</div>
</template>
<script>
import ChatPage from './ChatPage.vue';
export default {
	components: {
		ChatPage,
	},
	auth: false,
	data() {
		return {
			openPopup: true,
		}
	},
	mounted() {
		// Connect to the Socket.io server
		//   const socket = io('http://localhost:3000'); // Use your server URL here

		//   // Listen for events from the server
		//   socket.on('connect', () => {
		// 	console.log('Connected to Socket.io server');
		//   });

		//   socket.on('disconnect', () => {
		// 	console.log('Disconnected from Socket.io server');
		//   });
		//   socket.on('serverEvent', (data) => {
		//   console.log('Received from server:', data);
		//   this.message = data.message; // Update the message in your data
		// });
		//   // You can also emit events to the server
		//   setTimeout(() => {
		// 	socket.emit('SEND', { message: 'Hello from client!' });
		//   }, 1000);
	},
};
</script>
<style lang="scss" scoped>
@import url('https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css');
.hide-popup {
	animation: zoomOutAndFadeToRight 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
@keyframes zoomOutAndFadeToRight {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: scale(0.475) translate3d(150px, 0, 0);
	}
}
</style>