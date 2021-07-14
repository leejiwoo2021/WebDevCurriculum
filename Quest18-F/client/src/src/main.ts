import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

createApp(App).use(store).use(router).mount('#app');

