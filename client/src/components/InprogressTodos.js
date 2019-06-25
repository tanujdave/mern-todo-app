import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../actions'
import Todo from './Todo'

class InprogressTodos extends React.Component {
    componentDidMount() {
        this.props.getTodos('inprogress')
    }
    render () {
        const { todos } = this.props
        const inprogressTodos = todos.filter(todo => 'inprogress' === todo.status)

        return (
            <ul>
                {
                    inprogressTodos.length > 0 ? inprogressTodos.map(todo => <Todo key={todo._id} todo={todo} />) : <li>No todo found!</li>
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.reducer.todos
})

export default connect(mapStateToProps, { getTodos })(InprogressTodos)