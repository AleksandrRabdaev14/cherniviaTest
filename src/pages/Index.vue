<template>
  <div class="page t-center mtauto">
    <h1>Welcome!</h1>
    <p>Поможем продавать ваши товары и услуги более эффективно.</p>

    <button class="btn btn--def wfull" @click="signInClick"> {{ $t('button__login') }} </button>
    <button class="btn btn--white wfull mt1" @click="signUpClick"> {{ $t('button__register') }} </button>

    <PopUp :isVisible="isVisiblePopUp" :title='component.title' @close="closePopUp"> 
      <component :is="component.name" @setComponent="setComponent"> </component>
    </PopUp>

  </div>
</template>

<script>

export default {
  name: 'Home',
  
  data() {
    return {
      isVisiblePopUp: false,
      component: {
        name: '',
        title: ''
      }
    }
  },

  methods: {
    signInClick() {
      this.setComponent({name: 'SignIn', title: 'Login'})
      this.showPopUp()
    },

    signUpClick() {
      this.setComponent({name: 'SignUp', title: 'Register'})
      this.showPopUp()
    },

    setComponent(component) {
      this.closePopUp()
      setTimeout(() => this.showPopUp(), 600)
      this.component = component
    },

    showPopUp() {
      this.isVisiblePopUp = true
    },

    closePopUp() {
      this.isVisiblePopUp = false
    }
  }
}
</script>
