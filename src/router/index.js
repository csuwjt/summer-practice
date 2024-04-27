import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/index.vue'
import mineView from '@/views/mineView.vue'
import mineInfo from '@/views/mineInfo.vue'
import MineTeam from '@/views/mineTeam.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/mine',
      name: 'mine',
      component: mineView
    },
    {
      path: '/info',
      name: 'info',
      component: mineInfo
    },{
      path: '/team',
      name: 'team',
      component: MineTeam
    }
  ]
})

export default router
