<template>
  <div class="subsubcat-item">
    <input type="radio" name="category" :id="'category_'+item.id" :value="item.id" class="subsubcat-item-input" v-model.number="modelValue">
    <label :for="'category_'+item.id" class="subsubcat-item-label">
      <div class="subsubcat-item-label-img" :style="bgImg">
        <div class="flex aic jcc wfull p2">
          <svg class="ic70 icwhite"><use :xlink:href="icon"></use></svg>
        </div>
      </div>
      <div class="subsubcat-item-label-desc">
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
    icon () { return require('@/assets/icons/categories.svg')+'#'+this.item.icon }
  }
}
</script>

<style lang="scss">
// Categories
.subsubcat-item {
  &-label {
    display: grid;
    grid-template-columns: 160px 1fr;
    background-color: #FFF;
    overflow: hidden;
    border-radius: 4px;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    color: #2D2C31;
    border: 0.5px solid #F5F5F5;
    box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
    position: relative;
    z-index: 10;
    height: 100%;

    &-img {
      position: relative;
      width: 160px;
      height: 120px;
      border-radius: 4px;
      overflow: hidden;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0.6);
      }

      & > .flex {
        position: relative;
        z-index: 10;
        height: 100%;
      }
    }

    &-desc {
      display: block;
      padding: 15px 20px;
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(4px);
      border-radius: 0 0 4px 4px;
      height: 100px;

      & > h4 {
        font-weight: normal;
        font-size: 1.4rem;
        margin: 0 0 5px;
      }
      & > p {
        font-size: 1.2rem;
        margin: 0;
        color: #45434E;
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
