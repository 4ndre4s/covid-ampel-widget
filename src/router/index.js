import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
  { path: '/', component: Home },
  { path: '/lkr/:id', component: Home, props: true },
  { path: '/config', component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue') },
  { path: '/help', component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue') },
  { path: '/more', component: () => import(/* webpackChunkName: "about" */ '../views/More.vue') },
  { path: '/about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: '/imprint', component: () => import(/* webpackChunkName: "about" */ '../views/Imprint.vue') },
  { path: '/privacy', component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue') },
  { path: '/:pathMatch(.*)', component: Home }
]

const publicPath = process.env.NODE_ENV === 'production' ? '/covid-ampel-widget/' : '/'

const router = createRouter({
  history: createWebHistory(publicPath),
  routes: routes,
})

export default router