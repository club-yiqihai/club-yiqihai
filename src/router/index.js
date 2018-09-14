/**
 * Created by
 * Author: 
 * QQ: 
 *
 * 《江畔独步寻花》· 杜甫
 * 黄四娘家花满蹊，千朵万朵压枝低。
 * 留连戏蝶时时舞，自在娇莺恰恰啼。
 */
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
