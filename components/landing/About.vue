<template>
  <section id="about" class="mt-32">
    <div class="flex">
      <div class="flex-1">
        <h2
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="200"
          class="text-5xl font-bold"
        >
          Giới thiệu về LTES <br> Let's Fly High
        </h2>
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="400"
          class=" text-slate-300"
        >
          <p class="mt-5">
            LTES - Let’s Fly High là tổ chức trại hè nhằm nâng
            tầm giá trị nhân tài thông qua việc giáo dục kỹ năng.
          </p>
          <p>
            LTES được hình thành và phát triển như một sân chơi
            cho các bạn trẻ muốn thỏa sức tổ chức chương trình trại
            hè cũng như các bạn muốn tham trại hè để trải nghiệm
            các hoạt động rèn luyện kiến thức - kỹ năng.
          </p>
          <p>
            Hơn 07 năm hoạt động, LTES đã tổ chức nhiều dự án trại
            hè thành công với đa dạng hình thức tổ chức từ team building
            đến workshop giáo dục - rèn luyện kỹ năng như: 4 mùa trại UP,
            Dự án <br> <span class="text-primary text-lg font-bold">“SUMMER CAMP FUN”</span>, Dự án trại hè 2 ngày 1 đêm
            <br> <span class="text-primary text-lg font-bold">“Warriors Wanderlust”</span>
            và gần nhất với dự án trại hè 3 ngày 2 đêm <span class="text-primary text-lg font-bold">“The Outcasts Academy”</span>
            với sự tham gia đông đảo từ các bạn trẻ trên địa bàn tỉnh Quảng Nam.
          </p>
        </div>
        <!-- <button class="bg-secondary h-10 font-rubik px-6 rounded-2xl mt-5">
          <i>Fanpage</i>
        </button> -->
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img class="w-[60%] rounded-full" src="/assets/images/logo.jpg" alt="">
      </div>
    </div>
  </section>
</template>
