<template>
  <div class="modal modal--full">
    <div class="modal-content">

      <div class="modal-head grid aic">
        <button @click="$emit('close')" class="close">
          <svg class="ic24 icblack">
            <use xlink:href="@/assets/icons/sprite.svg#close"></use>
          </svg>
        </button>
        <div class="head-title tcenter">
          {{ title }}
        </div>
        <button @click="$emit('save')" class="save" :disabled="disabled">
          <svg class="ic24 icgreen">
            <use xlink:href="@/assets/icons/sprite.svg#check"></use>
          </svg>
        </button>
      </div>
      
      <div class="modal-body p15">
        <slot></slot>
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
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.save, .close {
  border: 0;
  background-color: transparent;
  height: 100%;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    background-color: #EEE;
  }
  &:disabled {
    filter: grayscale(1);
  }
}
</style>
