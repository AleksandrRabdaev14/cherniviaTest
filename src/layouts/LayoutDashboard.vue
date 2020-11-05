<template>
  <div class="layout layout-dashboard">
    <DashboardHead />
    <main class="layout-dashboard-main">
      <slot />
    </main>
    <DashboardNav />
  </div>
</template>

<script>
import DashboardHead from '@/components/page/DashboardHead'
import DashboardNav from '@/components/page/DashboardNav'
export default {
  name: 'Dashboard',
  components: { DashboardHead, DashboardNav }
}
</script>

<style lang="scss" scoped>
.layout-dashboard-main {
  padding: 0 0 7rem;
}
</style>
