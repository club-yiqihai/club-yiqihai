import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['../components/Login.vue'], resolve)
    },
    {
      path: '/home',
      name: 'Home',
      component: (resolve) => require(['../components/home.vue'], resolve),
      children: [
        {
          path: '/listuser',
          name: 'Listuser',
          component: (resolve) => require(['../components/list_user.vue'], resolve)
        }
      ]
    }
  ]
})
