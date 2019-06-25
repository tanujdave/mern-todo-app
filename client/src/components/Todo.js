import React from 'react'
import { connect } from 'react-redux'

import { deleteTodo, changeStatusTodo } from '../actions'

class Todo extends React.Component {
    constructor (props) {
        super(props)

        this.state = {status: 'pending'};
        
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChangeStatus = this.handleChangeStatus.bind(this)
    }

    handleChangeStatus (event) {
        this.setState({status: event.target.value});
        this.props.changeStatusTodo(this.props.todo._id, event.target.value)
    }

    handleDelete () {
        this.props.deleteTodo(this.props.todo._id)
    }

    render () {
        const { todo } = this.props
        return (
            <li className={'completed' === todo.status ? 'completed' :  ''}>
                <span>{todo.name}</span>
                <select value={todo.status} onChange={this.handleChangeStatus}>
                    <option value="pending">Pending</option>
                    <option value="inprogress">Inprogress</option>
                    <option value="completed">Completed</option>
                </select>                
                <span
                    onClick={this.handleDelete}
                    className="close"
                >
                    &#10799;
                </span>
            </li>
        )
    }
}

export default connect(null, { deleteTodo, changeStatusTodo })(Todo)