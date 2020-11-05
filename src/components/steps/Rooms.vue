<template>
  <div class="step">

    <transition name="fade">
      <ModalBottom 
        v-if="isOutdoorData"
        title="Aggiungi stanza"
        @close="isOutdoorData = false"
        @save="isOutdoorData = false"
      >
        <InputCheck 
          class="form-list"
          label="Terrace"
          name="terrace"
          uniq="terrace"
          :val="true"
          v-model="modelValue[modelValue.length - 1].apartment.terrace"
        />
        <InputCheck 
          class="form-list"
          label="Balcone"
          name="balcony"
          uniq="balcony"
          :val="true"
          v-model="modelValue[modelValue.length - 1].apartment.balcony"
        />
        <InputCheck 
          class="form-list"
          label="Garden"
          name="garden"
          uniq="garden"
          :val="true"
          v-model="modelValue[modelValue.length - 1].apartment.garden"
        />
      </ModalBottom>
    </transition>

    <transition name="fade">
      <ModalFull 
        v-if="isRoomData"
        title="Aggiungi stanza"
        :disabled="isDisabled"
        @close="closeRoom"
        @save="saveRoom"
      >
        <div class="alert-minus">
          Nome stanza, quantità e tipologia dei letti disponibili in questa stanza. Le informazioni saranno visibili ai turisti sulla pagina della tua attività, e li permetterà di farsi le idee chiare prima di partire per la vacanza
        </div>
        
        <InputText 
          class="mb20"
          uniq="uname"
          :label="$t('label__name')"
          :placeholder="$t('label__name')"
          v-model="roomData.name"
        />

        <div class="fs16 mt3 mb1">Tipologia dei letti disponibili</div>

        <div class="grid mrminus2 mlminus2">
          <BedItem 
            class="pl15 pr15 pt1 pb1"
            v-for="(item, i) of bedList"
            :key="'bed_'+i"
            :item="item"
            :uniq="'bed_'+i"
            v-model="roomData[item.key]"
          />
        </div>
      </ModalFull>
    </transition>

    <!-- Help -->
    <div class="alert-minus">
      Descrivi la tua attività indicando tutti gli spazi e la destinazione di questi. Aggiungi le camere, quantità dei posti e la tipologia dei letti. Non dimenticarti dei spazi come balconi, giardini o spazi comuni di gran interesse per i tuoi ospiti. 
    </div>
    
    <!-- Select and counter -->
    <div class="grid gtc2 ggap1 mb2">
      <InputSelect
        uniq="tipologia"
        label="Tipologia"
        :list="apr_type"
        v-model="modelValue[modelValue.length - 1].apartment.apr_type"
      />
      <InputSelect
        uniq="superfice"
        label="Superficie"
        :list="area"
        v-model="modelValue[modelValue.length - 1].apartment.area"
      />
      <div class="tcenter">
        <span class="fs14 flex jcc mb1 mt2">Posti letto</span>
        <InputCounter
          uniq="postiletto"
          v-model="modelValue[modelValue.length - 1].apartment.count_person"
        />
      </div>
      <div class="tcenter">
        <span class="fs14 flex jcc mb1 mt2">Bagni</span>
        <InputCounter
          uniq="bagni"
          v-model="modelValue[modelValue.length - 1].apartment.count_bathroom"
        />
      </div>
    </div>
    
    <div class="fs16 mb1 mt2">Stanze, spazi e leti</div>
    <div class="grid ggap1">
      <template v-if="modelValue[modelValue.length - 1].apartment.rooms && modelValue[modelValue.length - 1].apartment.rooms.length > 0">
        <RoomItem 
          v-for="(item, i) of modelValue[modelValue.length - 1].apartment.rooms"
          :key="i"
          :item="item"
          :beds="bedList"
          @remove="deleteRoom(i)"
          @edit="editRoom(item, i)"
        />
      </template>
      <AlertBox 
        v-else
        type="danger"
        message="Нужно добавить минимум 1 комнату!"
      />
      <div class="beds-btns flex aic jcsb mt1">
        <div class="btn defb sm flex aic" @click="isOutdoorData = true">
          <template v-if="hasOutdoor">
            <svg class="ic18 icdef mr1">
              <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
            </svg>
            <span class="cut-text">
              {{ getOutdoors }}
            </span>
          </template>
          <template v-else>
            <svg class="ic18 icdef mr1">
              <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
            </svg>
            Spazi esterni
          </template>
        </div>
        <button class="btn sm def flex aic" @click="isRoomData = true">
          <svg class="ic18 icwhite mr1">
            <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
          </svg>
          Aggiungi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RoomItem from '@/components/items/RoomItem'
