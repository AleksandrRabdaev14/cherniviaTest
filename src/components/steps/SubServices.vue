<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      <!-- Offrite qualche altro servizio extra ai vostri clienti?<br> -->
    </div>
    
    <div class="grid gtc2 ggap1 mb2">
      <InputCheckIcon 
        v-for="(item, i) of subServices"
        name="subs[]"
        :key="'subs_'+i"
        :label="item.name"
        :uniq="'subs_'+i"
        :val="item"
        v-model="modelValue[modelValue.length - 1].sub_services"
      />
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['sub_services'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'sub_services', [])
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
    subServices: [
      {
        name: 'Ristorante', 
        public: false
      },
      {
        name: 'Nolleggio Sci', 
        public: false
      },
      {
        name: 'Airport Transfer', 
        public: false
      },
      {
        name: 'Ski Service', 
        public: false
      },
      {
        name: 'Palestra', 
        public: false
      },
      {
        name: 'Spa, Massaggi, piscina', 
        public: false
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
      if (data[this.modelValue.length - 1].sub_services.length > 0) { res = false }
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
