import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class AddTodo extends React.Component {
    constructor (props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value)
            e.target.value = ''
        }
    }

    render () {
        return (
            <div>
                <input 
                    placeholder="Enter todo"
                    onKeyPress={this.handleSubmit}
                />
            </div>
        )
    }
}


export default connect(null, { addTodo })(AddTodo)