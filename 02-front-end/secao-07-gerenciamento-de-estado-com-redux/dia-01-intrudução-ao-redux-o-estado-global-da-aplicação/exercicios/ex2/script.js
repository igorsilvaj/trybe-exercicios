import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  const { colors } = state;
  switch (action.type) {
    case 'NEXT_COLOR':
      return state.index < 5 ? { colors, index: state.index + 1 } : { colors, index: 0 };
    case 'PREVIOUS_COLOR':
      return state.index > 0 ? { colors, index: state.index - 1 } : { colors, index: 5 };
    case 'RANDOM_COLOR':
      return { colors: [...colors, criarCor()], index: colors.length };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const action = { type: 'WAITING' };
const btnNextColor = document.querySelector('#next');
const btnPrevColor = document.querySelector('#previous');
const btnRandomColor = document.querySelector('#random');

btnNextColor.addEventListener('click', () => {
  action.type = 'NEXT_COLOR';
  return store.dispatch(action);
});

btnPrevColor.addEventListener('click', () => {
  action.type = 'PREVIOUS_COLOR';
  return store.dispatch(action);
});

btnRandomColor.addEventListener('click', () => {
  action.type = 'RANDOM_COLOR';
  return store.dispatch(action);
});

store.subscribe(() => {
  const globalState = store.getState();
  const newColor = globalState.colors[globalState.index];

  const colorName = document.querySelector('#value');
  colorName.innerHTML = newColor;

  const container = document.querySelector('#container');
  container.style.backgroundColor = newColor;

  // const tagP = colorName.parentElement;
  // tagP.style.color = getContrast50(newColor);
});
