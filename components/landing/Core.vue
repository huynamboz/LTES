<template>
  <section id="core">
    <div class="flex flex-col items-center mt-28">
      <h2 class="text-4xl max-md:text-3xl font-bold text-gray-200 text-center">
        Ban điều hành tổ chức
      </h2>
      <p class="max-md:text-sm text-center mt-5 text-gray-300 w-[70%]">
        <!-- Là những người đã đặt nền móng cho tổ chức LTES - Let's Fly High -->
      </p>
      <div class="max-md:hidden w-full mt-5">
        <div class="w-full flex items-stretch justify-center h-10">
          <div class="w-[1px] border-l border-l-[#101214]" />
        </div>
        <div class="w-full h-10 grid grid-cols-3">
          <div class="flex justify-center relative">
            <div class="w-[1px] border-l border-l-[#101214]" />
            <div class="h-[1px] absolute top-0 right-0 w-1/2 border-b border-b-[#101214]" />
          </div>
          <div class="flex justify-center relative">
            <div class="h-[1px] absolute top-0 right-0 w-full border-b border-b-[#101214]" />
            <div class="w-[1px] border-l border-l-[#101214]" />
          </div>
          <div class="flex justify-center relative">
            <div class="h-[1px] absolute top-0 left-0 w-1/2 border-b border-b-[#101214]" />
            <div class="w-[1px] border-l border-l-[#101214]" />
          </div>
        </div>
      </div>
      <div class="w-full grid grid-cols-3 max-md:grid-cols-1 gap-5">
        <div
          v-motion
          class="flex flex-col items-center mt-10 bg-[#211929] backdrop-blur-sm p-8 rounded-xl"
          :initial="{ opacity: 0, y: 200 }"
          :visible-once="{ opacity: 1, y: 0, scale: 1 }"
          :duration="800"
          :delay="300"
        >
          <img class="w-20 h-20 rounded-full object-cover" src="/assets/images/leaders/1.jpg" alt="leader">
          <p class="text-sm font-bold mt-5">
            Đoàn Nguyễn Anh Thư
          </p>
          <p class="text-xs text-gray-300">
            Trưởng Ban Tổ chức LTES
          </p>
          <p class="text-sm text-center my-5">
            Sinh viên năm hai chuyên ngành Tài chính Doanh nghiệp
            .Là cựu học sinh chuyên Sinh khóa 19 trường THPT chuyên Nguyễn Bỉnh Khiêm.
            Đã có 4 năm tham gia vào LTES và từng tổ chức các dự án phi lợi nhuận trong và ngoài tỉnh.
          </p>
        </div>
        <div
          v-motion
          class="flex flex-col items-center mt-10 bg-[#211929] backdrop-blur-sm p-8 rounded-xl"
          :initial="{ opacity: 0, y: 200 }"
          :visible-once="{ opacity: 1, y: 0, scale: 1 }"
          :duration="800"
          :delay="200"
        >
          <img class="w-20 h-20 rounded-full object-cover" src="/assets/images/leaders/2.jpg" alt="leader">
          <p class="text-sm font-bold mt-5">
            Nguyễn Bùi Hoàng Ngân
          </p>
          <p class="text-xs text-gray-300">
            Founder tổ chức LTES
          </p>
          <p class="text-sm text-center my-5">
            Management Trainee - Quản trị viên tập sự tại HEINEKEN.
            Học bổng toàn phần Trường đại học Quốc Tế Đại học Quốc Gia TP.HCM.
            Đã tham gia và tổ chức nhiều dự án phi lợi nhuận, hội thảo kỹ năng, trại hè trong và ngoài nước, v.v
          </p>
        </div>
        <div
          v-motion
          class="flex flex-col items-center mt-10 bg-[#211929] backdrop-blur-sm p-8 rounded-xl"
          :initial="{ opacity: 0, y: 200 }"
          :visible-once="{ opacity: 1, y: 0, scale: 1 }"
          :duration="800"
          :delay="300"
        >
          <img class="w-20 h-20 rounded-full object-cover" src="/assets/images/leaders/3.jpg" alt="leader">
          <p class="text-sm font-bold mt-5">
            Hồ Bá Huy
          </p>
          <p class="text-xs text-center text-gray-300">
            Trưởng Ban Tổ chức trại hè ‘The Codebreakers’
          </p>
          <p class="text-sm text-center my-5">
            Học sinh chuyên Toán khóa 21 trường THPT chuyên Nguyễn Bỉnh Khiêm.
            Đã có 2 năm làm việc ở mảng Nội dung của LTES và có kinh nghiệm tham gia nhiều tổ chức, dự án trong và ngoài trường với đa dạng các chuyên môn.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
