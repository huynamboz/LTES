<template>
  <main class="flex flex-col items-center w-full">
    <section class="fixed top-0 left-0 h-screen w-full z-[-1] bg-dot opacity-90" />
    <LandingHero />
    <div class="w-full max-w-[1024px]">
      <LandingSponsor />
      <LandingAbout />
    </div>
    <LandingMarquee />
    <div class="w-full max-w-[1024px]">
      <LandingSummer />
    </div>
  </main>
</template>
