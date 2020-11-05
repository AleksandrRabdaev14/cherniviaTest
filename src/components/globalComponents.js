import Vue from 'vue'

// Forms
Vue.component('InputCheck', () => import('@/components/ui/forms/InputCheck'))
Vue.component('InputCheckIcon', () => import('@/components/ui/forms/InputCheckIcon'))
Vue.component('InputEmail', () => import('@/components/ui/forms/InputEmail'))
Vue.component('InputPassword', () => import('@/components/ui/forms/InputPassword'))
Vue.component('InputRadio', () => import('@/components/ui/forms/InputRadio'))
Vue.component('InputRadioIcon', () => import('@/components/ui/forms/InputRadioIcon'))
Vue.component('InputSelect', () => import('@/components/ui/forms/InputSelect'))
Vue.component('InputSwitcher', () => import('@/components/ui/forms/InputSwitcher'))
Vue.component('InputText', () => import('@/components/ui/forms/InputText'))
Vue.component('InputTextarea', () => import('@/components/ui/forms/InputTextarea'))
Vue.component('InputRange', () => import('@/components/ui/forms/InputRange'))
Vue.component('InputCounter', () => import('@/components/ui/forms/InputCounter'))
Vue.component('InputNumber', () => import('@/components/ui/forms/InputNumber'))
Vue.component('SignIn', () => import('@/components/auth/SignIn'))


// UI
Vue.component('AlertBox', () => import('@/components/ui/AlertBox'))
Vue.component('TabsNav', () => import('@/components/ui/TabsNav'))
Vue.component('TabsNavColor', () => import('@/components/ui/TabsNavColor'))
Vue.component('TabsBox', () => import('@/components/ui/TabsBox'))
Vue.component('SeasonTabsNav', () => import('@/components/ui/SeasonTabsNav'))

// Modals
Vue.component('ModalFull', () => import('@/components/ui/modals/ModalFull'))
Vue.component('ModalBottom', () => import('@/components/ui/modals/ModalBottom'))
