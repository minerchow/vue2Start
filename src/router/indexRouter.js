import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const A = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  // require.ensure(['./componentA.vue'], () => {
  //   resolve(require('./componentA.vue'))
  // })
  require.ensure([], () => resolve(require('../components/index/componentA.vue')), '/a')
}

const B = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  // require.ensure(['./componentB.vue'], () => {
  //   resolve(require('./componentB.vue'))
  // })
  require.ensure([], () => resolve(require('../components/index/componentB.vue')), '/b')
}



const router = new VueRouter({

  base: __dirname,
  routes: [
    { path: '/a',component:A,meta:{hasLogon:false}, beforeEnter: (to, from, next) => {
      console.log(to);
      console.log(from);
      console.log(next)
    }},
    // Just use them normally in the route config
    { path: '/b/:id',name:'componentb',component:B}

  ]
})

export default router;