const fetch = require('node-fetch');

const jokes = [];
const fetchJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    fetch(url)
        .then((response) => response.json())
        .then((data) => jokes.push(data.value))
        .catch((error) => console.log(`Algo deu errado: [${error}]`));
}
let i = 0;
while (i < 5) {
    fetchJoke();
    ++i;
}

setTimeout(() => {
    console.log(jokes)
}, 5000);
