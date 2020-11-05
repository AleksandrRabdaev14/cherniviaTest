<template>
  <div class="step">
    <div class="alert-minus">
      Descrivi la tua attività indicando tutti gli spazi e la destinazione di questi. Aggiungi le camere, quantità dei posti e la tipologia dei letti. Non dimenticarti dei spazi come balconi, giardini o spazi comuni di gran interesse per
i tuoi ospiti. 
    </div>
    <!-- $t('localita') -->
    <div class="flex ggap2 mb2">
      <InputText 
        uniq="localita"
        label="Località"
        placeholder="localita"
        :disabled="true"
        v-model="modelValue[modelValue.length - 1].address.region.name"
      />
      <InputText 
        uniq="cap"
        label="Cap"
        placeholder="cap"
        v-model="modelValue[modelValue.length - 1].address.zip_code"
      />
    </div>
    <div class="grid ggap1">
      <InputText 
        uniq="street_1"
        label="Indirizzo riga 1"
        placeholder="riga 1"
        v-model="modelValue[modelValue.length - 1].address.street_1"
      />
      <InputText 
        uniq="street_2"
        label="Indirizzo riga 2"
        placeholder="riga 2"
        v-model="modelValue[modelValue.length - 1].address.street_2"
      />
      <InputText 
        uniq="zone"
        label="Zone"
        placeholder="zone"
        v-model="modelValue[modelValue.length - 1].address.zone"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
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
        console.log('CITY STREET ', val)
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
    
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Подробный адрес', 
      en: 'Address',
      it: `Confermare l'indirizzo selezionato`
    })
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
