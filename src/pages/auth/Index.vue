<template>
  <div class="page">

    <transition name="fade">
      <ModalBottom 
        v-if="isOpen" 
        :title="authTitle" 
        @close="isOpen = false"
      >
        <component :is="curComponent" @change-component="setComponent($event)" @load="$emit('load', $event)" />
      </ModalBottom>
    </transition>

    <!-- <div class="langs flex aic ggap1">
      <button class="langs-item" :class="lang === 'en' ? 'active' : ''" @click="lang = 'en'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#en"></use>
        </svg>
        English
      </button>
      <button class="langs-item" :class="lang === 'it' ? 'active' : ''" @click="lang = 'it'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#it"></use>
        </svg>
        Italiano
      </button>
      <button class="langs-item" :class="lang === 'fr' ? 'active' : ''" @click="lang = 'fr'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#fr"></use>
        </svg>
        Francais
      </button>
      <button class="langs-item" :class="lang === 'se' ? 'active' : ''" @click="lang = 'se'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#se"></use>
        </svg>
        Swedish
      </button>
      <button class="langs-item" :class="lang === 'ru' ? 'active' : ''" @click="lang = 'ru'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#ru"></use>
        </svg>
        Russian
      </button>
    </div> -->

    <button @click="setComponent('SignUp')" class="btn def wfull mt3">{{ $t('button__register') }}</button>
    <button @click="setComponent('SignIn')" class="btn dark wfull mt1">{{ $t('button__login') }}</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MainAuth',

  data: () => ({
    isOpen: false,
    curComponent: '',
    authTitle: '',
    lang: 'en'
  }),

  watch: {
    lang (val) {
      this.setLang(val)
      this.$i18n.locale = val
    }
  },

  methods: {
    ...mapMutations(['setLang']),
    setComponent (name) {
      this.isOpen = false
      this.curComponent = () => import(`@/components/auth/${name}.vue`)
      
      this.authTitle = ''
      if (name === 'SignIn') this.authTitle = 'Login'
      if (name === 'SignUp') this.authTitle = 'Registration'
      if (name === 'Forgot') this.authTitle = 'Restore password'

      setTimeout(() => this.isOpen = true, 100)
    }
  },

  mounted () {
    if (localStorage.getItem('lang')) {
      try {
        this.lang = localStorage.getItem('lang')
      } catch {
        localStorage.removeItem('lang')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.langs-item {
  border-radius: 10px;
  background-color: #FFF;
}
.langs-item.active {
  background-color: $def;
  border-color: $def;
  // box-shadow: 0 0 0 2px #2196F3;
  box-shadow: 0 10px 30px -3px rgba(2, 125, 189, 0.7);
  color: #FFF;
}
</style>
