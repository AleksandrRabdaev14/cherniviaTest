<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <textarea type="textarea" :name="uniq" :id="uniq" :placeholder="placeholder" class="form-textarea form-input" v-model="modelInput"></textarea>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: String,
      default: ''
    },
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