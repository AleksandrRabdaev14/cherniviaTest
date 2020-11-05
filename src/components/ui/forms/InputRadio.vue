<template>
  <div class="form-item">
    <input type="radio" :name="name" :id="uniq" class="form-radio" :value="val" v-model="modelInput">
    <label v-if="label" :for="uniq" class="form-radio-label">
      <span></span>
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: [String, Number, Object],
    val: [String, Number, Object],
    name: {
      type: String,
      default: 'uniq'
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
