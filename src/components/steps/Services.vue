<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Descrivi la tua attività indicando tutti gli spazi e la destinazione di questi. Aggiungi le camere, quantità dei posti e la tipologia dei letti. Non dimenticarti dei spazi come balconi, giardini o spazi comuni di gran interesse per
i tuoi ospiti. 
    </div>
    
    <div class="grid gtc2 ggap1 mb2">
      <template v-for="(item, i) of optionList">
        <InputCheckIcon 
          name="options[]"
          :key="'option_'+i"
          :label="item.name"
          :icon="item.icon"
          :uniq="'option_'+i"
          :val="item"
          v-model="modelValue[modelValue.length - 1].options"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['options'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'options', [])
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
    optionList: [
      {
        id: 1,
        name: 'WiFi',
        icon: 'wifi'
      },
      {
        id: 2,
        name: 'Panorama',
        icon: 'panorama'
      },
      {
        id: 3,
        name: 'Ski room',
        icon: 'ski'
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
      if (data[this.modelValue.length - 1].options.length > 0) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)

    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Удобства', 
      en: 'Services',
      it: 'Servizi e comodità'
    })
  }
}
</script>
