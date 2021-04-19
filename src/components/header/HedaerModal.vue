<template>
  <div class="header-modal">
    <div class="header-menu">
      <transition enter-active-class="animate__animated animate__bounce">
        <h2 class="animate__animated animate__bounce">Menu</h2>
      </transition>
      <ul class="header-lists">
        <div class="header-list" v-for="list in lists" :key="list">
          <li>
            {{ list }}
          </li>
          <span class="header-list-line"></span>
          <span class="header-list-circle"></span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        "About",
        "Profile",
      ]
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

  .header-modal {
    z-index: 10;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
  }

  .header-menu {
    margin: 0 auto;
    width: 300px;
    margin-top: 200px;

    h2 {
      color: $white-font;
      font-size: 48px;
      text-align: center;
      font-weight: 900;
      margin-bottom: 40px;
    }

    li {
      margin-bottom: 15px;
      font-size: 26px;
      color: $white-font;
      width: 80px;
    }

    .header-list {
      display: flex;
      position: relative;

      .header-list-line {
        height: 1px;
        width: 60%;
        background-color: $white-font;
        margin: 13px 0 0 30px;
      }

      .header-list-circle {
        border: 1px solid $white-font;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        top: 3px;
      }
    }
  }
</style>