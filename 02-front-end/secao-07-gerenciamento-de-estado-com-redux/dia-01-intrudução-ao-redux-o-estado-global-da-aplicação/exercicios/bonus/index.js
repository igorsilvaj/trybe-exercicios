import { legacy_createStore as createStore } from 'redux';        // npm i redux
import { composeWithDevTools } from '@redux-devtools/extension'; // npm i @redux-devtools/extension

const showCountValue = (counter) => {
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
};

showCountValue(0);


// ========== ACTIONTYPES ==========
const INCREMENTO = "INCREMENTO";
const DECREMENTO = "DECREMENTO";

// ========== ACTIONS ==========
const actionIncremento = () => {
  // DISPARA A ACTION DE ADICIONAR + 1 AO COUNTER
  store.dispatch({ type: INCREMENTO })
};

const actionDecremento = () => {
  // DISPARA A ACTION DE REMOVER - 1 AO COUNTER
  store.dispatch({ type: DECREMENTO })
};

// ========== REDUCER ==========
const INITIAL_STATE = 0;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENTO:
      return state + 1;
    case DECREMENTO:
      return state - 1;
    default:
      break;
  }
}

// ========== STORE ==========
const store = createStore(reducer, composeWithDevTools());

// ========== SUBSCRIBE ==========
store.subscribe(() => {
  const counter = store.getState();
  showCountValue(counter);
});

const btnInc = document.getElementById("inc");
const btnDec = document.getElementById("dec");

btnInc.addEventListener("click", actionIncremento);
btnDec.addEventListener("click", actionDecremento);
