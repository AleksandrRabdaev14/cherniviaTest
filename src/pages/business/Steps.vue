<template>
  <div class="page flex flexcol">
    <div class="step-component">
      <AlertBox 
        v-if="errorMessage"
        class="mb2"
        type="danger"
        :message="errorMessage"
      />
      <component 
        :is="curStep"
        ref="stepsComponent"
        :repeatData="stepRepeat"
        @invalid-state="isInvalid = $event" 
        @repeat="stepRepeat = $event"
        v-model="stepData"
      />
    </div>
    <div class="sticky-b">
      <button 
        class="btn def wfull" 
        :class="isWaiting ? 'waiting' : ''"
        @click="nextAction"
      >{{ $t('button__next') }}</button>
        <!-- :disabled="isInvalid || isWaiting" -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    curStep: 'div',
    isInvalid: true,
    isWaiting: false,

    // Ошибка
    errorMessage: '',

    // Для повторных шагов
    stepRepeat: {},

    // Данные любых шагов
    stepData: []
  }),

  watch: {
    isInvalid (val) {
      if (!val) this.errorMessage = ''
    },
    stepRepeat: {
      handler (val) {
        localStorage.setItem('stepRepeat', JSON.stringify(val))
      },
      deep: true
    },

    stepData: {
      handler (val) {
        console.log(val)
        localStorage.setItem('stepData', JSON.stringify(val))
      },
      deep: true
    },

    '$route': {
      handler (to) {
        // console.log('to', to)
        // console.log('from', from)
        const arrTo = to ? to.meta.steps : []
        const curIndex = arrTo.findIndex(item => item.toLowerCase() === to.params.step.toLowerCase())
        if (curIndex !== -1) {
          this.setCurStep(arrTo[curIndex])
        } else {
          this.$router.push({ params: { step: arrTo[0].toLowerCase() } })
        }
        // Обновляем тайтл
        this.setTitle()
      },
      deep: true,
      immediate: true
    }
  },

  computed: {
    ...mapGetters({
      subCategories: 'business/subCategories'
    })
  },

  methods: {
    ...mapActions(['getAccessToken', 'register']),
    ...mapActions({
      sendBusinessData: 'business/sendData'
    }),

    firstLetterCaps (str) {
      return str[0].toUpperCase() + str.slice(1)
    },

    setCurStep (name) {
      this.curStep = () => import(`@/components/steps/${name}.vue`)
    },

    setTitle () {
      const step = this.$route.params.step
      const arr = this.$route.meta.steps
      const index = arr.findIndex(item => item.toLowerCase() === step)
      document.title = 'Step '+(index + 1)+' of '+arr.length
    },

    nextRoute () {
      // Перенаправляем на следующий ROUTE не шаг !!! МОЖНО ВЫЗЫВАТЬ В (THEN) НО НЕ ТРОГАТЬ СИНТАКСИС !!!
      // const subIndex = this.subCategories.findIndex(item => item.id === this.stepData.activity)
      // this.$router.push({ name: this.$route.meta.linkName+'-'+this.subCategories[subIndex].slug, params: { step: '_' } })
      if (this.$route.meta.firstStep) {
        this.$router.push({ name: this.$route.meta.linkName+'-'+this.stepData[this.stepData.length - 1].slug, params: { step: this.$route.meta.firstStep.toLowerCase() } })
      } else {
        this.$router.push({ name: this.$route.meta.linkName })
      }
    },

    async nextAction () {
      this.$refs.stepsComponent.validStep().then((res) => {
        // Если шаг прошел валидацию
        if (res.status) {
          const steps = this.$route.meta.steps
          const indexStep = steps.findIndex(item => item.toLowerCase() === this.$route.params.step)

          // Переход на следующий ШАГ !!! НЕ ТРОГАТЬ !!!
          if (indexStep !== -1 && (steps.length - 1) !== indexStep) {
            console.log('NEXT STEP', this.stepData)
            
            // Если шаг Uploader
            if (this.$route.params.step === 'uploader') {
              // Сохраняем медиа а потом редиректим
              this.isWaiting = true
              this.$refs.stepsComponent.beforeNext().then((success) => {
                if (success) {
                  this.isWaiting = false
                  this.$router.push({ params: { step: steps[indexStep+1].toLowerCase() } })
                }
              })
            } 
            
            else {
              this.$router.push({ params: { step: steps[indexStep+1].toLowerCase() } })
            }
          } 

          // Отправка данных на сервер
          else if ((steps.length - 1) === indexStep) {
            console.log('%cSave start', 'color: white; background: green; padding: 4px 10px; border-radius: 4px; font-size: 14px;')
            console.log('SAVE DATA', this.stepData)

            // Отправка данных Апартаментов
            if (this.$route.name === 'steps-apartments') {
              // await this.getAccessToken()
              // this.sendBusinessData(this.stepData).then((success) => {
              //   if (success) this.nextRoute()
              // })
              this.nextRoute()
            }
            
            // Промежуточный переход
            else if (this.$route.name === 'intermediate-step') {
              this.stepData.push(this.stepData[this.stepData.length - 1])
              this.$router.push({ 
                name: this.stepRepeat.type+'-'+this.stepRepeat.addressType+'-'+this.$route.meta.linkName,
                params: { step: this.$route.meta.firstStep.toLowerCase() }
              })
            }

            // Отправка данных Лида
            else if (this.$route.name === 'lead') {
              ///////
            }

            // Если роут категорий
            else {
              this.nextRoute()
            }
          } 

          // Какая то ошибка
          else {
            console.log('WRONG')
          }
        }

        // Ошибка валидации
        else {
          console.log('%cОшибка валидации!', 'background: red; color: #FFF; padding: 2px 5px; border-radius: 2px;')
          this.errorMessage = res.message
        }
      })
    }
  },

  mounted () {
    if (localStorage.getItem('stepData')) {
      try {
        this.stepData = JSON.parse(localStorage.getItem('stepData'))
      } catch {
        localStorage.removeItem('stepData')
      }
    }
    this.setTitle()
  }
}
</script>

<style lang="scss">
.step-component {
  min-height: calc(100vh - 180px);
}
.sticky-b {
  position: sticky;
  bottom: 0;
  z-index: 999;
  background-color: #FFF;
  margin: 30px -15px -20px;
  padding: 10px 15px;
  // border-top: $border-1;
}
</style>
