<template>
  <div class="home-main">
    <div class="home-main-img animate__animated animate__jackInTheBox">
      <img src="/img/profile.png" alt="プロフィール画像">
    </div>
    <div class="home-main-text">
      <h1>My PortFortfolio Site</h1>
      <span class="home-main-line"></span>
      <div class="home-main-contents">
        <p>Skills</p>
        <div class="home-main-content">
          <div class="home-main-content-item" v-for="item in items" :key="item.name">
            <i :class="item.class"></i>
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "HTML",
          class: "fab fa-html5",
        },
        {
          name: "CSS, SCSS",
          class: "fab fa-css3",
        },
        {
          name: "Ruby on Rails",
          class: "fab fa-slack-hash",
        },
        {
          name: "Vue.js",
          class: "fab fa-vuejs",
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $background-color: #161615;
  $main-color: #d3a760;
  $accent-color: #95681f;
  $font-color: #a8a8a8;
  $white-font: #FFFEFF;

  .home-main {
    padding-top: 50px;
    height: 100vh;
    position: relative;

    .home-main-img {
      position: absolute;
      top: 300px;

      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
        transform: rotate(-15deg);
      }
    }

    .home-main-text {
      position: absolute;
      top: 200px;
      left: 200px;

      h1 {
        font-family: 'Zen Dots', cursive;
        font-size: 58px;
        font-weight: bold;
        color: $white-font;
        margin-bottom: 50px;
      }

      .home-main-line {
        display: block;
        height: 3px;
        width: 70%;
        margin-left: auto;
        background-color: $main-color;
      }
      .home-main-contents {
        margin: 40px 0 0 auto;
        width: 200px;

        p {
          font-family: 'Zen Dots', cursive;
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
          border-bottom: solid 1px $main-color;
        }

        .home-main-content-item {
          justify-content: flex-start;
          display: flex;

          i {
            font-size: 27px;
          }
          p {
            font-size: 20px;
            font-family: 'Lato', sans-serif;
            margin-left: 20px;
            border-bottom: none;
          }
        }
      }
    }
  }

  .animate__animated.animate__jackInTheBox {
    animation-duration: 2s; /* アニメーションの時間 */
    animation-delay: .5s; /* アニメーション開始時間 */
  }
</style>