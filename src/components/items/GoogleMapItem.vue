<template>
  <div class="map-wrapper">
    <svg class="map-marker ic30">
      <use xlink:href="@/assets/icons/sprite.svg#marker"></use>
    </svg>
    <vue-map 
      ref="map" 
      vid="mapDemo" 
      class="map-box" 
      :center="center" 
      :zoom="zoom"
      :zoomEnable="true"
      :fullscreenControl="true"
      :scrollWheel="false"
      :disable-default-ui="disableDefaultUI"
      :events="events"
    />
  </div>
</template>


<script>
export default {
  name: 'GoogleMapItem',

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data () {
    return {
      zoom: 12,
      // zooms: [2, 18], # работает но выдает ошибку
      center: { lat: 55.997, lng: 92.877 },
      disableDefaultUI: true,
      events: {
        // Понадобиться позже для туристов
        // init: (o) => {
        //   console.log(o.getCenter())
        // },
        'center_changed': () => {
          const coords = this.$refs.map.$$getCenter()
          this.$set(this.modelValue, 'lat', coords[1])
          this.$set(this.modelValue, 'lon', coords[0])
        },
        'zoom_changed': () => {
          const zoom = this.$refs.map.$$getZoom()
          this.$set(this.modelValue, 'zoom', zoom)
        }
      }
    }
  },

  watch: {
    'value.region.id': {
      handler (val) {
        // console.log('Gmap item ', val)
        this.setPos(val)
      },
      deep: true
    }
  },

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  },

  methods: {
    setPos (num) {
      if (num === 3) {
        this.center = { lat: 55.997, lng: 92.877 }
        this.zoom = 12
      }
      if (num === 2) {
        this.center = { lat: 43.236978, lng: 76.853908 }
        this.zoom = 12
      }
    }
  },

  mounted () {
    // Если есть координаты то применяем их
    if (this.value.lat && this.value.lon) {
      this.center = { 
        lat: this.value.lat, 
        lng: this.value.lon
      }
    }
    // Если есть зум то применяем его
    if (this.value.zoom) {
      this.zoom = this.value.zoom
    }
  }
}
</script>

<style>
.map-wrapper {
  width: auto;
  height: 300px;
  margin: 0 -20px;
  position: relative;
}
.map-marker {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
