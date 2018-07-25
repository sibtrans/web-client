<template>
  <div class="grid-test">
    <div class="row">
      <div class="col-1-of-2">col-1-of-2</div>
      <div class="col-1-of-2">col-1-of-2</div>
    </div>
    <div class="row">
      <div class="col-1-of-3">col-1-of-3</div>
      <div class="col-2-of-3">col-2-of-3</div>
    </div>
    <div class="row">
      <div class="col-1-of-4">col-1-of-4</div>
      <div class="col-1-of-4">col-1-of-4</div>
      <div class="col-2-of-4">col-2-of-4</div>
    </div>
    <div class="row">
      <div class="col-1-of-4">col-1-of-4</div>
      <div class="col-3-of-4">col-3-of-4</div>
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/styles/main";

  body {
    div {
      font-size: 3rem;
    }
  }
</style>
