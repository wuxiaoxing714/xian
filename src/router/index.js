import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Hotel from '../views/Hotels.vue'
import Foods from '../views/Foods.vue'
import Recreations from '../views/Recreations.vue'
import Shopping from '../views/Shopping.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/shopping",
    component: Shopping
  },
  {
    path: '/recreations',
    component: Recreations
  },
  {
    path: '/foods',
    component: Foods
  },
  {
    path: '/hotels',
    component: Hotel
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
