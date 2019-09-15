import { createStore , combineReducers } from 'redux'

function test(state = 'test',action){
    switch (action.type) {
            default: return state
    }
}

function history(state=[],action){
    switch(action.type){
        default: return state
    }
}

export default createStore( combineReducers({
    test,
    history
}))