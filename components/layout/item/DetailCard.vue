<template>
	<div class="card-item w-full rounded-xl">
		<div class="relative">
			<img :src="img" alt="" class="h-[270px] w-full object-cover rounded-xl">
			<!-- <div class="blur absolute w-full h-full bottom-0"></div> -->
		</div>
		<div class="p-3 flex flex-col gap-2">
			<p class=" text-2xl my-3 font-medium" :class="className">{{ title }} <span class="text-sm font-light">( {{ year }} )</span></p>
			<p class="text-sm">is simply dummy text of the printing and typesetting industry. 
				Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
				when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
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
		content:{
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
    background-color: rgba(255,255,255,.08);
    border: 1px solid rgba(255,255,255,.08);
}</style>