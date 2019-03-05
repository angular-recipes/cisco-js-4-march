import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { AddForm } from './AddForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { label: 'Bring Milk', done: true },
        { label: 'Clean House', done: false },
        { label: 'Pay mobile bill', done: true },
      ]
    };
  }

  render() {
    return (
      <div>
        <Header title="TodoApp" />
        <AddForm onAddBtnClick={this.addTodo.bind(this)}/>
        <i>Welcome to todo app</i>
        <hr />
        {this.state.todos.map(todo =>
          <div key={todo.label}>
            {todo.label} |
              {todo.done ? 'DONE' : 'UNFINISHED'} |
              <button onClick={() => this.handleClick(todo)}>toggle</button>
          </div>
        )
        }
      </div>
    );
  }


  handleClick(todo) {
    todo.done = !todo.done;
    this.setState({
      todos: this.state.todos
    });
  }

  addTodo(newTodoLabel) {
    let newTodo = {
      label: newTodoLabel,
      done: false
    };
    this.setState({
      todos: this.state.todos.concat(newTodo)
    });
  }
}

export default App;
