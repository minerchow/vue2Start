import Vue from 'vue';
import App from '../../components/login/app.vue';
import vueResource from 'vue-resource';

Vue.use(vueResource);
new Vue({ // eslint-disable-line
  el: '#app',
  
  render: h => h(App)
});
