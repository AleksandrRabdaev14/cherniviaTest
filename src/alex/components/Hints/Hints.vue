<template>
  <div class="hints">
    <div v-for="(hint, i) in hints" :key="i" class="hints-item grid">
      <div class="icon">
        <svg :class="hint.mode">
          <use :xlink:href="require('@/assets/icons/sprite.svg') + '#' + hint.mode"></use>
        </svg>
      </div>
      <div class="info">
        <h4 class="fs16 black m0 lhr heading t400">
          {{hint.heading}}
        </h4>
        <span class="fs14 black2 lhr description">{{hint.description}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hints: Array
  }
}
</script>
<style lang="scss" scoped>
.hints {
  &-item {
    grid-template-columns: 20px 1fr;
    grid-column-gap: 1.5rem;
    margin-bottom: 2rem;
    .icon {
      svg {
        width: 20px;
        height: 20px;
        &.good {
          fill: $green;
        }
        &.bad {
          fill: $alert-red;
        }
      }
    }
    .info {
      .description {
        margin-top: .5rem;
        display: block;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
