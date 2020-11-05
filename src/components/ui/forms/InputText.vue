<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input 
      type="text" 
      :name="uniq" 
      :id="uniq" 
      :placeholder="placeholder" 
      class="form-input" 
      v-model="modelInput" 
      :disabled="disabled"
    >
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
    value: [String, Number],
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
    },
    required: {
      type: Boolean,
      default: false
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
  },

  methods: {
    validate () {
      
    }
  }
}
</script>

<style>

</style>
