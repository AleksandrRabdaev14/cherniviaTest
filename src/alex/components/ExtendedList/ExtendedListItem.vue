<template>
  <div class="extended-list-item">
    <div class="info-text">
      <h4 class="m0 fs14 t400 lhr heading">{{heading}}</h4>
      <span class="lhr fs12 description">{{description}}</span>
    </div>
    <Beds :beds="beds" />
  </div>
</template>
<script>
import Beds from '@/alex/components/Beds/Beds.vue'
export default {
  components: {
    Beds
  },
  props: {
    heading: {
      type: String,
      default: 'Default Heading'
    },
    description: {
      type: String,
      default: 'Default Description'
    },
    beds: {
      type: Array
    },
  }
}
</script>
<style lang="scss" scoped>
.extended-list {
  &-item {
    border: 1px solid $border-color;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    .info {
      &-text {
        .heading {
          color: $black;
        }
        .description {
          color: $black2;
        }
      }
    }
  }
}
</style>
