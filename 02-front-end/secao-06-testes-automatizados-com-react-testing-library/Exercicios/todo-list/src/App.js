import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
    };
  }

  addTodo = (todo) => {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  };

  removeTodo = (indexTodo) => {
    const { listTodo } = this.state;
    listTodo.splice(indexTodo, 1);
    this.setState({ listTodo });
  };

  render() {
    const { listTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } />
              <button
                type="button"
                onClick={ () => this.removeTodo(index) }
              >
                Remover
              </button>
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;
