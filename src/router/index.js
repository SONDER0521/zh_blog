import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue')
    },
    {
      path: '/title',
      name: 'title',
      component: () => import('../components/title.vue')
    },
    //主页
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    //归档
    {
      path: '/file',
      name: 'file',
      component: () => import('../views/file.vue')
    },
    //分类
    {
      path: '/classify',
      name: 'classify',
      component: () => import('../views/classify.vue')
    },
    //关于
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    //留言
    {
      path: '/livemassage',
      name: 'livemassage',
      component: () => import('../views/livemassage.vue')
    },
    //详情页面
    {
      path:'/particulars',
      name:'particulars',
      component:()=>import('../components/particulars.vue')
    },
    //发布界面
    {
      path:'/newsblogs',
      name:'newsblogs',
      component:()=>import('../views/newsblogs.vue')
    },
  ]
})
//路由守卫，导航首位，路由拦截
router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem("token")
  if(token || to.path === "/home" || to.path === "/"){
    next();
  }else{
    alert("请先登录")
    next("/home");
  }
})
export default router
