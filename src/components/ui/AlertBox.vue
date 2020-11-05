<template>
  <div class="alert aic" :class="'alert--'+type" v-html="message">
    <!-- <svg class="ic-24 mr1">
      <use :xlink:href="icon"></use>
    </svg> -->
    <!-- {{ message }} -->
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: 'Alert message'
    }
  },

  // computed: {
  //   icon () {
  //     let res = require('@/assets/icons/sprite.svg')
  //     return res+'#alert-'+this.type
  //   }
  // }
}
</script>

<style>

</style>
