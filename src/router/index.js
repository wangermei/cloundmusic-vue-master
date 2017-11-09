import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Index
        },
        {
          path: 'index',
          component: Index
        }
      ]
    }
  ]
})
