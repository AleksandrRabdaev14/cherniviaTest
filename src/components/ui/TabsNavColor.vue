<template>
  <div class="tabs-nav-color flex-scrolled ggap1">
    <template v-for="(item, i) of list">
      <button 
        :key="i"
        :class="modelValue === i ? 'active' : ''" 
        :style="{ background: item.color }"
        @click="modelValue = i"
      >
        <b class="fs12 flex aic jcc mb05 mt05">{{ item.name }}</b>
        <b class="fs16 flex aic jcc">{{ item.count }}</b>
        <div class="bline" :style="{ background: item.color }">&nbsp;</div>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {
      type: Number,
      default: 0
    }
  },

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-nav-color {
  & > button {
    border: 0;
    background-color: #0B86D8;
    color: #FFF;
    padding: 0 1rem;
    height: 60px;
    width: max-content;
    min-width: 100px;
    border-radius: 4px;
    display: block;
    align-items: center;
    justify-content: center;
    position: relative;
    

    &.active {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

      & > .bline {
        display: block;
        position: absolute;
        left: 3px;
        right: 3px;
        bottom: -5px;
        height: 2px;
        background-color: $def-hover;
        border-radius: 100px;
      }
    }

  }
  &.noline > button.active > .bline { display: none !important; }
}
</style>
