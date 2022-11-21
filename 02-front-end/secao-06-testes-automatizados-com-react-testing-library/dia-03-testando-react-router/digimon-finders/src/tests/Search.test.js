import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import { act } from 'react-dom/test-utils';
import digimon from './mocks/fetch';

describe('Realize os testes da busca por Digimon', () => {
  beforeEach(() => {
    renderWithRouter(<App/>);
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });
  });

  it('É possível inserir um valor na caixa de busca', () => {
    const input = screen.getByRole('textbox', {  name: /digimon:/i});
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'Greymon');
    expect(input.value).toBe('Greymon');
  });

  it('A tela inicia sem nenhum Digimon renderizado.', () => {
    const digimon = screen.queryByTestId('digimonName');
    expect(digimon).toBeNull();
  });
  it('É possível buscar um Digimon com sucesso.', async () => {
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
  it('A mensagem de erro é renderizada caso o Digimon buscado não exista.', async () => {
    global.fetch.mockRestore();

    const input = screen.getByRole('textbox', {  name: /digimon:/i});
    const button = screen.getByRole('button', {  name: /search digimon/i});
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    userEvent.type(input, 'a');
    expect(input.value).toBe('a');
    userEvent.click(button);
    const errorMsg = await screen.findByText(/a is not a digimon in our database\./i);
    expect(errorMsg).toBeInTheDocument();
  });
  it('A aplicação não realiza fetch caso a busca seja realizada com o input vazio.', () => {
    const input = screen.getByRole('textbox', {  name: /digimon:/i});
    const button = screen.getByRole('button', {  name: /search digimon/i});
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    userEvent.type(input, '');
    expect(input.value).toBe('');
    userEvent.click(button);
    expect(global.fetch).toHaveBeenCalledTimes(0);
  });
});