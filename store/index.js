import io from 'socket.io-client';
import socket from "../plugins/socket.js"
export const state = () => ({
	message_store: null,
	socket: null
  })
  
  export const getters = {
	getMessageStore(state) {
	  return state.message_store
	}
  }
  
  export const mutations = {
	setMessageStore(state, data) {
	  state.message_store = data
	},
	setSocket(state, data) {
		console.log(data)
		state.socket = data
	}
  }
  
  export const actions = {
	initSocket({ commit }) {
	  // Khởi tạo kết nối socket
	//   const socket = io('http://localhost:3000');
  
	  // Lưu socket vào state
	//   commit('setSocket', io('http://localhost:3000'));
  
	  // Lắng nghe sự kiện 'connect'
	  socket.on('connect', () => {
		console.log('Connected to Socket.io server');
	  });
  
	//   // Lắng nghe sự kiện 'SEND' và cập nhật trạng thái message_store
	  socket.on('SEND', (data) => {
		commit('setMessageStore', data);
	  });
	}
  };