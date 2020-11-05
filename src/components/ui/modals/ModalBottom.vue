<template>
  <div class="modal modal--bottom">
    <div class="modal-content" v-click-outside="closeModal">

      <div class="modal-head grid aic">
        <button @click="closeModal" class="close">
          <svg class="ic24 icblack">
            <use xlink:href="@/assets/icons/sprite.svg#close"></use>
          </svg>
        </button>
        <div class="head-title tcenter">
          {{ title }}
        </div>
        <span>&nbsp;</span>
      </div>
      
      <div class="modal-body p2">
        <slot></slot>
      </div>

      <div v-if="bottomBtn" class="p2 pt0">
        <button class="btn def wfull" @click="closeModal">Done</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title modal'
    },
    'bottom-btn': {
      type: Boolean,
      default: false
    }
  },

  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.modal--bottom {
  display: flex;
  flex-direction: column;
  .modal-content {
    margin: auto 0 0;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
  }
}
</style>
