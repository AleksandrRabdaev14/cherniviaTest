<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Se hai più appartamenti in questa sezione puoi aggiungerli o raddoppiare questo nel caso in cui gli appartamenti sono della stessa categoria.In ogni caso in seguito dal tuo profilo puoi personalizzarli uno a uno.
    </div>

    <div class="grid ggap1">
      <ApartItem 
        v-for="(item, i) of modelValue" 
        :key="i"
        :item="item" 
      />
    </div>

    <div class="grid ggap2 mt2">
      <div class="grid gtc2 ggap2 aic">
        <span>Piu appartamenti dello stesso tipo</span>
        <button class="btn def" @click="routeAction('same')">Radoppia</button>
      </div>
      <div class="grid gtc2 ggap2 aic">
        <span>Appartamento di un altro tipo</span>
        <button class="btn def" @click="routeAction('new')">Aggiungi</button>
      </div>
      <small>Se non avete altro da aggiungere premete Next.</small>
    </div>
    
  </div>
</template>

<script>
import ApartItem from '@/components/items/ApartItem'
export default {
  components: { ApartItem },
  
  // async created() {
  //   if (this.modelValue.length === 0) this.modelValue.push({})

  //   if (typeof this.modelValue[this.modelValue.length - 1]['sub_services'] === "undefined") {
  //     await this.$set(this.modelValue[this.modelValue.length - 1], 'sub_services', [])
  //   }
  // },

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

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    },

    lang () { return this.$store.getters.lang }
  },

  methods: {
    routeAction (name) {
      this.$emit('repeat', {
        type: name,
        addressType: ''
      })
      this.$router.push({ 
        name: 'intermediate-step', 
        params: { step: 'addselector' } 
      })
    }
  },

  mounted () {
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Предварительный просмотр', 
      en: 'Preview ad',
      it: 'Servizi e comodità'
    })
    this.$emit('invalid-state', false)
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #DDD;
  height: 200px;
  border-radius: 5px;
}
</style>
