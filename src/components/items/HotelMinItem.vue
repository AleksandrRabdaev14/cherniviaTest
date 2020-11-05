<template>
  <div class="hotel-min-item">
    <!-- Favorite btn -->
    <button class="hotel-min-item-fav">
      <svg class="ic20 icwhite"><use xlink:href="@/assets/icons/sprite.svg#like"></use></svg>
    </button>

    <!-- Slider -->
    <div 
      v-if="item.media[0].type === 'image'"
      :key="i" 
      class="hotel-min-item-img" 
      :style="{ backgroundImage: 'url('+item.media[0].url+')' }" 
    />

    <!-- Description -->
    <div class="hotel-min-item-desc p1">

      <div class="head flex jcsb">
        <span class="flex aic">
          <h1 class="head-title fs14 m0 mr1">Hotel Hilton</h1>
          <!-- <h1 class="head-title fs14">{{ item.name[lang] }}</h1> -->
          <!-- <span class="stars">
            <template v-for="(star, indx) of 5">
              <svg class="ic12" :class="indx+1 <= rating ? 'icyellow' : 'icgrey'" :key="indx">
                <use xlink:href="@/assets/icons/sprite.svg#star"></use>
              </svg>
            </template>
          </span> -->
        </span>

        <span class="head-rating rating">
          <div class="rating-count fs9">
            <span>8.3</span>
          </div>
          <small class="flex fs8 mt05">325 reviews</small>
        </span>
      </div>
      
      <div class="flex jcsb mt05 aife">
        <span>
          <slot></slot>
        </span>

        <span class="min tright">
          <span>from<b><small>€</small>{{ item.apartment.price }}</b></span>
          <small>per night</small>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data: () => ({
    rating: 4
  }),

  computed: {
    lang () { return this.$store.getters.lang },
    
    getClass () {
      let res = 'Standart'
      if (this.item.apartment.apr_class === 2) res = 'Comfort'
      if (this.item.apartment.apr_class === 3) res = 'Lusso'
      return res
    },

    getList () {
      let res = ''
      for (const key in this.item.apartment) {
        if (key === 'balcony' || key === 'terrace' || key === 'garden') {
          const element = this.item.apartment[key];
          if (element) res += key+', '
        }
      }
      return res.substring(0, res.length - 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.hotel-min-item {
  position: relative;
  background-color: #FFF;
  border-radius: 4px;
  border: 0.5px solid #F5F5F5;
  box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
  overflow: hidden;
  width: 100%;
  max-width: 230px;

  &-fav {
    position: absolute;
    right: 12px;
    top: 12px;
    border: 0;
    border-radius: 4px;
    background-color: transparent;
    z-index: 10;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:active { background-color: rgba(0, 0, 0, 0.1); }
  }

  &-img {
    height: 100%;
    min-height: 136px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &-desc {
    position: relative;

    & > .head {
      margin: 5px 0 0;

      &-title {
        margin: 0;
      }
    }

    & .markers {
      &-item {
        padding: 5px 15px;
        border-radius: 4px;
        background-color: #DDD;

        &:nth-child(1) {
          background-color: $turquoise;
          color: #FFF;
        }
        &:nth-child(2) {
          background-color: #FFF;
          color: $green;
          border: 1px $green solid;
        }
      }
    }


    & .min {
      & > span {
        font-size: 1rem;
        color: #5B5A60;
        display: flex;
        align-items: flex-end;
        grid-gap: 4px;

        & > b {
          font-size: 2.4rem;
          line-height: 14px;
        }
      }
      
      & > small {
        display: block;
        margin: 0 0 2px;
      }
    }
  }
}
</style>

<style lang="scss">
.hotel-item-slider > .slick-dots {
  bottom: 10px !important;

  & li button:before {
    content: "";
    display: block;
    background-color: #FFF !important;
    border: 0.5px solid #979797;
    width: 5px;
    height: 5px;
    border-radius: 1000px;
    position: relative;
    opacity: 1;
  }
  & li.slick-active button:before {
    border: 0.5px solid #FFF;
  }
}
</style>
