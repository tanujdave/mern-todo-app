import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../actions'
import Todo from './Todo'

class PendingTodos extends React.Component {
    componentDidMount() {
        this.props.getTodos('pending')
    }
    render () {
        const { todos } = this.props
        const pendingTodos = todos.filter(todo => 'pending' === todo.status)

        return (
            <ul>
                {
                    pendingTodos.length > 0 ? pendingTodos.map(todo => <Todo key={todo._id} todo={todo} />) : <li>No todo found!</li>
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.reducer.todos
})

export default connect(mapStateToProps, { getTodos })(PendingTodos)