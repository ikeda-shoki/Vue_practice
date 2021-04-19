<template>
  <div id="hamburger-menu" :class="{ active: isActive }" @click="crossOpen">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    crossOpen() {
      this.isActive = !this.isActive
      this.$emit("isOpen", !this.show)
    }
  },
  props: {
    show: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
  $background-color: #e9e3df;
  $main-color: #d3a760;
  $accent-color: #95681f;
  $font-color: #3e1300;
  $white-font: #FFFEFF;

  #hamburger-menu {
    position: relative;
    width: 25px;
    height: 26px;
    cursor: pointer;

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: $white-font;
      border-radius: 4px;
      display: inline-block;
      transition: all .5s;
      box-sizing: border-box;
    }

    span:nth-of-type(1) {
      top: 0;
      :active {
        -webkit-transform: translateY(20px) rotate(-45deg);
        transform: translateY(20px) rotate(-45deg);
      }
    }
    span:nth-of-type(2) {
      top: 12px;

      :active {
        opacity: 0;
      }
    }
    span:nth-of-type(3) {
      bottom: 0;

      :active {
        -webkit-transform: translateY(-20px) rotate(45deg);
        transform: translateY(-20px) rotate(45deg);
      }
    }
  }

  #hamburger-menu.active {
    span:nth-of-type(1) {
      -webkit-transform: translateY(20px) rotate(-45deg);
      transform: translateY(12px) rotate(-45deg);
    }
    span:nth-of-type(2) {
      opacity: 0;
    }
    span:nth-of-type(3) {
      -webkit-transform: translateY(-20px) rotate(45deg);
      transform: translateY(-13px) rotate(45deg);
    }
  }
</style>