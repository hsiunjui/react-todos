import React, { Component } from 'react'
import { TodoList as TodoListUI } from '../components/todo-redux'

class TodoList extends Component {

    render() {
        return (<TodoListUI />)
    }
}

export default TodoList;