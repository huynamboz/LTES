<template>
  <section id="footer" class="flex flex-col relative px-5 items-center w-full justify-center h-[300px] border-[rgba(255,255,255,0.15)] bg-[#000000] border border-t  py-5">
    <div class="max-md:flex-col w-full max-w-[1024px] flex justify-between">
      <div class="text-3xl font-bold">
        <p class="max-md:text-4xl text-[70px] font-['Permanent_Marker']">
          LTES
        </p>
      </div>
      <div>
        <p class="font-semibold text-lg">
          Liên hệ
        </p>

        <div class="text-sm flex flex-col gap-2 mt-5 text-[#656565] font-semibold">
          <p class="flex items-center gap-1">
            <Icon name="mdi:map-marker" class="text-lg" />
            Quảng Nam
          </p>
          <p class="flex items-center gap-1">
            <Icon name="mdi:email" class="text-lg" />
            <a href="mailto:ltesletsflyhigh@gmail.com">
              ltesletsflyhigh@gmail.com</a>
          </p>
          <p class="flex items-center gap-1">
            <Icon name="mdi:phone" class="text-lg" />
            (+84) 93 557 9133 - Hồ Bá Huy (Trưởng BTC)
          </p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between w-full max-w-[1024px] mt-5 border-t pt-3 border-t-[rgba(255,255,255,0.15)]">
      <div class="max-md:text-lg text-3xl font-bold">
        LTES - Let's Fly High
      </div>
      <!-- icon social -->
      <div class="flex gap-5 mt-5">
        <a href="https://www.facebook.com/traihekinang" target="_blank">
          <Icon name="mdi:facebook" class="text-3xl" />
        </a>
        <a href="https://www.tiktok.com/@ltes.2017" target="_blank">
          <Icon name="i-ion:logo-tiktok" class="text-3xl" />
        </a>
      </div>
    </div>
  </section>
</template>
