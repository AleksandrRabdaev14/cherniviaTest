<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">
      Динамические компоненты для табов
    </h1>

    <section class="doc-section p2">
      <div class="content">
        <h2 class="m0">Встранивание динамического компонента</h2>
        <p>Встраивание компонента в любом варианте будет идентичным, а вот вызов нужного компонента может быть разным, Рассмотрим несколько вариантов вызова нужного компонента при смене активного таба.</p>
        <p>Такой компонент работает идентично любому другому компоненту, имеет пользовательские пропсы и действия.</p>
        <SshPre class="m0" language="js" :dark="true" :copy-button="true">
          {{ code }}
        </SshPre>
        <hr>
        <div v-for="(item, i) of compData" :key="i">
          <h3 class="m0 mt2">{{ item.name }}</h3>
          <p class="mt1">{{ item.desc }}</p>
          <SshPre class="m0" language="js" :dark="true" :copy-button="true">
            {{ item.code }}
          </SshPre>
        </div>
      </div>
    </section>
    
    <section class="mt2 doc-section p2">
      <div class="content">
        <h2 class="m0">Полный пример</h2>
        <p>Используем второй вариант, так как им легче манипулировать в разных ситуациях</p>
        <SshPre class="m0" language="js" :dark="true" :copy-button="true">
          {{ fullCode }}
        </SshPre>
      </div>
    </section>

    <section class="mt2 doc-section p2">
      <div class="content">
        <h2 class="m0">Контент для модальных окон</h2>
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam sint voluptatibus nihil illum vel ad labore accusantium ut sapiente minus, et, cum incidunt explicabo? Facilis quam exercitationem praesentium laborum?</p> -->
      </div>
      <div class="facilities">
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#wifi"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Wi-fi
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#tv"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Tv
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#parking"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Parking
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#ski"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Ski room
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#panorama"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Panorama
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#bagno"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Bagno
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#biancheria"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Biancheria
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#lavatrice"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Lavatrice
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#care_products"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Сare products
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#safe_box"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Safe box
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#special_features"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Special features
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#minibar"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Minibar
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#cooking"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Cooking
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
        <div class="facilities-item grid">
          <div class="facilities-item__icon">
            <svg>
              <use xlink:href="@/assets/icons/sprite.svg#lavastoviglie"></use>
            </svg>
          </div>
          <div class="facilities-item__info">
            <h4 class="heading fs14 m0">
              Lavastoviglie
            </h4>
            <span class="description fs12">
              Opisanie usloviy i servisov apartamentov
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="mt2 doc-section p2">
      <div class="content">
        <h2 class="m0">Контент для модалки RO OB BB и тд</h2>
      </div>
      <div class="list">
        <div class="list-item" v-for="(item, index) in listItems" :key="index">
          <h4 class="m0 heading">{{item.heading}}</h4>
          <span class="fs14 description">{{item.description}}</span>
        </div>
      </div>
    </section>

    <section class="mt2 doc-section p2">
      <div class="content">
        <h2 class="m0">Цветные счетчики</h2>
      </div>
      <CountersRow :counters="counters" />
    </section>

    <section class="mt2 doc-section p2">
      <div class="content">
        <h2 class="m0">Чекбоксы</h2>
      </div>
      <Checkbox :labelText="'Test Text'" />
    </section>

    <section class="mt2 doc-section p2" style="width: 375px">
      <div class="content">
        <h2 class="m0">Подсказки</h2>
        <Hints :hints="hints" />
      </div>
    </section>

  </div>
</template>

