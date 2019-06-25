import axios from 'axios'
import {
    ADDING_TODO,
    ADD_TODO,
    GET_TODOS,
    LOAD_TODOS,
    DELETE_TODO,
    CHANGE_STATUS_TODO
} from './constants'

axios.defaults.baseURL = "http://localhost:5000"

export const getTodos = (status = null) => (dispatch) => {
    dispatch({ type: LOAD_TODOS })

    let endpoint = `/todos`;
    if (status) {
        endpoint = `/todos/status/${status}`;
    }

    axios.get(endpoint)
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const addTodo = (name) => (dispatch) => {
    dispatch({ type: ADDING_TODO })
    axios.post('/todos', { name: name })
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        .catch(error => console.log(error))
}

export const deleteTodo = (id) => dispatch => {
    axios.delete(`/todos/${id}`)
    .then(res => dispatch({
        type: DELETE_TODO,
        payload: res.data._id
    }))
    .catch(error => console.log(error))
}

export const changeStatusTodo = (id, status) => dispatch => {
    axios.patch(`/todos/${id}/status/${status}`)
    .then(res => dispatch({
        type: CHANGE_STATUS_TODO,
        payload: res.data
    }))
    .catch(error => console.log(error))
}