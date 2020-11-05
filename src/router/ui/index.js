export default [
  {
    path: '/ui',
    name: 'ui',
    meta: { 
      layout: 'Empty',
      title: 'UI elements'
    },
    component: () => import('@/alex/pages/ui/Index.vue'),
  },
  {
    path: '/ui/spaces',
    name: 'spaces',
    meta: { 
      layout: 'Empty',
      title: 'Отступы'
    },
    component: () => import('@/alex/pages/ui/Spaces.vue'),
  },
  {
    path: '/ui/buttons',
    name: 'buttons',
    meta: { 
      layout: 'Empty',
      title: 'Кнопки'
    },
    component: () => import('@/alex/pages/ui/Buttons.vue'),
  },
  {
    path: '/ui/forms',
    name: 'forms',
    meta: { 
      layout: 'Empty',
      title: 'Элементы формы'
    },
    component: () => import('@/alex/pages/ui/Forms.vue'),
  },
  {
    path: '/ui/tabs',
    name: 'tabs',
    meta: { 
      layout: 'Empty',
      title: 'Табы'
    },
    component: () => import('@/alex/pages/ui/Tabs.vue'),
  },
  {
    path: '/ui/icons',
    name: 'icons',
    meta: { 
      layout: 'Empty',
      title: 'Иконки'
    },
    component: () => import('@/alex/pages/ui/Icons.vue'),
  },
  {
    path: '/ui/tabs-content',
    name: 'tabs-content',
    meta: { 
      layout: 'Empty',
      title: 'Иконки'
    },
    component: () => import('@/alex/pages/ui/TabsСontent.vue'),
  },


  {
    path: '/ui/shadows',
    name: 'Shadows',
    meta: { 
      layout: 'Empty',
      title: 'Shadows'
    },
    component: () => import('@/alex/pages/ui/Shadows.vue'),
  },
  {
    path: '/ui/flex-grid',
    name: 'Flex Grid',
    meta: { 
      layout: 'Empty',
      title: 'Flex Grid'
    },
    component: () => import('@/alex/pages/ui/flexgrid.vue'),
  },
  {
    path: '/ui/text',
    name: 'Text Styles',
    meta: { 
      layout: 'Empty',
      title: 'Text styles'
    },
    component: () => import('@/alex/pages/ui/textstyles.vue'),
  },
  {
    path: '/ui/cards',
    name: 'Cards',
    meta: { 
      layout: 'Empty',
      title: 'Cards'
    },
    component: () => import('@/alex/pages/ui/cards.vue'),
  },
  {
    path: '/ui/InputRange',
    name: 'Input Range',
    meta: { 
      layout: 'Default',
      title: 'Input Range'
    },
    component: () => import('@/alex/pages/InputRange.vue'),
  },
  {
    path: '/Dorian',
    name: 'Dorian',
    meta: { 
      layout: 'Default',
      title: 'Dorian'
    },
    component: () => import('@/alex/pages/ui/Dorian.vue'),
  },
  {
    path: '/test',
    name: 'test',
    meta: { 
      layout: 'Default',
      title: 'test'
    },
    component: () => import('@/alex/pages/TestPage.vue'),
  },
]
