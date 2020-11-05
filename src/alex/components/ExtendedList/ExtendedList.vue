<template>
  <div class="extended-list">
    <ExtendedListItem v-for="(room, i) in rooms" :key="i" :heading="room.heading" :description="room.description" :beds="room.beds" />
  </div>
</template>
<script>
import ExtendedListItem from '@/alex/components/ExtendedList/ExtendedListItem.vue'
export default {
  props: {
    rooms: {
      required: true,
      type: Array
    }
  },
  components: {
    ExtendedListItem
  }
}
</script>
