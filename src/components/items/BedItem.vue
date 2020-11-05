<template>
  <div class="bed-item">
    <svg class="ic30 icdef">
      <use :xlink:href="getIcon"></use>
    </svg>
    <div>
      <h4>{{ item.name[lang] }}</h4>
      <p>{{ item.desc[lang] }}</p>
    </div>
    <div>
      <InputCounter
        :uniq="uniq"
        v-model="modelValue"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    uniq: {
      type: String,
      default: ''
    }
  },

  computed: {
    ...mapGetters(['lang']),
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    },

    getIcon () {
      const sprite = require('@/assets/icons/room.svg')
      return sprite+'#'+this.item.icon
    }
  }
}
</script>

<style lang="scss">
.bed-item {
  display: grid;
  grid-template-columns: 30px 1fr 0.5fr;
  grid-gap: 1rem;
  border-bottom: 1px #F5F5F5 solid;
  align-items: center;

  & h4, & p {
    font-size: 1.2rem;
  }
  & h4 {
    font-weight: normal;
    margin: 0 0 3px;
    color: #2D2C31;
  }
  & p {
    margin: 0;
    color: #5B5A60;
  }
}
</style>
