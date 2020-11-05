import forAuth from '@/middleware/forAuth'
import Steps from '@/pages/business/Steps'
import apartments from '@/router/business/apartments'
export default [
  // Main
  {
    path: '/',
    name: 'business',
    meta: { 
      layout: 'Dashboard',
      title: 'activity_name',
      middleware: [
        forAuth
      ]
    },
    component: () => import('@/pages/business/Index')
  },

  // Select category
  {
    path: '/business/create/:step',
    name: 'create',
    meta: { 
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'Categories',
        'SubCategories'
      ],
      firstStep: '_',
      linkName: 'steps'
    },
    component: Steps
  },

  // Apartments
  ...apartments
]
