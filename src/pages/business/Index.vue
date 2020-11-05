<template>
  <div class="page">
    
    <!-- Nav tabs -->
    <div class="businesses flex-scrolled ggap1 mminus2 p2">
      <template v-for="(item, i) of businesses">
        <button 
          :key="i" 
          class="businesses-item" 
          :class="curTab === 'TabApartment' ? 'active' : ''" 
          :style="{ backgroundImage: 'url('+item.media[0].url+')' }"
          @click="setComponent(item.activity)"
        >
          <span>
            Apartament Luna
          </span>
        </button>
      </template>
      <!-- <button class="businesses-item" :class="curTab === 'TabHotel' ? 'active' : ''" @click="setComponent('TabHotel')">
        <span>
          Chalet Francois
        </span>
      </button> -->
      <router-link :to="{ name: 'create', params: {step:'categories'} }" class="btn defb uniq-btn sm flex aic">
        <svg class="ic18 icdef mr1">
          <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
        </svg>
        Add
      </router-link>
    </div>

    <!-- Content tabs -->
    <div class="dashboard-tabs mt2">
      <component :is="curComponent" />
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    curTab: 'TabApartment',
    curComponent: 'div',
    businesses: []
  }),

  methods: {
    setComponent (activity) {
      if (activity === 1) this.curTab = 'TabApartment'
      if (activity === 2) this.curTab = 'TabApartment'
      this.curComponent = () => import(`@/components/dashboard/${this.curTab}.vue`)
    }
  },

  mounted () {
    this.setComponent(this.curTab)
    if (localStorage.getItem('stepData')) {
      try {
        this.businesses = JSON.parse(localStorage.getItem('stepData'))
      } catch {
        localStorage.removeItem('stepData')
      }
    }
  }
}
</script>

<style lang="scss">
.uniq-btn {
  height: 53px;
  padding: 0 !important;
  min-width: auto !important;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.businesses {
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-position: center;
    background-size: cover;
    background-color: #333;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    padding: 0;
    overflow: hidden;
    position: relative;

    &.active {
      box-shadow: 0px 2px 4px rgba(46, 44, 48, 0.6);
      &::before {
        content: "";
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 0 2px $green;
        z-index: 1;
      }
    }

    & > span {
      display: block;
      // width: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 0.2rem 0.8rem 0.4rem;
      position: relative;
      z-index: 0;
    }
  }
  &-item, & > .btn {
    min-width: 31.5%;
  }
}
</style>
