<template>
  <div class="layout layout-default flex flexcol">
    <div v-if="!isHidden" class="layout-default-head">
      <PageHead :title="setStepTitle" />
    </div>
    <main class="layout-default-main">
      <slot />
    </main>
  </div>
</template>

<script>
import PageHead from '@/components/page/PageHead'
export default {
  name: 'Default',
  props: {
    setStepTitle: {
      type: Object,
      default: () => {
        return {
          en: ''
        }
      }
    }, 
    isHidden: {
      type: Boolean,
      default: false
    }
  },

  components: { PageHead }
}
</script>
