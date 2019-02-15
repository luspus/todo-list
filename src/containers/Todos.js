import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo, toggleTodo, deleteTodo } from '../actions'

class Todos extends Component {
    render() {
        const p =  this.props
        sessionStorage.setItem('todosSerialized', JSON.stringify(p.todo))
        return (
            <ul>
                {p.todo.map((todo, id) => {
                   return <li key={id}>
                        <input type='checkbox' checked={todo.completed ? true : false} onChange={() => p.toggleTodo(id)} />
                        <input
                            className={todo.completed ? 'completed text' : 'text'}
                            value={todo.text}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                            onChange={(e) => p.editTodo(e.target.value, id)}
                        >
                        </input>
                        <button className='destroy' onClick={() => p.deleteTodo(id)} />
                    </li>}

                )}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todos.todo
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    editTodo: (text, id) => dispatch(editTodo(text, id)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos)