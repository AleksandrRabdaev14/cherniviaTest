<template>
  <div class="form-item">
    <input type="checkbox" :name="name" :id="uniq" class="form-switcher" :value="val" v-model="modelInput">
    <label :for="uniq" class="form-switcher-label">
      <span></span>
      <template v-if="label">
      {{ label }}
      </template>
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
    value: [Array, String, Boolean, Object],
    val: [String, Boolean, Object],
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
