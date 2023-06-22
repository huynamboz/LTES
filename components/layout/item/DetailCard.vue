<template>
	<div class="card-item w-full rounded-xl">
		<div class="relative">
			<img :src="img" alt="" class="h-[270px] w-full object-cover rounded-xl">
			<!-- <div class="blur absolute w-full h-full bottom-0"></div> -->
		</div>
		<div class="p-3 flex flex-col gap-2">
			<div class="flex items-center flex-wrap">
				<p class=" text-2xl my-3 font-medium" :class="className">{{ title }} <span class="text-sm font-light" v-if="year.length > 0">({{ year }})</span>
				</p> &nbsp;
				<span v-if="tag" class="new-tag w-fit">Mùa hè này</span>
			</div>
			<p class="text-sm">{{ detail }}
				</p>
		</div>
	</div>
</template>
<script>
export default {
	name: "DetailCard",
	props:{
		img:{
			type:String,
			default:""
		},
		title:{
			type:String,
			default:""
		},
		detail:{
			type:String,
			default:""
		},
		className:{
			type:String,
			default:""
		},
		year:{
			type:String,
			default:""
		},
		tag:{
			type:Boolean,
			default:false
		}
	}
}
</script>
<style lang="scss" scoped>
.blur{
	background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.6558998599439776) 0%, rgba(253,187,45,0) 100%);
}
.hight-light-title {
    -webkit-text-fill-color: transparent;
    background-image: radial-gradient(circle at 0 0, #20aef8, #49e9e9 38%, #88f0d5 75%, #daf8b9);
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 800;
}
.card-item{
	-webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
	cursor: pointer;
    background-color: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.08);
	&:hover{
		box-shadow: 0px 4px 20px rgba(118, 118, 118, 0.374);
		transform: translateY(-10px);
		transition: all 0.3s ease-in-out;
	}
}
.new-tag {
    bottom: 110px;
	border-radius: 10px;
    right: 5px;
    background-color: #566cec;
    background-image: linear-gradient(90deg,#4ab1f1,#566cec 25%,#d749af 75%,#ff7c51);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    letter-spacing: 4px;
}
</style>