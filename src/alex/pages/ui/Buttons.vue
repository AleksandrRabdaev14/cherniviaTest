<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">
      Кнопки
      <span class="fs14">assets/css/btns.scss</span>
    </h1>
    
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('btns')">Стандартные кнопки</h2>
      <div v-if="has('btns')" class="content">
        <hr>
        <div class="mb2">
          Стандартные кнопки собираются из нескольких класов<br>
          <b>btn</b> (основной) <b>(def, defb, dark)</b> (модификатор) <b>(sm, wait)</b> (модификатор)<br>
          <hr>
          Дополнительно можно использовать такие классы<br>
          <div class="grid gtc4 ggap2">
            <SshPre class="m0" language="js" label="width: 100%" :dark="true" :copy-button="true">wfull</SshPre>
            <SshPre class="m0" language="js" label="text-align: left" :dark="true" :copy-button="true">tleft</SshPre>
            <SshPre class="m0" language="js" label="text-align: center" :dark="true" :copy-button="true">tcenter</SshPre>
            <SshPre class="m0" language="js" label="text-align: right" :dark="true" :copy-button="true">tright</SshPre>
          </div>
        </div>
        <div class="tabl mb2 ">
          
          <div class="tabl-caption">
            <span>Назначение</span>
            <span>Класс</span>
            <span>Превью</span>
          </div>
          <div class="tabl-row" v-for="(item, index) of list" :key="'item_'+index">
            <span>{{ item.target }}</span>
            <span>
              <SshPre class="m0" language="js" :dark="true" :copy-button="true">{{ item.class }}</SshPre>
            </span>
            <span v-html="item.html"></span>
          </div>

        </div>
      </div>
    </section>
    
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('OtherBtns')">Разные кнопки для всех экранов</h2>
      <div v-if="has('OtherBtns')" class="content">
        <hr>
        <div class="mb2">
          Кнопки на все случаи жизни, для различных экранов в карточке и дашборде
        </div>
        <div class="tabl mb2 ">
          
          <!-- <div class="tabl-caption">
            <span>Назначение</span>
            <span>Класс</span>
            <span>Превью</span>
          </div>
          <div class="tabl-row" v-for="(item, index) of list" :key="'item_'+index">
            <span>{{ item.target }}</span>
            <span>
              <SshPre class="m0" language="js" :dark="true" :copy-button="true">{{ item.class }}</SshPre>
            </span>
            <span v-html="item.html"></span>
          </div> -->

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  mixins: ['docMixin'],
  data: () => ({
    list: [
      {
        target: 'Default normal',
        class: '<button class="btn def">Btn</button>',
        html: '<button class="wfull btn def">Btn</button>'
      },
      {
        target: 'Default small',
        class: '<button class="btn def sm">Btn</button>',
        html: '<button class="wfull btn def sm">Btn</button>'
      },
      {
        target: 'Default normal disabled',
        class: '<button class="btn def sm" disabled>Btn</button>',
        html: '<button class="wfull btn def sm" disabled>Btn</button>'
      },
      {
        target: 'Default wait',
        class: '<button class="btn def sm wait">Btn</button>',
        html: '<button class="wfull btn def sm wait">Btn</button>'
      },
      {
        target: 'Default bordered',
        class: '<button class="btn defb">Btn</button>',
        html: '<button class="wfull btn defb">Btn</button>'
      },
      {
        target: 'Default bordered small',
        class: '<button class="btn defb sm">Btn</button>',
        html: '<button class="wfull btn defb sm">Btn</button>'
      },
      {
        target: 'Default bordered small',
        class: '<button class="btn defb sm" disabled>Btn</button>',
        html: '<button class="wfull btn defb sm" disabled>Btn</button>'
      },
      {
        target: 'Default bordered sm + icon',
        class: `<button class="btn defb sm flex aic jcc ggap1">
  <svg class="ic24 icdef">
    <use xlink:href="@/assets/icons/sprite.svg#plus"></use>
  </svg>
  Btn
</button>`,
        html: `<button class="btn defb sm flex aic jcc ggap1 wfull">
  <svg class="ic24 icdef">
    <use xlink:href="${require('@/assets/icons/sprite.svg')}#plus"></use>
  </svg>
  Btn
</button>`
      },
      {
        target: 'Default bordered wait',
        class: '<button class="btn defb sm wait">Btn</button>',
        html: '<button class="wfull btn defb sm wait">Btn</button>'
      },
      {
        target: 'Dark',
        class: '<button class="btn dark">Btn</button>',
        html: '<div style="padding: 10px; background-color: #000;"><button class="wfull btn dark">Btn</button></div>'
      },
      {
        target: 'Dark wait',
        class: '<button class="btn dark sm wait">Btn</button>',
        html: '<div style="padding: 10px; background-color: #000;"><button class="wfull btn dark sm wait">Btn</button></div>'
      },
    ]
  })
}
</script>
