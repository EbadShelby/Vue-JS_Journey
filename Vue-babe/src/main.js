import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if (import.meta.env.DEV) {
  document.body.classList.add('dev-animate');
}

/*

TODO: This is to do.
* This is important.
! This is error
? not sure

*/