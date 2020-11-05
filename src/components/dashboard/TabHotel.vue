<template>
  <div class="dashboard-tab-content">
    <!-- Slider -->
    <div class="slider slider-full mlminus2 mrminus2">
      <VueSlickCarousel :arrows="false" :dots="true">
        <div class="slider-item-img" :style="{ backgroundImage: 'url(https://pbs.twimg.com/profile_images/559785015673094145/lI0wf1hf.jpeg)' }">
          &nbsp;
        </div>
        <div class="slider-item-img" :style="{ backgroundImage: 'url(https://www.nastol.com.ua/download.php?img=201201/1920x1200/nastol.com.ua-13725.jpg)' }">
          &nbsp;
        </div>
      </VueSlickCarousel>
    </div>
    <!-- Content -->
    <TabsNav class="mlminus2 mrminus2 p15" :list="tabs" v-model="curTab" />
    <hr class="mt0">
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
        icon: 'plus',
        component: 'ActivitiesItem'
      },
      {
        name: 'Rooms',
        icon: 'plus',
        component: 'AvailabilityItem'
      },
      {
        name: 'Availability',
        icon: 'plus',
        component: 'ServicesItem'
      },
      {
        name: 'Services',
        icon: 'plus',
        component: 'OffersItem'
      },
      {
        name: 'Offers',
        icon: 'plus',
        component: 'InstrumentsItem'
      },
      {
        name: 'Srumenti',
        icon: 'plus',
        component: 'PartnersItem'
      },
      {
        name: 'Partners',
        icon: 'plus',
        component: 'ClientsItem'
      },
      {
        name: 'Clienti',
        icon: 'plus',
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
