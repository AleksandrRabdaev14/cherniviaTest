<template>
  <div class="form-item">
    <label v-if="label" class="form-label">{{ label }}</label>
    <select :name="uniq" :id="uniq" v-model="modelInput" class="form-select">
      <option value="">{{ $t('placeholder__choose') }}</option>
      <option v-for="(item, i) of list" :key="item.value+'-'+i" :value="item.value">{{ item.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: [String, Number],
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
