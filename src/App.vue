<template>
  <div id="app">
    <Header></Header>
    <transition>
      <div class="container">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
  $background-color: #e9e3df;
  $main-color: #d3a760;
  $accent-color: #95681f;
  $font-color: #3e1300;
  $white-font: #FFFEFF;

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: $font-color;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  html, body, h1, h2, h3, h4, h5, h6, ul, ol, dl, li, dt, dd, p, div, span, img, a, table, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: normal;
    font-size: 100%;
    vertical-align: baseline;
  }

  header, footer, nav, section, article, aside, figure, figcaption {
    display: block;
  }

  body {
    line-height: 1;
    background-color: $background-color;
  }

  ol, ul {
    list-style: none;
    list-style-type: none;
  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .container {
    margin: 0 auto;
    width: 1080px;
    max-width: 90%;
  }

  // transition
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all .8s;
  }
  .fade-leave-active {
    transition: all .8s;
  }
  .fade-leave-to {
    opacity: 0;
  }

</style>
