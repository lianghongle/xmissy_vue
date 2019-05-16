import Vue from 'vue'
import App from './App.vue'

//store(vuex)
import store from './store'

import router from './router'
// 将所有未登录会话重定向到 /login
// if(false){
if(true){
  router.beforeEach((to, from, next) => {
    if(to.path === '/login'){
      sessionStorage.removeItem('isLogin');
    }

    var isLogin = sessionStorage.getItem('isLogin');
    console.log('router.beforeEach:' + isLogin)
    if(!isLogin && to.path !== '/login'){
      next({
        path: '/login'
      })
    }else{
      next();
    }
  })
}

Vue.config.productionTip = false

require('./mock/mock.js')


//异步加载组件
// const c = (resolve)=>{
// // const c = (resolve, reject)=>{
//   resolve(require("./components/HelloWorld.vue"));
//
//   //分包方式
//   // require.ensure([],()=>{
//   //   resolve(require("./components/HelloWorld.vue"));
//   // })
//   // require.ensure([],()=>{
//   //   resolve(require("./components/HelloWorld.vue"));
//   // },"vuecs")
// }

//自定义组件
import lhl from './components/test/lhl'
Vue.use(lhl);

//import axios from 'axios'
// Vue.prototype.axios = axios
//这样就可以在任意位置  使用this.axios来引用  ( 也可以装个vue-axios插件，这里不装)

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//url 锚点事件
window.onhashchange=function(){
  if(window.location.hash=="#admin")
    app.$children[0].$data.isadmin=true;
  else
    app.$children[0].$data.isadmin=false;
}
