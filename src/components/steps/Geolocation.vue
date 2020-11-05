<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Scegli la posizione sulla mappa dove si trova la tua attività. Questa posizione sarà visibile ai turisti e sarà piu facile per loro di trovarti.<br>
      Consiglio:<br>
      Muovi la mappa fino a quando il cursore non corrisponda al tuo indirizzo.
    </div>

    <div class="mb2">
      <InputRadio 
        v-for="(item, i) of regions"
        :key="i"
        class="form-list"
        name="region[]"
        :label="item.name"
        :uniq="'region_'+i"
        :val="item"
        v-model="modelValue[modelValue.length - 1].address.region"
      />
    </div>

    <GoogleMapItem 
      v-model="modelValue[modelValue.length - 1].address"
    />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GoogleMapItem from '@/components/items/GoogleMapItem'
export default {
  components: { GoogleMapItem },

  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['address'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'address', {})
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  watch: {
    value: {
      handler (val) {
        this.checkValidation(val)
      },
      deep: true
    },
  },

  computed: {
    ...mapGetters({
      regions: 'business/regions'
    }),
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  },

  async mounted () {
    this.$parent.$emit('load', true)
    if(this.regions.length === 0){
      await this.getRegions()
    }
    this.$parent.$emit('load', false)
    this.checkValidation(this.value)
  },

  methods: {
    ...mapActions({
      getRegions: 'business/getRegions'
    }),
    checkValidation (data) {
      let res = true
      if (!!data[this.modelValue.length - 1].address && !!data[this.modelValue.length - 1].address.region) { res = false }
      this.$emit('invalid-state', res)
    },
    changedCoords( coord ) {
      console.log(coord)
    }
  }
}
</script>