import BedItem from '@/components/items/BedItem'
export default {
  name: 'Rooms',
  components: { RoomItem, BedItem },

  async created() {
    if (this.modelValue.length === 0) this.modelValue.push({})

    if (typeof this.modelValue[this.modelValue.length - 1]['apartment'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1], 'apartment', {})
      if (typeof this.modelValue[this.modelValue.length - 1].apartment['rooms'] === "undefined") {
        await this.$set(this.modelValue[this.modelValue.length - 1].apartment, 'rooms', [])
      }
    }
    if (typeof this.modelValue[this.modelValue.length - 1].apartment['rooms'] === "undefined") {
      await this.$set(this.modelValue[this.modelValue.length - 1].apartment, 'rooms', [])
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

  data: () => ({
    apr_type: [
      {
        name: 'Quadrilocale',
        value: 1,
        // disabled: 'wheel-disabled-item'
      }, 
      {
        name: 'Più di cinque camere',
        value: 2
      },
      {
        name: 'Monolocale',
        value: 3
      },
      {
        name: 'Bilocale',
        value: 4
      },
      {
        name: 'Trilocale',
        value: 5
      }
    ],
    area: [
      {
        name: '80-100 m²',
        value: '80-100'
      },
      {
        name: 'Più di 100 m²',
        value: 'Più di 100'
      },
      {
        name: '20-30 m²',
        value: '20-30'
      },
      {
        name: '30-50 m²',
        value: '30-50'
      },
      {
        name: '50-80 m²',
        value: '50-80'
      },
    ],
    
    bedList: [
      {
        name: {
          en: 'Letto single',
          it: 'Letto single'
        },
        desc: {
          en: 'dimensioni 90-130cm',
          it: 'dimensioni 90-130cm'
        },
        icon: 'bed-1',
        count: 0,
        key: 'count_single_bed'
      },
      {
        name: {
          en: 'Letto doppio large',
          it: 'Letto doppio large'
        },
        desc: {
          en: 'dimensioni 151-180cm',
          it: 'dimensioni 151-180cm'
        },
        icon: 'bed-2',
        count: 0,
        key: 'count_large_double_bed'
      },
      {
        name: {
          en: 'Letto doppio extra-large',
          it: 'Letto doppio extra-large'
        },
        desc: {
          en: 'dimensioni 151-180cm',
          it: 'dimensioni 151-180cm'
        },
        icon: 'bed-2-large',
        count: 0,
        key: 'count_extra_large_double_bed'
      },
      {
        name: {
          en: 'Letto a castello',
          it: 'Letto a castello'
        },
        desc: {
          en: 'dimensioni 151-180cm',
          it: 'dimensioni 151-180cm'
        },
        icon: 'bed-2-large',
        count: 0,
        key: 'count_bunk_bed'
      },
      {
        name: {
          en: 'Letto a castello',
          it: 'Letto a castello'
        },
        desc: {
          en: 'dimensioni 151-180cm',
          it: 'dimensioni 151-180cm'
        },
        icon: 'bed-2-large',
        count: 0,
        key: 'count_expandable_sofa'
      },
      {
        name: {
          en: 'Letto a castello',
          it: 'Letto a castello'
        },
        desc: {
          en: 'x2 persone',
          it: 'x2 persone'
        },
        icon: 'bed-2-large',
        count: 0,
        key: 'count_sofa'
      },
    ],
    roomData: {},
    isRoomData: false,

    isOutdoorData: false,
    outdoorData: []
  }),

  watch: {
    'value.apartment.rooms': {
      handler () {
        console.log('rooms', this.modelValue[this.modelValue.length - 1].apartment.rooms)
        // this.checkValidation(val)
      },
      deep: true
    },
    roomData: {
      handler (val) {
        console.log('roomData ', val)
      },
      deep: true
    },
    isRoomData (val) {
      if (val) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
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
    isDisabled () {
      let res = true
      if (this.roomData.name) { res = false }
      return res
    },
    hasOutdoor () {
      let res = false
      if (
        this.modelValue[this.modelValue.length - 1].apartment.terrace ||
        this.modelValue[this.modelValue.length - 1].apartment.balcony ||
        this.modelValue[this.modelValue.length - 1].apartment.garden
      ) { res = true }
      return res
    },
    getOutdoors () {
      let res = ''
      if (this.modelValue[this.modelValue.length - 1].apartment.terrace) { 
        res += 'Terrace' 
      }
      if (this.modelValue[this.modelValue.length - 1].apartment.balcony) { 
        if (this.modelValue[this.modelValue.length - 1].apartment.balcony && this.modelValue[this.modelValue.length - 1].apartment.terrace) { 
          res += ', Balcony' 
        } else {
          res += 'Balcony' 
        }
      }
      if (this.modelValue[this.modelValue.length - 1].apartment.garden) { 
        if (
          (
            this.modelValue[this.modelValue.length - 1].apartment.garden &&
            this.modelValue[this.modelValue.length - 1].apartment.balcony
          ) || 
          (
            this.modelValue[this.modelValue.length - 1].apartment.garden &&
            this.modelValue[this.modelValue.length - 1].apartment.terrace
          )
          ) { 
          res += ', Garden' 
        } else {
          res += 'Garden' 
        }
      }
      return res
    }
  },

  methods: {
    checkValidation () {
      // let res = true
      // if (
      //   data[this.modelValue.length - 1].apartment.apr_type && 
      //   data[this.modelValue.length - 1].apartment.area && 
      //   data[this.modelValue.length - 1].apartment.count_person && 
      //   data[this.modelValue.length - 1].apartment.count_bathroom && 
      //   data[this.modelValue.length - 1].apartment.rooms.length > 0
      // ) { res = false }
      this.$emit('invalid-state', false)
    },
    countPersons () {
      let summ = 0
      if (this.modelValue[this.modelValue.length - 1].apartment.rooms.length > 0) {
        for (const item of this.modelValue[this.modelValue.length - 1].apartment.rooms) {
          for (const key in item) {
            if (key !== 'name') {
              summ = summ + item[key];
            }
          }
        }
        this.modelValue[this.modelValue.length - 1].apartment.count_bathroom = this.modelValue[this.modelValue.length - 1].apartment.rooms.length
        this.modelValue[this.modelValue.length - 1].apartment.count_person = summ
        console.log('summ', summ)
      }
    },
    saveRoom () {
      this.isRoomData = false
      if (this.roomData.index || this.roomData.index === 0) {
        const index = this.roomData.index
        delete this.roomData.index
        this.modelValue[this.modelValue.length - 1].apartment.rooms.splice(index, 1, this.roomData)
      } else {
        this.modelValue[this.modelValue.length - 1].apartment.rooms.push(this.roomData)
      }
      this.countPersons()
      this.roomData = {}
    },
    editRoom (item, i) {
      item.index = i
      this.roomData = item
      this.isRoomData = true
    },
    closeRoom () {
      this.isRoomData = false
      this.roomData = {}
    },
    deleteRoom (index) {
      this.modelValue[this.modelValue.length - 1].apartment.rooms.splice(index, 1)
      this.roomData = {}
    }
  },

  mounted () {
    this.checkValidation(this.value)
    
    // Передаем родителю заголовки
    this.$parent.$emit('step-title', {
      ru: 'Комнаты', 
      en: 'Rooms',
      it: 'Stanze, spazi e posti leto'
    })
  }
}
</script>


<style lang="scss">
.modal-room-options {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
  background-color: #FFF;
}
.beds-btns .cut-text {
  max-width: 100px;
  font-weight: bold;
}
</style>
