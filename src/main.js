import { createApp } from 'vue'
import App from './App.vue'
import VueTippy from 'vue-tippy'


import './index.scss'
import "tippy.js/dist/tippy.css"
import 'tippy.js/animations/scale-subtle.css'

const app = createApp(App);
app.use(VueTippy, {
  defaultProps: { 
    animation: 'scale-subtle',
    inertia: true,
    touch: false,
    followCursor: 'horizontal',
  },
})
app.mount('#app')
