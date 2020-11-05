<template>
  <header class="steps-head grid aic">
    <div class="go-back">
      <button v-if="hasBack" @click="$router.go('-1')">
        <svg class="ic24 icblack">
          <use xlink:href="@/assets/icons/sprite.svg#go_back"></use>
        </svg>
      </button>
    </div>
    <div class="steps-head-title tcenter">
      {{ title ? title[lang] : '' }}
    </div>
    <div class="lang">
      <!-- <select name="lang" id="lang" v-model="lang">
        <option value="en">En</option>
        <option value="it">It</option>
        <option value="fr">Fr</option>
        <option value="ru">Ru</option>
        <option value="se">Se</option>
      </select> -->
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['title'],

  data: () => ({
    curPage: '/',
    lang: 'en'
  }),

  watch: {
    '$route': {
      handler (val) {
        this.curPage = val.path
      },
      deep: true,
      immediate: true
    },
    lang (val) {
      this.setLang(val)
      this.$i18n.locale = val
    }
  },

  computed: {
    hasBack () {
      let res = true
      if (
        this.curPage === '/' || 
        this.curPage === '/hello'
        ) {
        res = false
      }
      return res
    }
  },

  methods: { ...mapMutations(['setLang']) },

  mounted () {
    if (localStorage.getItem('lang')) {
      try {
        this.lang = localStorage.getItem('lang')
      } catch {
        localStorage.removeItem('lang')
      }
    }
  }
}
</script>

<style lang="scss">
.steps-head {
  height: 55px;
  grid-template-columns: 55px 1fr 55px;

  &-title { font-size: 1.6rem; color: $black; }

  .go-back,
  .lang {
    height: 100%;
  }
    .go-back > button,
    .lang > select {
      height: 100%;
      width: 55px;
      background-color: transparent;
    }
    .go-back > button:active,
    .lang > select:active {
      background-color: #f5f5f5;
    }

    .go-back > button {
      padding: 0;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      // border-right: $border-1;
    }

    .lang > select {
      border: 0;
      // border-left: $border-1;
      padding: 0 15px;
      font-size: 16px;
      font-weight: bold;
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none !important;
    }
}
</style>
