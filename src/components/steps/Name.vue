<template>
  <div class="step" v-if="modelValue.length > 0">
    <!-- Help -->
    <div class="alert-minus">
      Perche servono queste informazioni?<br>
      E una buona ocasione per dare un nome alla tua struttura. Il nome sarà visibile ai turisti e ti aiutera a gestire piu attività usando un solo account.<br>
      Consiglio:<br>
      1. scegli un nome corto<br>
      2. cerca di non dare via libera alle tue fantasie
    </div>

    <InputText 
      class="mb20"
      uniq="uname"
      :required="true"
      :label="$t('label__name')"
      :placeholder="$t('label__name')"
      v-model="modelValue[modelValue.length - 1].name[lang]"
    />

    <h4 class="mb1">Seleziona la classe di alloggio che offri</h4>
    <div v-if="modelValue[modelValue.length - 1].apartment">
      <InputRadio 
        class="form-list"
        label="Standart"
        name="apr_class[]"
        uniq="apr_class1"
        val="standart"
        v-model="modelValue[modelValue.length - 1].apartment.apr_class"
      />
      <InputRadio 
        class="form-list"
        label="Comfort"
        name="apr_class[]"
        uniq="apr_class2"
        val="comfort"
        v-model="modelValue[modelValue.length - 1].apartment.apr_class"
      />
      <InputRadio 
        class="form-list"
        label="Lusso"
        name="apr_class[]"
        uniq="apr_class3"
        val="lusso"
        v-model="modelValue[modelValue.length - 1].apartment.apr_class"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['name'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'name', {})
    }
    if (typeof this.modelValue[this.modelValue.length - 1]['apartment'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'apartment', {})
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
    lang: {
      handler () {
        this.checkValidation(this.value)
      },
      deep: true
    }
  },

  computed: {
    ...mapGetters(['lang']),
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
      let res = true
      if (!!data[this.modelValue.length - 1].name[this.lang] && data[this.modelValue.length - 1].name[this.lang].length > 1 && !!data[this.modelValue.length - 1].apartment.apr_class) { res = false }
      this.$emit('invalid-state', res)
    },
    async validStep () {
      let res = {
        status: false,
        message: ''
      }
      if (this.modelValue[this.modelValue.length - 1].name[this.lang] && this.modelValue[this.modelValue.length - 1].apartment.apr_class) {
        res = {
          status: true,
          message: ''
        }
      } else {
        res = {
          status: false,
          message: ''
        }
      }
      return res
    }
  },

  mounted () {
    this.checkValidation(this.value)

    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Наименование', 
      en: 'Name',
      it: 'Scegli un nome'
    })
  }
}
</script>
