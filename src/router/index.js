import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

// Middleware
// import forGuest from '../middleware/forGuest'
import forAuth from '../middleware/forAuth'
import middlewarePipeline from '../plugins/middlewarePipeline'

// Routes
import authRoutes from './auth'
import businessRoutes from './business/'
import uiRoutes from './ui'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    { 
      path: '*', 
      component: () => import('@/pages/NotFound.vue') 
    },

    {
      path: '/feed',
      name: 'feed',
      meta: { 
        layout: 'Dashboard',
        middleware: [
          forAuth
        ]
      },
      component: () => import('@/pages/feed/Index.vue'),
    },
    {
      path: '/reservations',
      name: 'reservations',
      meta: { 
        layout: 'Dashboard',
        middleware: [
          forAuth
        ]
      },
      component: () => import('@/pages/reservations/Index.vue'),
    },
    {
      path: '/village',
      name: 'village',
      meta: { 
        layout: 'Dashboard',
        middleware: [
          forAuth
        ]
      },
      component: () => import('@/pages/village/Index.vue'),
    },
    ...authRoutes,
    ...businessRoutes,
    ...uiRoutes
  ]
})

// For middleware
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store
  }
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
