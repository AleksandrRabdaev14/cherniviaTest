<template>
  <div class="dashboard-tab-content">
    <!-- Slider -->
    <div class="slider slider-full mlminus2 mrminus2">
      <VueSlickCarousel :arrows="false" :dots="true">
        <div class="slider-item-img">
          <img src="@/assets/img/ads/ban-1.jpg" alt="">
        </div>
        <div class="slider-item-img">
          <img src="@/assets/img/ads/ban-2.jpg" alt="">
        </div>
      </VueSlickCarousel>
    </div>
    <!-- Content -->
    <TabsNav class="mlminus2 mrminus2 p15" :list="tabs" v-model="curTab" />
    <hr class="m0 dark">
    <component :is="curComponent" />
  </div>
</template>

<script>
export default {
  data: () => ({
    curTab: 0,
    curComponent: 'div',
    tabs: [
      {
        name: 'Activities',
        sprite: 'tabs',
        icon: 'bar-chart',
        component: 'ActivitiesItem'
      },
      {
        name: 'Availability',
        sprite: 'tabs',
        icon: 'calendar',
        component: 'AvailabilityItem'
      },
      {
        name: 'Services',
        sprite: 'tabs',
        icon: 'services',
        component: 'ServicesItem'
      },
      {
        name: 'Offers',
        sprite: 'tabs',
        icon: 'price',
        component: 'OffersItem'
      },
      {
        name: 'Srumenti',
        sprite: 'tabs',
        icon: 'megaphone',
        component: 'InstrumentsItem'
      },
      {
        name: 'Partners',
        sprite: 'tabs',
        icon: 'partners',
        component: 'PartnersItem'
      },
      {
        name: 'Clients',
        sprite: 'tabs',
        icon: 'team',
        component: 'ClientsItem'
      },
    ]
  }),

  watch: {
    curTab (val) {
      this.setComponent(val)
    }
  },

  methods: {
    setComponent (index) {
      this.curComponent = () => import(`@/components/dashboard/tabs/${this.tabs[index].component}.vue`)
    }
  },

  mounted () {
    this.setComponent(this.curTab)
  }
}
</script>

<style>

</style>
