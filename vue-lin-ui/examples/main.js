import Vue from 'vue'
import App from './App.vue'
import LinUi from '../packages'
Vue.config.productionTip = false
Vue.use(LinUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
