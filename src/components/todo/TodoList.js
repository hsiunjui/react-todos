import React, { Component } from 'react'
import TodoListItem from './TodoListItem';
import TodoInput from './TodoInput'

class TodoList extends Component {
    render() {
        const { inputValue, list, handleChange, onSubmit,  handleDelete} = this.props
        return (
            <div className='todo-wrapper'>
                <TodoInput
                    inputValue={inputValue}
                    onChange={handleChange}
                    onSubmit={onSubmit} />
                <ul className='todo-list'>
                    {
                        list.map((item, index) => {
                            return <TodoListItem
                                        key={item.id}
                                        todoItem={item}
                                        handleDelete={() => handleDelete(index)}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;