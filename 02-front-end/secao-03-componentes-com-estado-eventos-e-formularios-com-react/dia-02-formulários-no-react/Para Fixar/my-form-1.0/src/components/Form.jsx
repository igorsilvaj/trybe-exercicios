import React from "react";
import EstadoFavorito from "./EstadoFavorito";
import PalavraChaveFavorita from "./PalavraChaveFavorita";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      formularioComErro: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value })
  }

  render() {
    const {estadoFavorito, nome, email, idade, vaiComparecer, palavraChaveFavorita} = this.state;
    return (
      <>
        <div>
          <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
          <form className="form">
            <EstadoFavorito value={estadoFavorito} handleChange={this.handleChange}/>
            <label htmlFor="nome">
              Nome:
            <br />
              <input
                type="text"
                id="nome"
                name="nome"
                value={nome} onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="idade">
              Idade:
            <br />
              <input
                type="number"
                id="idade"
                name="idade"
                value={idade} onChange={this.handleChange}
              />
            </label>
            <br />
            <label htmlFor="email">
              Email:
            <br />
              <input
                type="email"
                id="email"
                name="email"
                value={email} onChange={this.handleChange}
              />
            </label><br />
            <label htmlFor="idade">
              Palavra Chave Favorita:
            <br />
              <PalavraChaveFavorita value={palavraChaveFavorita} handleChange={this.handleChange}/>
            </label>
            <br /><br />
            <label htmlFor="vaiComparecer">
              Confirmar
              <input
                type="checkbox"
                id="vaiComparecer"
                name="vaiComparecer"
                checked={vaiComparecer} onChange={this.handleChange}
              />
            </label>
            <br /><br />
            <button>Enviar</button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;