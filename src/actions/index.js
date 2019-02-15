let nextTodoId = 0

export const saveUserName = name => ({
    type: 'SAVE_USER_NAME',
    name
})

export const addTodo = (text, completed) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    completed,
})

export const editTodo  = (text, id) => ({
    type: 'EDIT_TODO',
    text,
    id
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id: id
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})