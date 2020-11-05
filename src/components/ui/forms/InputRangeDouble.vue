<template>
  <div class="form-range">
    <!-- <input type="range" min="0" max="10" id="range_start" step="1" v-model="range_start">
    <input type="range" min="0" max="10" id="range_end" step="1" v-model="range_end"> -->

    <div class="easy-basket-filter-range">
      <input
        v-model="range_min"
        type="range"
        class="lower range"
        step="1"
        min="0"
        max="10"
      >
      <input
        v-model="range_max"
        type="range"
        class="upper range"
        step="1"
        min="0"
        max="10"
      >
      <div class="fill" :style="styleObject" />
    </div>

    <div class="easy-basket-filter-ticks">
      <div
        v-for="item of ticks"
        :key="item.id"
        :class="item.class"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    curmin: {
      type: Number,
      default: 0
    },
    curmax: {
      type: Number,
      default: 10
    },
    reseted: {
      type: Boolean
    }
  },

  data () {
    return {
      range_min: this.curmin,
      range_max: this.curmax,
      ticks: [],
      styleObject: {
        left: '0%',
        width: '100%'
      }
    }
  },

  watch: {
    reseted (val) {
      if (val) {
        this.range_min = 0
        this.range_max = 10
      }
    },
    range_min () {
      if (Number(this.range_min) < 10) {
        if (Number(this.range_min) === Number(this.range_max)) {
          if (this.range_max < 10) {
            this.range_max = Number(this.range_max) + 1
          }
        }
      } else {
        this.range_min = 9
      }
      // console.log('Min ', this.range_min)
      this.hasActive()
      this.$emit('min', this.range_min)
    },
    range_max () {
      if (Number(this.range_max) > 0) {
        if (Number(this.range_min) === Number(this.range_max)) {
          if (this.range_min > 0) {
            this.range_min = Number(this.range_min) - 1
          }
        }
      } else {
        this.range_max = 1
      }
      // console.log('Max ', this.range_max)
      this.hasActive()
      this.$emit('max', this.range_max)
    }
  },

  mounted () {
    for (let i = this.min; i <= this.max; i++) {
      this.ticks.push(
        {
          id: i,
          class: ''
        }
      )
    }
    this.hasActive()
  },

  methods: {
    hasActive () {
      for (const i in this.ticks) {
        if (Number(this.ticks[i].id) === Number(this.range_min)) {
          this.ticks[i].class = 'active'
        } else if (Number(this.ticks[i].id) === Number(this.range_max)) {
          this.ticks[i].class = 'active'
        } else {
          this.ticks[i].class = ''
        }
      }

      // Blue line
      const width = this.range_max * 100 / 10
      const left = this.range_min * 100 / 10
      const cssLeft = left + '%'
      const cssWidth = (width - left) + '%'

      this.styleObject = {
        left: cssLeft,
        width: cssWidth
      }
    }
  }
}
</script>

<style>
.form-range{
  position: relative;
  margin: 30px 0 0;
  padding: 20px 0 0;
}
.fill {
  height: 3px;
  width: 100%;
  background-color: var(--def);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

/***** Position dual *****/
.range {
  position: absolute;
  left: 0;
  top: 0;
}

/****** Style range ******/
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 0;
  background: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  z-index: 3;
}

input[type=range]:focus, input[type=text]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height:20px;
  width: 20px;
  border: 5px solid #f1f1f1;
  box-shadow: 0 1px 5px -1px rgba(0, 0, 0, 0.5);
  border-radius: 100%;
  background: var(--def);
  cursor: pointer;
  margin-top: -9px;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: #3a3c4b;
  border-radius: 1.3px;
}
input[type=range].lower::-webkit-slider-runnable-track {
  background: red;
}

.easy-basket-filter-ticks {
  display: flex;
  justify-content: space-between;
  padding: 0;
  cursor: default;
  text-align: center;
}
.easy-basket-filter-ticks > div {
  font-size: 12px;
  color: var(--bg-light);
  background-color: var(--bg-light);
  width: 20px;
  display: block;
  border-radius: 100px;
  padding: 3px 0;
  transform: scale(0.3);
  transition: .2s;
}
.easy-basket-filter-ticks > div.active{
  transform: scale(1);
  background-color: var(--bg-light);
  color: #FFF;
  border-radius: 4px;
  transition: .2s;
}
</style>
