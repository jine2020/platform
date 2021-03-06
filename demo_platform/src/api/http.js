import axios from 'axios'

const instance=axios.create({
    baseURL: 'http://127.0.0.1:5000/',
    timeout: 10000,
    headers: {'X-Custom-Header':'foobar'}
});
instance.interceptors.request.use(function(config){
    let token=localStorage.getItem("token")
    if (token) {
    config.headers.common["Authorization"]="Bearer "+localStorage.getItem("token")
    }
    return config;
},function(error){
    return Promise.reject(error);
});

export default instance