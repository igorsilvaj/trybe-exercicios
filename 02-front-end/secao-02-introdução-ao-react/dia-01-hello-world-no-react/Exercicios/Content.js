import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];
class Content extends React.Component {
  render() {
    return (
      <ul>
        {conteudos.map((e, index) => (
          <li key={ index }>
            Eu
            {' '}
            {e.status}
            {' '}
            o conteúdo
            {' '}
            {e.nome}
            {' '}
            no bloco
            {' '}
            {e.bloco}
          </li>))}
      </ul>
    );
  }
}

export default Content;
