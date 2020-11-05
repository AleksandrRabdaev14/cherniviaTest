<template>
  <div class="p3">
    <div class="cards">
      <h1 class="doc-title flex aic jcsb m0 mb3">
        Динамические компоненты карточек
      </h1>
    </div>

    <section class="doc-section p2 mb2">
      <div class="content">
        <h2 class="m0 mb2">Карточка описания номеров</h2>
        <RoomDescription :rooms="rooms" />
      </div>
    </section>

    <section class="doc-section p2 mb2">
      <div class="content">
        <h2 class="m0 mb2">Карточка для отображения карты</h2>
        <ExtendedMap />
      </div>
    </section>

    <section class="doc-section p2 mb2">
      <div class="content">
        <h2 class="m0 mb2">Информация о спальных местах</h2>
        <BedsInfo />
      </div>
    </section>

    <section class="doc-section p2">
      <div class="content">
        <h2 class="m0 mb2">Карточки опций</h2>
        <Options />
      </div>
    </section>

  </div>
</template>

<script>
// import offerCard from "./cards/offerCard.vue"
import RoomDescription from '@/alex/components/RoomDescription/RoomDescription.vue'
import ExtendedMap from '@/alex/components/ExtendedMap/ExtendedMap.vue'
import BedsInfo from '@/alex/components/BedsInfo/BedsInfo.vue'
import Options from '@/alex/components/Options/Options.vue'

export default {
  name: "Cards",
  components: {
    RoomDescription,
    ExtendedMap,
    BedsInfo,
    Options,
  },
  data: () => {
    return ({
      rooms: [
        {
          heading: 'Heading for room', 
          description: 'Some description', 
          beds: [
            {icon: 'bed-1', count: 1},
            {icon: 'bed-2', count: 2},
          ]
        },
        {
          heading: 'Heading for room 2', 
          description: 'Some description 2', 
          beds: [
            {icon: 'bed-3', count: 1},
            {icon: 'bed-2', count: 2},
          ]
        }
      ]
    });
  }
}
</script>

<style lang="scss">

</style>
