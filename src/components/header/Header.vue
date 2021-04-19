<template>
  <header>
    <div class="container">
      <div class="header-left">
        <h1>Pon‘s Portfolio</h1>
      </div>
      <div class="header-right">
        <transition name="fade" mode="out-in">
          <p v-show="show">Menu</p>
        </transition>
        <HamburgerMenu @isOpen="chenge" :show="this.show"></HamburgerMenu>
      </div>
    </div>
    <transition>
      <HeaderModal v-if="isShow ? true : false"></HeaderModal>
    </transition>
  </header>
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue'
import HeaderModal from './HedaerModal.vue'

export default {
  components: {
    HamburgerMenu,
    HeaderModal
  },
  data() {
    return {
      show: true,
      isShow: true,
    }
  },
  methods: {
    chenge(value) {
      this.show = value;
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

  header {
    background-color: $main-color;
    width: 100%;
    height: 80px;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }

  .header-left {
    h1 {
      font-family: 'Zen Dots', cursive;
      font-size: 36px;
      color: $white-font;
    }
  }

  .header-right {
    display: flex;

    p {
      margin: 5px 10px 0 0;
      color: $white-font;
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>