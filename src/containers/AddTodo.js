import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = ({ dispatch }) => {
    let input
    return (
        <form className='todos-form' onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) return
            dispatch(addTodo(input.value))
            input.value = ''
        }}>
            <input className='todo-input'
                   ref={node => input = node}
                   autoFocus={true}
                   placeholder='What needs to be done for today?' type='text'/>
            <button type='submit'>+</button>
        </form>
    )
}

export default connect()(AddTodo)
