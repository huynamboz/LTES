<template>
	<div class="
	w-full 
	flex 
	justify-center 
	gap-10 pt-10
	max-md:flex-col ">
		<div class="
		max-md:w-full 
		w-[40%] flex flex-col">
			<p>CÙNG NHÌN LẠI</p>
			<p class=" flex gap-4 text-2xl font-semibold max-md:mb-2 mb-5">CÁC MÙA TRẠI TRƯỚC 
				<img src="~/assets/icon/rocket-mini.png" class=" w-[30px] h-[30px]" alt="">
			</p>
			<div class="flex flex-col gap-20 mt-10 max-md:gap-10">
				<detail-card class="card-previous card-previous-camp-left" :img="'https://i.imgur.com/LTohiqf.png'" :year="'2017'" :title="'Mùa trại UP 1'" :detail="'Trại hè UP 1 - mùa trại đầu tiên mở ra chuỗi dự án trại hè kỹ năng dành cho các bạn trẻ trên toàn địa bàn tỉnh Quảng Nam. Nguồn cảm hứng cho dự án này chính là một trại hè kỹ năng ở Singapore vào năm 2017. Với hình thức kết hợp các hoạt động học tập, rèn luyện kỹ năng cùng với các hoạt động team building, cuộc đua kỳ thú. Từ đó mà “UP 1” được nhen nhóm và ra đời. Đến với “UP 1”, các bạn không chỉ được quẩy thả ga mà còn được tham gia những hoạt động giúp khám phá những tiềm năng của bản thân và giúp trau dồi những kỹ năng cần thiết như lãnh đạo, teamwork, sáng tạo, thuyết trình,...'"/>
				<detail-card class="card-previous hidden max-md:block card-previous-camp-left" :title="'Mùa trại UP 2'" :year="'2018'" :img="'https://i.imgur.com/Mz94N8L.jpg'" :detail="'Để mang đến luồng gió mới, LTES có một sự thay đổi địa điểm, thay vì tổ chức ở Tam Kỳ như mùa trại trước, chúng mình quyết định trải nghiệm ở Tam Xuân, Núi Thành. Đến với “UP 2”, các bạn học viên được tham gia các hoạt động trở về tuổi thơ như bắt cá, các trò chơi teambuilding để nâng cao tinh thần đồng đội. Có lẽ, chúng ta dù lớn có lớn đến cỡ nào thì cũng khao khát có lại những niềm vui tuổi thơ… Đây chính là thông điệp mà LTES muốn mang lại cho các bạn trại sinh ở mùa trại năm ấy. '"/>
				<detail-card class="card-previous max-md:hidden card-previous-camp-right" :img="'https://i.imgur.com/SUmpVFW.jpg'" :year="'2019'" :title="'Mùa trại UP 3'" :detail="'Sau thành công rực rỡ của hai mùa trại UP, LTES tiếp tục đa dạng hóa các địa điểm và hình thức trải nghiệm cho trại sinh. Ở mùa trại này, chúng mình kết hợp cả hai hình thức: trên cạn và dưới nước. Đây có lẽ là lựa chọn mạo hiểm cho Ban Tổ Chức nhưng sẽ thêm phần kịch tính trong hành trình trại. Không biết liệu những bạn trại viên đắm mình vào dòng nước mát năm đó đã tha thứ cho LTES chúng mình chưa…'" />
				<detail-card class="max-md:hidden card-previous card-previous-camp-left" :title="'WARRIORS WANDERLUST'" :year="'2022'" :img="'https://i.imgur.com/hYqh9CU.png'" :detail="'Mùa trại WARRIORS WANDERLUST đánh dấu sự quay trở lại của LTES sau hai năm vắng bóng vì đại dịch Covid-19. Đây là trại hè hai ngày một đêm đầu tiên được LTES tổ chức tại phố cổ Hội An. Với nhiều thử thách đòi hỏi sự sáng tạo, vận dụng những kỹ năng mềm giúp các bạn trại viên khám phá được những nét đẹp văn hóa, lịch sử lâu đời tại Hội An. Bên cạnh đó, các bạn trẻ còn được tham gia những cuộc tranh biện nảy lửa, giải cứu người đội trưởng trong căn phòng bí ẩn, cũng như quẫy hết mình trong những trò teambuilding vui nhộn. Và chúng mình đã cùng nhau thắp lên ngọn lửa LTES, ngọn lửa của sự nhiệt huyết, của thanh xuân, sự đợi chờ suốt 5 năm của chúng mình.'"/>
			</div>
		</div>
		<div class="flex flex-col 
		max-md:w-full 
		gap-20 w-[40%]
		max-md:gap-10">
			<detail-card class="card-previous max-md:hidden card-previous-camp-left" :title="'Mùa trại UP 2'" :year="'2018'" :img="'https://i.imgur.com/Mz94N8L.jpg'" :detail="'Để mang đến luồng gió mới, LTES có một sự thay đổi địa điểm, thay vì tổ chức ở Tam Kỳ như mùa trại trước, chúng mình quyết định trải nghiệm ở Tam Xuân, Núi Thành. Đến với “UP 2”, các bạn học viên được tham gia các hoạt động trở về tuổi thơ như bắt cá, các trò chơi teambuilding để nâng cao tinh thần đồng đội. Có lẽ, chúng ta dù lớn có lớn đến cỡ nào thì cũng khao khát có lại những niềm vui tuổi thơ… Đây chính là thông điệp mà LTES muốn mang lại cho các bạn trại sinh ở mùa trại năm ấy. '"/>
			<detail-card class="card-previous hidden max-md:block card-previous-camp-right" :img="'https://i.imgur.com/SUmpVFW.jpg'" :year="'2019'" :title="'Mùa trại UP 3'" :detail="'Sau thành công rực rỡ của hai mùa trại UP, LTES tiếp tục đa dạng hóa các địa điểm và hình thức trải nghiệm cho trại sinh. Ở mùa trại này, chúng mình kết hợp cả hai hình thức: trên cạn và dưới nước. Đây có lẽ là lựa chọn mạo hiểm cho Ban Tổ Chức nhưng sẽ thêm phần kịch tính trong hành trình trại. Không biết liệu những bạn trại viên đắm mình vào dòng nước mát năm đó đã tha thứ cho LTES chúng mình chưa…'" />
			<detail-card class="card-previous card-previous-camp-right" :title="'Mùa trại UP 4'" :year="'2020'" :img="'https://i.imgur.com/Y6jua21.jpg'" :detail="'Tiếp nối thành công UP 3 với chủ đề Sinh tồn, trại hè UP season 4 mang đến cho các bạn học sinh kĩ năng và trải nghiệm mới hơn nữa. Mặc dù dịch “Cô Vy” ập đến một cách trớ trêu, nhưng UP 4 vẫn diễn ra một cách suôn sẻ, với hình thức đối kháng đã giúp các camper bước ra khỏi vùng an toàn, đồng thời nâng cao khả năng teamwork giữa các thành viên trong đội. Đây quả là một mùa trại đáng nhớ đối với LTES cũng như các bạn trại viên tham gia mùa 4 này!'"/>
			<detail-card class="hidden max-md:block card-previous card-previous-camp-left" :title="'WARRIORS WANDERLUST'" :year="'2022'" :img="'https://i.imgur.com/hYqh9CU.png'" :detail="'Mùa trại WARRIORS WANDERLUST đánh dấu sự quay trở lại của LTES sau hai năm vắng bóng vì đại dịch Covid-19. Đây là trại hè hai ngày một đêm đầu tiên được LTES tổ chức tại phố cổ Hội An. Với nhiều thử thách đòi hỏi sự sáng tạo, vận dụng những kỹ năng mềm giúp các bạn trại viên khám phá được những nét đẹp văn hóa, lịch sử lâu đời tại Hội An. Bên cạnh đó, các bạn trẻ còn được tham gia những cuộc tranh biện nảy lửa, giải cứu người đội trưởng trong căn phòng bí ẩn, cũng như quẫy hết mình trong những trò teambuilding vui nhộn. Và chúng mình đã cùng nhau thắp lên ngọn lửa LTES, ngọn lửa của sự nhiệt huyết, của thanh xuân, sự đợi chờ suốt 5 năm của chúng mình.'"/>
				<div class="relative">
					<detail-card class=" z-20 card-previous card-previous-camp-right" :tag="true" :title="'THE OUTCASTS ACADEMY'" :className="'hight-light-title'" :year="''" :img="'https://i.imgur.com/SMoxj4d.jpg'" :detail="'The OUTCASTS ACADEMY được xây dựng để trở thành một nơi hoàn toàn hòa mình với thiên nhiên và nói không với những áp lực học hành. Đây là nơi mà mỗi học viên đều có một cá tính riêng biệt và năng lực phi thường, và đều có mong muốn thể hiện bản thân. Với những trải nghiệm độc đáo kéo dài từ lúc đăng ký nhập học đến lúc tốt nghiệp, các campers sẽ có cơ hội phát huy tối đa năng lực của bản thân và trở thành một phiên bản tốt hơn của chính mình. Mùa hè này, hãy tạm cất lại cặp sách ở góc học tập trong nhà và cùng trại hè The OUTCASTS ACADEMY khám phá một cuộc sống ngoài trời đầy thú vị nha!'"/>
				</div>
		</div>
	</div>
