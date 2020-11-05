<template>
  <div class="form-item tcenter">
    <label v-if="label" class="form-label">{{ label }}</label>
    <div class="counter flex aic jcc">
      <button class="flex aic jcc" @click="minusAction">
        <svg class="ic10 icdef"><use xlink:href="@/assets/icons/sprite.svg#minus-sm"></use></svg>
      </button>
      <input type="number" min="0" step="1" :name="uniq" :id="uniq" placeholder="0" v-model="modelInput">
      <button class="flex aic jcc" @click="plusAction">
        <svg class="ic10 icdef"><use xlink:href="@/assets/icons/sprite.svg#plus-sm"></use></svg>
      </button>
    </div>
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
      type: Number,
      default: 0
    },
    label: {
      type: String,
      default: ''
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
  },

  methods: {
    minusAction () {
      if (this.modelInput > 0) {
        this.modelInput--
      }
    },
    plusAction () {
      this.modelInput++
    }
  }
}
</script>

<style lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.counter {
  & > button {
    border: 0.5px solid #F5F5F5;
    background-color: #FFF;
    color: $def;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0;
    box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);

    .def-btn & {
      background-color: $def;
      color: #FFF;

      & > svg { fill: #FFF !important; }
      &:active { background-color: $def-active; }
    }
    
    &:active { background-color: #F5F5F5; }
  }

  & > input {
    width: 40px;
    text-align: center;
    border: 0;
    background-color: #FFF;
    font-size: 1.4rem;
  }
}
</style>
