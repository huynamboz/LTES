<script setup lang="ts">
const images = ref<string[]>([
  '/assets/images/summer/up1.jpg',
  '/assets/images/summer/up2.jpg',
  '/assets/images/summer/up3.jpeg',
  '/assets/images/summer/up4.jpeg',
  '/assets/images/summer/warrios.jpg',
  '/assets/images/summer/outcast.jpeg',
])
</script>

<template>
  <div>
    <NuxtMarquee :auto-fill="true" direction="right">
      <div v-for="img in images" :key="img" class="p-2">
        <img :src="img" alt="" class="w-20 h-20 rounded-lg object-cover">
      </div>
    </NuxtMarquee>

    <NuxtMarquee :auto-fill="true">
      <div v-for="img in 16" :key="img" class="p-2">
        <img :src="`/assets/images/album/${img}.jpg`" alt="" class="w-20 h-20 rounded-lg object-cover">
      </div>
    </NuxtMarquee>
  </div>
</template>
