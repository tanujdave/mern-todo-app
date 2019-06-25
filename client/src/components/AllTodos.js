import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from '../actions'
import Todo from './Todo'

class AllTodos extends React.Component {
    componentDidMount() {
        this.props.getTodos()
    }
    render () {
        const { todos } = this.props
        return (
            <ul>
                {
                    todos.length > 0 ? todos.map(todo => <Todo key={todo._id} todo={todo} />) : <li>No todo found!</li>
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.reducer.todos
})

export default connect(mapStateToProps, { getTodos })(AllTodos)