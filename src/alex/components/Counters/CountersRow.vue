<template>
  <div class="counters">
    <CountersItem 
    v-for="(item, i) in counters" 
    :key="i" 
    :counter="item.counter" 
    :heading="item.heading" 
    :isActive="item.isActive" 
    :color="item.color" 
    />
  </div>
</template>
<script>
import CountersItem from '@/alex/components/Counters/CountersItem.vue'

export default {
  name: 'CountersRow',
  components: {
    CountersItem
  },
  props: {
    counters: Array
  }
}
</script>
<style lang="scss" scoped>
.counters {
  padding: 1.5rem 0;
  & > * {
    margin-right: .5rem;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
