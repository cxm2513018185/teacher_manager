import request from '../utils/request';

let index = {
    namespace: 'index',
    state: {
        num: 0
    },
    effects: {
        // 异步action
        *changeNum({ payload }, { select, put, call }) {
            // 一会发一个请求
            let res = yield call(request('teacher/search'));
            console.log(res);

            yield put({ type: 'addNum', payload })
        }
    },
    reducers: {
        addNum(state, { payload }) {
            return {
                num: state.num + payload.num
            }
        }
    }
}

export default index;