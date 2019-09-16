import { createStore, combineReducers } from 'redux'

//测试值
function test(state = '张三', action){
    switch(action.type){
        case 'changetest': return action.newname
        default: return state
    }
}

//点击的历史记录
function historyArr(state = [], action){
    switch(action.type){
        case 'addHistoryList': 

            return [action.obj, ...state.filter(obj => obj.name != action.obj.name)]

        default: return state
    }
}


export default createStore(combineReducers({
    test,
    historyArr
}))