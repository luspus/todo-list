import React, { Component }  from 'react'
import Popup from './Popup'
import TodoList from '../components/TodoList'
import AddTodo from './AddTodo'
import {connect} from 'react-redux'
import {saveUserName, addTodo} from '../actions'

class App extends Component {
    constructor(props) {
        super(props);
        const rememberme = sessionStorage.getItem('rememberme') === 'true';
        const passTodo = rememberme? JSON.parse(sessionStorage.getItem('todosSerialized') || '[]'): this.props.todo;
        passTodo.map((todo) => {
            this.props.addTodo(todo.text, todo.completed);
        })
    }
    render() {
        const user = sessionStorage.getItem('name')?
            sessionStorage.getItem('name'): this.props.name
        const p = this.props
        const rememberme = sessionStorage.getItem('rememberme') === 'true'
        return (
            <div className='container'>
                {!rememberme && user === null
                    ?
                    <Popup/>
                    :
                    <div>
                        {user === '' ?
                            <div className='greeting'>Hello</div>
                            :
                            <div className='greeting'>Hello, {user}</div>
                        }
                        <div className='todos-content'>
                            <button className='btn-exit' onClick={() => {
                                p.saveUserName('')
                                sessionStorage.clear();
                                window.location.reload();
                            }
                            } >Exit</button>
                            <AddTodo />
                            <TodoList todo={this.props.todo} />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todos.todo,
    name: state.todos.name
})

const mapDispatchToProps = dispatch => ({
    saveUserName: (name) => dispatch(saveUserName(name)),
    addTodo: (text, completed) => dispatch(addTodo(text, completed)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)