<template>
  <div class="tab-item">
    <!-- Tabs -->
    <TabsNavColor 
      class="mlminus2 mrminus2 p15"
      :list="tabs"
      v-model="curTab"
    />
    
    <!-- Content -->
    <div class="mt0 mb2">
      <div v-if="curTab === 0" class="grid gtc3 aic ggap1">
        <button v-for="(item, i) of foods" :key="'food_'+i" class="btn btn--def btn--auto flexcol aifs t-left">
          <h4 class="m0 fs14">{{ item.name }}</h4>
          {{ item.desc }}
        </button>
      </div>

      <div v-if="curTab !== 0" class="grid gtc3 aic ggap1">
        <h1>Other tabs</h1>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    curTab: 0,
    foods: [
      {
        name: 'SC',
        desc: 'Room with kitchen'
      },
      {
        name: 'SC',
        desc: 'Room with kitchen'
      },
      {
        name: 'SC',
        desc: 'Room with kitchen'
      },
      {
        name: 'SC',
        desc: 'Room with kitchen'
      },
      {
        name: 'SC',
        desc: 'Room with kitchen'
      },
      {
        name: 'SC',
        desc: 'Room with kitchen'
      },
    ],
    tabs: [
      {
        name: 'Food service',
        count: '6',
        component: 'SubFoodService'
      },
      {
        name: 'Spa',
        count: '0',
        component: 'SubFoodService'
      },
      {
        name: 'Restaurants',
        count: '0',
        component: 'SubFoodService'
      },
      {
        name: 'Transfer',
        count: '0',
        component: 'SubFoodService'
      }
    ]
  }),
}
</script>

<style>

</style>
