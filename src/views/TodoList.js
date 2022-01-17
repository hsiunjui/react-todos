import React, { Component } from 'react'
import { TodoList as TodoListUI } from '../components/todo'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '', // 输入框
            list: [], // 渲染列表
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    render() {
        const { inputValue, list } = this.state
        return (<TodoListUI
                    inputValue={inputValue}
                    list={list}
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    handleDelete={this.handleDelete} />
                )
    }

    handleChange(e) { // 输入
        this.setState({
            inputValue: e.target.value
        })
    }

    onSubmit() { // 提交
        const { inputValue, list } = this.state
        if (!inputValue) {
            return
        }
        let newList = JSON.parse(JSON.stringify(list))
        newList.push({id: newList.length + 1, value: inputValue})
        this.setState({
            list: newList,
            inputValue: ''
        })
    }

    handleDelete(index) { // 删除
        let newList = JSON.parse(JSON.stringify(this.state.list))
        newList.splice(index, 1)
        this.setState({
            list: newList,
        })
    }
}

export default TodoList;