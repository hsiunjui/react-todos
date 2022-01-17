import { createStore, combineReducers, applyMiddleware } from 'redux'
import todoReducer from './reducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    todo: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;