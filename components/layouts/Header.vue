<script setup lang="ts">
function handleScroll(section: string) {
  const sectionEl = document.getElementById(section)
  sectionEl?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })
}
</script>

<template>
  <header class="fixed z-50 top-8 left-0 w-full flex justify-center items-center">
    <div class="flex items-center max-md:flex-col max-md:gap-2 gap-8 w-fit">
      <p class="text-4xl font-['Permanent_Marker']">
        LTES
      </p>
      <ul class="flex items-center gap-1 px-3 w-full h-14  bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-2xl">
        <li
          class="inline-block rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.15)] px-4 py-2 text-white"
          @click="handleScroll('hero')"
        >
          Trang chủ
        </li>
        <li
          class="max-md:hidden inline-block rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.15)] px-4 py-2 text-white"
          @click="handleScroll('about')"
        >
          Giới thiệu
        </li>
        <li
          class="max-md:hidden inline-block rounded-lg cursor-pointer hover:bg-[rgba(255,255,255,0.15)] px-4 py-2 text-white"
          @click="handleScroll('contact')"
        >
          Liên hệ
        </li>
        <li
          class="inline-flex items-center gap-1 pr-2 rounded-lg cursor-pointer bg-[rgba(255,255,255,0.15)] hover:bg-[#43ddce] hover:text-black px-4 py-2 text-white"
          @click="handleScroll('summer')"
        >
          Khám phá ngay
          <Icon name="svg-spinners:pulse-2" class="text-lg" />
        </li>
      </ul>
    </div>
  </header>
</template>
