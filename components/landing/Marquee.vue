<script setup lang="ts">
const listSummer = ref([
  {
    title: 'Mùa trại UP 1',
    description: '',
    image: '/assets/images/summer/up1.jpg',
    year: 2017,
  },
  {
    title: 'Mùa trại UP 2',
    description: '',
    image: '/assets/images/summer/up2.jpg',
    year: 2018,
  },
  {
    title: 'Mùa trại UP 3',
    description: '',
    image: '/assets/images/summer/up3.jpeg',
    year: 2019,
  },
  {
    title: 'Mùa trại UP 4',
    description: '',
    image: '/assets/images/summer/up4.jpeg',
    year: 2020,
  },
  {
    title: 'WARRIORS WANDERLUST',
    description: '',
    image: '/assets/images/summer/warrios.jpg',
    year: 2022,
  },
  {
    title: 'THE OUTCASTS ACADEMY',
    description: '',
    image: '/assets/images/summer/outcast.jpeg',
    year: 2023,
  },
])
</script>

<template>
  <NuxtMarquee :auto-fill="true">
    <LandingMarqueeItemCard v-for="summer in listSummer" v-bind="summer" :key="summer.title" />
  </NuxtMarquee>
</template>
