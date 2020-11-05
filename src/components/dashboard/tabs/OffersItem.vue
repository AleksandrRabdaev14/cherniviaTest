<template>
  <div class="tab-item">
    <!-- Tabs -->
    <TabsNavColor 
      class="mlminus2 mrminus2 p15"
      :list="tabs"
      v-model="curTab"
    />

    <!-- Content -->
    <div class="offers mlminus2 mrminus2">

      <!-- Item -->
      <div v-if="curTab === 0" class="flex-scrolled ggap1 pr15 pl15 pb15">
        <ApartMinItem 
          v-for="(item, i) of stepData"
          :key="i"
          :item="item" 
        />
        <img src="@/assets/img/help/hot-offer.png" alt="Hot offer">
      </div>
      
      <!-- Item -->
      <div v-if="curTab === 1" class="flex-scrolled ggap1 pr15 pl15 pb15">
        <!-- <ApartMinItem 
          v-for="(item, i) of stepData"
          :key="i"
          :item="item" 
        /> -->
        <img src="@/assets/img/help/last-minute.png" alt="Last minute">
      </div>
      
      <!-- Item -->
      <div v-if="curTab === 2" class="flex-scrolled ggap1 pr15 pl15 pb15">
        <!-- <ApartMinItem 
          v-for="(item, i) of stepData"
          :key="i"
          :item="item" 
        /> -->
        <img src="@/assets/img/help/special-offer.png" alt="Last minute">
      </div>
      
      <!-- Item -->
      <div v-if="curTab === 3" class="flex-scrolled ggap1 pr15 pl15 pb15">
        <!-- <ApartMinItem 
          v-for="(item, i) of stepData"
          :key="i"
          :item="item" 
        /> -->
        <img src="@/assets/img/help/pack.png" alt="Last minute">
      </div>

    </div>

  </div>
</template>

<script>
import ApartMinItem from '@/components/items/ApartMinItem'
// import OfferItem from '@/components/items/OfferItem'
export default {
  components: { ApartMinItem },
  
  data: () => ({
    curTab: 0,
    tabs: [
      {
        name: 'Hot Offers',
        count: '1',
        color: '#41B04C'
      },
      {
        name: 'Last-Minute',
        count: '0',
        color: '#FA8722'
      },
      {
        name: 'Special offer',
        count: '0',
        color: '#4539D6'
      },
      {
        name: 'Pacchetti',
        count: '0',
        color: '#FFCA26'
      },
    ],
    stepData: []
  }),

  mounted () {
    if (localStorage.getItem('stepData')) {
      try {
        this.stepData = JSON.parse(localStorage.getItem('stepData'))
      } catch {
        localStorage.removeItem('stepData')
      }
    }
  }
}
</script>

<style>

</style>
