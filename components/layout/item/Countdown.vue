<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap'); */
@import url('./style.css');


</style>
<style>

</style>
<template>
	<body >
		<main id="countdown" class="p-4 rounded-lg text-center">
			<h1>Thời gian nhận đơn chỉ còn</h1>
			<div class='cards justify-center'>

				<div class='card days'>
					<div class='flip-card'>
						<div class='top-half'>00</div>
						<div class='bottom-half'>00</div>
					</div>
					<p>Ngày</p>
				</div>

				<div class='card hours'>
					<div class='flip-card'>
						<div class='top-half'>00</div>
						<div class='bottom-half'>00</div>
					</div>
					<p>Giờ</p>
				</div>

				<div class='card minutes'>
					<div class='flip-card'>
						<div class='top-half'>00</div>
						<div class='bottom-half'>00</div>
					</div>
					<p>Phút</p>
				</div>

				<div class='card seconds'>
					<div class='flip-card'>
						<div class='top-half'>00</div>
						<div class='bottom-half'>00</div>
					</div>
					<p>Giây</p>
				</div>

			</div>
		</main>
	</body>
</template>
  
<script>
import {initializeClock, countdown} from '~/plugins/countdown.js'
export default {
	auth: false,
	mounted() {
		setTimeout(() => {
			try {
				// run()
				initializeClock(countdown)
			} catch (error) {
				
			}
		}, 500);
	}
}
</script>
