import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoListItem from './TodoListItem';
import TodoInput from './TodoInput'
import { fetchList } from '../../redux/actions'

class TodoList extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    render() {
        const { list } = this.props
        return (
            <div className='todo-wrapper'>
                <TodoInput />
                <ul className='todo-list'>
                    {
                        list.map((item, index) => {
                            return <TodoListItem key={item.id} todoItem={item} index={index}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.todo.list
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData() {
            dispatch(fetchList())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);