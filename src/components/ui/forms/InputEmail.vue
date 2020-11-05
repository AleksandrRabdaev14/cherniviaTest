<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <input type="email" :name="uniq" :id="uniq" :placeholder="$t('label__email')" class="form-input" v-model="modelInput">
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Email'
    },
    uniq: {
      type: String,
      default: 'uniq'
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
