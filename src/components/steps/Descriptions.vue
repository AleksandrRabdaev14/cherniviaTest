<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Aggiungi una descrizione alla tua struttura o attività. Abbiamo turisti da tutto il mondo e pubblicizziamo i nostri Partner nella maggior parte dei paesi. Inizia ad aggiungere le descrizione almeno in Italiano e Inglese. Cerca di essere amichevole e professionale.
    </div>

    <!-- <p>Abbiamo turisti da tutto il mondo e pubiciziamo Go Cervinia nella maggior parte dei paesi di comune interessi, inizia a aggiungere le descrizione almeno in Italiano e Inglese. </p> -->

    <div class="langs flex aic ggap1">
      <button class="langs-item" :class="lang === 'en' ? 'active' : ''" @click="lang = 'en'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#en"></use>
        </svg>
        English
      </button>
      <button class="langs-item" :class="lang === 'it' ? 'active' : ''" @click="lang = 'it'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#it"></use>
        </svg>
        Italiano
      </button>
      <button class="langs-item" :class="lang === 'fr' ? 'active' : ''" @click="lang = 'fr'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#fr"></use>
        </svg>
        Francais
      </button>
      <button class="langs-item" :class="lang === 'se' ? 'active' : ''" @click="lang = 'se'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#se"></use>
        </svg>
        Swedish
      </button>
      <button class="langs-item" :class="lang === 'ru' ? 'active' : ''" @click="lang = 'ru'">
        <svg class="ic30">
          <use xlink:href="@/assets/icons/flags.svg#ru"></use>
        </svg>
        Russian
      </button>
    </div>

    <div class="mt2">
      <InputTextarea 
        name="description"
        uniq="description"
        placeholder="Descrivi la tua attività"
        v-model="modelValue[modelValue.length - 1].description[lang]"
      />
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['description'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'description', {})
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
    lang: 'en'
  }),

  watch: {
    value: {
      handler (val) {
        this.checkValidation(val[val.length - 1].description)
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
      for (const key in data) {
        const element = data[key];
        if (element.length > 2) { res = false }
      }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value[this.value.length - 1].description)
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Описание', 
      en: 'Descriptions',
      it: 'Servizi e comodità'
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
