<template>
  <div class="step">
    <div v-if="subCategories.length > 0" class="grid gtc2 ggap2">
      <SubCategoryItem 
        v-for="(cat, i) of subCategories" 
        :key="i"
        :item="cat"
        v-model="modelValue[modelValue.length - 1].activity"
      />
    </div>
    <AlertBox 
      v-else
      type="danger"
      :message="`Подкатегории не найдены!`"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SubCategoryItem from '@/components/items/SubCategoryItem'
export default {
  components: { SubCategoryItem },

  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})
    
    if (typeof this.modelValue[this.modelValue.length - 1]['activity'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'activity', 0)
    }
    if (typeof this.modelValue[this.modelValue.length - 1]['slug'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'slug', '')
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
        const index = this.subCategories.findIndex(item => item.id === this.modelValue[this.modelValue.length - 1].activity)
        this.modelValue[this.modelValue.length - 1].slug = this.subCategories[index].slug
        this.checkValidation(val)
      },
      deep: true
    }
  },

  computed: {
    ...mapGetters({
      subCategories: 'business/subCategories'
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
    this.$parent.$emit('load', true)
    await this.getSubCategories(this.value[this.value.length - 1].category)
    for (let i = 0; i < this.subCategories.length; i++) {
      this.subCategories[i].icon = 'hotel'
      this.subCategories[i].img = 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
    }
    this.$parent.$emit('load', false)
    this.checkValidation(this.value)

    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Выберите под категорию', 
      en: 'Select sub category'
    })
  },

  methods: {
    ...mapActions({
      getSubCategories: 'business/getSubCategories'
    }),
    checkValidation (data) {
      let res = true
      if (data[this.modelValue.length - 1].activity) res = false
      this.$emit('invalid-state', res)
    },
    async validStep () {
      let res = {
        status: false,
        message: ''
      }
      if (this.modelValue[this.modelValue.length - 1].activity) {
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
