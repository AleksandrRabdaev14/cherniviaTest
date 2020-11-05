<template>
  <div v-if="item" class="tab-item">
    <div class="grid gtc3 ggap1 pt2 pb2">
      <button class="boxturquoise fs12 jcc p1 b0 pr">
        <svg class="ic10 icwhite pa">
          <use xlink:href="@/assets/icons/sprite.svg#info"></use>
        </svg>
        Go Cervinia<br>
        Partner 2020
      </button>
      <button class="boxgreenb fs12 jcc p1">
        Cancellazione
        gratuita
      </button>
      <button class="btn empty flex aic jcc p0">
        <span class="fs10 mr05">from</span>
        <div class="price t-right">
          <h3 class="m0 fs24"><span class="fs12">€</span>{{ item.apartment.price }}</h3>
          <p class="m0 fs12">per night</p>
        </div>
        <svg class="ic20 icdef asfs ml05 mt05">
          <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
        </svg>
      </button>
    </div>

    <hr class="m0 mlminus2 mrminus2">

    <div class="flex-scrolled aic p2 mlminus2 mrminus2">
      <div class="flex aic" v-for="(item, id) in beds" :key="id">
        <svg class="ic20 mr1">
          <use :xlink:href="getIcon(item.icon, 'room')"></use>
        </svg>
        <span class="mr2">{{ item.count }}</span>
      </div>
    </div>

    <hr class="m0 mlminus2 mrminus2">

    <div class="pt2">
      <div class="flex jcsb">
        <span class="grid-desc">
          <h4 class="fs14 m0">Posti letto</h4>
          <small class="fs15 mt05 flex">max {{ item.apartment.count_person }}</small>
        </span>
        <span class="vertical-hr"></span>

        <span class="grid-desc">
          <h4 class="fs14 m0">Bagni</h4>
          <small class="fs15 mt05 flex">{{ item.apartment.count_bathroom }}</small>
        </span>
        <span class="vertical-hr"></span>

        <span class="grid-desc">
          <h4 class="fs14 m0">Bilocale</h4>
          <small class="fs15 mt05 flex">{{ item.apartment.area }}</small>
        </span>
        <span class="vertical-hr"></span>
        
        <span class="grid-desc">
          <h4 class="fs14 m0">Classe</h4>
          <small class="fs15 mt05 flex">{{ item.apartment.apr_class }}</small>
        </span>
      </div>
      
      <div class="config-block__options mt2 flex aic">
        <span class="mr1">Camera matrimoniale, lodge, salone, balcone</span>
        <button class="btn empty">
          <svg class="ic20 icdef">
            <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="grid gtc2 ggap1 mt2">
      <div class="btn white flex aic p1">
        <svg class="ic24 mr1">
          <use xlink:href="@/assets/icons/sprite.svg#geomap"></use>
        </svg>
        <div class="flex aic">
          <span class="fs12">center village</span>
          <p class="m0 wfull">300 m</p>
        </div>
      </div>

      <div class="btn white flex aic p1">
        <svg class="ic24 mr1">
          <use xlink:href="@/assets/icons/sprite.svg#ski_lift"></use>
        </svg>
        <div class="flex aic">
          <span class="fs12 mr1">ski-lift</span>
          <p class="m0">500 m</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  
  data: () => ({
    beds: [
      { icon: 'bed-1', count: 3 },
      { icon: 'bed-2', count: 0 },
      { icon: 'bed-2-large', count: 4 },
      { icon: 'bed-3', count: 2 },
      { icon: 'sofa', count: 5 },
      { icon: 'sofa-large', count: 1 },
    ],
    config: [
      { title: 'Posti leto', data: 'max 5 ' },
      { title: 'Bagni', data: '1' },
      { title: 'Bilocale', data: '40 m²' },
      { title: 'Classe', data: 'Comfort' },
    ],
  }),

  methods: {
    getIcon(icon, type) {
      let iconPath = iconPath = require('@/assets/icons/sprite.svg')
      
      if (type === 'room')
        iconPath = require('@/assets/icons/room.svg')

      return iconPath + '#' + icon
    }
  }
}
</script>

<style scoped>
.boxturquoise > svg.pa {
  right: 10px;
  top: 10px;
}
</style>
