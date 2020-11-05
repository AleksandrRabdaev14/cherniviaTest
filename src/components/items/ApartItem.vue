<template>
  <div class="apart-item">
    <!-- Favorite btn -->
    <button class="apart-item-fav">
      <svg class="ic20 icwhite"><use xlink:href="@/assets/icons/sprite.svg#like"></use></svg>
    </button>

    <!-- Slider -->
    <template v-if="item.media.length > 0">
    <VueSlickCarousel class="apart-item-slider" :arrows="false" :dots="true">
      <template v-for="(img, i) in item.media">
        <div 
          v-if="img.type === 'image'"
          :key="i" 
          class="apart-item-slider-img" 
          :style="{ backgroundImage: 'url('+img.url+')' }" 
        />
      </template>
    </VueSlickCarousel>
    </template>
    <div v-else class="no-photo h20" :style="{ backgroundImage: 'url('+require('@/assets/img/no-photo.jpg')+')' }">&nbsp;</div>

    <!-- Description -->
    <div class="apart-item-desc p1">
      <span class="green-text fs10">Colazione inclusa BB</span>
      <div class="flex aic jcsb">
        <h1 class="title fs14">{{ item.name[lang] }}</h1>
        <span class="head-rating rating">
          <div class="rating-count fs9">
            <span>8.3</span>
          </div>
          <small class="flex fs8 mt05">325 reviews</small>
        </span>
      </div>
      
      <div class="grid ggap1 aife">
        <span class="max">
          <div class="flex aic">
            <span class="grid-desc">
              <b>{{ item.apartment.apr_type }}</b>
              <small>{{ item.apartment.area }} m²</small>
            </span>
            <span class="grid-desc">
              <b>Classe</b>
              <small>
                {{ getClass }}
              </small>
            </span>
            <span class="grid-desc">
              <b>Posti letto</b>
              <small>max {{ item.apartment.count_person }}</small>
            </span>
            <span class="grid-desc">
              <b>Bagni</b>
              <small>{{ item.apartment.count_bathroom }}</small>
            </span>
          </div>
          <small class="first-cap flex mt1">{{ getList }}</small>
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
.apart-item {
  position: relative;
  background-color: #FFF;
  border-radius: 4px;
  border: 0.5px solid #F5F5F5;
  box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
  overflow: hidden;

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

  &-slider {
    width: 100%;
    max-width: 345px;

    &-img {
      height: 100%;
      min-height: 136px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &-desc {
    position: relative;

    & > .green-text {
      display: block;
      position: absolute;
      left: 10px;
      top: -15px;
      background-color: $green;
      border-radius: 100px;
      padding: 5px 15px;
      color: #FFF;
    }

    & > .title {
      margin: 3px 0 5px;
    }

    & > .grid {
      grid-template-columns: 1fr auto;

      & > .max {  
        .grid-desc {
          border-left: 1px #F5F5F5 solid;
          padding: 0 7px;

          &:first-child {
            border: 0;
            padding: 0 7px 0 0;
          }

          & > b {
            display: block;
            font-size: 1.2rem;
          }
          & > small {
            display: block;
            font-size: 1.2rem;
            color: #5B5A60;
          }
        }

        .first-cap { text-transform: capitalize; }
      }

      & > .min {
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
}
</style>

<style lang="scss">
.apart-item-slider > .slick-dots {
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
