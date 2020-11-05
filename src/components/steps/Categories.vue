<template>
  <div class="step">
    <div class="grid gtc2 ggap2">
      <CategoryItem 
        v-for="(cat, i) of categories" 
        :key="i"
        :item="cat"
        v-model="modelValue[modelValue.length - 1].category"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CategoryItem from '@/components/items/CategoryItem'
export default {
  components: { CategoryItem },

  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['category'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'category', 0)
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  watch: {
    value: {
      handler (val) {
        this.checkValidation(val)
      },
      deep: true
    }
  },

  computed: {
    ...mapGetters({
      categories: 'business/categories'
    }),
    modelValue: {
      get () { 
        return this.value
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  },

  async mounted () {
    // Если есть под категория
    if (this.modelValue[this.modelValue.length - 1].activity) {
      this.modelValue[this.modelValue.length - 1].activity = 0
      this.modelValue[this.modelValue.length - 1].slug = ''
    }

    // Загружаем категории
    this.$parent.$emit('load', true)
    if(this.categories.length === 0){
      await this.getCategories()
    }
    for (let i = 0; i < this.categories.length; i++) {
      this.categories[i].icon = 'hotel'
      this.categories[i].img = 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
    }
    this.$parent.$emit('load', false)
    this.checkValidation(this.value)
    
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Выберите категорию', 
      en: 'Select category'
    })
  },

  methods: {
    ...mapActions({
      getCategories: 'business/getCategories'
    }),
    checkValidation (data) {
      let res = true
      if (data[this.modelValue.length - 1].category) res = false 
      this.$emit('invalid-state', res)
    },
    async validStep () {
      let res = {
        status: false,
        message: ''
      }
      if (this.modelValue[this.modelValue.length - 1].category) {
        res = {
          status: true,
          message: ''
        }
      } else {
        res = {
          status: false,
          message: 'Вы не выбрали ни одной категории!'
        }
      }
      return res
    }
  }
}
</script>

<style>

</style>
