import Vue from 'vue'
import Vuetify from 'assets/vuetify'
import colors from 'assets/vuetify/es5/util/colors'
import ru from 'assets/locales/ru'



Vue.use(Vuetify, {
  theme: {
    primary: '#555', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
  },
  lang: {
    locales: { ru },
    current: 'ru'
  }
})

