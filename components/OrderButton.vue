<template>
  <nuxt-link to="/inspire" class="btn btn--red btn--animated">Оформить заявку</nuxt-link>
</template>

<script>

</script>

<style scoped lang="scss">
  @import "../assets/styles/main";

  .btn {
    &:link,
    &:visited {
      text-transform: uppercase;
      text-decoration: none;
      padding: 1.5rem 4rem;
      display: inline-block;
      font-weight: 600;
      font-size: 1.8rem;
      border-radius: 100px;
      transition: all .2s;
      position: relative;
      box-shadow: 0 .8rem 1.8rem rgba($color-black, .35);
    }

    &:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 1.2rem 1.8rem rgba($color-black, .40);
    }

    &:active {
      transform: translateY(-0.1rem);
      box-shadow: 0 .6rem 1rem rgba($color-black, .45);
    }

    &::after {
      content: '';

      height: 100%;
      width: 100%;
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
    }

    &:hover::after {
      transform: scaleX(1.5) scaleY(1.6);
      opacity: 0;
    }

    &--red {
      left: 14%;
      top: 6rem;
      background: linear-gradient(
          to right,
          $color-primary, darkred);
      color: white;
      letter-spacing: .1rem;

      &::after {
        background: linear-gradient(
            to right bottom,
            $color-primary, darkred);
        color: $color-primary;
      }
    }

    &--animated {
      animation: moveHere .5s ease-out 1.8s;
      animation-fill-mode: backwards;
    }
  }
</style>
