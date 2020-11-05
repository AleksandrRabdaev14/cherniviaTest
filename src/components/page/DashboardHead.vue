<template>
  <header class="dashboard-head flex aic jcsb">
    <span>
      <router-link 
        :to="{ name: 'business' }"
        class="dashboard-head-logo"
      >
        <img src="@/assets/img/logo.svg" alt="Go Chervinia">
      </router-link>
    </span>
    <span class="dashboard-head-btns grid gtc2">
      
      <div class="dashboard-head-btns-item dashboard-head-bell">
        <button>
          <small>3</small>
          <svg class="ic20 icdef">
            <use xlink:href="@/assets/icons/sprite.svg#bell"></use>
          </svg>
        </button>
      </div>
      
      <div class="dashboard-head-btns-item dashboard-head-help">
        <button>
          <small>1</small>
          <svg class="ic20 icdef">
            <use xlink:href="@/assets/icons/sprite.svg#help"></use>
          </svg>
        </button>
      </div>

    </span>
  </header>
</template>

<script>
export default {
  data: () => ({
    curPage: '/',
    lang: 'en'
  })
}
</script>

<style lang="scss" scoped>
.dashboard-head {
  height: 55px;
  padding: 0 0 0 2rem;
  border-bottom: $border-1;

  &-logo {
    display: block;
  }

  &-btns {
    height: 100%;

    &-item {
      height: 100%;

      & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        height: 100%;
        width: 6rem;
        position: relative;
        z-index: 1;

        &:active {
          background-color: #EEE;
        }

        & > small {
          display: block;
          padding: 0;
          width: 14px;
          height: 14px;
          background-color: $orange;
          border-radius: 100px;
          color: #FFF;
          font-size: 1rem;
          position: absolute;
          right: 14px;
          top: 12px;
        }
      }
    }
  }
}
</style>
