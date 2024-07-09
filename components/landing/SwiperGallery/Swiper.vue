<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-cards'

import './style.css'

// import required modules
import { Autoplay, EffectCards } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards, Autoplay],
    }
  },
}
</script>

<template>
    <Swiper
      :autoplay="{
        delay: 1800,
        pauseOnMouseEnter: true,
        stopOnLastSlide: true,
      }"
      effect="cards"
      :grab-cursor="true"
      :modules="modules"
      class="mySwiper"
    >
      <SwiperSlide v-for="n in 9" :key="n">
        <img class="h-full object-cover w-full" :src="`/assets/images/recap/small/${n}.jpg`" alt="">
      </SwiperSlide>
    </Swiper>
</template>
