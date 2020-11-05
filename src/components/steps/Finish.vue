<template>
  <div class="step finish">
    <div class="tcenter">
      <h1>Congratulazioni</h1>
      <p>Ti sei registrato con successo!</p>
      <p>Accedi al tuo profilo e inizia subito a ricevere le prime prenotazioni</p>
    </div>

    <div class="modal modal-agree">
      <div class="modal-content p2">
        <div class="faded">
          <InputCheck 
            class="mb2"
            labelclass="aifs"
            label="Dichiaro che la mia attività che pubblico su questa piattaforma e provvista di tutte le licenze, permessi     e autorizzazioni necessari e possono essere mostrati su richiesta."
            name="chk[]"
            uniq="chk"
            :val="'chk'"
            v-model="modelValue[modelValue.length - 1].agree1"
          />
          <InputCheck 
            class="mb2"
            label-class="aifs"
            label="Dichiaro che ho letto e sono a conoscenza del funzionamento, regolamento del piattaforma e accetto le clausole generali del contratto."
            name="chk[]"
            uniq="chk2"
            :val="'chk2'"
            v-model="modelValue[modelValue.length - 1].agree2"
          />
          <small class="fs10 mb2">La società gestrice del piattaforma si prende il diritto di verifica e approfondimento sulle informazioni da voi rilasciate nel momento della registrazione.</small>
        </div>
        <router-link :to="{ name: 'business' }" class="btn def wfull flex aic jcc">Finish</router-link>
      </div>
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
    },
  },

  computed: {
    modelValue: {
      get () { 
        return this.value 
      },
      set (val) { 
        this.$emit('change', val)
      }
    }
  },

  methods: {
    checkValidation (data) {
      let res = true
      if (data.price) { res = false }
      this.$emit('invalid-state', res)
    }
  },

  mounted () {
    this.checkValidation(this.value)
  }
}
</script>

<style lang="scss">
.finish {
  background: linear-gradient(257.78deg, #1951CD -3.59%, #009FF9 103.41%);
  color: #FFF;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 0 20vh;
}
.modal-agree {
  background: transparent;
  & > .modal-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 15px 15px 0 0;
  }
}

.faded {
  height: 0;
  // min-height: 200px;
  overflow: hidden;
  animation: showed 0.5s 0.5s forwards ease-in;
}
@keyframes showed {
  from { opacity: 0; height: 0; min-height: 0; }
  to { opacity: 1; height: 220px; min-height: 220px; }
}
</style>
