<template>
  <div class="auth-component">
    <AlertBox 
      v-if="message.text"
      class="mb2"
      :type="message.type"
      :message="message.text"
    />

    <!-- Form -->
    <form>
    <!-- <form @submit.prevent="signin"> -->
      <InputEmail 
        class="mb2"
        label="Email"
        uniq="uemail"
        placeholder="cervinia@gmail.com"
        v-model.trim="user.email"
      />
      <InputPassword 
        class="mb2"
        label="Password"
        uniq="password"
        placeholder="Enter password"
        :isRepass="false"
        v-model.trim="user.password"
      />
      <a href="#" class="linkg flex mt1 fs12">Recovery login or password</a>
      <!-- <button type="submit" class="btn def wfull">
        {{ $t('button__login') }}
      </button> -->
    </form>

    <!-- Forgot -->
    <!-- <button class="btn defb wfull mt2" @click="$emit('change-component', 'Forgot')">
      {{ $t('header__forgot_password') }}
    </button> -->

    <!-- Other -->
    <div class="grid aic ggap1 mt2 mb2">
      <button class="btn whiteb flex aic jcc ggap1">
        <svg class="ic24">
          <use xlink:href="@/assets/icons/logo.svg#facebook"></use>
        </svg>
        Continue in with Facebook
      </button>
      <button class="btn whiteb flex aic jcc ggap1">
        <svg class="ic24">
          <use xlink:href="@/assets/icons/logo.svg#apple"></use>
        </svg>
        Continue in with Apple
      </button>
      <button class="btn whiteb flex aic jcc ggap1">
        <svg class="ic24">
          <use xlink:href="@/assets/icons/logo.svg#google"></use>
        </svg>
        Continue with Google
      </button>
    </div>

    <button @click="signin" class="btn def wfull">
      {{ $t('button__login') }}
    </button>

  </div>
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    message: {
      type: 'danger',
      text: ''
    }
  }),

  methods: {
    signin () {
      this.$emit('load', true)
      this.$store.dispatch('signIn', this.user).then((res) => {
        this.$emit('load', false)
        if (res === 'ok') {
          this.message = {
            type: 'success',
            text: 'Everything is ok, come in!'
          }
          setTimeout(() => this.$router.push({ name: 'business' }), 1000)
        } else {
          this.message = {
            type: 'danger',
            text: res
          }
        }
      })
    }
  }
}
</script>

<style>

</style>
