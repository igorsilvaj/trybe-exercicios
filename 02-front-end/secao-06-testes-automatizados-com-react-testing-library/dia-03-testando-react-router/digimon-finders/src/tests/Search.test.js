import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Realize os testes da busca por Digimon', () => {
  it('É possível inserir um valor na caixa de busca', () => {
    renderWithRouter(<App/>);
    const input = screen.getByRole('textbox', {  name: /digimon:/i});
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'Greymon');
    expect(input.value).toBe('Greymon');
  });

  it('A tela inicia sem nenhum Digimon renderizado.', () => {
    renderWithRouter(<App/>);
    const digimon = screen.queryByTestId('digimonName');
    expect(digimon).toBeNull();
  });
  it('É possível buscar um Digimon com sucesso.', async () => {
    renderWithRouter(<App/>);
    const input = screen.getByRole('textbox', {  name: /digimon:/i});
    const button = screen.getByRole('button', {  name: /search digimon/i});
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(input, 'Greymon');
    expect(input.value).toBe('Greymon');

    userEvent.click(button);
    const name = await screen.findByRole('heading', {  name: /greymon/i});
    const level = await screen.findByText(/level: champion/i);
    const img = await screen.findByRole('img', {  name: /greymon/i});
    expect(name).toBeInTheDocument();
    expect(level).toBeInTheDocument();
    expect(img).toBeInTheDocument();

  });
  it('A mensagem de erro é renderizada caso o Digimon buscado não exista.', () => {

  });
  it('A aplicação não realiza fetch caso a busca seja realizada com o input vazio.', () => {

  });
});