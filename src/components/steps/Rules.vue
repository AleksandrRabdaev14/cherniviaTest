<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      <b>Manca qualcosa?</b><br>
n seguito puoi aggiungere diversi regolamenti e ristrizioni per i tuoi clienti per evitare posibile situazioni di incovenienza o problemi con il vicinato o regolamenti condominiali.
    </div>
    
    <div class="mt2">
      <InputSwitcher 
        v-for="(item, i) of ruleList"
        :key="'rule_'+i"
        class="form-list form-direction-rtl fs16"
        name="rules[]"
        :label="item.name"
        :uniq="'rule_'+i"
        :val="item"
        v-model="modelValue[modelValue.length - 1].rules"
      />
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['rules'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'rules', [])
    }
  },

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

  data: () => ({
    ruleList: [
      {
        id: 1,
        name: 'Se puo fumare?'
      },
      {
        id: 2,
        name: 'Animali amessi?'
      },
      {
        id: 3,
        name: 'E permesso organizzare feste/eventi?'
      },
    ]
  }),

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
      if (data) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Правила', 
      en: 'Rules',
      it: 'Servizi e comodità'
    })
  }
}
</script>
