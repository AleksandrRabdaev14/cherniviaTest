<template>
  <div class="step">
    <!-- <h1>Aggiungi una seconda attività </h1> -->
    <AlertBox 
      type="info"
      message="I metodi di comunicazione e le impostazioni delle notificazioni possono essere modificate dal tuo profilo."
    />
    <p>Scegli con qualle metodo preferisci comunicare con la nostra asistenza e  l’uficio clienti.</p>

    <div class="grid ggap2 mt2">
      
      <div>
        <InputSwitcher 
          class="pt1 pb1 form-direction-rtl"
          label="Contato telefonico"
          name="is_phone_number"
          uniq="is_phone_number"
          :val="modelValue[modelValue.length - 1].contacts.is_phone_number"
          v-model="modelValue[modelValue.length - 1].contacts.is_phone_number"
        />
        <div class="flex ggap1">
          <InputText 
            uniq="uname"
            placeholder="+7"
            v-model="modelValue[modelValue.length - 1].contacts.phone_code"
          />
          <InputText 
            class="wfull"
            uniq="uname"
            placeholder="777 840 84 84"
            v-model="modelValue[modelValue.length - 1].contacts.phone_number"
          />
        </div>
        <small>Scegli  una di questi opzione per il futuro tutte le notificazioni operazionali, gestionali o suporto clienti saranno efetuate tramite questi canali.</small>
      </div>

      <hr class="m0">
      
      <div>
        <InputSwitcher 
          class="pt1 pb1 form-direction-rtl"
          label="Telegram Support"
          name="switcher[]"
          uniq="switcher1"
          :val="modelValue[modelValue.length - 1].contacts.is_telega"
          v-model="modelValue[modelValue.length - 1].contacts.is_telega"
        />
        <InputText 
          class="wfull"
          uniq="uname"
          placeholder="777 840 84 84"
          v-model="modelValue[modelValue.length - 1].contacts.telega"
        />
      </div>

      <hr class="m0">
      
      <div>
        <InputSwitcher 
          class="pt1 pb1 form-direction-rtl"
          label="WhatsApp Support"
          name="switcher[]"
          uniq="switcher1"
          :val="modelValue[modelValue.length - 1].contacts.is_whatsapp"
          v-model="modelValue[modelValue.length - 1].contacts.is_whatsapp"
        />
        <InputText 
          class="wfull"
          uniq="uname"
          placeholder="777 840 84 84"
          v-model="modelValue[modelValue.length - 1].contacts.whatsapp"
        />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['contacts'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'contacts', {})
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
    checkValidation (data) {
      let res = false
      if (data.price) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
  }
}
</script>

<style lang="scss">

</style>
