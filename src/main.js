import Vue from 'vue'
import app from './components/app/app.vue'
import router from './router'
import './components/mock/mockServer'
import 'mint-ui/lib/style.css'
import 'iview/dist/styles/iview.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(app)
})
