<template>
  <div class="p3">
    <h1 class="doc-title flex aic jcsb m0 mb3">
      Иконки
      <span class="fs14">assets/css/icons.scss</span>
    </h1>
    
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('icons')">Стили для иконок</h2>
      <div v-if="has('icons')" class="content">
        <hr>
        <div class="mb2">
          Иконки собираются из двух класов (размер и цвет)<br>
          <b>ic10, ic11, ic12, ... ic50</b> (размер)<br>
          <b>icwhite, icblack, icdef, icgreen, icyellow, icred</b> (цвета)<br>
          <hr>
          Пример использования<br>
          <SshPre class="m0" language="js" :dark="true" :copy-button="true">
            &lt;svg class="ic20 icblack"&gt;
              &lt;use xlink:href="@/assets/icons/sprite.svg#plus"&gt;&lt;/use&gt;
            &lt;/svg&gt;
          </SshPre>
        </div>
      </div>
    </section>
    
    <!-- Sprite -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('IconsSprite')">Иконки: SPRITE</h2>
      <div v-if="has('IconsSprite')" class="content">
        <hr>
        <div class="grid icgrid ggap2">
          <button 
            v-for="(item, index) of sprite" 
            :key="'item_'+index" 
            class="tcenter icitem flexcol aic jcc p1" 
            :class="clipped === index ? 'active' : ''"
            v-clipboard="() => getVal('sprite', item)"
            @click="clipped = 'sprite_'+index"
          >
            <svg class="ic24 icdef">
              <use :xlink:href="getIcon('sprite', item)"></use>
            </svg>
            <h4 class="m0 mt1">{{ item }}</h4>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Options -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('IconsOptions')">Иконки: OPTIONS</h2>
      <div v-if="has('IconsOptions')" class="content">
        <hr>
        <div class="grid icgrid ggap2">
          <button 
            v-for="(item, index) of options" 
            :key="'item_'+index" 
            class="tcenter icitem flexcol aic jcc p1" 
            :class="clipped === index ? 'active' : ''"
            v-clipboard="() => getVal('sprite', item)"
            @click="clipped = index"
          >
            <svg class="ic30 icdef">
              <use :xlink:href="getIcon('options', item)"></use>
            </svg>
            <h4 class="m0 mt1">{{ item }}</h4>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Room -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('IconsRoom')">Иконки: ROOM</h2>
      <div v-if="has('IconsRoom')" class="content">
        <hr>
        <div class="grid icgrid ggap2">
          <button 
            v-for="(item, index) of room" 
            :key="'item_'+index" 
            class="tcenter icitem flex--col aic jcc p1" 
            :class="clipped === 'room_'+index ? 'active' : ''"
            v-clipboard="() => getVal('room', item)"
            @click="clipped = 'room_'+index"
          >
            <svg class="ic30 icdef">
              <use :xlink:href="getIcon('room', item)"></use>
            </svg>
            <h4 class="m0 mt1">{{ item }}</h4>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Nav -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('IconsNav')">Иконки: NAV</h2>
      <div v-if="has('IconsNav')" class="content">
        <hr>
        <div class="grid icgrid ggap2">
          <button 
            v-for="(item, index) of nav" 
            :key="'item_'+index" 
            class="tcenter icitem flex--col aic jcc p1" 
            :class="clipped === 'nav_'+index ? 'active' : ''"
            v-clipboard="() => getVal('nav', item)"
            @click="clipped = 'nav_'+index"
          >
            <svg class="ic30 icdef">
              <use :xlink:href="getIcon('nav', item)"></use>
            </svg>
            <h4 class="m0 mt1">{{ item }}</h4>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Flags -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('IconsFlags')">Иконки: FLAGS</h2>
      <div v-if="has('IconsFlags')" class="content">
        <hr>
        <div class="grid icgrid ggap2">
          <button 
            v-for="(item, index) of flags" 
            :key="'item_'+index" 
            class="tcenter icitem flex--col aic jcc p1" 
            :class="clipped === 'flags_'+index ? 'active' : ''"
            v-clipboard="() => getVal('flags', item)"
            @click="clipped = 'flags_'+index"
          >
            <svg class="ic30 icdef">
              <use :xlink:href="getIcon('flags', item)"></use>
            </svg>
            <h4 class="m0 mt1">{{ item }}</h4>
          </button>
        </div>
      </div>
    </section>
    
    <!-- Logo -->
    <section class="mb1 doc-section p2">
      <h2 class="m0 toggler" @click="toggler('IconsLogo')">Иконки: LOGO</h2>
      <div v-if="has('IconsLogo')" class="content">
        <hr>
        <div class="grid icgrid ggap2">
          <button 
            v-for="(item, index) of logo" 
            :key="'item_'+index" 
            class="tcenter icitem flex--col aic jcc p1" 
            :class="clipped === 'logo_'+index ? 'active' : ''"
            v-clipboard="() => getVal('logo', item)"
            @click="clipped = 'logo_'+index"
          >
            <svg class="ic30 icdef">
              <use :xlink:href="getIcon('logo', item)"></use>
            </svg>
            <h4 class="m0 mt1">{{ item }}</h4>
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  mixins: ['docMixin'],
  data: () => ({
    counter: 0,
    clipped: '',
    sprite: [
      'star',
      'bell',
      'help',
      'report',
      'settings',
      'alert',
      'save',
      'sun',
      'image',
      'filter',
      'plus',
      'dots',
      'dots_vertical',
      'check',
      'go_back',
      'arr_left',
      'arr_right',
      'arr_down',
      'arr_down_solid',
      'copy',
      'edit',
      'upload',
      'delete',
      'close',
      'marker',
      'road',
      'alert_info',
      'alert_success',
      'alert_warning',
      'alert_danger',
      'eye',
      'eye_hide',
      'invalid',
      'logout',
      'time',
      'attach',
      'edit',
      'export',
      'like',
      'geomap',
      'ski_lift'
    ],
    options: [
      'wifi',
      'tv'
    ],
    room: [
      'bed-1',
      'bed-2',
      'bed-2-large',
      'bed-3',
      'sofa',
      'sofa-large'
    ],
    nav: [
      'feed',
      'home',
      'reservations',
      'village',
      'dots'
    ],
    flags: [
      'en',
      'fr',
      'it',
      'ru',
      'se'
    ],
    logo: [
      'google',
      'facebook',
      'apple'
    ]
  }),

  methods: {
    getIcon (sprite, icon) {
      return require(`@/assets/icons/${sprite}.svg`)+'#'+icon
    },
    getVal (sprite, icon) {
      return `<svg class="ic24 icdef"><use xlink:href="@/assets/icons/${sprite}.svg#${icon}"></use></svg>`
    }
  }
}
</script>

<style lang="scss" scoped>
.icgrid {
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
.icitem {
  border: 1px #DDD solid;
  border-radius: 10px;
  background-color: #FFF;
  cursor: pointer;

  &:hover {
    border-color: $def;
    box-shadow: 0 10px 30px -3px rgba(0, 0, 0, 0.2);
  }
  &:active {
    border-color: $def;
    box-shadow: none;
    background-color: #f5f5f5;
  }
  &.active {
    border-color: $green;
    box-shadow: none;
    background-color: $green-extralight;
  }
}
</style>
