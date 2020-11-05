import forAuth from '@/middleware/forAuth'
export default [
  {
    path: '/lead/:step',
    name: 'lead',
    meta: { 
      layout: 'Lead',
      title: 'Lead',
      middleware: [
        forAuth
      ],
      steps: [
        'NamePhone',
        'NamePhone'
      ],
      firstStep: 'Name',
      linkName: 'steps-apartments'
    },
    component: () => import('@/pages/lead/Steps.vue'),
  },
]
