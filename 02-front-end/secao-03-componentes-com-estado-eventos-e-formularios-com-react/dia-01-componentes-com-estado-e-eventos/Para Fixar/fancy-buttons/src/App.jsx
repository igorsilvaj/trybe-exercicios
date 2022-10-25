import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // console.log('Constructor');
    this.handleclick = this.handleclick.bind(this);
    // this.state = {
    //   numeroDeCliques: 0,
    // }
  };

  state = {
    numeroDeCliques: 0,
    class: 'white',
  };

  getButtonColor(num) {
    return num % 2 === 0 ? 'verde' : 'azul';
  };

  handleclick() {
    // console.log('click');
    // console.log(this);
    const { numeroDeCliques } = this.state;
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }),
      () => {
        console.log(`Quantidade de cliques: ${numeroDeCliques}`);
        console.log(`Cor do Botão: ${this.getButtonColor(numeroDeCliques)}`);
        this.setState({class: this.getButtonColor(numeroDeCliques)})
      })
    // console.log(this.state.numeroDeCliques);
  };

  render() {
    // console.log(this);
    return (
      <div className="App" >
        <button onClick={this.handleclick} className={this.state.class}>{`Cliques no botão ${this.state.numeroDeCliques}`}</button>
      </div>
    );
  };
}

export default App;
