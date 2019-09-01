// 项目入口文件  所有全局的对象  丢这里
// 导入VUE模块
import Vue from 'vue'
// 导入Vue.app  根组件  所有的出口文件都是写在这里的  
import App from './App.vue'
//1. 导入Vue-router 这个是需要下载的 （vue-router文档中有详细的操作）
import VueRouter from 'vue-router'
// 2. use一下  要不然 也是不会解析router-link的
Vue.use(VueRouter);

// 6.导入路由组件
import index from './components/index.vue'


// 导入element.ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


// 3.设置路由规则（创建路由组件） (组件统一写在components中 一个组件为一个文件)
const routes = [
  {
    // 设置根目录也是跳转index页面
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  }
]

//4. 实例化VueRouter
const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 5.将路由挂载到Vue实例上
  router
})
.$mount('#app')
