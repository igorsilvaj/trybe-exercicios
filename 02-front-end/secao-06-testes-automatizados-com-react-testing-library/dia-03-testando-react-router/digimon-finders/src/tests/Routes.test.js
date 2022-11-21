import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Realize os testes das rotas da aplicação', () => {
  it('A página deverá possuir o título "Search Digimon"', () => {
    renderWithRouter(<App />);
    const homeTitle = screen.getByRole('heading', {
      name: /search digimon/i
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('A página deverá possuir os links "About" e "Search Digimon"', () => {
    renderWithRouter(<App />);
    const searchDigimon = screen.getByRole('link', {  name: /search digimon/i});
    const about = screen.getByRole('link', {  name: /about/i});
    expect(searchDigimon).toBeInTheDocument();
    expect(about).toBeInTheDocument();
  });

  it('ao clicar no link About, a pessoa usuária é direcionada para a rota /about, e que o título "About" renderiza na tela', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', {  name: /about/i});
    expect(about).toBeInTheDocument();
    userEvent.click(about);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Teste se, ao tentar acessar uma rota inexistente, a pessoa usuária é direcionada para a página Not Found. Teste também se os elementos da página Not Found estão presentes.', () => {
    const { history } = renderWithRouter(<App />);
    const about = screen.getByRole('link', {  name: /about/i});
    expect(about).toBeInTheDocument();
    userEvent.click(about);

    act(() => {
      history.push('/pagina/que-nao-existe/');
    });

    const notFoundTitle = screen.getByText(/a página que você está procurando não existe!/i);
    expect(notFoundTitle).toBeInTheDocument();
  });
});
