import Vue from 'vue';
import App from './app.vue';
import Vuex from 'vuex';
import router from './router/indexRouter.js';

//import VueRouter from 'vue-router'
Vue.use(Vuex);

//Vue.use(VueRouter);


new Vue({ // eslint-disable-line
  el: '#app',
  router,
  data:{
    state:{
      countResult:0
    }
  },
  render: h => h(App)
});
