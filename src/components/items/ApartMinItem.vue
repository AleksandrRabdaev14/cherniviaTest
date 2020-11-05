<template>
  <div class="apart-min-item">
    <!-- Slider -->
    <div 
      v-if="item.media[0].type === 'image'"
      class="apart-min-item-img" 
      :style="{ backgroundImage: 'url('+item.media[0].url+')' }" 
    >
      <small class="hot fs8">Hot Offer</small>
    </div>

    <!-- Description -->
    <div class="apart-min-item-desc p1">
      <div class="grid aifs">
        <span>
          <h1 class="title fs14 m0">Settimana capodanno</h1>
          <h2 class="title fs12 m0">{{ item.name[lang] }}</h2>
        </span>

        <span class="tright">
          <div><b class="fs18"><small>€</small>{{ item.apartment.price }}</b></div>
          <small class="flex">per night</small>
        </span>
      </div>
      
      <div class="flex aife jcsb">
        <small>Posti leto max 5</small>
        <small>28 dec - 3 gen</small>
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
.apart-min-item {
  display: grid;
  width: 100%;
  max-width: 230px;
  position: relative;
  background-color: #FFF;
  border-radius: 4px;
  border: 0.5px solid #F5F5F5;
  box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
  overflow: hidden;


  &-img {
    height: 100%;
    min-height: 120px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    & > .hot {
      position: absolute;
      left: 0;
      top: 14px;
      background-color: transparent;
      background-image: url('./../../assets/img/hot.png');
      background-position: right top;
      background-repeat: no-repeat;
      color: #FFF;
      padding: 5px 15px 5px 10px;
    }
  }

  &-desc {
    position: relative;

    & h1, & h2 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
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
