export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const REQUEST_FAILED = 'REQUEST_FAILED';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

function requestFailed(error) {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    fetch("https://aws.random.cat/meow")
      .then(response => response.json())
      .then(data => dispatch(getPicture(data)))
      .catch((error) => dispatch(requestFailed(error)));
  }
}
