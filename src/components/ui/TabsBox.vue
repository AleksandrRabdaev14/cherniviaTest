<template>
  <div class="tabs-box">
    <button 
      v-for="(item, i) of list" 
      :key="i" 
      :class="curTab === i ? 'active' : ''" 
      @click="curTab = 0"
    >{{ item }}</button>
  </div>
</template>

<script>
export default {
  props: ['list'],

  data: () => ({
    curTab: 0
  }),

  watch: {
    curTab (val) { this.$emit('cur', val) }
  }
}
</script>

<style lang="scss" scoped>
.tabs-box {
  display: flex;
  align-items: center;
  border-bottom: 1px #DADADA solid;
  & > button {
    color: #979797;
    background-color: #F5F5F5;
    font-size: 1.6rem;
    padding: 15px 20px;
    border-radius: 8px 8px 0 0;
    border: 1px #F5F5F5 solid;
    border-bottom: 0;
    width: 100%;
    font-weight: 700;

    &:first-child {
      border-radius: 15px 8px 0 0;
    }
    &:last-child {
      border-radius: 8px 15px 0 0;
    }

    &.active {
      color: $def;
      border-color: #DADADA;
      background-color: #FFF;
      box-shadow: 0 2px 0 0 #FFF;
    }
  }
}
</style>
