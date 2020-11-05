<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <button class="form-select tleft flex aic jcsb ggap1" @click="show">
      <span class="cut-text">{{ selectedText }}</span>
      <svg class="ic14 icwhite"><use xlink:href="@/assets/icons/sprite.svg#arr_down"></use></svg>
    </button>
    <!-- <select :name="uniq" :id="uniq" v-model="modelInput" class="form-select">
      <option value="">{{ $t('placeholder__choose') }}</option>
      <option v-for="(item, i) of list" :key="item.value+'-'+i" :value="item.value">{{ item.name }}</option>
    </select> -->

    <transition name="picker-fade">
      <div class="picker" v-show="state===1" @touchmove.prevent @click="_cancel">
        <transition name="picker-move">
          <div class="picker-panel" v-show="state===1" @click.stop>
            
            <div class="picker-choose border-bottom-1px grid aic jcsb">
              <span class="cancel" @click="_cancel">Cancel</span>
              <!-- <span class="confirm" @click="_confirm">Confirm</span> -->
              <h1 class="picker-title">{{ label }}</h1>
            </div>
            
            <div class="picker-content">
              <div class="mask-top border-bottom-1px"></div>
              <div class="mask-bottom border-top-1px"></div>
              <div class="wheel-wrapper" ref="wheelWrapper">
                <div class="wheel">
                  <ul class="wheel-scroll">
                    <li
                      v-for="(item, index) in list" :key="index"
                      :class="{ 'wheel-disabled-item':item.disabled }"
                      class="wheel-item">{{ item.name }}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="picker-footer">
              <button class="btn def wfull" @click="_confirm">Conferma</button>
            </div>
          </div>
        </transition>
      </div>
    </transition>

  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Wheel from '@better-scroll/wheel'

BScroll.use(Wheel)

const STATE_HIDE = 0
const STATE_SHOW = 1

// const COMPONENT_NAME = 'picker'
const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'
const EVENT_CHANGE = 'change'

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
    value: [String, Number],
    uniq: {
      type: String,
      default: 'uniq'
    },
    label: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    state: STATE_HIDE,
    selectedIndex: 2,
    selectedText: 'Select'
  }),

  computed: {
    modelInput: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('change', val);
      }
    },
  },

  mounted () {
    if (this.modelInput) {
      // const index = this.list.findIndex(item => item.value === this.modelInput)
      // if (index !== -1) this.selectedText = this.list[index].name
      this.selectedText = this.modelInput
    }
    // this.selectedText = this.list[this.selectedIndex].name
    // this.modelInput = this.list[this.selectedIndex].value
  },

  methods: {
    _confirm() {
      if (this._isMoving()) {
        return
      }
      this.hide()

      const currentSelectedIndex = this.wheel.getSelectedIndex()
      this.selectedIndex = currentSelectedIndex
      this.selectedText = this.list[this.selectedIndex].name
      // this.modelInput = this.list[this.selectedIndex].value
      this.modelInput = this.list[this.selectedIndex].name
      this.$emit(EVENT_SELECT, currentSelectedIndex)
    },
    _cancel() {
      this.hide()
      this.$emit(EVENT_CANCEL)
    },
    _isMoving() {
      return this.wheel.pending
    },
    show() {
      if (this.state === STATE_SHOW) {
        return
      }
      this.state = STATE_SHOW
      if (!this.wheel) {
        // waiting for DOM rendered
        this.$nextTick(() => {
          const wrapper = this.$refs.wheelWrapper.children[0]
          this._createWheel(wrapper)
        })
      } else {
        this.wheel.enable()
        this.wheel.wheelTo(this.selectedIndex)
      }
    },
    hide() {
      this.state = STATE_HIDE
      // if wheel is in animation, clear timer in it
      this.wheel.disable()
    },
    refresh() {
      this.$nextTick(() => {
        this.wheel.refresh()
      })
    },
    _createWheel(wheelWrapper) {
      if (!this.wheel) {
        this.wheel = new BScroll(wheelWrapper, {
          wheel: {
            selectedIndex: this.selectedIndex,
            wheelWrapperClass: 'wheel-scroll',
            wheelItemClass: 'wheel-item',
            wheelDisabledItemClass: 'wheel-disabled-item'
          },
          useTransition: false,
          probeType: 2
        })
        this.wheel.on('scrollEnd', () => {
          this.$emit(EVENT_CHANGE, this.wheel.getSelectedIndex())
        })
      } else {
        this.wheel.refresh()
      }
      return this.wheel
    }
  } // Methods end

}
</script>

