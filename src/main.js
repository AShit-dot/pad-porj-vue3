import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const bus = new Vue()

Vue.filter('validate', (value) => {
  return value.toUpperCase()
})

new Vue({
  render: h => h(App),
}).$mount('#app')

export {
  bus
}
