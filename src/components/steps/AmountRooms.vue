<template>
  <div class="step">
    <h1>Tipologia delle camere</h1>
    <AlertBox 
      type="info"
      message="Descrivi la tua struttura indicando tutte le camere e la tipologia di queste. Al momento serve solo per impostare il tuo profilo in modo che sia piu facile una volta completato la registrazione di personalizare le camere in base alle vostre esigenze."
    />
    <!-- $t('localita') -->

    <div class="persone-item mb1 mt1 flex jcsb" v-for="(item, id) in amount_rooms" :key="id">
        <div class="persone-item__title">{{ item }}</div>
        <InputCounter v-model="modelValue.amount_rooms[item]"/>
    </div>
    
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    return {
        amount_rooms: ['single', 'double', 'tribal', 'quadruple', 'junior_suite', 'suite']
    }
      
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
      let amount = 0

      for( var key in data.amount_rooms) 
        amount += data.amount_rooms[key]

      if (amount > 0) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
  }
}
</script>
