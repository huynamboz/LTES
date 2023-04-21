import Vue from 'vue'
import Toast from 'vue-toastification'

Vue.use(Toast, {
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  containerClassName: 'my-toast-container',
  icon: true,
  rtl: false
})
export default ({ app }, inject) => {
	inject('toast', Vue.prototype.$toast)
  }