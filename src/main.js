import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "@aws-amplify/ui-vue";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

Vue.config.productionTip = false

// store.dispatch('setProfile');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
