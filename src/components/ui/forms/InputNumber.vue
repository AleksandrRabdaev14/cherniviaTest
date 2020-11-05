<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input type="number" min="0" step="1" :name="uniq" :id="uniq" :placeholder="placeholder" class="form-input" v-model.number="modelInput" :disabled="disabled">
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: Number,
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    uniq: {
      type: String,
      default: 'uniq'
    },
    label: {
      type: String,
      default: ''
    }
  },

  computed: {
    modelInput: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('change', val);
      }
    },
  }
}
</script>

<style>

</style>
