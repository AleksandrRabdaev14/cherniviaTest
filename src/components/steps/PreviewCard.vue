<template>
  <div class="step">

    <transition name="fmodal">
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
          v-model="modelValue.apartment.terrace"
        />
        <InputCheck 
          class="form-list"
          label="Balcone"
          name="balcony"
          uniq="balcony"
          :val="true"
          v-model="modelValue.apartment.balcony"
        />
        <InputCheck 
          class="form-list"
          label="Garden"
          name="garden"
          uniq="garden"
          :val="true"
          v-model="modelValue.apartment.garden"
        />
      </ModalBottom>
    </transition>

    <transition name="fmodal">
      <ModalFull 
        v-if="isRoomData"
        title="Aggiungi stanza"
        :disabled="isDisabled"
        @close="closeRoom"
        @save="saveRoom"
      >
        <div class="alert-minus">
          Descrivi la tua attività indicando tutti gli spazi e la destinazione di questi. Aggiungi le camere, quantità dei posti e la tipologia dei letti. Non dimenticarti dei spazi come balconi, giardini o spazi comuni di gran interesse per
  i tuoi ospiti. 
        </div>
        
        <InputText 
          class="mb20"
          uniq="uname"
          :label="$t('label__name')"
          :placeholder="$t('label__name')"
          v-model="roomData.name"
        />

        <h4>Tipologia dei letti disponibili</h4>

        <div class="grid">
          <BedItem 
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
      Descrivi la tua attività indicando tutti gli spazi e la destinazione di questi. Aggiungi le camere, quantità dei posti e la tipologia dei letti. Non dimenticarti dei spazi come balconi, giardini o spazi comuni di gran interesse per
i tuoi ospiti. 
    </div>
    
    <!-- Select and counter -->
    <div class="grid gtc2 ggap2 mb2">
      <InputSelect
        uniq="tipologia"
        :label="$t('placeholder__choose')"
        :list="apr_type"
        v-model="modelValue.apartment.apr_type"
      />
      <InputSelect
        uniq="superfice"
        :label="$t('placeholder__choose')"
        :list="area"
        v-model="modelValue.apartment.area"
      />

      <InputCounter
        uniq="postiletto"
        :label="$t('count_person')"
        v-model="modelValue.apartment.count_person"
      />
      <InputCounter
        uniq="bagni"
        :label="$t('count_bathroom')"
        v-model="modelValue.apartment.count_bathroom"
      />
    </div>
    
    <h3>Stanze, spazi e leti</h3>
    <div class="grid ggap1">
      <template v-if="modelValue.apartment.rooms && modelValue.apartment.rooms.length > 0">
        <RoomItem 
          v-for="(item, i) of modelValue.apartment.rooms"
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
      <div class="beds-btns flex aic jcsb">
        <div class="btn btn--white btn--small" @click="isOutdoorData = true">
          <template v-if="hasOutdoor">
            <svg class="ic-18 ic-def mr1">
              <use xlink:href="@/assets/icons/sprite.svg#edit"></use>
            </svg>
            <span class="cut-text">
              {{ getOutdoors }}
            </span>
          </template>
          <template v-else>
            <svg class="ic-18 ic-def mr1">
              <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
            </svg>
            Spazi esterni
          </template>
        </div>
        <button class="btn btn--small btn--def" @click="isRoomData = true">
          <svg class="ic-18 ic-white mr1">
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

  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  data: () => ({
    apr_type: [
      {
        name: 'Monolocale',
        value: 'Monolocale'
      },
      {
        name: 'Some data',
        value: 'somedata'
      }
    ],
    area: [
      {
        name: '40 m²',
        value: '40'
      },
      {
        name: '30 m²',
        value: '30'
      }
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

    // outdoorList: [
    //   {
    //     Terrazza
    //   }
    // ],
    isOutdoorData: false,
    outdoorData: []
  }),

  watch: {
    value: {
      handler (val) {
        // console.log('ROOMS ', val)
        this.checkValidation(val)
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
    },
    'modelValue.apartment.rooms': {
      handler (rooms) {
        let summ = 0
        for (const item of rooms) {
          for (const key in item) {
            if (key !== 'name') {
              summ = summ + item[key];
            }
          }
        }

        this.modelValue.apartment.count_bathroom = rooms.length
        this.modelValue.apartment.count_person = summ
      },
      deep: true
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
        this.modelValue.apartment.terrace ||
        this.modelValue.apartment.balcony ||
        this.modelValue.apartment.garden
      ) { res = true }
      return res
    },
    getOutdoors () {
      let res = ''
      if (this.modelValue.apartment.terrace) { 
        res += 'Terrace' 
      }
      if (this.modelValue.apartment.balcony) { 
        if (this.modelValue.apartment.balcony && this.modelValue.apartment.terrace) { 
          res += ', Balcony' 
        } else {
          res += 'Balcony' 
        }
      }
      if (this.modelValue.apartment.garden) { 
        if (
          (
            this.modelValue.apartment.garden &&
            this.modelValue.apartment.balcony
          ) || 
          (
            this.modelValue.apartment.garden &&
            this.modelValue.apartment.terrace
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
    checkValidation (data) {
      let res = true
      if (
        data.apartment.apr_type && 
        data.apartment.area && 
        data.apartment.count_person && 
        data.apartment.count_bathroom && 
        data.apartment.rooms.length > 0
      ) { res = false }
      this.$emit('invalid-state', res)
    },
    saveRoom () {
      this.isRoomData = false
      if (this.roomData.index || this.roomData.index === 0) {
        const index = this.roomData.index
        delete this.roomData.index
        this.modelValue.apartment.rooms.splice(index, 1, this.roomData)
      } else {
        this.modelValue.apartment.rooms.push(this.roomData)
      }
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
      this.modelValue.apartment.rooms.splice(index, 1)
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
