<template>
  <div class="layout layout-empty grid">
    <div class="ui-menu">
      <template v-for="(item, i) of list">
        <router-link :key="i" :to="item.link">{{ item.name }}</router-link>
      </template>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Empty',
  data: () => ({
    list: [
      {
        name: 'UI Компоненты',
        link: '/ui'
      },
      {
        name: 'Отступы',
        link: '/ui/spaces'
      },
      {
        name: 'Сетка',
        link: '/ui/flex-grid'
      },
      {
        name: 'Кнопки',
        link: '/ui/buttons'
      },
      {
        name: 'Элементы формы',
        link: '/ui/forms'
      },
      {
        name: 'Табы',
        link: '/ui/tabs'
      },
      {
        name: 'Динамические компоненты для табов',
        link: '/ui/tabs-content'
      },
      {
        name: 'Стили текстов',
        link: '/ui/text'
      },
      {
        name: 'Тени',
        link: '/ui/shadows'
      },
      {
        name: 'Экраны шагов',
        link: '/ui/steps'
      },
      {
        name: 'Иконки',
        link: '/ui/icons'
      },
      {
        name: 'Карточки',
        link: '/ui/cards'
      },
    ]
  })
}
</script>

<style lang="scss">
body {
  max-width: 100% !important;
}
.layout-empty {
  grid-template-columns: 250px 1fr;
  font-size: 1.6rem;

  .ui-menu {
    background-color: #f5f5f5;
    border-right: 1px #DDD solid;
    position: sticky;
    top: 0;
    z-index: 100;
    height: 100vh;

    & > a {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      text-decoration: none;
      color: #000;
      font-size: 1.6rem;
      border-bottom: 1px #DDD solid;

      &:hover {
        background-color: #FFF;
      }

      &.router-link-exact-active {
        background-color: $def;
        color: #FFF;
      }
    }
  }
}
</style>
