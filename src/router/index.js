import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home  = () => import('../components/home.vue')
const Commit  = () => import('../components/commit.vue')
const Quest  = () => import('../components/quest.vue')
const Show  = () => import('../components/show.vue')
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/commit',
      component: Commit
    },
    {
      path: '/quest',
      component: Quest
    },
    {
      path: '/show',
      component: Show
    }
  ],
  mode: 'history'
})
