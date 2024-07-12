<template>
  <section class="py-20 w-full flex justify-center">
    <ol>
      <li class="active">
        <div class="content top">
          <span class="text-slate-500">Tuyển campers Early Birds</span>
          <p class="">(12-18/67)</p>
        </div>
      </li>
      <li>
        <div class="content bottom">
          <p class="">(19-23/07)</p>
          <span class="text-slate-500">Tuyển campers Đợt Thường</span>
        </div>
      </li>
      <li class="">
        <div class="content top">
          <span class="text-slate-500">Phỏng vấn campers</span>
          <p class="">(20/9)</p>
        </div>
      </li>
      <li>
        <div class="content bottom">
          <p class="">(20/9)</p>
          <span class="text-slate-500">Tổ chức trại</span>
        </div>
      </li>
    </ol>
  </section>
</template>

<style lang="scss" scoped>
$color-primary: #81ecec;
$color-background: #222222;
$width: 70%;

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $color-background;
}

ol, li {
  margin: 0;
  padding: 0;
  color: #00cec9;
  font-family: verdana;
  font-size: 14px;
}

ol {
  display: flex;
  width: $width;
  justify-content: space-between;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: $color-primary;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    z-index: -1;
  }
}

li {
  list-style-type: none;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: $color-primary;
    border: 2px solid $color-primary;
    transition: background-color .2s ease;
  }
}

li:hover:after {
  background-color: mix($color-primary, $color-background);
}

li.active:after {
  background-color: $color-background;
}

.content {
  &.bottom {
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
    transform: translate(-50%, 0);
    display: inline-block;
    text-align: center;
    text-align: center;
    width: 107px;
  }
  &.top {
    position: absolute;
    bottom: calc(100% + 20px);
    left: 50%;
    transform: translate(-50%, 0);
    display: inline-block;
    text-align: center;
    text-align: center;
    width: 107px;
  }
}
</style>