<style scoped>
.border-top-1px {
  border-top: 1px #f5f5f5 solid;
}
.border-bottom-1px {
  border-bottom: 1px #f5f5f5 solid;
}
/* reset */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.picker {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
  background: linear-gradient(360deg, rgba(45, 44, 49, 0.7) 0%, rgba(45, 44, 49, 0) 100%), rgba(45, 44, 49, 0.6);
}
.picker.picker-fade-enter,
.picker.picker-fade-leave-active {
  opacity: 0;
}
.picker.picker-fade-enter-active,
.picker.picker-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.picker .picker-panel {
  position: absolute;
  z-index: 600;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: #fff;
  border-radius: 15px 15px 0 0;
}
.picker .picker-panel.picker-move-enter,
.picker .picker-panel.picker-move-leave-active {
  transform: translate3d(0, 300px, 0);
}
.picker .picker-panel.picker-move-enter-active,
.picker .picker-panel.picker-move-leave-active {
  transition: all 0.3s ease-in-out;
}
.picker .picker-panel .picker-choose {
  position: relative;
  height: 60px;
  color: #999;
  grid-template-columns: 60px 1fr 60px;
}
.picker .picker-panel .picker-choose .picker-title {
  margin: 0;
  font-weight: normal;
  text-align: center;
  font-size: 1.6rem;
  color: #2D2C31;
}
.picker .picker-panel .picker-choose .confirm,
.picker .picker-panel .picker-choose .cancel {
  padding: 10px 15px;
  font-size: 1.6rem;
}
.picker .picker-panel .picker-choose .cancel {
  color: #007AFF;
}
.picker .picker-panel .picker-choose .cancel:active {
  color: #016DC4;
}
.picker .picker-panel .picker-content {
  position: relative;
  /* top: 20px; */
}
.picker .picker-panel .picker-content .mask-top,
.picker .picker-panel .picker-content .mask-bottom {
  z-index: 10;
  width: 100%;
  height: 68px;
  pointer-events: none;
  transform: translateZ(0);
}
.picker .picker-panel .picker-content .mask-top {
  position: absolute;
  top: 0;
  background: linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.8));
}
.picker .picker-panel .picker-content .mask-bottom {
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0.8));
}
.picker .picker-panel .wheel-wrapper {
  display: flex;
  padding: 0 15px;
}
.picker .picker-panel .wheel-wrapper .wheel {
  -ms-flex: 1 1 1e-9px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-flex-basis: 1e-9px;
  flex-basis: 1e-9px;
  width: 1%;
  height: 173px;
  overflow: hidden;
  font-size: 18px;
}
.picker .picker-panel .wheel-wrapper .wheel .wheel-scroll {
  padding: 0;
  margin-top: 68px;
  line-height: 36px;
  list-style: none;
}
.picker .picker-panel .wheel-wrapper .wheel .wheel-scroll .wheel-item {
  list-style: none;
  height: 36px;
  overflow: hidden;
  white-space: nowrap;
  color: #333;
}
.picker .picker-panel .wheel-wrapper .wheel .wheel-scroll .wheel-item.wheel-disabled-item {
  opacity: 0.2;
}
.picker .picker-footer {
  height: 60px;
  width: 100%;
  padding: 0 15px;
}

</style>
