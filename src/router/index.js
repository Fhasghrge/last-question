import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home  = () => import('../components/homo.vue')
const Commit  = () => import('../components/commit.vue')
const Quest  = () => import('../components/quest.vue')
const QuestLast  = () => import('../components/questLast.vue')
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
      path: '/promise',
      component: Commit
    },
    {
      path: '/quest',
      component: Quest
    },
    {
      path: '/questLast',
      component: QuestLast
    }
  ],
  mode: 'history'
})
