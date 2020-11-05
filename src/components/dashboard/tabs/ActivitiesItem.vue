<template>
  <div class="tab-item">
    <div class="grid gtc2 ggap05 mb1 mt1">
      <button class="boxorange b0 flex flexcol aic jcc p1">
        <b class="fs14">Top 10</b>
        <div class="sf12">Tourist choose</div>
      </button>
      <button class="boxgreen b0">
        <b class="fs14">Public<br>business</b>
      </button>
    </div>
    
    <div class="grid gtc4 aic ggap05">
      <button class="boxwhite sul grid pl05 pr05 pt1 pb1 tleft">
        <div class="fs10 flex mb05 tdefd tb">Loyalty Rank</div>
        <b class="fs14 flex aic">1 of 10
          <svg class="ic15 icgreyd ml05">
            <use xlink:href="@/assets/icons/sprite.svg#info"></use>
          </svg>
        </b>
      </button>
      <button class="boxwhite sul grid p1 tleft">
        <div class="fs10 flex mb05 tdefd tb">Views</div>
        <b class="fs14">+40</b>
      </button>
      <button class="boxwhite sul grid p1 tleft">
        <div class="fs10 flex mb05 tdefd tb">Recensioni</div>
        <b class="fs14">245</b>
      </button>
      <button class="boxwhite sul grid p1 tleft">
        <div class="fs10 flex mb05 tdefd tb">Rating</div>
        <b class="fs14 flex aic">4.5
          <svg class="ic15 icyellow ml05">
            <use xlink:href="@/assets/icons/sprite.svg#star"></use>
          </svg>
        </b>
      </button>
    </div>

    <hr class="dark">

    <div class="grid gtc2 ggap05 mb1 mt1">
      <button class="boxwhite b0 p1 tleft grid gtc2 aic ggap1">
        <span class="grid ggap05">
          <b class="fs10 tdefd">Today</b>
          <div class="sf14">15.12.2020</div>
        </span>
        <span>
          <div class="boxgreenb tcenter p05">Medium season</div>
        </span>
      </button>
      <button class="boxwhite b0 p1 tleft grid gtc2 aic ggap1">
        <span class="grid ggap05">
          <b class="fs10 tdefd">Posizione in<br>categoria</b>
          <div class="sf14"><small class="fs10">Posto</small> 15</div>
        </span>
        <span>
          <div class="boxorangeb tcenter p05 pt1 pb1">Apartamente</div>
        </span>
      </button>
    </div>

    <hr class="mb0 dark">

    <!-- Tabs -->
    <TabsNav 
      class="mlminus2 mrminus2 p15 noline"
      :list="tabs"
      v-model="curTab"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    curTab: 0,
    tabs: [
      {
        name: 'Image Galery',
        sprite: 'sprite',
        icon: 'image',
        component: 'ActivitiesItem'
      },
      {
        name: 'QR-Code',
        sprite: 'sprite',
        icon: 'plus',
        component: 'AvailabilityItem'
      },
      {
        name: 'E-Payment',
        sprite: 'sprite',
        icon: 'plus',
        component: 'ServicesItem'
      },
      {
        name: 'Check-in',
        sprite: 'sprite',
        icon: 'plus',
        component: 'OffersItem'
      },
      {
        name: 'Orari',
        sprite: 'sprite',
        icon: 'plus',
        component: 'InstrumentsItem'
      },
      {
        name: 'Fatture',
        sprite: 'sprite',
        icon: 'plus',
        component: 'PartnersItem'
      },
      {
        name: 'Dati Fiscali',
        sprite: 'sprite',
        icon: 'plus',
        component: 'ClientsItem'
      },
      {
        name: 'Descrizione',
        sprite: 'sprite',
        icon: 'plus',
        component: 'ClientsItem'
      },
    ]
  }),
}
</script>

<style>

</style>
