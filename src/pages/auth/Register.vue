<template>
  <div class="page">

    <button class="btn btn--white wfull mb1">
        <svg class="ic-24 mr1">
            <use xlink:href="@/assets/icons/sprite.svg#google"></use>
        </svg>
        {{ $t('button__login') }}
        </button>
    <button class="btn btn--white wfull mb3">
        <svg class="ic-24 mr1">
            <use xlink:href="@/assets/icons/sprite.svg#facebook"></use>
        </svg>
        {{ $t('button__login') }}
    </button>

    <hr>

    <router-link :to="{ name: 'lead', params: {step:'userdata'} }" class="btn btn--def mt3">
          {{ $t('button__register') }}
    </router-link>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Signin',

  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),

  computed: {
    ...mapGetters(['auth', 'error', 'countIncorrectLogin']),
  },

  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },

  methods: {
    ...mapActions(['login']),
    ...mapMutations(['setError', 'setCountIncorrectLogin']),

    goTo(component) {
      this.$emit('setComponent', component)
    },
    
    signin() {

      const isValidEmail = this.$v.user.email
      const isValidPass = this.$v.user.password

      isValidEmail.$touch()
      isValidPass.$touch()

      if(isValidEmail.$dirty && !isValidEmail.required) {
        this.setError('Please fill in the fields!')
        return
      }
      if(isValidPass.$dirty && !isValidPass.required) {
        this.setError('Please fill in the fields!')
        return
      }   
      if(isValidEmail.$dirty && !isValidEmail.email) {
        this.setError('Incorrect email!')
        return
      }
      if(isValidPass.$dirty && !isValidPass.minLength) {
        this.setError('Minimum password length is 8 characters!')
        return
      }

      this.$emit('load', true)

      this.login(this.user).then(() => {
        this.$emit('load', false)
        if(this.countIncorrectLogin >= 3) {
          this.setError('')
          this.setCountIncorrectLogin()
          this.$router.push({ name: 'problem' })
        }
        if(this.auth) {
          this.setError('')
          this.$router.push({ name: 'business' })
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
