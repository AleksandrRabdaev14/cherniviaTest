<template>
  <div class="auth-component">
    
    <div class="grid aic ggap1">
      <button class="btn whiteb flex aic jcc ggap1 wfull" @click="signup('fb')">
        <svg class="ic24">
          <use xlink:href="@/assets/icons/logo.svg#facebook"></use>
        </svg>
        Continue in with Facebook
      </button>
      <button class="btn whiteb flex aic jcc ggap1 wfull">
        <svg class="ic24">
          <use xlink:href="@/assets/icons/logo.svg#apple"></use>
        </svg>
        Continue in with Apple
      </button>
      <button class="btn whiteb flex aic jcc ggap1 wfull" @click="signup('gg')">
        <svg class="ic24">
          <use xlink:href="@/assets/icons/logo.svg#google"></use>
        </svg>
        Continue with Google
      </button>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data: () => ({
    user: {
      login: '',
      full_name: '', // From social request
      phone_number: 0,
      category: 0,
      email: '', // From social request
      password: '',
      call_time: "00:00-10:00",
      code_country: 0, // From social request
      social_type: '', // G || F || A
      social_id: 0 // From social request
    },
    message: {
      type: 'danger',
      text: ''
    }
  }),

  // watch: {
  //   user: {
  //     handler (val) {
  //       console.log(val)
  //       this.$store.commit('setAuth', val)
  //     },
  //     deep: true
  //   }
  // },

  methods: {
    async signup (type) {

      if (type === 'fb') {
        // await Vue.allAuth().facebook().init() // Отключил потому что ругается АПИ фб на дубликат
        Vue.allAuth().facebook().signIn((facebookUser) => {
          console.log("facebook: ", facebookUser)

          this.user.full_name = facebookUser.name
          this.user.email = facebookUser.email || ''
          this.user.social_id = facebookUser.id
          this.user.social_type = 'F'

          this.$store.commit('setAuth', this.user)
          this.$router.push({ name: 'business' })
        })
        .catch((error) => console.error("facebook: ", error))
      }

      else if (type === 'gg') {
        await Vue.allAuth().google().init()
        Vue.allAuth().google().signIn((googleUser) => {
          console.log("google: ", googleUser)
          
          this.user.full_name = googleUser.tt.Ad
          this.user.email = googleUser.tt.$t
          this.user.social_id = googleUser.tt.OT
          this.user.social_type = 'G'

          this.$store.commit('setAuth', this.user)
          this.$router.push({ name: 'business' })
        })
        .catch((error) => console.error("google: ", error))
      }

    }
  }
}
</script>

<style>

</style>
