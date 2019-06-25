import {
    ADD_TODO,
    ADDING_TODO,
    GET_TODOS,
    DELETE_TODO,
    LOAD_TODOS,
    CHANGE_STATUS_TODO
} from '../constants'


const initialState = {
    loading: false,
    todos: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case ADDING_TODO:
            return {
                ...state,
                loading: true,
            }        
        case ADD_TODO:
            return {
                ...state,
                loading: false,
                todos: [action.payload, ...state.todos]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload)
            }
        case CHANGE_STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo._id === action.payload._id) return {
                        ...todo,
                        status: action.payload.status
                    }
                    return todo
                })
            }        
        case LOAD_TODOS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}