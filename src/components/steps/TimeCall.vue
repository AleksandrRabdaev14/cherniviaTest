<template>
  <div class="step">
    <h1 class="title">Введите данные</h1>
    <p>Зачем нужна 2-х факторная аутентификация? По ней мы сможем вас идентифицировать и заключить договор.</p>
    <hr>
    <AlertBox
      type="info"
      message="Per informazioni, assistenza e chiarimenti sarà disponibile un consulente che diventerà personale. Vi seguirà su tutto il percorso della registrazione e personalizazione della vostra attività."
    />
    <hr>
    <div class="grid gtc2 ggap2">
      <InputText 
        uniq="start"
        label="Time start"
        placeholder="15:00"
        v-model="time.start"
      />
      <InputText 
        uniq="end"
        label="Time end"
        placeholder="18:00"
        v-model="time.end"
      />
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    return {
      time: {}
    }
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  watch: {
    value: {
      handler (val) {
        console.log(val)
      },
      deep: true
    },
    time: {
      handler (val) {
        this.value.call_time = val.start + '-' + val.end
        this.checkValidation(val)
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
        console.log()
        this.$emit('change', val)
      }
    }
  },

  methods: {
    checkValidation (data) {
      let res = true
      if (!!data.start && data.start.length > 1 && !!data.end && data.end.length > 1) res = false 
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
  }
}
</script>
