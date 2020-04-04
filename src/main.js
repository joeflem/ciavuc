import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/sass/main.scss'

Vue.config.productionTip = false

Vue.component('Projects',
    () => import('./components/Projects')
);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
