import { createApp } from 'vue'
import App from './App.vue'
import Store from './store'
import router from './router/index'
import installElementPlus from './plugins/element'
const app = createApp(App)
installElementPlus(app)
app
    .use(router)
    .use(Store)
    .mount("#app");
