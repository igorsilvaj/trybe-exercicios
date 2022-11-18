import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.queryByText(/Adicionar/i);
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', async () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const button = screen.queryByText(/Adicionar/i);
    expect(inputTask).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(inputTask, 'Tarefa1');
    userEvent.click(button);

    const taskList = await screen.findAllByText('Tarefa1');

    expect(taskList).toHaveLength(1);
    expect(inputTask).toHaveValue('');
  });
});
