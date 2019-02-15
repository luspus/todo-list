const initialState = {
    todo: [],
    name: null
}

const todos = (state = initialState, action) => {
        switch (action.type) {
            case 'SAVE_USER_NAME':
                return {
                    ...state,
                    name: action.name
                }

            case 'ADD_TODO':
                return {
                    ...state,
                    todo: [ ...state.todo
                    , {
                        id: action.id,
                        text: action.text,
                        completed: action.completed || false
                    }]
                }

            case 'EDIT_TODO':
                var editedArr = state.todo,
                    id = +action.id
                editedArr[id].text = action.text
                return {
                    ...state,
                    todo: [...editedArr]
                }

            case 'DELETE_TODO':
                var deletedArr = state.todo,
                    index = +action.id
                deletedArr.splice(index, 1)
                return {
                    ...state,
                    todo: [...deletedArr]
                }

            case 'TOGGLE_TODO':
                var completedArr = state.todo,
                    n = +action.id
                completedArr[n].completed = !state.todo[n].completed
                return {
                    ...state,
                    todo: [...completedArr]
                }

            default:
                return state

    }
}

export default todos
