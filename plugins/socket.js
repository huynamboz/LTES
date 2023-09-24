import io from 'socket.io-client'
const socket = io.connect(process.env.SOCKETIO_URL, {secure: true,forceNew: true,
	path: "/ws/",
	transports: ["websocket", "polling", "flashsocket"]})
export default socket