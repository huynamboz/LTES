<script setup lang="ts">
interface MarqueeItemProps {
  title: string
  description: string
  image: string
  year: number
}
defineProps<MarqueeItemProps>()
</script>

<template>
  <div class="w-[320px] h-[335px] p-2">
    <div class="w-full h-full border border-[#212344] overflow-hidden rounded-2xl bg-[#161528]">
      <div class="w-full h-[65%] relative">
        <!-- <NuxtImg class="w-full h-full object-cover" :src="image" loading="lazy" /> -->
        <img class="w-full h-full object-cover" :src="image" alt="">
        <!-- tag -->
        <div class="absolute top-4 left-4 bg-[#FFD700] px-2 py-1 rounded-full">
          <span class="text-[12px] font-bold text-black">{{ year }}</span>
        </div>
      </div>
      <div class="h-[35%]">
        <div class="p-4">
          <h3 class="text-[20px] font-bold text-white">
            {{ title }}
          </h3>
          <p class="text-[13px] text-gray-400 mt-2">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
