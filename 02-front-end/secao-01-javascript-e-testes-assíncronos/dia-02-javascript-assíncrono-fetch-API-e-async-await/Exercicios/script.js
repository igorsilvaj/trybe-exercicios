const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/slack';

const fetchJoke = async () => {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(`Algo deu errado: [${error}]`));
};
fetchJoke();
// window.onload = () => fetchJoke();