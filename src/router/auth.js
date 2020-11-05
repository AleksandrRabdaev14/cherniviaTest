import forGuest from '@/middleware/forGuest'
import Steps from '@/pages/business/Steps.vue'
export default [
  {
    path: '/auth',
    name: 'auth',
    meta: { 
      layout: 'Auth',
      title: 'button__login',
      middleware: [
        forGuest
      ]
    },
    component: () => import('@/pages/auth/Index'),
  },
  {
    path: '/auth/signup/:step',
    name: 'lead',
    meta: { 
      layout: 'Auth',
      middleware: [
        forGuest
      ],
      steps: [
        'UserData',
        'Categories',
        'Signup',
        'TimeCall',
      ],
      linkName: 'auth'
    },
    component: Steps,
  },
  {
    path: '/auth/problem',
    name: 'problem',
    meta: { 
      layout: 'Auth',
      middleware: [
        forGuest
      ]
    },
    component: () => import('@/pages/auth/Problem'),
  },
  {
    path: '/auth/restore',
    name: 'restore',
    meta: { 
      layout: 'Auth',
      middleware: [
        forGuest
      ]
    },
    component: () => import('@/pages/auth/Restore'),
  },
  {
    path: '/auth/new/login',
    name: 'newLogin',
    props: true,
    meta: { 
      layout: 'Auth',
      middleware: [
        forGuest
      ]
    },
    component: () => import('@/pages/auth/New'),
  },
  {
    path: '/auth/new/pass',
    name: 'newPass',
    props: true,
    meta: { 
      layout: 'Auth',
      middleware: [
        forGuest
      ]
    },
    component: () => import('@/pages/auth/New'),
  }
]
