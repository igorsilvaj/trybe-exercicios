import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', async () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.getByText('Adicionar');
    listTodo.forEach((item) => {
      userEvent.type(inputTask, item);
      userEvent.click(button);
    });

    const taskList = [];
    const expectedLen = listTodo.length;
    listTodo.forEach(async (item) => {
      taskList.push(await screen.findByText(item));
    });
    await waitFor(() => expect(taskList).toHaveLength(expectedLen));
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    render(<Item content="Realizar CR" />);
    const item = screen.getByText('Realizar CR');
    expect(item).toBeInTheDocument();
  });
});
