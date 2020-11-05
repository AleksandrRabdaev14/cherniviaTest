<template>
  <div class="beds flex">
    <Bed v-for="(bed, i) in beds" :key="i" :bed="bed" />
  </div>
</template>
<script>
import Bed from '@/alex/components/Beds/Bed.vue'
export default {
  components: {
    Bed
  },
  props: {
    beds: Array
  }
}
</script>
<style lang="scss">
.beds {
  &-item {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
