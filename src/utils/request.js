// 封装一个axios的实例
import Axios from 'axios';
import { config } from '../config'

// 创建一个新的实例
let r = Axios.create({
    baseURL: `${config.serverHost}:${config.port}/`
});
let request = function (url = '', options = {}) {
    return function () {
        if (url === '') return Promise.reject('必须传递url');
        return r({
            url,
            method: 'get',
            ...options
        })
    }
}

export default request;