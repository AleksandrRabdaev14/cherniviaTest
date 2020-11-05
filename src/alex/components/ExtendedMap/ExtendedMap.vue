<template>
  <div class="extended-map">
    <div class="extended-map-top mb1">
      <h4 class="fs14 lhr t400 m0">
        Via Guido rey 11, Breuil-Cervinia, 11028, AO, Italy
      </h4>
      <button class="btn empty">
      <svg>
        <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
      </svg>
      </button>
    </div>
    <div class="extended-map-middle mb1">
      <GoogleMapItem />
    </div>
    <div class="extended-map-bottom flex aic jcsb">
      <div class="description-item flex aic">
        <div class="description-item-icon mr1">
          <svg>
            <use xlink:href="@/assets/icons/sprite.svg#geomap"></use>
          </svg>
        </div>
        <div class="description-item-text fs10 lhr tac tb mr1">
          center village
        </div>
        <div class="description-item-info">
          <span class="fs16 lhr">300 m</span>
          <svg>
            <use xlink:href="@/assets/icons/sprite.svg#info-2"></use>
          </svg>
        </div>
      </div>
      <div class="description-item flex aic">
        <div class="description-item-icon mr1">
          <svg>
            <use xlink:href="@/assets/icons/sprite.svg#ski_lift"></use>
          </svg>
        </div>
        <div class="description-item-text fs10 lhr tac tb mr1">
          ski-lift
        </div>
        <div class="description-item-info">
          <span class="fs16 lhr">500 m</span>
          <svg>
            <use xlink:href="@/assets/icons/sprite.svg#info-2"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GoogleMapItem from '@/components/items/GoogleMapItem.vue'
export default {
  components: {
    GoogleMapItem
  }
}
</script>
<style lang="scss" scoped>
  .description-item {
    &-icon {
      svg {
        width: 25px;
        height: 25px;
        fill: $black3;
      }
    }
    &-text {
      max-width: 35px;
    }
    &-info {
      position: relative;
      svg {
        fill: $black;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 0;
        right: -12px;
      }
    }
  }
  .extended-map {
    &-top {
      display: flex;
      justify-content: space-between;
      svg {
        width: 20px;
        height: 20px;
        fill: $def-hover;
      }
    }
  }
</style>
