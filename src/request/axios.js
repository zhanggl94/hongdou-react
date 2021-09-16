import axios from 'axios'
import { Spin } from 'antd'
import ReactDOM from 'react-dom'
import baseUrl from '../api/baseUrl'

axios.defaults.baseURL = 'http://localhost:3001/api/'
axios.defaults.timeout = 2000 * 10; // 超时时间
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //请求头 

let requestCount = 0; // 计数器

//请求拦截器
axios.interceptors.request.use(config => {
    showLoading();
    if (!config.url.endsWith(baseUrl.signin) && !config.url.endsWith(baseUrl.signup)) {
        // axios.defaults.headers['jwttoken'] = '';
    }
    return config;
}, error => {
    hideLoading();
    return Promise.reject(error)
})


axios.interceptors.response.use(res => {
    hideLoading();
    return Promise.resolve(res)
}, error => {
    hideLoading();
    return Promise.reject(error)
})


const showLoading = () => {
    if (requestCount === 0) {
        const loadDom = document.createElement('div');
        loadDom.setAttribute('id', 'loading')
        document.body.appendChild(loadDom)
        ReactDOM.render(<Spin tip="加载中..." />, loadDom)
    }
    requestCount++;
}

const hideLoading = () => {
    requestCount--;
    if (requestCount < 1) {
        document.body.removeChild(document.getElementById('loading'))
    }
}

export default axios;