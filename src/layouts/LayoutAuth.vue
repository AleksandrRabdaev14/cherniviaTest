<template>
  <div class="layout layout-auth grid">
    <div class="layout-auth-title flex aic jcc tcenter">
      <div class="mt3">
        <h1>Welcome<br>to Cervinia</h1>
      </div>
    </div>
    <div class="layout-auth-content">
      <slot @click-action="clickAction($event)" />
    </div>
  </div>
</template>

<script>
// import PageHead from '@/components/page/PageHead'
export default {
  name: 'Auth',
  // components: { PageHead },
  methods: {
    clickAction(action) {
      console.log(action)
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-auth {
  grid-template-rows: 1fr auto;
  // background-color: #333;
  background-image: url('../assets/img/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &-title {
    color: #FFF;
    img {
      display: block;
      margin: auto;
      width: auto;
      height: 5rem;
    }
    h1 {
      margin: 1rem;
      font-size: 3.4rem;
    }
  }
}
</style>
