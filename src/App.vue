<template>
  <component :is="layout" :is-hidden="isHidden" :set-step-title="stepTitle">
    <transition name="fade">
      <PageLoading v-if="isLoad" />
    </transition>
    <router-view 
      @load="isLoad = $event" 
      @hideHeader="isHidden = true" 
      @step-title="stepTitle = $event" 
    />
  </component>
</template>

<script>
// Loading
import PageLoading from '@/components/page/PageLoading'

// Layouts
import LayoutWelcome from '@/layouts/LayoutWelcome'
import LayoutDefault from '@/layouts/LayoutDefault'
import LayoutAuth from '@/layouts/LayoutAuth'
import LayoutDashboard from '@/layouts/LayoutDashboard'
import LayoutEmpty from '@/layouts/LayoutEmpty'
import LayoutLead from '@/layouts/LayoutLead'

export default {
  name: 'App',
  components: { PageLoading, LayoutWelcome, LayoutDefault, LayoutAuth, LayoutDashboard, LayoutEmpty, LayoutLead },

  data: () => ({
    isLoad: false,
    isHidden: false,
    stepTitle: {
      en: 'Default title'
    }
  }),

  watch: {
    '$route': {
      handler () {
        this.isHidden = false
      },
      deep: true
    }
  },

  computed: {
    layout () {
      let res = 'LayoutDefault'
      if (this.$route.meta.layout) {
        res = 'Layout'+this.$route.meta.layout
      }
      return res
    }
  }
}
</script>
