import React, { Component } from 'react';
import { connect } from 'react-redux'
import { changeInput, addToList } from '../../redux/actions'

class TodoInput extends Component {

    render() {
        const { change, submit, inputValue } = this.props
        return (
            <div className='todo-head'>
                <input type="text" className='todo-input' value={this.props.inputValue} onChange={change}/>
                <button className='todo-button' onClick={() => submit(inputValue)}>提交</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    inputValue: state.todo.inputValue
})

const mapDispatchToProps = (dispatch) => {
    return {
        change(e) { // input change
            const { value } = e.target
            dispatch(changeInput(value))
        },
        submit(value) { // 提交
            if (value) {
                dispatch(addToList(value))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);