<template>
  <main class="container">

    <section class="section-primary">

      <div class="section-primary__text-box">

        <h1 class="heading-primary">

          <div class="heading-primary--main">
            <span class="heading-primary--main---1">Байт</span>
            <span class="heading-primary--logo"><a href="/"><img src="../static/logo_burned.png" width="140" height="140"
                                                        alt="1"></a></span>
            <span class="heading-primary--main---2">Транзит</span>
          </div>

          <span class="heading-primary--sub">Транспорт & Логистика</span>
        </h1>

        <order-button/>
      </div>
    </section>

    <section class="section-about">
      <h1>Hello Nuxt</h1>

    </section>
    <section class="section-about">
      <h1>Hello Nuxt</h1>

    </section>
    <section class="section-about">
      <h1>Hello Nuxt</h1>

    </section>
  </main>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import OrderButton from "../components/OrderButton";

  export default {
    components: {
      OrderButton,
      Logo,
      VuetifyLogo
    }
  }
</script>


<style scoped lang="scss">
  @import "../assets/styles/main";

  @mixin moveIn($x0,$x80, $x100) {

  }

  .section-primary {
    height: 88vh;
    background-size: cover;
    background: linear-gradient(
        to right bottom,
        $light_green, $dark_green),
    url(../assets/advanced-css-course/Natours/after-S05/img/hero.jpg) center;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75vh);

    &__text-box {
      position: absolute;
      top: 44%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-shadow: .5rem 1rem 1.8rem rgba($color-black, .3);
    }
    .heading-primary {
      text-transform: uppercase;
      letter-spacing: 0.3rem;

      &--main {
        font-weight: 700;
        font-size: 8rem;
        color: $color-primary;
        display: inline-block;

      }

      &--main---1 {
        display: block;
        animation-name: moveInLeftMain;
        animation-duration: 1.6s;

      }

      &--logo {
        position: absolute;
        margin-left: 25rem;
        top: -3rem;
        animation: moveHere 1.65s  0.3s;
        animation-fill-mode: backwards;
      }

      &--main---2 {
        display: block;
        color: $color-secondary;
        margin-top: -5.6rem;
        animation-name: moveInRightMain;
        animation-duration: 1.65s;
      }

      &--sub {
        display: inherit;
        font-size: 1.8rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        margin-left: 12.5rem;
        animation-name: moveInRightSub;
        animation-duration: 1.7s;
        color: $color-primary;
        margin-top: -2.3rem;
      }
    }
  }

  .section-about {
    background-color: #dbe3ff;
    padding: 25rem 0;
    margin-top: -13vh;
  }


</style>
