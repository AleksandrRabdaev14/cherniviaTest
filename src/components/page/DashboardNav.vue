<template>
  <nav class="dashboard-nav aifs">
    <transition name="fade">
      <ModalFull 
        v-if="isMore"
        title="More actions"
        @close="isMore = false"
      >
        <h1>Some other actions</h1>
      </ModalFull>
    </transition>

    <!-- Nav items -->
    <router-link 
      :to="{ name: 'feed' }"
      class="nav-link"
    >
      <svg class="ic20 icwhite">
        <use xlink:href="@/assets/icons/nav.svg#feed"></use>
      </svg>
      Feed
    </router-link>

    <router-link 
      :to="{ name: 'business' }"
      class="nav-link"
    >
      <svg class="ic20 icwhite">
        <use xlink:href="@/assets/icons/nav.svg#home"></use>
      </svg>
      Home
    </router-link>

    <router-link 
      :to="{ name: 'reservations' }"
      class="nav-link"
    >
      <svg class="ic20 icwhite">
        <use xlink:href="@/assets/icons/nav.svg#reservations"></use>
      </svg>
      Reservations
    </router-link>

    <router-link 
      :to="{ name: 'village' }"
      class="nav-link"
    >
      <svg class="ic20 icwhite">
        <use xlink:href="@/assets/icons/nav.svg#village"></use>
      </svg>
      Village
    </router-link>

    <a 
      href="#"
      class="nav-link"
      @click.prevent="isMore = !isMore"
    >
      <svg class="ic20 icwhite">
        <use xlink:href="@/assets/icons/nav.svg#dots"></use>
      </svg>
    </a>
  </nav>
</template>

<script>
export default {
  data: () => ({
    lang: 'en',
    isMore: false
  }),

  methods: {},
}
</script>

<style lang="scss" scoped>
.dashboard-nav {
  background-color: $def;
  padding: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  & > a {
    display: block;
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    color: #FFF;
    height: 100%;
    padding: 1.5rem 0;
    position: relative;
    z-index: 10;

    & > svg {
      display: block;
      margin: 0 auto 5px;
    }

    &.router-link-exact-active::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      top: -3px;
      right: 0;
      transform: translateX(-50%);
      z-index: 10;
      height: 2px;
      background-color: $orange;
      width: 50%;
      border-radius: 4px;
    }
  }
}
</style>
