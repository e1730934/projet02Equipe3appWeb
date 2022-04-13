import { createApp } from 'vue';
import App from './App.vue';
// eslint-disable-next-line import/no-named-as-default
import router from './router';
import store from './store';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
