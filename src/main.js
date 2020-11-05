import Vue from 'vue'
import App from './App.vue'
import socAuth from './plugins/socAuth'
import i18n from './plugins/i18n'
import gmap from './plugins/gmap'
import router from './router/'
import store from './store/'
import Vuelidate from 'vuelidate'
import vClickOutside from 'v-click-outside'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Clipboard from 'v-clipboard'
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
 
// Global components
import './components/globalComponents'

// Global styles
import '@/assets/css/main.scss'
import '@/assets/css/icons.scss'
import '@/assets/css/btns.scss'
import '@/assets/css/flexgrid.scss'
import '@/assets/css/forms.scss'
import '@/assets/css/spaces.scss'
import '@/assets/css/docs.scss'
import '@/assets/css/text.scss'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(vClickOutside)
Vue.component('VueSlickCarousel', VueSlickCarousel)
Vue.use(Clipboard)
Vue.component('SshPre', SshPre)

// Mixins for docs
Vue.mixin({
  data: () => ({
    openList: []
  }),
  methods: {
    has (item) {
      let res = false
      if (this.openList.findIndex(val => val === item) !== -1) res = true
      return res
    }, 

    toggler (item) {
      const index = this.openList.findIndex(val => val === item)
      if (index  === -1) this.openList.push(item)
      else this.openList.splice(index, 1)
    }
  }
})

new Vue({
  socAuth,
  i18n,
  gmap,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
