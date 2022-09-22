const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
        action(count);
    }
};

const isEven = (number) => {
    if (number % 2 === 0) {
        console.log(number, 'is even');
    }
};

const isOdd = (number) => {
    if ((number % 2) > 0) {
        console.log(number, 'is odd');
    }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();
// Ao chamar a função doingThings:
console.log(doingThings(wakeUp));
console.log(doingThings(breakfast));
console.log(doingThings(sleep));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!