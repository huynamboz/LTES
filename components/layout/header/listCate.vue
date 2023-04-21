<template>
<div class="container-list-cate">
		<div class="list-cate">
			<div class="cate-item">
				Thiết bị điện tử
			</div>
			<div class="cate-item">
				Đồ gia dụng
			</div>
			<div class="cate-item">
				Quần áo
			</div>
			<div class="cate-item">
				Bàn ghế
			</div>
			<div class="cate-item">
				Đồ dùng
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.container-list-cate{
	z-index: 2;
	position: sticky;
	top: 0;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: -1px 8px 20px 2px rgb(197 197 197 / 26%);
	@media screen and (max-width:768px) {
		display: none;
	}
}
.list-cate{
	display: flex;
	align-items: center;
	gap: 20px;
	max-width: 1240px;
	@media screen and (max-width:768px) {
		width: 100%;
	}
}
a{
	text-decoration: none;
	color: #000000;
}
.cate-item{
	display: flex;
	padding: 20px;
	align-items: center;
	cursor: pointer;
	&:hover{
		background-color: #113366;
		color: #ffffff;
	}
}
</style>