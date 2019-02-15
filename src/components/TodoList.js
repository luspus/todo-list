import React  from 'react'
import Todos from '../containers/Todos'

const TodoList = (props) => {
    const p = props
    return (
        <div className='todos-list'>
            {p.todo.length > 0
                ? <div>{p.todo.length} todo for you</div>
                :
                <div>No todos yet</div>
            }
            <Todos todo={p.todo}/>
        </div>
    )
}

export default TodoList