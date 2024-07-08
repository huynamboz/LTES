<script setup lang="ts">
const listSummer = ref([
  {
    title: 'Summer 2021',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/up2.jpg',
  },
  {
    title: 'Summer 2021',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/warrios.png',
  },
])
</script>

<template>
  <NuxtMarquee class="mt-40" :auto-fill="true">
    <LandingMarqueeItemCard v-for="summer in listSummer" v-bind="summer" :key="summer.title" />
  </NuxtMarquee>
</template>
