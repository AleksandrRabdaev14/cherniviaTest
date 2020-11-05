<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      In questa sezione potete indicare in qualle periodi del anno siete disponibili per fare lezioni con i clienti e quante ore al giorno. In ogni caso dal vostro profilo potete gestire tutti i periodi di disponibilità o impostare le ore, giorni o periode in cui non siete disponibili.
    </div>

    <div class="mt2">
      <InputSwitcher 
        class="form-direction-rtl"
        label="Stagione invernale"
        name="summer_status"
        uniq="summer_status"
        :val="modelValue[modelValue.length - 1].season.summer_status"
        v-model="modelValue[modelValue.length - 1].season.summer_status"
      />
      <div class="mt2 grid gtc2 aic ggap2" :class="modelValue[modelValue.length - 1].season.summer_status ? '' : 'disabled-box'">
        <DatePicker
          input-class="form-input"
          v-model="modelValue[modelValue.length - 1].season.summer_date_start" 
          type="date" 
          valueType="format"
          :format="format"
          placeholder="Start date"
        />
        <DatePicker
          input-class="form-input"
          v-model="modelValue[modelValue.length - 1].season.summer_date_end" 
          type="date" 
          valueType="format"
          :format="format"
          placeholder="End date"
        />
      </div>
    </div>
    
    <div class="mt2">
      <InputSwitcher 
        class="form-direction-rtl"
        label="Stagione estiva"
        name="winter_status"
        uniq="winter_status"
        :val="modelValue[modelValue.length - 1].season.winter_status"
        v-model="modelValue[modelValue.length - 1].season.winter_status"
      />
      <div class="mt2 grid gtc2 aic ggap2" :class="modelValue[modelValue.length - 1].season.winter_status ? '' : 'disabled-box'">
        <DatePicker
          input-class="form-input"
          v-model="modelValue[modelValue.length - 1].season.winter_date_start" 
          type="date" 
          valueType="format"
          :format="format"
          placeholder="Start date"
        />
        <DatePicker
          input-class="form-input"
          v-model="modelValue[modelValue.length - 1].season.winter_date_end" 
          type="date" 
          valueType="format"
          :format="format"
          placeholder="End date"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: { DatePicker },

  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['season'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'season', {})
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

  data: () => ({
    format: 'YYYY-MM-DD'
  }),

  watch: {
    value: {
      handler (val) {
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
        this.$emit('change', val)
      }
    }
  },

  methods: {
    checkValidation (data) {
      let res = true
      if (data[this.modelValue.length - 1].season.winter_status) { 
        if (data[this.modelValue.length - 1].season.winter_date_start && data[this.modelValue.length - 1].season.winter_date_end) { 
          res = false 
        } else {
          res = true
        }
      }
      if (data[this.modelValue.length - 1].season.summer_status) { 
        if (data[this.modelValue.length - 1].season.summer_date_start && data[this.modelValue.length - 1].season.summer_date_end) { 
          res = false 
        } else {
          res = true
        }
      }
      if (data[this.modelValue.length - 1].season.summer_status && data[this.modelValue.length - 1].season.winter_status) { 
        if (data[this.modelValue.length - 1].season.summer_date_start && data[this.modelValue.length - 1].season.summer_date_end && data[this.modelValue.length - 1].season.winter_date_start && data[this.modelValue.length - 1].season.winter_date_end) { 
          res = false 
        } else {
          res = true
        }
      }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
    
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Период работы', 
      en: 'Work period',
      it: 'Disponibilità, orari e periodi di lavoro'
    })
  }
}
</script>

<style>
.mx-datepicker {
  width: auto !important;
}
.mx-icon-calendar {
  opacity: 0 !important;
}
.mx-input-wrapper .mx-icon-clear {
  display: block;
  color: #F44336;
}
</style>
