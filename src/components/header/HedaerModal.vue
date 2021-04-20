<template>
  <div class="header-modal" @click.self="modalClose">
    <div class="header-menu">
      <transition enter-active-class="animate__animated animate__bounce">
        <h2 class="animate__animated animate__bounce">Menu</h2>
      </transition>
      <ul class="header-lists">
        <div :class="['header-list-' + index]" v-for="(list, index) in lists" :key="list.title"
             @mouseover="mouseOverAction(index)" @mouseout="mouseLeaveAction(index)" @click="modalClose">
          <router-link :to="list.path" tag="div" class="header-list-link" active-class="link--active">
            <div class="header-list">
              <li>
                {{ list.title }}
              </li>
              <span class="header-list-line" :class="{ 'line-hover': list.hover }"></span>
              <span class="header-list-circle" :class="{ 'circle-hover': list.hover }"></span>
            </div>
          </router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [{
        title: "Home",
        hover: false,
        path: "/",
      },
      {
        title: "About",
        hover: false,
        path: "/about"
      }, {
        title: "Profile",
        hover: false,
        path: "/profile",
      }],
    }
  },
  props: {
    isModal: {
      type: Boolean,
    }
  },
  methods: {
    modalClose() {
      this.$emit("modalClose", !this.isModal)
    },
    mouseOverAction(index){
      this.lists[index].hover = !this.lists[index].hover
    },
    mouseLeaveAction(index){
      this.lists[index].hover = !this.lists[index].hover
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

    .header-list-link {
      cursor: pointer;
    }

    .header-list {
      display: flex;
      position: relative;

      .header-list-line {
        height: 1px;
        width: 30%;
        background-color: $white-font;
        margin: 13px 0 0 30px;
        transition: all 1s;
      }

      .line-hover {
        width: 60%;
      }

      .header-list-circle {
        border: 1px solid $white-font;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        right: 0px;
        top: 3px;
        transition: all .8s .5s;
      }

      .circle-hover {
        background-color: $accent-color;
      }
    }
  }

  .link--active {
    .header-list-circle {
      background-color: $white-font;
    }
  }
</style>