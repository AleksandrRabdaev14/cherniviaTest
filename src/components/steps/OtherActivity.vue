<template>
  <div class="step">
    <!-- <div class="alert-minus">
      Hai più attività con partite Iva diverse? No Problem!
      <p class="mb0 mt05">
        
      </p>
    </div> -->

    <!-- Slider -->
    <div class="mrminus2 mlminus2">
      <VueSlickCarousel class="page-slider" v-bind="sliderSettings">
        <div 
          v-for="(item, i) in sliderList"
          :key="i" 
          class="page-slider-item tcenter" 
          :style="{ backgroundImage: 'url('+item.img+')' }" 
        >
          <svg class="ic50 icwhite">
            <use :xlink:href="require('@/assets/icons/other.svg')+'#'+item.icon"></use>
          </svg>
          <p class="fs16">{{ item.text }}</p>
        </div>
      </VueSlickCarousel>
    </div>

    <!-- Text -->
    <p class="fs14 mb3 mt2">Esempio: dai accesso al receptionist soltanto per le gestioni delle prenotazioni e check-in per un periodo di 3 mesi o fino alla fine del contratto di lavoro.</p>

    <button class="btn def sm mlauto flex aic">
      <svg class="ic20 icwhite mr1">
        <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
      </svg>
      Aggiungi attività
    </button>
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

  data: () => ({
    sliderSettings: {
      "arrows": false,
      "dots": true,
      "infinite": true,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "autoplay": true,
      "speed": 1000,
      "autoplaySpeed": 2000,
      // "cssEase": "linear"
    },
    sliderList: [
      {
        text: 'Tutte le attività puoi gestirle da un solo profilo e puoi aggiungere più gestori e moderatori come segretari, receptionist, familiari etc.',
        icon: 'people',
        img: require('@/assets/img/slider/item-5.jpg')
      },
      {
        text: 'Puoi aggiungere quanti gestori o moderatori vuoi con diversi dirittie impostare un periodo in cui loro possono avere accesso al profilo della tua attività.',
        icon: 'peoples',
        img: require('@/assets/img/slider/item-4.jpg')
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
      let res = false
      if (data.price) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)

    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Другие активности', 
      en: 'Other activity',
      it: 'Aggiungi un altra attività'
    })
  }
}
</script>

<style lang="scss">
.page-slider {
  &-item {
    padding: 20px;
    color: #FFF;
    // font-weight: 700;
    line-height: 1.9rem;
    min-height: 265px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > .ic50 {
      width: 80px;
      height: 50px;
    }
  }

  & .slick-dots {
    bottom: 25px;

    & li button:before {
      color: #FFF;
    }
  }
}
</style>
