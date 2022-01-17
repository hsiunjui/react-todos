import { CHANGE_INPUT, ADD_TO_LIST, DELETE_ITEM, SET_LIST } from "./actionTypes"
// import {fromJS } from 'immutable'
const defaultState = {
    list: [],
    inputValue: ''
}

const todoReducer =  (state = defaultState, actions) => {
    let newList = JSON.parse(JSON.stringify(state.list))
    switch(actions.type) {
        case CHANGE_INPUT: // input
            return { ...state, inputValue: actions.data }
        case ADD_TO_LIST: // add to list
            newList.push({id: state.list.length + 1, value: actions.data})
            return { inputValue: '', list: newList }
        case DELETE_ITEM: // delete item
            newList.splice(actions.index, 1)
            return { inputValue: '', list: newList}
        case SET_LIST: // fetch data
            return { ...state, list: actions.data }
        default:
            return state;
    }
}

export default todoReducer;