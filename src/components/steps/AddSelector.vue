<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      I metodi di comunicazione e le impostazioni delle notificazioni possono essere modificate dal tuo profilo.
    </div>

    <div class="grid ggap1 mt2">
      <InputRadioIcon 
        class="big"
        label="Gli appartamenti si trovano nello stesso indirizzo"
        name="rad"
        uniq="rad"
        icon="marker"
        :val="'same'"
        v-model="addressType"
      />
      <InputRadioIcon 
        class="big"
        label="Gli appartamenti si trovano nei indirizzi diversi"
        name="rad"
        uniq="rad2"
        icon="road"
        :val="'new'"
        v-model="addressType"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repeatData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data: () => ({
    addressType: ''
  }),

  watch: {
    addressType (val) {
      this.checkValidation(val)
      this.$emit('repeat', {
        type: this.repeatData.type,
        addressType: val
      })
    },
  },

  methods: {
    checkValidation (data) {
      let res = true
      if (data) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    // this.addressType = this.repeatData.addressType
    this.checkValidation(this.addressType)
    this.$parent.$emit('step-title', {
      ru: '', 
      en: '',
      it: ''
    })
  }
}
</script>

<style lang="scss">

</style>
