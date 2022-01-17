import { 
    CHANGE_INPUT,
    ADD_TO_LIST,
    DELETE_ITEM,
    SET_LIST
} from './actionTypes'

import { _fetchList } from '../service/modules/todo_list'

const setList = (data) => ({
    type: SET_LIST,
    data
})

// input action
export const changeInput = (data) => ({
    type: CHANGE_INPUT,
    data
})

// submit action
export const addToList = (data) => ({
    type: ADD_TO_LIST,
    data
})

// delete action
export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})

// fetch list
export const fetchList = () => {
    return (dispatch) => {
        _fetchList().then(data => {
            dispatch(setList(data))
        })
    }
}