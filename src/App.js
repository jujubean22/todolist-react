import React, { Component } from 'react'
import './App.css';
import ListTodo from './components/ListTodo';
import Forminput from './components/Forminput';

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'React app Todo',
        done: false
      },
      {
        id: 2,
        title: 'Iyak',
        done: false
      },
      {
        id: 3, 
        title: 'LABAN ULI!!',
        done: false
      },
    ]
  } 

//Mark done and toggle line through
  markDone = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })})
}

delTodo = (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)]})
}

//add todo
addTodo = (title) => {
    const newTodo = {
      id : this.state.todos.length + 1, 
      title,
      done: false
    }
    console.log(this.state.todos.lenght + 1)
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  

  render() {
    return (
      <div className="App">
      <h1 className="Header">TO DO LIST</h1>
      <Forminput addTodo={this.addTodo}/>
      <ListTodo delTodo={this.delTodo} todos={this.state.todos} markDone={this.markDone}/>
    </div>
    )
  }
}

export default App

