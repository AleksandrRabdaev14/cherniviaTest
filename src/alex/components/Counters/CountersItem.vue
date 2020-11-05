<template>
  <a href="#" class="counters-item" :class="[{active: isActive}, color]">
    <span class="heading fs12">
      {{heading}}
    </span>
    <span class="count fs16">
      {{counter}}
    </span>
  </a>
</template>
<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      default: 'green'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.counters {
  &-item {
    color: $white;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 2.5rem;
    border-radius: .4rem;
    position: relative;
    .heading {
      margin-bottom: .3rem;
    }
    &::after {
      content: '';
      background: transparent;
      width: calc(100% - 6px);
      height: 2px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }
    &.green {
      background: $counter-green;
      &.active {
        box-shadow: $counter-bs;
        &:after {
          content: '';
          background: $counter-green;
        }
      }
    }
    &.orange {
      background: $counter-orange;
      &.active {
        &:after {
          content: '';
          background: $counter-orange;
        }
      }
    }
    &.blue {
      background: $counter-blue;
      &.active {
        &:after {
          content: '';
          background: $counter-blue;
        }
      }
    }
    &.yellow {
      background: $counter-yellow;
      &.active {
        &:after {
          content: '';
          background: $counter-yellow;
        }
      }
    }
  }
}
</style>
