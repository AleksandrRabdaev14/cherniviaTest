<template>
  <div class="beds-item" :class="{'or-mode': orMode}">
    <svg>
      <use :xlink:href="require('@/assets/icons/room.svg') + '#' + bed.icon"></use>
    </svg>
    <span class="fs12">x{{bed.count}}</span>
  </div>
</template>
<script>
export default {
  props: {
    bed: Object,
    orMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.or-mode {
  &::after {
    content: 'or';
    margin-left: 1.3rem;
    font-size: 1.2rem;
    color: $black;
  }
  &:last-child {
    &::after {
      content: none;
    }
  }
}
.beds {
  &-item {
    display: flex;
    align-items: center;
    svg {
      height: 14px;
      width: 20px;
      fill: $black2;
      margin-right: .5rem;
    }
    span {
      color: $black2;
    }
  }
}
</style>
