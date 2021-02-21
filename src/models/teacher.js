import request from '../utils/request';
import { routerRedux } from 'dva/router'

let teacher = {
    namespace: 'teacher',
    state: {
        isLogin: false
    },
    effects: {
        // 异步action
        *doLogin({ payload }, { select, put, call }) {
            // 一会发一个请求
            let res = yield call(request('signin', {
                method: 'post',
                data: payload   // {username, password}
            }));
            console.log(res);
            // 根据后端返回的状态码进行判断是否登录成功，如登录失败则提示用户名或密码错误，否则进行存储
            // 本地的session存储
            window.sessionStorage.setItem('user', JSON.stringify(res.data.user));
            // 更改登录状态
            yield put({ type: 'changeLogin', payload: { isLogin: true } });
            // 跳转页面
            console.log('等待页面跳转');
            yield put(routerRedux.push('/home'));
        }
    },
    reducers: {
        changeLogin(state, { payload }) {
            return {
                isLogin: payload.isLogin
            }
        }
    }
}

export default teacher;