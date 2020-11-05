<template>
  <div class="page">
    <h1 class="title">Enter your data</h1>

    <hr>
    <InputText 
      class="mb2"
      uniq="uname"
      :label="$t('label__name')"
      :placeholder="$t('label__name')"
      v-model="modelValue.full_name"
    />

    <div class="flex aic ggap2 mb2">
      <InputText 
        uniq="ccode"
        label="Код страны"
        placeholder="+7"
        v-model="modelValue.code_country"
      />
      <InputText 
        class="wfull"
        uniq="phone"
        label="Номер телефона (без кода)"
        placeholder="(666) 555-44-33"
        v-model="modelValue.phone_number"
      />
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'

export default {

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
