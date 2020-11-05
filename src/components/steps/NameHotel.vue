<template>
  <div class="step">
    <h1>Name Hostel</h1>
    <InputText 
      class="mb20"
      uniq="uname"
      :label="$t('label__name')"
      :placeholder="$t('label__name')"
      v-model="modelValue.name"
    />

    <InputText 
      class="mb3 mt1"
      uniq="uamount"
      label="Capienza massima delle persone presso la vostra struttura"
      placeholder="123"
      v-model="modelValue.amount_person"
    />

    <p class="mb1">Seleziona la classe della struttura</p>
    <div class="wfull flex jcc aic">
      <h1>{{ modelValue.stars === 6 ? '5lux' : modelValue.level }}</h1>
      <!-- <img src="@/assets/icons/star.svg"> -->
    </div>

    <InputRange v-model="modelValue.level"/>
    
  </div>
</template>

<script>
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
    },
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
      if (!!data.name && data.name.length > 1 && !!data.amount_person && data.amount_person.length > 0 && !!data.level) res = false
      this.$emit('invalid-state', res)
    },
  },

  mounted () {
    this.checkValidation(this.value)
  }
}
</script>

<style lang="scss" scoped>
  img {
    margin-bottom: 6px;
    margin-left: 5px;
  }
</style>
