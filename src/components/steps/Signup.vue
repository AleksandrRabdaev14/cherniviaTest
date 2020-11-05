<template>
  <div class="page">
    <h1>{{ $t('header__registration') }}</h1>
    <InputEmail 
      class="mb2"
      uniq="uemail"
      placeholder="Email"
      v-model="modelValue.email"
    />
    <InputPassword 
      class="mb2"
      label="Password"
      uniq="pass"
      :isRepass="true"
      v-model="modelValue.password"
    />
    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Signin',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  watch: {
    value: {
      handler (val) {
        this.checkValidation(val)
      },
      deep: true
    }
  },

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  },

  methods: {
    ...mapMutations(['setLeadData']),

    next() {
      this.setLeadData(this.user)
      console.log(this.user)
      this.$router.push({ name: 'confirm'})
    },

    checkValidation (data) {
      let res = true

      if( !!data.code_country &&
          !!data.full_name &&
          !!data.phone_number &&
          data.code_country.length > 1 &&
          data.full_name.length > 1 &&
          data.phone_number.length > 1
        ) res = false

      this.$emit('invalid-state', res)
    }
  }
}
</script>

<style>

</style>
