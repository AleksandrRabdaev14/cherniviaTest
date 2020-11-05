<template>
  <div class="page">
    <AlertBox v-if="error" :message="error" class="mb2" type="danger"/>
    <h1>New {{ restoreLogin ? 'Login &' : '' }} Password</h1>

    

    <InputEmail 
      class="mb1"
      uniq="uemail"
      placeholder="Email"
      v-model="user.email"
      v-if="restoreLogin"
    />
    <InputPassword 
      class="mb1"
      label="Password"
      uniq="pass"
      :isRepass="true"
      v-model="user.pass"
    />
    <button @click="restoreLogin ? onNewLogin() : onNewPass()" class="btn btn--def wfull mt2">Done</button>
  </div>
</template>

<script>
// Forms
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'NewLogin',

  props: ['restoreLogin'],

  data: () => ({
    token: '',
    email: '',
    user: {
      email: '',
      pass: ''
    }
  }),

  created() {
    const searchString = new URLSearchParams(window.location.search);

    const params = []

    searchString.forEach(value => {
      params.push(value)
    })

    this.token = params[0]
    this.email = params[1]
  },

  validations: {
    user: {
      email: {
        required,
        email
      },
      pass: {
        required,
        minLength: minLength(8)
      }
    }
  },

  watch: {
    user: {
      handler (val) {
        console.log(val)
      },
      deep: true
    }
  },

  computed: {
      ...mapGetters(['error'])
  },

  methods: {
      ...mapMutations(['setError']),
      ...mapActions(['newLogin', 'newPass']),

      onValidPass() {
        const isValidPass = this.$v.user.pass

        isValidPass.$touch()


        if(isValidPass.$dirty && !isValidPass.required) {
            this.setError('Please enter new pass!')
            this.$emit('load', false)
            return
        }  
        if(isValidPass.$dirty && !isValidPass.minLength) {
            this.setError('Minimum password length is 8 characters!')
            this.$emit('load', false)
            return
        }

        return true
    },

      onNewPass() {

        this.$emit('load', true)

        if(this.onValidPass()) this.newPass({
          token: this.token,
          email: this.email,
          password: this.user.pass
        }).then(() => {
            if(!this.error) {
              this.$emit('load', false)
              
            }
        })
      },

      onNewLogin() {
        console.log('newLogin')
        // this.newLogin({})
      }
  }
}
</script>

<style>

</style>
