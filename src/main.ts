import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Axios from 'axios';
import * as Icons from '@ant-design/icons-vue';

const app = createApp(App);
// 屏蔽警告信息
app.config.warnHandler = () => null;
Axios.defaults.baseURL = process.env.VUE_APP_SERVER;
app.use(store)
    .use(router)
    .use(Antd)
    .mount('#app')

const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}

/**
 * axios拦截器
 */
// Axios.interceptors.request.use(function (config) {
//     console.log('请求参数：', config);
//     return config;
// }, error => {
//     return Promise.reject(error);
// });
// Axios.interceptors.response.use(function (response) {
//     console.log('返回结果：', response);
//     return response;
// }, error => {
//     console.log('返回错误：', error);
//     return Promise.reject(error);
// });