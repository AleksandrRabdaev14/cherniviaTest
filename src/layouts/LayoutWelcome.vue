<template>
  <div class="Layout LayoutWelcome">
    <div class="LayoutWelcome__head">
      <PageHead />
    </div>
    <main class="LayoutWelcome__main">
      <slot />
    </main>
  </div>
</template>

<script>
import PageHead from '@/components/page/PageHead.vue'
export default {
  name: 'Welcome',
  components: { PageHead }
}
</script>

<style>
.LayoutWelcome {
  /* background-image: url('../assets/img/main-bg.png'); */
  background-position: top center;
  background-repeat: no-repeat;
}
.LayoutWelcome__main {
  display: flex;
  min-height: calc(100vh - 100px);
}
</style>
