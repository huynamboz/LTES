<script setup lang="ts">
const listSummer = ref([
  {
    title: 'Mùa trại UP 1',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/up1.png',
    year: 2017,
  },
  {
    title: 'Mùa trại UP 2',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/up2.jpg',
    year: 2018,
  },
  {
    title: 'Mùa trại UP 3',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/up3.jpeg',
    year: 2019,
  },
  {
    title: 'Mùa trại UP 4',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/up4.jpeg',
    year: 2020,
  },
  {
    title: 'WARRIORS WANDERLUST',
    description: 'Lorem ipsum dolor sit amet, ',
    image: '/assets/images/summer/warrios.png',
    year: 2022,
  },
  {
    title: 'THE OUTCASTS ACADEMY',
    description: 'Lorem ipsum dolor sit amet, ',
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
