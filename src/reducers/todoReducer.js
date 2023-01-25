function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        id: crypto.randomUUID(),
                        content: action.content,
                        edit: false,
                        done: false,
                        selected: false
                    }
                ]
            }
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.id)
            }
        }
        case "TOGGLE_TODO": {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                })
            }
        }
        case "TOGGLE_TODO_EDIT": {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            edit: !todo.edit
                        }
                    }
                    return todo;
                })
            }
        }
        case "EDIT_TODO": {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            content: action.content,
                            edit: false
                        }
                    }
                    return todo;
                })
            }
        }
        case "SELECT_TODO": {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            selected: !todo.selected
                        }
                    }
                    return todo;
                })
            }
        }
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default: {
            throw new Error("Unhandled action type: " + action.type);
        }
    }
}

export default todoReducer;