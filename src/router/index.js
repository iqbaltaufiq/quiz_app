import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Quiz from '../views/Quiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Welcome
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
