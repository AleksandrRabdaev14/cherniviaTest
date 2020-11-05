<template>
  <div class="auth-component">
    <AlertBox 
      v-if="message.text"
      class="mb2"
      :type="message.type"
      :message="message.text"
    />

    <!-- Form -->
    <form @submit.prevent="signin">
      <InputEmail 
        class="mb2"
        uniq="uemail"
        placeholder="Email"
        v-model.trim="user.email"
      />
      <button type="submit" class="btn btn--def wfull">
        Restore
      </button>
    </form>

    <hr>

    <div class="grid gtc2 ggap2">
      <!-- Login -->
      <button class="btn btn--white wfull" @click="$emit('change-component', 'SignIn')">
        {{ $t('button__login') }}
      </button>
      <!-- Reg -->
      <button class="btn btn--white wfull" @click="$emit('change-component', 'SignUp')">
        {{ $t('button__register') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
      console.log('sign in')
    }
  }
}
</script>

<style>

</style>
