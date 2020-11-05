<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Ci sono delle strutture che offrono i servizi di tipo Spa, piscina, palestra, ristorante anche a clienti esterni. In questo modo su go Cervinia queste attività sarrano visibili a tutti i clienti esterni e faremmo in modo che queste offerte siano visibile su tutti i nostri canali publicitari.
    </div>

    <div class="fs16 mb1">Qualle di questi servizi offerti possono essere disponibili anche per i turisti esterni?</div>
    <p class="fs14">Nel vostro profilo comparirano come attività separate dove riuscirete a impostarli i prezzi, le oferte e tutti i regolamenti in base alle vostre essigenze.</p>
    
    <div class="mt2">
      <InputSwitcher 
        v-for="(item, i) of modelValue[modelValue.length - 1].sub_services"
        :key="i"
        :label="item.name"
        class="form-list form-direction-rtl"
        :name="'sub_services'+i"
        :uniq="'sub_services'+i"
        :val="true"
        v-model="item.public"
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
      ru: 'Доступ к услугам', 
      en: 'Rules services',
      it: 'Servizi e comodità'
    })
  }
}
</script>
