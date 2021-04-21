<template>
  <div class="home">
    <HomeMain></HomeMain>
    <HomeSkill></HomeSkill>
  </div>
</template>

<script>
import HomeMain from '../components/HomePart/HomeMain.vue'
import HomeSkill from '../components/HomePart/HomeSkill.vue'

export default {
  components: {
    HomeMain,
    HomeSkill
  }
}
</script>

<style lang="scss" scoped>

</style>