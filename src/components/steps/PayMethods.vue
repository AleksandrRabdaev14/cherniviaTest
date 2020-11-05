<template>
  <div class="step">
    <!-- Help -->
    <div class="alert-minus">
      Dal tuo profilo puoi imopsotare tutti i metodi disponibili per poter ricevere i pagamenti online. Puoi anche impostare la politica dei aconti e penalità per le cancelazioni delle prenotazion.
    </div>
    <h3>Permeti ai tuoi ospiti di pagare tramite Go Cervinia e i nostri parner Stripe.com</h3>
    <p>I turisti potrano pagare tramite carte di credito, bonifici, Sepa o utilizare i virtual wallet come Apple Pay, Google Pay, ect ed i soldi ti arrivano direttamente sul tuo conto bancario.</p>
    <h3>Come funziona?</h3>
    <img src="@/assets/img/pay-methods.png" alt="Pay methods" class="wfull">
  </div>
</template>

<script>
export default {
  mounted () {
    this.$emit('invalid-state', false)
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Удобства', 
      en: 'Payment method',
      it: 'Servizi e comodità'
    })
  }
}
</script>

<style lang="scss">

</style>
