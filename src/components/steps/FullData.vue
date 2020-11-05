<template>
  <div class="step">
    <!-- Edit name -->
    <transition name="fade">
      <ModalBottom v-if="isEditName" title="Cambio di nome" @close="isEditName = false">
        <InputText 
          label="Name"
          uniq="name"
          :bottom-btn="true"
          v-model="modelValue[modelValue.length - 1].name.en"
        />
      </ModalBottom>
    </transition>

    <!-- Slider -->
    <div class="slider slider-card pos-r mtminus2 mlminus2 mrminus2">
      <!-- Btns on slider -->
      <div class="slider-card-icons flex aic ggap1">
        <button>
          <svg class="ic16 icwhite">
            <use xlink:href="@/assets/icons/sprite.svg#export"></use>
          </svg>
        </button>
        <button>
          <svg class="ic16 icwhite">
            <use xlink:href="@/assets/icons/sprite.svg#like"></use>
          </svg>
        </button>
      </div>

      <template v-if="modelValue[modelValue.length - 1].media.length > 0">
        <!-- Slider -->
        <VueSlickCarousel :arrows="false" :dots="false" @afterChange="changeNum" ref="slider">
          <div v-for="(item, id) in modelValue[modelValue.length - 1].media" :key="id" class="slider-item-img h33" :style="{ backgroundImage: 'url('+item.url+')' }">
            &nbsp;
          </div>
        </VueSlickCarousel>
        <!-- Slider counter -->
        <div class="slider-card-amount">{{num}} / {{modelValue[modelValue.length - 1].media.length}}</div>
      </template>
      
      <div v-else class="no-photo h33" :style="{ backgroundImage: 'url('+require('@/assets/img/no-photo.jpg')+')' }">&nbsp;</div>
    </div>
    
    <!-- Name -->
    <div class="card-title flex aic jcsb pos-r">
      <small class="sup-title">Colazione inclusa BB</small>
      <h1 class="mt2 mb2 fs20 flex aic ggap2">
        {{ modelValue[modelValue.length - 1].name.en }}
        <button class="btn empty p0 hauto" @click="isEditName = true">
          <svg class="ic20 icdef">
            <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
          </svg>
        </button>
      </h1>
      <span class="rating">
        <div class="rating-count fs9">
          <span>8.3</span>
        </div>
        <small class="flex fs8 mt05">325 reviews</small>
      </span>
      <!-- <div class="rating flex aic jcc">8.1</div> -->
    </div>

    <!-- Tabs -->
    <TabsNav class="mlminus2 mrminus2 pb2 pr15 pl15" :list="tabs" v-model="curTab" />
    <hr class="m0 mlminus2 mrminus2">

    <!-- Content -->
    <div class="tabs-content">
      <component :is="curComponent" :item="modelValue[modelValue.length - 1]" />
    </div>

  </div>
</template>

<script>
export default {
  async created() {
    this.$parent.$emit('hideHeader')
    
    if (this.modelValue.length === 0) this.modelValue.push({})
    
    // if (typeof this.modelValue[this.modelValue.length - 1]['sub_services'] === "undefined") {
    //   await this.$set(this.modelValue[this.modelValue.length - 1], 'sub_services', [])
    // }
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
    curTab: 0,
    curComponent: 'div',
    isEditName: false,

    num: 1,
    images: [
      "http://www.fassinoimmobiliare.com/new%20york/Immagini%20web/New_York_appartamenti_appartamento_casa_case_villa_ville_loft%20%2837%29.jpg",
      "https://pix10.agoda.net/hotelImages/590/5905647/5905647_18102611060068688439.jpg",
      "https://i.pinimg.com/originals/f5/c9/2a/f5c92ae914c3536816dfe325631da408.jpg",
      "https://www.avvio.com/wp-content/uploads/2018/08/Cheval-Three-Quays-2-1200x899.jpg"
    ],
    colorTab: 0,
    tabs: [
      { name: 'About', sprite: 'sprite', icon: 'like' },
      { name: 'Offers', sprite: 'sprite', icon: 'edit' },
      { name: 'Facilities', sprite: 'sprite', icon: 'export' },
      { name: 'Descritpion', sprite: 'sprite', icon: 'upload' },
      { name: 'Extra', sprite: 'sprite', icon: 'filter' }
    ],
    tabsColor: [
      { name: 'Hot Offers', count: 2},
      { name: 'Last-minuts', count: 0},
      { name: 'Special Offers', count: 0},
      { name: 'Pack', count: 5},
    ]
  }),

  watch: {
    curTab (val) {
      this.setComponent(val)
    }
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
    checkValidation () {
      let res = false
      // if (data[this.modelValue.length - 1].price) { res = false }
      this.$emit('invalid-state', res)
    },

    setComponent (index) {
      this.curComponent = () => import(`@/components/steps/tabs/Tab${this.tabs[index].name}.vue`)
    },

    changeNum (val) { 
      this.num = ++val
    },

    selectTab(tab) { 
      this.curTab = tab
    }
  },

  mounted () {
    this.setComponent(this.curTab)
    this.checkValidation(this.value)
  }
}
</script>

<style lang="scss">
.options-modal {
  grid-template-columns: 20px 1fr;

  & span > p {
    color: #333;
  }
}
.slider-card {

  &-icons {
    position: absolute;
    right: 2rem;
    top: 2rem;
    z-index: 10;

    & > button {
      border: 0;
      background-color: rgba(45, 44, 49, 0.7);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      // backdrop-filter: blur(3px);

      &:active {
        background-color: rgba(45, 44, 49, 0.5);
      }
    }
  }

  &-amount {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: #FFF;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
}

.sup-title {
  position: absolute;
  left: 0;
  top: -1.5rem;
  background-color: $green;
  color: #FFF;
  font-size: 1rem;
  padding: 0 1rem;
  height: 22px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
