import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: () => import('../components/Movie.vue')
    },
    {
      path: '/movie',
      redirect: '/'
    },
    {
      path: '/us',
      name: 'US',
      component: () => import('../components/US.vue')
    }
  ]
})
