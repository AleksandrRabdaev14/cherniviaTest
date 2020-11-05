<template>
  <div class="form-range">
    <div class="form-range-slider">
      <input
        type="range"
        :step="step"
        :min="min"
        :max="max"
        v-model.number="modelValue"
      >
      <span class="form-range-slider-thumb" :style="{ left: leftData }"></span>
      <div class="form-range-slider-fill" :style="{ width: widthData }" />
    </div>

    <div v-if="ticks.length > 0" class="form-range-ticks">
      <div
        v-for="item of ticks"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    ticks: {
      type: Array,
      default: () => {
        return []
      }
    },
  },

  data () {
    return {
      leftData: '0%',
      widthData: '0%'
    }
  },

  watch: {
    value (val) {
      if (val > 0) --val
      else val = 0
      this.rangeCounter()
    }
  },
  
  computed: {
    modelValue: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('change', val);
      }
    },
  },

  methods: {
    rangeCounter () {
      const width = this.modelValue * 100 / this.max
      const counter = this.modelValue * 6
      this.leftData = `calc(${width}% - ${counter}px)`
      this.widthData = width + '%'
    }
  }
}
</script>

<style lang="scss">
.form-range {
  margin: 0;
  padding: 0;

  &-slider {
    position: relative;
    height: 6px;
    padding: 0;

    &::before {
      content: "";
      display: block;
      background: #FFF;
      border: 0.5px solid #DADADA;
      height: 100%;
      border-radius: 2px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
    }

    & > input { 
      -webkit-appearance: none;
      width: 100%;
      margin: 0;
      background: transparent;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 30px;
        width: 30px;
        background: transparent;
        cursor: pointer;
        position: relative;
        top: -12px;
        z-index: 100;
        opacity: 0;
      }
      &::-webkit-slider-runnable-track {
        width: 100%;
        height: 6px;
        background: transparent;
        border: 0;
      }
    }

    &-thumb {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      top: -13px;
      width: 30px;
      height: 30px;
      border-radius: 100px;
      border: 0.5px solid #C4C4C4;
      background-color: #FFF;
      box-shadow: -2px -5px 10px rgba(218, 218, 218, 0.4), 4px 5px 10px rgba(218, 218, 218, 0.4);
      z-index: 9;

      &::before {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 100px;
        background: #27AE60;
        // border: 0.5px solid #C4C4C4;
      }
    }
    &-fill {
      height: 100%;
      width: 100%;
      background-color: $green;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 2;
      border-radius: 2px;
    }
  }

  &-ticks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 22px;

    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      font-size: 1rem;
      color: #979797;
    }
  }
}
</style>
