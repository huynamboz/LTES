import io from 'socket.io-client'
const socket = io(process.env.SOCKETIO_URL)
export default socket