import io from 'socket.io-client'
const socket = io.connect(process.env.SOCKETIO_URL, {secure: true,forceNew: true,
	transports: ["polling"]})
export default socket