<template>
  <div class="cat-item">
    <input type="radio" name="category" :id="'category_'+item.id" :value="item.id" class="cat-item-input" v-model.number="modelValue">
    <label :for="'category_'+item.id" :style="bgImg" class="cat-item-label">
      <div class="flex aic jcc wfull p2">
        <svg class="ic50 icwhite"><use :xlink:href="icon"></use></svg>
      </div>
      <div class="cat-item-label-desc">
        <h4>{{ item.name[lang] }}</h4>
        <p>{{ item.description[lang] }}</p>
      </div>
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
    value: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  computed: {
    modelValue: {
      get () { 
        return this.value
      },
      set (val) { 
        this.$emit('change', val)
      }
    },
    bgImg () {
      const defImg = 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'
      return this.item.img ? `background-image: url('${this.item.img}');` : `background-image: url(${defImg});`
    },
    lang () { return this.$store.getters.lang },
    icon () { return require('@/assets/icons/categories.svg')+'#'+(this.item.icon ? this.item.icon : 'hotel') }
  }
}
</script>

<style lang="scss">
// Categories
.cat-item {
  &-label {
    display: flex;
    flex-direction: column;
    // border: $border-1;
    background-color: #EEE;
    overflow: hidden;
    border-radius: 4px;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    color: #FFF;
    position: relative;
    z-index: 10;
    height: 100%;

    &::before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.3);
    }

    &-desc {
      display: block;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      border-radius: 0 0 4px 4px;
      height: 70px;

      & > h4 {
        font-size: 1.2rem;
        margin: 0 0 3px;
      }
      & > p {
        font-size: 1rem;
        margin: 0;
      }
    }
  }

  &-input {
    display: none;

    &:checked + .cat-item-label {
      box-shadow: 0 0 0 2px $green;
      border-color: $green;
    
      & > svg {
        opacity: 1;
      }
    }
  }
}
</style>
