<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb">
      Табы
      <span class="fs14">assets/css/main.scss</span>
      <div class="tabs-content">
      <component :is="curComponent" />
    </div>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
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
      { name: 'About', icon: 'like' },
      { name: 'Offers', icon: 'edit' },
      { name: 'Facilities', icon: 'export' },
      { name: 'Descritpion', icon: 'upload' },
      { name: 'Extra', icon: 'filter' }
    ],
    tabsColor: [
      { name: 'Hot Offers', count: 2},
      { name: 'Last-minuts', count: 0},
      { name: 'Special Offers', count: 0},
      { name: 'Pack', count: 5},
    ]
  }),
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

<style lang="scss" scoped>

</style>
