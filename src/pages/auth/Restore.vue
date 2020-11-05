<template>
  <div class="page">

    <AlertBox v-if="error" :message="error" type="danger"/>
    <AlertBox v-if="isSend" message="Checked your Email" type="info"/>

    <p class="mt2 mb1">For restore password</p>
    <InputEmail 
      class="mb20"
      uniq="uemail"
      placeholder="Email"
      v-model.trim="email"
    />

    <p class="mt2 mb1">For restore login</p>

    <div class="flex aic ggap10 mb1">
      <InputText 
        uniq="ccode"
        label="Code country"
        placeholder="+7"
        v-model="phone.code_country"
      />
      <InputText 
        class="wfull"
        uniq="phone"
        label="Phone number (without code)"
        placeholder="(666) 555-44-33"
        v-model="phone.phone_number"
      />
    </div>


    <button @click="onRestoreLogin" class="btn btn--def wfull mt3"> Restore Login </button>
    <button @click="onRestorePass" class="btn btn--def wfull mt1">Restore Password</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'


export default {
  name: 'Restore',

  data: () => ({
    email: '',
    isSend: false,
    phone: {
        code_country: null,
        phone_number: null
    }
  }),

  computed: {
    ...mapGetters(['auth', 'error', 'countIncorrectLogin']),
  },

  validations: {
    email: {
        required,
        email
    },

    phone: {
        code_country: {
            required
        },

        phone_number: {
            required
        }
    }
  },

  methods: {
    ...mapActions(['restoreLogin', 'restorePass']),
    ...mapMutations(['setError']),

    onValidEmail() {
        const isValidEmail = this.$v.email

        isValidEmail.$touch()


        if(isValidEmail.$dirty && !isValidEmail.required) {
            this.setError('Please enter email!')
            this.$emit('load', false)
            return
        }  
        if(isValidEmail.$dirty && !isValidEmail.email) {
            this.setError('Incorrect email!')
            this.$emit('load', false)
            return
        }

        return true
    },

    onValidPhone() {
        const isValidCodeCountry = this.$v.phone.code_country
        const isValidPhoneNumber = this.$v.phone.phone_number

        isValidCodeCountry.$touch()
        isValidPhoneNumber.$touch()


        if(isValidCodeCountry.$dirty && !isValidCodeCountry.required) {
            this.setError('Please enter code country!')
            this.$emit('load', false)
            return
        }
        if(isValidPhoneNumber.$dirty && !isValidPhoneNumber.required) {
            this.setError('Please enter phone number!')
            this.$emit('load', false)
            return
        }
            
        return true
    },
    
    onRestoreLogin() {
        this.$emit('load', true)

        if(this.onValidPhone()) 
            this.restoreLogin(this.phone).then(() => {
                this.$emit('load', false)
                if(this.error === '') 
                    this.$router.push({name: 'newLogin', params: { restoreLogin: true } })
            })
    },

    onRestorePass() {
        this.$emit('load', true)

        if(this.onValidEmail()) this.restorePass({email: this.email}).then(() => {
            this.$emit('load', false)
            if(this.error === '') 
                this.isSend = true
        })
    }
  }
}
</script>
