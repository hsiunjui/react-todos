import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteItem } from '../../redux/actions'

class TodoListItem extends Component {

    render() {
        const { todoItem, handleDelete, index } = this.props
        return (
            <li>
                <span>{todoItem.value}</span>
                <button className='btn-delete' onClick={() => handleDelete(index)}>删除</button>
            </li>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete(index) {
            dispatch(deleteItem(index))
        }
    }
}


export default connect(null, mapDispatchToProps)(TodoListItem);