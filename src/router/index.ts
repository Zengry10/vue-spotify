import { createRouter, createWebHistory } from 'vue-router'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Callback from '../views/Callback.vue'
import SaveShow from '../views/SaveShow.vue'
import Home from '../views/Home.vue'
import Test from '../views/test.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/search',
      name: 'search',
      component: Search
    },


    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },

    {
      path: '/saveshow',
      name: 'saveshow',
      component: SaveShow,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
  ]
})

export default router
