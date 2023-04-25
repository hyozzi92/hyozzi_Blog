import { createApp } from 'vue'
import App from './App.vue'
import ConstCode from "@/common/constants/ConstCode";
import store from "@/store";
import JavascriptSvc from "@/common/service/JavascriptSvc";

import './assets/main.css'

const app = createApp(App);
app.config.globalProperties.$ConstCode = ConstCode
app.config.globalProperties.$JavascriptSvc = JavascriptSvc

app.use(store)
app.mount('#app')

