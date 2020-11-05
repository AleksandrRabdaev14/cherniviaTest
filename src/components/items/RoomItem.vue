<template>
  <div class="room-item">
    <button @click="$emit('remove')">
      <svg class="ic20 icdef">
        <use xlink:href="@/assets/icons/sprite.svg#delete"></use>
      </svg>
    </button>
    <div @click="$emit('edit')">
      <h4>{{ item.name }}</h4>
      <p>{{ counts }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    beds: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  computed: {
    counts () {
      let res = ''
      for (const key in this.item) {
        if (key !== 'name') {
          const index = this.beds.findIndex(item => item.key === key)
          if (index !== -1 && this.item[key] !== 0) {
            res += this.item[key]+' '+this.beds[index].name.en+', '
          }
        }
      }
      return res.substring(0, res.length - 2)
    }
  }
}
</script>

<style lang="scss">
.room-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  border: 0.5px solid #F5F5F5;
  padding: 0 30px 0 0;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(218, 218, 218, 0.2);
  background-image: url('../../assets/img/arr-right-bg.svg');
  background-position: 95% center;
  background-repeat: no-repeat;
  transform: scale(1);
  transition: .3s;

  &:active {
    background-color: #EEE;
    transform: scale(0.95);
    transition: .3s;
  }

  & > button {
    border: 0;
    background: transparent;
    height: 60px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h4, & p {
    margin: 0;
    font-size: 12px;
    font-weight: normal;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 65vw;
  }
}
</style>
