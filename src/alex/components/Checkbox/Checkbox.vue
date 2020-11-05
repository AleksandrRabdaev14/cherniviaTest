<template>
  <div class="checkbox">
    <label class="checkbox-item" :class="[{'active': isActive}]">
      <span class="fs16 lhr">{{labelText}}</span>
      <input type="checkbox" @change="isActive = !isActive">
    </label>
  </div>
</template>
<script>
export default {
  props: {
    labelText: String
  },
  data() {
    return ({
      isActive: false
    })
  },
  mounted: () => {
    console.log('asd')
  }
}
</script>
<style lang="scss" scoped>
  .checkbox {
    &-item {
      padding: 15px 30px;
      width: 100%;
      display: block;
      border: 2px solid $border-color;
      border-radius: 4px;
      input {
        display: none;
      }
      &.active {
        border: 2px solid $green;
      }
    }
  }
</style>
