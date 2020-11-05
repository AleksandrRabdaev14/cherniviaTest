<template>
  <div class="form-item">
    <input type="radio" :name="name" :id="uniq" class="form-radio" :value="val" v-model="modelInput">
    <label v-if="label" :for="uniq" class="form-radio-label with-icon">
      <svg class="ic-20 ic-def">
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
    value: [String, Number, Object],
    val: [String, Number, Object],
    icon: {
      type: String,
      default: 'plus'
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
      const sprite = require('@/assets/icons/sprite.svg')
      return sprite+'#'+this.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.form-radio-label.with-icon {
  border: $border-2;
  padding: 1rem 1.5rem;
  border-radius: 5px;
}
.form-radio:checked + .form-radio-label {
  border-color: $green;
}
.big .form-radio-label.with-icon {
  grid-template-columns: 35px 1fr;

  & > svg {
    width: 30px;
    height: 30px;
  }
}
</style>

