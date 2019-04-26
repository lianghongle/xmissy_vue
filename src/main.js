import Vue from 'vue'
import App from './App.vue'

import router from './router'
// 将所有未登录会话重定向到 /login
// router.beforeEach((to, from, next) => {
//   if(to.path === '/login'){
//     sessionStorage.removeItem('user');
//   }
//   var user = sessionStorage.getItem('user');
//   if(!user && to.path !== '/login'){
//     next({
//       path: '/login'
//     })
//   }else{
//     next();
//   }
// })

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

require('./mock/mock.js')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
