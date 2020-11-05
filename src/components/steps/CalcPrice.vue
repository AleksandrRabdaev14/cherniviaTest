<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Puoi impostare i prezzi in base alla stagione, giorni feriali, weekend, festivi e molto altro. Per quanto riguarda le prenotazioni, dal tuo profilo puoi impostare la politica dei acconti e le penalità per le cancellazioni.
    </div>

    <p class="fs14">E soltanto un prova giusto per farvi capire come funziona la politica sulle commssioni sul nostro piattaforma. In ogni caso le commissioni sono variabili.</p>

    <SeasonTabsNav 
      class="mb2"
    />

    <InputNumber 
      class="mb20"
      uniq="uname"
      label="Prezzo al giorno tasse, spese e commissioni inclusi"
      :placeholder="$t('label__name')"
      v-model="modelValue[modelValue.length - 1].apartment.price"
    />

    <!-- $t('localita') -->
    <div class="calcs grid gtc2 ggap2 mt2">

      <div class="calcs-item">
        <h4 class="m0 mb1">Attività</h4>
        <div class="calcs-box">
          <div class="calcs-box-chart minus">-7%</div>
          <p>Comisione</p>
          <hr>
          <h2>€{{ minusCount }}</h2>
          <small>Il tuo guadagno</small>
        </div>
      </div>
      
      <div class="calcs-item">
        <h4 class="m0 mb1">Turista</h4>
        <div class="calcs-box">
          <div class="calcs-box-chart plus">+7%</div>
          <p>Comisione</p>
          <hr>
          <h2>€{{ plusCount }}</h2>
          <small>Totale turista</small>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import SeasonTabsNav from '@/components/ui/SeasonTabsNav'
export default {
  components: { SeasonTabsNav },

  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['apartment'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'apartment', {})
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
    },
    minusCount () {
      let res = 0
      if (this.modelValue[this.modelValue.length - 1].apartment.price) {
        let proc = (this.modelValue[this.modelValue.length - 1].apartment.price / 100) * 7
        res = this.modelValue[this.modelValue.length - 1].apartment.price - proc
      } 
      return Math.floor(res)
      // return res.toFixed(2)
    },
    plusCount () {
      let res = 0
      if (this.modelValue[this.modelValue.length - 1].apartment.price) {
        let proc = (this.modelValue[this.modelValue.length - 1].apartment.price / 100) * 7
        res = this.modelValue[this.modelValue.length - 1].apartment.price + proc
      } 
      return Math.floor(res)
      // return res.toFixed(2)
    }
  },

  methods: {
    checkValidation (data) {
      let res = true
      if (data[this.value.length - 1].apartment.price) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Удобства', 
      en: 'Calc price',
      it: 'Servizi e comodità'
    })
  }
}
</script>

<style lang="scss" scoped>
.calcs {
  &-box {
    text-align: center;
    border: $border-1;
    padding: 1rem 2rem 2rem;
    border-radius: 5px;
    // box-shadow: $sh;
    box-shadow: 5px 5px 10px rgba(234, 234, 234, 0.2), -5px -5px 10px rgba(234, 234, 234, 0.2), 5px -5px 10px rgba(255, 255, 255, 0.9), -5px 5px 13px rgba(234, 234, 234, 0.9), inset -1px 1px 2px rgba(255, 255, 255, 0.3), inset 1px -1px 2px rgba(234, 234, 234, 0.5);

    &-chart {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0 auto 5px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 70px;

      &.minus {
        background-image: url('../../assets/img/minus7.svg');
      }
      &.plus {
        background-image: url('../../assets/img/plus7.svg');
      }
    }

    & > h2 {
      font-size: 2.4rem;
      margin: 0;
    }
    & > p {
      font-size: 1.4rem;
      margin: 0;
    }
  }
}
</style>
