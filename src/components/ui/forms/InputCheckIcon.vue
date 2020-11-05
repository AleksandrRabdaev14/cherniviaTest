<template>
  <div class="form-item">
    <input type="checkbox" :name="name" :id="uniq" class="form-check" :value="val" v-model="modelInput">
    <label v-if="label" :for="uniq" class="form-check-label with-icon" :class="labelclass">
      <svg class="ic30">
        <use :xlink:href="getIcon"></use>
      </svg>
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
    value: [Array, Boolean, Object],
    val: [String, Number, Boolean, Object],
    icon: {
      type: String,
      default: 'wifi'
    },
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
    },
    labelclass: {
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
    getIcon () {
      const sprite = require('@/assets/icons/options.svg')
      return sprite+'#'+this.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.form-check-label.with-icon {
  border: 2px solid #F5F5F5;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  color: #979797;
  & > svg {
    fill: #979797;
  }
}
.form-check:checked + .form-check-label {
  border-color: $green;
  color: $def;

  & > svg {
    fill: $def;
  }
}
</style>
