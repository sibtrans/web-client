<template>
  <div class="wrap">
    <header class="header">
      <div class="nav-container">

        <nav id="navbar-top">
          <div class="logo"><span class="logo-img"><a href="/"><img src="../static/logo_burned.png" width="42" height="42"
                                                                    alt="1"></a></span></div>
          <div class="logo-label"><span class="logo-label-first">Байт </span><span class="logo-label-second">Транзит</span></div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </nav>

        <nav id="navbar-primary">
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </nav>
      </div>


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
  @import "../assets/styles/main";

  @mixin nav-link($color) {
    a {
      color: $color;
      text-transform: uppercase;
      text-decoration: none;
    }

  }

  .header {

    position: absolute;
    width: 100%;
    z-index: 1;
    @include clearfix;
    background: rgba(249, 226, 221, 0.7);

    .nav-container {
      font-size: 2rem;
      width: 1100px;
      margin: 0 auto;

      #navbar-top {
        height: 6rem;

        position: relative;
        width: 1100px;

        .logo {
          float: left;
          padding: 1rem 1rem 0rem 5rem ;

        }

        .logo-label {
          float: left;
          font-size: 2.8rem;
          font-weight: 600;
          padding-top: .7rem;
          &-first {
            color: $color-primary;
          }
          &-second {
            color: $color-secondary;
          }
        }


        li {
          float: left;
          list-style: none;
          padding: 1.1rem 3rem 1rem 1rem;
          &:first-child {
            padding-left: 30rem;
          }
        }
      }

      #navbar-primary {
        height: 7rem;

        position: relative;
        width: 1100px;
        li {
          float: right;
          list-style: none;
          color: $color-secondary;
          padding: 2rem 2rem 2rem 2rem;
          &:first-child {
            padding-right: 10vh;
          }
        }
      }
    }


  }

</style>
