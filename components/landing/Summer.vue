<template>
  <section id="summer" class=" mt-36 px-5 scroll-my-40 overflow-hidden">
    <div>
      <h2 class="max-md:text-4xl text-center text-5xl font-black italic">
        <div
          v-motion
          :initial="{ opacity: 0, x: -200 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="300"
        >
          Dự án trại hè
        </div>
        <div
          v-motion
          :initial="{ opacity: 0, x: 200 }"
          :visible-once="{ opacity: 1, x: 0, scale: 1 }"
          :delay="300"
        >
          The
          <span class=" bg-green-stroke bg-no-repeat bg-contain bg-bottom">
            Codebreakers
          </span> 2024
        </div>
      </h2>

      <!-- card -->
      <div class="max-md:flex-col flex max-md:h-[800px] h-[500px] overflow-hidden border border-gray-border-primary bg-[rgb(19,19,19)] rounded-[30px] mt-20">
        <div class="flex-1">
          <div class="flex flex-col justify-between h-full p-20 px-12">
            <div>
              <h3 class="text-[40px] font-bold">
                Codebreakers 2024
              </h3>
              <p class=" text-gray-400">
                Dự án “The Codebreakers” là chương trình trại hè giáo dục kỹ năng thứ 07 do LTES tổ chức.
                Chương trình sẽ diễn ra tại <span class="font-bold text-white">Hội An</span> vào tháng 08/2024.
              </p>
              <span class="bg-[rgb(0_208_255/26%)] text-[rgb(38_215_255)] inline-block mt-4 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">#hoian</span>
              <span class="bg-[rgb(0_208_255/26%)] text-[rgb(38_215_255)] inline-block mt-4 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">#thecodebreakers</span>
            </div>
            <button
              v-motion
              :initial="{ opacity: 0, scale: 0.5 }"
              :visible-once="{ opacity: 1, scale: 1 }"
              :delay="300"
              class="bg-[#30a963] w-fit text-sm h-10 px-4 rounded-xl"
            >
              Tiếp tục khám phá
            </button>
          </div>
        </div>
        <div class="flex-1">
          <img loading="lazy" class="w-full h-full object-cover" src="@/assets/images/hoian.jpg" alt="">
        </div>
      </div>
      <!-- end card -->

      <div class="max-md:flex-col flex mt-32">
        <div class="flex-1">
          <img style="mix-blend-mode: lighten;" class="w-full" src="@/assets/images/tech2.webp" alt="">
        </div>
        <div class="flex-1 flex justify-end">
          <div class="flex w-[80%] flex-col items-end">
            <h3 class="text-4xl font-bold">
              Bối cảnh
            </h3>
            <p class="text-gray-400 mt-4 text-end">
              Bối cảnh được lấy từ gian phòng thí nghiệm và con tàu du
              hành thời gian của Tiến sĩ Wisdom, trại sinh sẽ đóng vai
              những người giải mã, khám phá các hệ thống mật mã và manh
              mối để tìm ra vị trí chính xác của bản thiết kế tàu vũ trụ
              bị đánh cắp bởi KKid.
            </p>
          </div>
        </div>
      </div>

      <div class="max-md:flex-col flex mt-32">
        <div class="flex-1 flex justify-start">
          <div class="flex w-[80%] flex-col items-start">
            <h3 class="text-4xl font-bold">
              Khám phá vùng đất mới
            </h3>
            <p class="text-gray-400 mt-4 text-start">
              Tham gia trại hè, các bạn sẽ có cơ hội khám phá tiềm năng,
              nhận diện những hạn chế của bản thân, từ đó, học cách giải
              quyết hiệu quả các vấn đề khó khăn và vượt qua những trở
              ngại trong cuộc sống. Trại hè này không chỉ là cuộc phiêu
              lưu tìm kiếm và giải mã các manh mối vật chất, mà còn là
              hành trình tự khám phá và phát triển bản thân đầy ý nghĩa
              đối với mỗi trại sinh.
            </p>
          </div>
        </div>
        <div class="flex-1">
          <img style="mix-blend-mode: lighten;" class="w-full" src="@/assets/images/tech3.gif" alt="">
        </div>
      </div>
    </div>
  </section>
</template>
