import { createApp } from 'vue'
import App from './App.vue'
import store from './_store/store'
import router from "./router"
import worker from './_api/mock/browser'

let action;
if(process.env.NODE_ENV === 'production' && window.location.hostname === 'vilina.github.io') {
  action = worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      url: '/movie-search/mockServiceWorker.js'
    }
  })
} else {
  action = worker.start({
    onUnhandledRequest: 'bypass',
  })
}

action
  .then(() => {
    const app = createApp(App);
    app.use(store);
    app.use(router);
    app.mount('#app');
  })
