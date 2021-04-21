<template>
  <div class="home-skill" @mouseover="hoverIn" @mouseout="hoverOut">
    <ContentTitle
      title="My Skill"
      :hover="this.hover"
    >
    </ContentTitle>
  </div>
</template>

<script>
import ContentTitle from '../Parts/ContentTitle.vue'


export default {
  data() {
    return {
      hover: false,
    }
  },
  components: {
    ContentTitle,
  },
  methods: {
    hoverIn() {
      this.hover = !this.hover
    },
    hoverOut() {
      this.hover = !this.hover
    },
  }
}
</script>

<style>

</style>