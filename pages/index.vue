<script setup lang="ts">
useSeoMeta({
  title: 'LTES - Let\'s Fly High',
  ogTitle: 'LTES - Let\'s Fly High',
  description: 'LTES - Let\'s Fly High là tổ chức trại hè nhằm nâng tầm giá trị nhân tài thông qua việc giáo dục kỹ năng. ',
  ogDescription: 'LTES - Let\'s Fly High là tổ chức trại hè nhằm nâng tầm giá trị nhân tài thông qua việc giáo dục kỹ năng.',
  ogImage: '/assets/images/thumb.png',
})
</script>

<template>
  <main class="flex flex-col items-center w-full">
    <section class="fixed top-0 left-0 h-screen w-full z-[-1] bg-dot opacity-75">
      <div class="bg-purple-blur w-full h-full" />
    </section>
    <LandingHero />
    <div class="w-full max-w-[1024px]">
      <LandingSponsor />
      <LandingAbout />
    </div>
    <LandingOurSummer />
    <div class="w-full max-w-[1024px]">
      <LandingSummer />
    </div>
  </main>
</template>
