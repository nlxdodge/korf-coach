import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/GeneratorView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exercises',
    name: 'Oefeningen',
    component: () => import('../views/ExercisesView.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/InfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
