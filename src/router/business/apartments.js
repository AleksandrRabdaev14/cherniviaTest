import forAuth from '@/middleware/forAuth'
import Steps from '@/pages/business/Steps'
export default [
  // Основные шаги
  {
    path: '/business/create/apartments/:step',
    name: 'steps-apartments',
    meta: { 
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'Name',
        'WorkPeriod',
        'Geolocation',
        'CityStreet',
        'Rooms',
        'Services',
        'Rules',
        'Uploader',
        'Descriptions',
        'SeasonPrice',
        'PayMethods',
        'CalcPrice',
        // 'SubServices',
        // 'RulesServices',
        'FullData'
      ],
      firstStep: 'PreviewAd',
      linkName: 'next'
    },
    component: Steps
  },
  // Финальные шаги основного
  {
    path: '/business/preview/apartments/:step',
    name: 'next-apartments',
    meta: { 
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'PreviewAd',
        'OtherActivity',
        'Finish'
      ],
      firstStep: '',
      linkName: 'business'
    },
    component: Steps
  },


  // Добавляем квартиру того же ТИПА (однокомнатные, двух и тд.)
  {
    path: '/business/apartments/:step',
    name: 'intermediate-step',
    meta: { 
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'AddSelector'
      ],
      firstStep: 'Name',
      linkName: 'address'
    },
    component: Steps
  },
  
  
  // Добавляем квартиру того же ТИПА и с тем же АДРЕСОМ (однокомнатные, двух и тд.)
  {
    path: '/business/same-same/apartments/:step',
    name: 'same-same-address',
    meta: { 
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'Name',
        'WorkPeriod',
        'Rooms',
        'Services',
        'Rules',
        'Uploader',
        'Descriptions'
      ],
      firstStep: 'PreviewAd',
      linkName: 'next'
    },
    component: Steps
  },
  // Добавляем квартиру того же ТИПА но с другим АДРЕСОМ (однокомнатные, двух и тд.)
  {
    path: '/business/same-new/apartments/:step',
    name: 'same-new-address',
    meta: { 
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'Name',
        'WorkPeriod',
        'GeoLocation',
        'CityStreet',
        'Rooms',
        'Services',
        'Rules',
        'Uploader',
        'Descriptions',
        'SeasonPrice',
        'PayMethods',
        'CalcPrice',
        'SubServices',
        'RulesServices',
        'FullData'
      ],
      firstStep: 'PreviewAd',
      linkName: 'next'
    },
    component: Steps
  },
  
  {
    path: '/business/create/hotel/:step',
    name: 'steps-hotel',
    meta: { 
      layout: 'Default',
      title: 'choose_business__step10',
      middleware: [
        forAuth
      ],
      steps: [
        'NameHotel',
        'WorkPeriod',
        'Geolocation',
        'CityStreet',
        'AmountRooms',
        'Uploader'
      ],
      linkName: 'steps-apartment'
    },
    component: Steps,
  },
]
