<template>
  <div class="beds-info">
    <h4 class="heading fs14 m0 mb1">
      Posti letto
    </h4>
    <div class="beds-info-items flex-scrolled">
      <Bed v-for="(bed, i) in beds" :key="i" :bed="bed" :orMode="true" />
    </div>
  </div>
</template>
<script>
import Bed from '@/alex/components/Beds/Bed.vue'
export default {
  data: () => {
    return ({
      beds: [
        {icon: 'bed-3', count: 1},
        {icon: 'bed-2', count: 2},
        {icon: 'bed-3', count: 1},
        {icon: 'bed-2', count: 2},
        {icon: 'bed-3', count: 1},
        {icon: 'bed-2', count: 2},
        {icon: 'bed-3', count: 1},
        {icon: 'bed-2', count: 2},
      ]
    })
  },
  components: {
    Bed
  }
}
</script>
<style lang="scss" scoped>
.beds-info {
  padding: 20px 0  10px;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
</style>
