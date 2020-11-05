<template>
  <div class="step">
    <div class="whitebox flex ggap1 p2">
      <span>img</span>
      <span>
        A diferenza di altre piataforme con Go Cervinia puoi aggiungere piu attività e gestirle da un solo account.
      </span>
    </div>

    <div class="grid ggap2 mt2">
      <div>Tutte le attivita puoi gestirle da solo o dal tuo profilo puoi aggiungere dei moderatori come secretarie, receptionist, familiari ect.</div>
      <div>Es. dai accesso al reception nelle solo gestioni 
delle prenotazioni e check-in per un periodo di 
3 mesi o fino alla fine del contratto di lavoro.</div>
    </div>
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
      type: Array,
      default: () => {
        return []
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
      let res = false
      if (data.price) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)

    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Наименование', 
      en: 'Delegate',
      it: 'Aggiungi una seconda attività '
    })
  }
}
</script>

<style lang="scss">

</style>
