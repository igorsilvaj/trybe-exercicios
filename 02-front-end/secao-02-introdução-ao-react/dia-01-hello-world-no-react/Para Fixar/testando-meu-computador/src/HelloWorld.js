import React, { Component } from "react";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <header>
            <h1>Minha Lista de Tarefas</h1>
            <p id="funcionamento">Clique duas vezes em um item para marcá-lo como completo</p>
          </header>
          <section id="text">
            <input type="text" id="texto-tarefa" />
            <button id="criar-tarefa">Adicionar</button>
          </section>
          <section id="tasks">
            <ol id="lista-tarefas"></ol>
          </section>
          <button id="remover-selecionado">x</button><button id="mover-cima">↑</button><button id="mover-baixo">↓</button><button id="remover-finalizados">Limpar Completos</button><button id="apaga-tudo">Limpar Lista</button><button id="salvar-tarefas">Salvar Lista</button>
        </main>
      </div>
    );
  }
}

export default HelloWorld;