import React, { Component } from 'react'

class TodoListItem extends Component {

    render() {
        const { todoItem, handleDelete } = this.props
        return (
            <li>
                <span>{todoItem.value}</span>
                <button className='btn-delete' onClick={handleDelete}>删除</button>
            </li>
        )
    }
}

export default TodoListItem;