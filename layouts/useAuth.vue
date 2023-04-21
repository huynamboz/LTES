<template>
    <div class="position-relative">
        <header-top  />
		<list-cate/>
        <nuxt id="body" />
    </div>
  
  </template>
  <script>
  import headerTop from '~/components/layout/header/header.vue';
  import listCate from '~/components/layout/header/listCate.vue'
  export default {
	auth:'login',
    components: {
		headerTop,
		listCate
    },
  }
  </script>