import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login'
import Index from '@/pages/index/index'
import Cart from '@/pages/index/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/cart',
          name: 'cart',
          component: Cart,
        }
      ]
    },
  ]
})