</template>
<script>
import DetailCard from '~/components/layout/item/DetailCard.vue';
export default {
	auth: false,
	components: {
		DetailCard,
	},
	mounted() {
		let slideHeadPhone = new IntersectionObserver((entries, observer) => { 
		// entries : Danh sách các đối tượng chúng ta theo dỏi
			entries.forEach(entry => {
			// Kiểm tra ảnh của chúng ta có trong vùng nhìn thấy không
			if(entry.isIntersecting){
				if (entry.target.classList.contains("card-previous-camp-left")) {
					entry.target.classList.add("active-left");
				} else if (entry.target.classList.contains("card-previous-camp-right")) {
					entry.target.classList.add("active-right");
				}
			} 
		});
	}, {rootMargin: "0px 0px -200px 0px"});
	// nexttick
	this.$nextTick(() => {
		let listCard = document.querySelectorAll(".card-previous");
		console.log(listCard)
		listCard.forEach(card => {
			slideHeadPhone.observe(card);
		});
	});
	},
	methods: {
		animateCard(){
			console.log('ok')
		}
	},
}
</script>
<style lang="scss" scoped>

.card-previous-camp-left {
	opacity: 0;
}
.card-previous-camp-right {
	opacity: 0;
}
.card-previous-camp{
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	&:hover{
		box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
		transform: translateY(-10px);
		transition: all 0.3s ease-in-out;
	}
}
@keyframes slideInFromLeft {
	0% {
		transform: translateX(-50px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes slideInFromRight {
	0% {
		transform: translateX(50px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
.active-right{
	animation: slideInFromRight 1s ease-in-out forwards;
}
.active-left{
	animation: slideInFromLeft 1s ease-in-out forwards;
}

</style>
