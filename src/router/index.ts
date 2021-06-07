import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Generator.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercises',
    name: 'Oefeningen',
    component: () => import('../views/Exercises.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
