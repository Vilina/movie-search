import { createApp } from 'vue'
import App from './App.vue'
import store from './_store/store'
import router from "./router"
import worker from './_api/mock/browser'

worker.start({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url: '/movie-search/mockServiceWorker.js'
  }
})
  .then(() => {;
    const app = createApp(App);
    app.use(store);
    app.use(router);
    app.mount('#app');
  })
