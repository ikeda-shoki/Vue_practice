<template>
  <div class="content-title">
    <h1>
      {{ title }}
      <span class="content-title-line" :class="{ 'content-title-line-hover' : hover }"></span>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    title: {
      type: String
    },
    hover: {
      type: Boolean,
    }
  },
}
</script>

<style lang="scss" scoped>
  $background-color: #161615;
  $main-color: #d3a760;
  $accent-color: #95681f;
  $font-color: #a8a8a8;
  $white-font: #FFFEFF;

  .content-title {
    text-align: center;

    h1 {
      font-size: 35px;
      font-family: 'Zen Dots', cursive;
      color: $font-color;
      margin-bottom: 40px;
    }

    .content-title-line {
      height: 2px;
      width: 10%;
      display: block;
      margin: 20px auto 0;
      background-color: $main-color;
      transition: all 1s;
    }

    .content-title-line-hover {
      width: 20%;
    }
  }
</style>