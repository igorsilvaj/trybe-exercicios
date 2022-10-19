import { Component } from "react";

class ToDoList extends Component {
  render() {
    return (
      <>
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

          <div className="buttons">
            <button className="blob-btn">
              Blob Button
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
            <br />

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </main>
      </>
    );
  }
}

export default ToDoList;