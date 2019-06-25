import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../actions'
import Todo from './Todo'

class CompletedTodos extends React.Component {
    componentDidMount() {
        this.props.getTodos('completed')
    }
    render () {
        const { todos } = this.props
        const completedTodos = todos.filter(todo => 'completed' === todo.status)

        return (
            <ul>
                {
                    completedTodos.length > 0 ? completedTodos.map(todo => <Todo key={todo._id} todo={todo} />) : <li>No todo found!</li>
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.reducer.todos
})

export default connect(mapStateToProps, { getTodos })(CompletedTodos)