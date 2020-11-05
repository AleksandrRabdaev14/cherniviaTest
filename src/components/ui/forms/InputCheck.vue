<template>
  <div class="form-item">
    <input type="checkbox" :name="name" :id="uniq" class="form-check" :value="val" v-model="modelInput">
    <label v-if="label" :for="uniq" class="form-check-label" :class="labelclass">
      {{ label }}
      <span>
        <svg class="ic20 icgreen">
          <use xlink:href="@/assets/icons/sprite.svg#check"></use>
        </svg>
      </span>
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
    value: [Array, Boolean],
    val: [String, Number, Boolean, Object],
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
  }
}
</script>

<style lang="scss" scoped>
.form-check-label {
  grid-template-columns: 1fr 30px;
  grid-gap: 25px;
  align-items: flex-start;
  font-size: 1.2rem;
  color: #45434E;
  line-height: 14px;

  & > span {
    width: 30px;
    height: 30px;
    border: 1px solid #979797;
    box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
    border-radius: 2px;
  }

  .form-check:checked + & > span {
    background-color: #FFF;
  }
}
</style>
