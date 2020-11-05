<template>
  <div class="tabs-nav flex-scrolled ggap1">
    <template v-for="(item, i) of list">
      <button 
        :key="i"
        :class="modelValue === i ? 'active' : ''" 
        @click="modelValue = i"
      >
        <svg class="ic30 icdef mb05">
          <use :xlink:href="getIcon(item)"></use>
        </svg>
        {{ item.name }}
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

  data: () => ({
    curMainBnt: 1,
    curSubBnt: 1
  }),

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  },

  methods: {
    getIcon (item) { return require('@/assets/icons/'+item.sprite+'.svg')+'#'+item.icon }
  }
}
</script>

<style lang="scss" scoped>
.tabs-nav {
  & > button {
    border: 2px #F5F5F5 solid;
    background-color: transparent;
    color: #00699D;
    font-size: 1rem;
    padding: 0 1rem;
    height: 65px;
    width: max-content;
    min-width: 80px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    grid-gap: 2px;
    align-items: center;
    justify-content: center;
    position: relative;

    &.active {
      background-color: #FFF;
      border-color: rgba(8, 77, 141, 0.2);
      box-shadow: 0 10px 20px -3px rgba(8, 77, 141, 0.2);

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 3px;
        right: 3px;
        bottom: -10px;
        height: 2px;
        background-color: $def-hover;
        border-radius: 100px;
      }
    }

  }
  &.noline > button.active::before { display: none !important; }
}
</style>
