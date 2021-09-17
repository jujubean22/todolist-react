import React, { Component } from 'react'

export class Forminput extends Component { 
    state = {
          title: ''
        }
    
    onSubmit = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title)
      this.setState({ title: ''})
    }

    onChange = (e) => this.setState({ title: e.target.value})

    render() {
        
        return (
            <form onSubmit={this.onSubmit}>
            <input
              type="text" 
              name="title" 
              style={{ flex: '10', padding: '5px' }}
              placeholder="Add Todo ..." 
              className='inputtodo'
              value={this.state.title}
              onChange = {this.onChange}
            />
                <input 
              type="submit" 
              value="Add" 
              className="btn"
            />
          </form>
        )
    }
}

export default Forminput
