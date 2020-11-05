<template>
  <div class="form-item">
    <div class="form-item__pass">
      <label v-if="label" class="form-label">{{ $t('label__password') }}</label>
      <input type="password" :name="uniq" :id="uniq" :placeholder="placeholder" v-model="modelInput" class="form-input" autocomplete="new-password">
    </div>
    <div v-if="isRepass" class="form-item__repass mt2">
      <label class="form-label">{{ $t('label__repeat_password') }}</label>
      <input type="password" :name="'re'+uniq" :id="'re'+uniq" :placeholder="$t('label__repeat_password')" v-model="repass" class="form-input" autocomplete="new-password">
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    isRepass: {
      type: Boolean,
      default: false
    },
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
      default: ''
    },
    uniq: {
      type: String,
      default: 'uniq'
    }
  },

  data: () => ({
    repass: ''
  }),

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
