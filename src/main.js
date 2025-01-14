import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './styles/index.scss'
import router from './router/index';
import './router/router-guard'
import store from './store';
import customCom from './components/index';

const app = createApp(App);

app.use(router)
app.use(store)
app.use(customCom)

app.mount('#app')
