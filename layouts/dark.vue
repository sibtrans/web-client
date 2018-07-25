<template>
  <div class="wrap">
    <header class="header">
      <nav class="nav-primary-wrapper">
        <ul class="nav-primary">
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
          <li><a href="#">Item</a></li>
        </ul>
      </nav>
    </header>
    <nuxt/>
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

  .header {
    background-color: rgba(165, 7, 29, 1);
    position: absolute;
    z-index: 1;
    width: 100%;
  }

  .nav-primary {
    font-size: 2rem;
    display: inline-block;
    list-style: none;
    li {
      float: left;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      &:first-child {
        margin-left: 15rem;
      }
      a{
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        &:hover {
          color: red;
        }
      }
    }
  }
</style>
