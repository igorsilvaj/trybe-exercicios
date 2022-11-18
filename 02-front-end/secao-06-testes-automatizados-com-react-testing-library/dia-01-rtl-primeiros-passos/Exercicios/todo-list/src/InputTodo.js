import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textTodo: '',
      isBtnDisabled: true,
    };

    this.changeTextTodo = this.changeTextTodo.bind(this);
  }

  changeTextTodo(value) {
    this.setState({ textTodo: value }, () => {
      const { textTodo } = this.state;
      const disable = textTodo.length === 0;
      this.setState({ isBtnDisabled: disable });
    });
  }

  addItem(value) {
    const { addTodo } = this.props;
    this.setState({ textTodo: '', isBtnDisabled: true });
    addTodo(value);
  }

  render() {
    const { textTodo, isBtnDisabled } = this.state;
    return (
      <section className="InputTodo">
        <label htmlFor="inputTodo">
          Tarefa:
          <input
            id="inputTodo"
            type="text"
            value={ textTodo }
            onChange={ (e) => this.changeTextTodo(e.target.value) }
          />
        </label>
        <button
          type="button"
          disabled={ isBtnDisabled }
          onClick={ () => this.addItem(textTodo) }
        >
          Adicionar
        </button>
      </section>
    );
  }
}
export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
