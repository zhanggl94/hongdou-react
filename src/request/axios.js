import axios from 'axios'
import baseUrl from '../api/baseUrl'


axios.defaults.timeout = 2000 * 10; // 超时时间
// axios.defaults.headers.post['Content-Type'] = 'application/json'; //请求头 

//请求拦截器
axios.interceptors.request.use(config => {
    if (!config.url.endsWith(baseUrl.signin) && !config.url.endsWith(baseUrl.signup)) {
        axios.defaults.headers['jwttoken'] = '';
    }
}, error => Promise.reject(error))


axios.interceptors.response.use(res=>{
    
})

export default axios;