<script>
import CountersRow from '@/alex/components/Counters/CountersRow.vue'
import Checkbox from '@/alex/components/Checkbox/Checkbox.vue'
import Hints from '@/alex/components/Hints/Hints.vue'
export default {
  components: {
    CountersRow,
    Checkbox,
    Hints,
  },
  mixins: ['docMixin'],
  data: () => ({
    hints: [
      {
        heading: 'Per avere piu prenotazioni',
        description: 'Per avere più prenotazioni bisogna avere le foto di qualità, mostrando ai clienti la vostra attività cosi com’è. Arrivando sul posto le aspettative dei clienti devono coincidere con la realtà. Questo può evitare le recensioni negative in futuro.',
        mode: 'bad'
      },
      {
        heading: 'Per avere piu prenotazioni',
        description: 'Per avere più prenotazioni bisogna avere le foto di qualità, mostrando ai clienti la vostra attività cosi com’è. Arrivando sul posto le aspettative dei clienti devono coincidere con la realtà. Questo può evitare le recensioni negative in futuro.',
        mode: 'good'
      },
      {
        heading: 'Per avere piu prenotazioni',
        description: 'Per avere più prenotazioni bisogna avere le foto di qualità, mostrando ai clienti la vostra attività cosi com’è. Arrivando sul posto le aspettative dei clienti devono coincidere con la realtà. Questo può evitare le recensioni negative in futuro.',
        mode: 'good'
      },
    ],
    counters: [
      {heading: "Hot Offer", counter: 2, color: 'yellow'},
      {heading: "New Offer", counter: 4, color: 'orange', isActive: true},
      {heading: "Hot Offer", counter: 2, color: 'blue'},
    ],
    listItems: [
      {heading: 'RO o OB', description: 'formulaRoom Only/Bed Only'},
      {heading: 'BB', description: 'formula bed & breakfast che comprende il pernottamento e la prima colazione.'},
      {heading: 'HB', description: 'formula Half Board o 1/2 pensione che comprende il pernottamento, la prima colazione e un pasto principale (pranzo o cena a scelta con le bevande escluse).'},
      {heading: 'FB', description: 'pensione completa o formula Full Board che comprende il pernottamento, la prima colazione e i due pasti principali (bevande escluse).'},
      {heading: 'SC', description: 'camera con cucina dove i clienti possono cucinare i pasti in modo autonomo.'},
    ],
    isModal: false,
    code: `&lt;component 
    :is="curComponent"
    ref="refComponent"
    @component-emits="someAction($event)" 
    v-model="componentData"
  /&gt;`,
    compData: [
      {
        name: 'Вариант 1',
        desc: 'Вызываем нужный компонент через вычисляемые свойства Computed',
        code: `computed: {
    curComponent () {
      return () => import(\`@/components/steps/\${AnyComponent}.vue\`)
    }
 }`,
        props: [
          {
            name: 'asd',
            type: 'String',
            default: '',
            desc: ''
          }
        ]
      },
      {
        name: 'Вариант 2',
        desc: 'Вызываем нужный компонент через метод и записываем результат в переменную',
        code: `data: () => ({
    curComponent: 'div'
 }),

 methods: {
   getComponent (name) {
     this.curComponent = () => import(\`@/components/steps/\${name}.vue\`)
   }
 }`,
        props: [
          {
            name: 'asd',
            type: 'String',
            default: '',
            desc: ''
          }
        ]
      },
    ],

    fullCode: `
 &lt;template&gt;
 &lt;div class="page"&gt;
   
   &lt;div class="tabs flex aic ggap2"&gt;
      &lt;button class="tabs-item" @click="getComponent('FullData')"&gt;Tab 1&lt;/button&gt;
      &lt;button class="tabs-item" @click="getComponent('Name')"&gt;Tab 2&lt;/button&gt;
   &lt;/div&gt;

   &lt;component 
      :is="curComponent"
      ref="refComponent"
      @component-emits="someAction($event)" 
      v-model="componentData"
   /&gt;
 &lt;/div&gt;
 &lt;/template&gt;

 &lt;script&gt;
 data: () => ({
   curComponent: 'div'
 }),

 methods: {
   getComponent (name) {
     this.curComponent = () => import(\`@/components/steps/\${name}.vue\`)
   }
 }
 &lt;/script&gt;`
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
.list {
  padding: 15px 0;
  color: $black2;
  &-item {
    border-bottom: 1px solid transparentize($color: $grey-dark, $amount: .5);
    padding: 1rem 0;
    line-height: 1.2;
    &:last-child {
      border-bottom: none;
    }
    .heading {
      margin-bottom: .5rem;
    }
  }
}
.facilities {
  padding: 1.5rem 0;
  &-item {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
    &.grid {
      grid-template-columns: 2rem 1fr;
      grid-gap: 1.6rem;
    }
    &__icon {
      svg {
        width: 2rem;
        height: 2rem;
        fill: $black3;
      }
    }
    &__info {
      .heading {
        margin-bottom: .5rem;
        color: $black;
        font-weight: 400;
        line-height: 1.2;
      }
      .description {
        color: $black3;
        line-height: 1.2;
      }
    }
  }
}
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
