import { legacy_createStore as createStore, combineReducers } from 'redux';        // npm i redux
import { composeWithDevTools } from '@redux-devtools/extension'; // npm i @redux-devtools/extension

const THEME_INITIAL_STATE = {
  theme: 'Dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DARK_MODE':
      return { theme: 'Dark' };
    case 'LIGHT_MODE':
      return { theme: 'Light' };
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'Offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { status: 'Online' };
    case 'LOGOUT':
      return { status: 'Offline' };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ themeReducer, statusReducer })

const store = createStore(rootReducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

const action = { type: 'WAITING' };

themeButton.addEventListener('click', () => {
  action.type = action.type === 'LIGHT_MODE' ? 'DARK_MODE' : 'LIGHT_MODE';
  return store.dispatch(action);
});

statusButton.addEventListener('click', () => {
  action.type = action.type === 'LOGIN' ? 'LOGOUT' : 'LOGIN';
  return store.dispatch(action);
});

store.subscribe(() => {
  const globalState = store.getState();
  const { themeReducer, statusReducer } = globalState;

  const body = document.querySelector('body');
  body.className = themeReducer.theme;

  const status = document.querySelector('#status');
  status.innerHTML = statusReducer.status;

  const invertTheme = themeReducer.theme === 'Light' ? 'Dark' : 'Light';
  const invertStatus = statusReducer.status === 'Online' ? 'Offline' : 'Online';
  
  const themeButton = document.querySelector('#toggle-theme');
  themeButton.innerHTML = `${invertTheme} Mode`;
  const statusButton = document.querySelector('#toggle-status');
  statusButton.innerHTML = `Ficar ${invertStatus}`;
});
