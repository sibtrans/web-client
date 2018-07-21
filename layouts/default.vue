<template>
  <v-app :dark="dark">
    <v-layout>
      <v-navigation-drawer
        class=""
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        fixed
        app
      >
        <v-list>
          <v-btn
            v-bind:class="miniIcon"
            v-if="drawer"
            icon
            @click.stop="miniVariant = !miniVariant"
          >
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>

          <v-list-tile

            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
            exact
          >

            <v-list-tile-action>

              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar id="qwe" i fixed app :clipped-left="clipped" absolute scroll-off-screen
                 scroll-target="#scrolling-techniques">
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <!--<v-btn-->
        <!--v-if="drawer"-->
        <!--icon-->
        <!--@click.stop="miniVariant = !miniVariant"-->
        <!--&gt;-->
        <!--<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>-->
        <!--</v-btn>-->
        <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="clipped = !clipped"-->
        <!--&gt;-->
        <!--<v-icon>web</v-icon>-->
        <!--</v-btn>-->
        <v-btn
          icon
          @click.stop="dark = !dark"
        >
          <v-icon>timelapse</v-icon>
        </v-btn>
        <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="fixed = !fixed"-->
        <!--&gt;-->
        <!--<v-icon>remove</v-icon>-->
        <!--</v-btn>-->

        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <!--<v-btn-->
        <!--icon-->
        <!--@click.stop="rightDrawer = !rightDrawer"-->
        <!--&gt;-->
        <!--<v-icon>menu</v-icon>-->
        <!--</v-btn>-->
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Личный кабинет</v-btn>
          <v-btn flat>Новосибирск</v-btn>
          <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>


      </v-toolbar>
      <div
        id="scrolling-techniques"
        class="scroll-y"
        style="max-height: 600px"
      >
      </div>

      <v-content id="content" grid-list-xl text-xs-center>

        <v-container grid-list-xl text-xs-center>
          <nuxt/>
        </v-container>
      </v-content>
      <v-navigation-drawer
        temporary
        :right="right"
        v-model="rightDrawer"
        fixed
      >
        <v-list>
          <v-list-tile @click.native="right = !right">
            <v-list-tile-action>
              <v-icon light>compare_arrows</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-footer :fixed="fixed" app>
        <span>&copy; 2017</span>
      </v-footer>
    </v-layout>

  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        miniIcon: 'defaultMiniIcon',
        color: 'red',
        colorText: 'white',
        dark: false,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {icon: 'home', title: 'Главная', to: '/'},
          {icon: 'send', title: 'Отправить заявку', to: '/inspire'}
        ],
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'Байт Транзит Континент'
      }
    },
    watch: {
      dark: function () {
        if (this.dark === true) {
          this.color = 'orange'
          this.colorText = 'white'
        } else {
          this.color = 'red'
          this.colorText = 'white'
        }
      },
      miniVariant: function () {
        if (this.miniVariant === true) {
          this.miniIcon = 'defaultMiniIcon'
        } else {
          this.miniIcon = 'rightMiniIcon'
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
