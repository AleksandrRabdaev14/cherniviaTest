<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      <b>Manca qualcosa?</b><br>
n seguito puoi aggiungere diversi regolamenti e ristrizioni per i tuoi clienti per evitare posibile situazioni di incovenienza o problemi con il vicinato o regolamenti condominiali.
    </div>

    <SeasonTabsNav 
      class="mb2"
    />

    <div class="season-price grid">

      <!-- Item -->
      <div class="season-price-item grid aic ggap2">
        <span>
          <h3 class="m0">RO o OB</h3>
          <small>Formula Room Only/Bed Only</small>
        </span>
        <span>
          <InputSwitcher 
            class="form-direction-rtl"
            name="food_status_w_lowro"
            uniq="food_status_w_lowro"
            :val="true"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.ro"
          />
        </span>
        <span>
          &nbsp;
        </span>
      </div>
      
      <!-- Item -->
      <div class="season-price-item grid aic ggap2">
        <span>
          <h3 class="m0">SC</h3>
          <small>Camera con cucina</small>
        </span>
        <span>
          <InputSwitcher 
            class="form-direction-rtl"
            name="food_status_w_lowsc"
            uniq="food_status_w_lowsc"
            :val="true"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.sc"
          />
        </span>
        <span>
          &nbsp;
        </span>
      </div>

      <!-- Item -->
      <div class="season-price-item grid aic ggap2">
        <span>
          <h3 class="m0">BB</h3>
          <small>Camera e colazione</small>
        </span>
        <span>
          <InputSwitcher 
            class="form-direction-rtl"
            name="food_status_w_lowbb"
            uniq="food_status_w_lowbb"
            :val="true"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.bb"
          />
        </span>
        <span>
          <InputNumber 
            class="wauto"
            uniq="uname"
            placeholder="0"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.price.p_bb"
          />
        </span>
      </div>

      <!-- Item -->
      <div class="season-price-item grid aic ggap2">
        <span>
          <h3 class="m0">HB</h3>
          <small>Half Board o mezza pensione</small>
        </span>
        <span>
          <InputSwitcher 
            class="form-direction-rtl"
            name="food_status_w_lowhb"
            uniq="food_status_w_lowhb"
            :val="true"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.hb"
          />
        </span>
        <span>
          <InputNumber 
            class="wauto"
            uniq="uname"
            placeholder="0"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.price.p_hb"
          />
        </span>
      </div>

      <!-- Item -->
      <div class="season-price-item grid aic ggap2">
        <span>
          <h3 class="m0">FB</h3>
          <small>Full Board o pensione completa</small>
        </span>
        <span>
          <InputSwitcher 
            class="form-direction-rtl"
            name="food_status_w_lowfb"
            uniq="food_status_w_lowfb"
            :val="true"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.fb"
          />
        </span>
        <span>
          <InputNumber 
            class="wauto"
            uniq="uname"
            placeholder="0"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.price.p_fb"
          />
        </span>
      </div>

      <!-- Item -->
      <div class="season-price-item grid aic ggap2">
        <span>
          <h3 class="m0">Sconto bambini</h3>
          <small>Bambini menu 12 anni</small>
        </span>
        <span>
          <InputSwitcher 
            class="form-direction-rtl"
            name="food_status_w_lowsb"
            uniq="food_status_w_lowsb"
            :val="true"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.sb"
          />
        </span>
        <span>
          <InputSelect 
            uniq="percent_sb"
            :list="percent_sb"
            v-model="modelValue[modelValue.length - 1].food_status.winter.low.price.percent_sb"
          />
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['food_status'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'food_status', {
        winter: {
          low: {
            price: {}
          },
          medium: {
            price: {}
          },
          hight: {
            price: {}
          }
        }
      })
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
    percent_sb: [
      {
        name: '30%',
        value: 30
      },
      {
        name: '50%',
        value: 50
      },
      {
        name: '70%',
        value: 70
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
    checkValidation () {
      let res = false
      // if (data[this.modelValue.length - 1].apartment.price) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
    
    // Если нет объекта то создаем его
    // if (!this.modelValue[this.modelValue.length - 1].food_status.winter || !this.modelValue[this.modelValue.length - 1].food_status.winter.low) {
    //   this.$set(this.modelValue[this.modelValue.length - 1].food_status, 'winter', {
    //     low: {
    //       price: {}
    //     },
    //     medium: {
    //       price: {}
    //     },
    //     hight: {
    //       price: {}
    //     }
    //   })
    // }

    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Сезонные цены', 
      en: 'Season prices',
      it: 'Prezzi e stagionalità'
    })
  }
}
</script>

<style lang="scss">
.season-price {
  &-item {
    grid-template-columns: 1fr auto 10rem;
    border-bottom: $border-1;
    padding: 1rem 0;
    &:last-child {
      border: 0
    }
  }
}
</style>
