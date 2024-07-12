<script setup lang="ts">
onMounted(async () => {

})
</script>

<template>
  <section id="hero" class="max-md:pt-40 md:min-h-screen flex w-full justify-center overflow-hidden">
    <!-- <h1 class="font-['Rubik_Mono_One'] text-center text-[70px]">
      <span>The</span> <span>Code</span> <br> <span>Breaker</span> <span>2024</span>
    </h1> -->
    <div class="w-full flex flex-col items-center relative">
      <div class="max-md:w-[80%] w-[70%] relative">
        <NuxtImg class="w-full relative z-10" preload src="/assets/images/logo-com.png" />
        <!-- <img src="/public/assets/images/big-logo.png" alt=""> -->
        <!-- <img class="w-full absolute top-0 left-0 z[-1] animate-spin-slow" src="/public/assets/images/rounded.png" alt=""> -->
         <NuxtImg class="w-full absolute top-0 left-0 z[-1] animate-spin-slow" preload src="/assets/images/rounded-com.png" />
      </div>
      <img style="mix-blend-mode: lighten;" class="w-full absolute top-0 left-0 z[-1] opacity-80" src="/public/assets/images/bg-tech.png" alt="">
      <a hr class="flex items-center gap-1 border border-white hover:bg-white hover:text-black transition-all duration-100 h-10 px-5 -translate-y-10 rounded-3xl font-semibold cursor-pointer z-10">
        Đăng ký ngay
        <Icon name="material-symbols:arrow-right-alt-rounded" class=" text-lg" />
      </a>
    </div>
  </section>
</template>
