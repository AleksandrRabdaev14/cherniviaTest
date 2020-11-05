<template>
  <div class="offer-item">
    <div class="flag">Hot Offer</div>
    <div class="text">Sono i prodotti con un periodo di tempo fisso es: settimana di natale, settimana di carnevale o weekend a pasqua.</div>
    <div class="flex aifs jcsb ggap2">
      <span>Inizia subito a creare questo tipo di prodotto e inizia a ricevere le prime prenotazioni.</span>
      <span>
        <button class="btn dark flex aic">
          <svg class="ic18 icwhite mr1"><use xlink:href="@/assets/icons/sprite.svg#plus"></use></svg>
          Add
        </button>
      </span>
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
    }
  },

  computed: {
    lang () { return this.$store.getters.lang },
    
    getClass () {
      let res = 'Standart'
      if (this.item.apartment.apr_class === 2) res = 'Comfort'
      if (this.item.apartment.apr_class === 3) res = 'Lusso'
      return res
    },

    getList () {
      let res = ''
      for (const key in this.item.apartment) {
        if (key === 'balcony' || key === 'terrace' || key === 'garden') {
          const element = this.item.apartment[key];
          if (element) res += key+', '
        }
      }
      return res.substring(0, res.length - 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.offer-item {
  display: grid;
  width: 100%;
  max-width: 340px;
  position: relative;
  border-radius: 4px;
  background: linear-gradient(257.78deg, #0033A1 -3.59%, #00A7E8 103.41%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 67px 12px rgba(14, 71, 100, 0.03);
  overflow: hidden;
  padding: 15px;
  color: #FFF;

  & > .flag {
    display: inline-block;
    padding: 10px;
  }
}
</style>
