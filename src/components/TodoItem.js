import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    toStyle = () => {
        return {
            backgroundColor: "antiquewhite",
            width: '35.5vw',
            marginLeft: '32vw',
            marginright: '35vw',
            padding: '5px',
            textAlign: 'left',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div>
            <p style={this.toStyle()} onClick = {this.props.markDone.bind(this, id)}>
                {title}
            </p>
            <button onClick = {this.props.delTodo.bind(this, id)} style={btnDel}>DELETE</button>
            </div>
        )
    }
}

const btnDel = {
    backgroundColor: 'red',
    color: 'white',
    right: '35vw',
    margin: '.3vh',
    bordeRadius: '5px',
    border: 'none',
}
//Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default TodoItem
