import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

export class ListTodo extends Component { 

    render() {
        return this.props.todos.map((todo) =>(
            <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markDone={this.props.markDone}/>
        ))
    }
}

//Proptypes
ListTodo.propTypes = {
    todos: PropTypes.array.isRequired
}
export default ListTodo
