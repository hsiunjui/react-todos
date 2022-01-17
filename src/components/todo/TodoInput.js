import React, { Component } from 'react';

class TodoInput extends Component {

    render() {
        const { inputValue, onChange, onSubmit } = this.props
        return (
            <div className='todo-head'>
                <input type="text" className='todo-input' value={inputValue} onChange={onChange}/>
                <button className='todo-button' onClick={onSubmit}>提交</button>
            </div>
        )
    }
}

export default TodoInput;