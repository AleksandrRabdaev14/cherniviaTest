<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">
      Экраны шагов
      <span class="fs14">Всего экранов: {{ steps.length }}</span>
    </h1>
    
    <section v-for="(step, i) of steps" :key="i" class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler(step.name)">{{ step.name }}</h2>
      <div v-if="has(step.name)" class="content">
        <hr>
        <div class="grid step-grid aifs ggap3">
          <div class="step-window">
            <component :is="step.component" v-model="stepData" />
          </div>
          <div class="step-desc">
            <div class="grid ggap2">
              <SshPre class="m0" language="js" :dark="true" :copy-button="true">{{ step.name }}</SshPre>
              <SshPre class="m0" language="js" :dark="true" :copy-button="true">
                &lt;{{ step.name }} 
                  ref="stepsComponent" 
                  :repeatData="stepRepeat" 
                  @invalid-state="isInvalid = $event" 
                  @repeat="stepRepeat = $event" 
                  v-model="stepData" 
                /&gt;
              </SshPre>
            </div>
            <h2 v-if="step.subs.length > 0">У этого экрана есть вложенные компоненты</h2>
            <div class="flex flex--w ggap3">
              <div v-for="(item, index) of step.subs" :key="index" class="step-window">
                <component :is="step.component" v-model="stepData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  mixins: ['docMixin'],
  data: () => ({
    stepData: [],
    steps: [
      // {
      //   name: 'AddRoom',
      //   component: () => import(`@/components/steps/AddRoom.vue`),
      //   props: {}
      // },
      {
        name: 'AddSelector',
        component: () => import(`@/components/steps/AddSelector.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      // {
      //   name: 'AmountRooms',
      //   component: () => import(`@/components/steps/AmountRooms.vue`),
      //   props: {},
      // code: `</>`,
      // subs: []
      // },
      {
        name: 'CalcPrice',
        component: () => import(`@/components/steps/CalcPrice.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Categories',
        component: () => import(`@/components/steps/Categories.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'SubCategories',
        component: () => import(`@/components/steps/SubCategories.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'CityStreet',
        component: () => import(`@/components/steps/CityStreet.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Delegate',
        component: () => import(`@/components/steps/Delegate.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Descriptions',
        component: () => import(`@/components/steps/Descriptions.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Finish',
        component: () => import(`@/components/steps/Finish.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'FullData',
        component: () => import(`@/components/steps/FullData.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Geolocation',
        component: () => import(`@/components/steps/Geolocation.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Name',
        component: () => import(`@/components/steps/Name.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      // {
      //   name: 'NameHotel',
      //   component: () => import(`@/components/steps/NameHotel.vue`),
      //   props: {},
      // code: `</>`,
      // subs: []
      // },
      {
        name: 'PayMethods',
        component: () => import(`@/components/steps/PayMethods.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'PreviewAd',
        component: () => import(`@/components/steps/PreviewAd.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'PreviewCard',
        component: () => import(`@/components/steps/PreviewCard.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Rooms',
        component: () => import(`@/components/steps/Rooms.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Rules',
        component: () => import(`@/components/steps/Rules.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'RulesContacts',
        component: () => import(`@/components/steps/RulesContacts.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'RulesServices',
        component: () => import(`@/components/steps/RulesServices.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'SeasonPrice',
        component: () => import(`@/components/steps/SeasonPrice.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Services',
        component: () => import(`@/components/steps/Services.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      // {
      //   name: 'Signup',
      //   component: () => import(`@/components/steps/Signup.vue`),
      //   props: {}
      // },
      {
        name: 'SubServices',
        component: () => import(`@/components/steps/SubServices.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'TimeCall',
        component: () => import(`@/components/steps/TimeCall.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'Uploader',
        component: () => import(`@/components/steps/Uploader.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'UploaderDocs',
        component: () => import(`@/components/steps/UploaderDocs.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'UserData',
        component: () => import(`@/components/steps/UserData.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
      {
        name: 'WorkPeriod',
        component: () => import(`@/components/steps/WorkPeriod.vue`),
        props: {},
        code: `</>`,
        subs: []
      },
    ]
  }),

  methods: {
    getComponent (name) {
      return () => import(`@/components/steps/${name}.vue`)
    },
  },

  mounted () {
    this.stepData = JSON.parse(localStorage.getItem('stepData'))
  }
}
</script>

<style lang="scss" scoped>
.step-window {
  width: 350px;
  // border: 1px #DDD solid;
  min-height: 100px;
  padding: 15px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 10px #000;
}
.step-grid {
  grid-template-columns: 350px 1fr;
}
</style>
