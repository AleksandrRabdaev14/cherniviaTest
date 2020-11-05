<template>
  <div class="room-description">
    <div class="room-description-heading mb1">
      <h2 class="m0 fs16 t400">Stanze, spazi e posti letto</h2>
    </div>
    <div class="room-description-list">
      <ExtendedList :rooms="rooms" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.room-description {
  &-heading {
    color: $black;
  }
}
</style>
<script>
import ExtendedList from '@/alex/components/ExtendedList/ExtendedList.vue'
export default {
  props: {
    rooms: {
      required: true,
      type: Array
    }
  },
  components: {
    ExtendedList
  }
}
</script>
