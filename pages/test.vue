<template>
	<div class="fixed bottom-5 right-2">
	  <div>
		<div class="relative max-w-[365px] max-h-[400px]">
			<div class="bg-[rgba(255,255,255,0.08)] z-20 w-[30px] h-[30px] absolute -top-3 left-2 cursor-pointer rounded-full flex justify-center items-center">
				<i class="fi fi-br-cross-small block h-[19px]"></i>
			</div>
			<ChatPage class="z-10"/>
		</div>
	  </div>
	  <div>

	  </div>
	</div>
  </template>
  
  <script>
  import io from 'socket.io-client';
  import ChatPage from '../components/chat/ChatPage.vue';
  export default {
	components: {
	  ChatPage,
	},
	auth: false,
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
  <style scoped>
  @import url('https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css');
  </style>