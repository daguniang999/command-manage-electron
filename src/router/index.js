import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  // history: createWebHashHistory(),  // hash 模式
  history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: '展示页',
      },
    },
    {
      path: '/command',
      name: 'command',
      component: () => import('../views/AddCommand.vue'),
      meta: {
        title: '命令添加页面',
      },
    },
    {
      path: '/',
      redirect: '/home',
    },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  next()
})

router.afterEach((to, from) => {
})

export default router
