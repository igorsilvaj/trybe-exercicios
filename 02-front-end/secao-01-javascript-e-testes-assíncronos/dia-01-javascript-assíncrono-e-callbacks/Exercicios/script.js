// 1
const getPlanet = () => {
    const mars = {
        name: 'Mars',
        distanceFromSun: {
            value: 227900000,
            measurementUnit: 'kilometers',
        },
    };
    console.log('Returned planet: ', mars);
};

// setTimeout(() => {
//     getPlanet();
// }, 4000); // Imprime Marte depois de 4 segundos

// 2
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
    const maxTemperature = 58;
    return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
    console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
    console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const handleError = (errorReason) =>
    console.log(`Error getting temperature: ${errorReason}`);

const sendMarsTemperature = (callback, error) => {
    const temperaturaAtual = getMarsTemperature();
    setTimeout(() => {
        const didOperationSucceed = Math.random() >= 0.6;
        if (didOperationSucceed) {
            callback(temperaturaAtual);
        } else {
            error('Robot is busy');
        }
    }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
