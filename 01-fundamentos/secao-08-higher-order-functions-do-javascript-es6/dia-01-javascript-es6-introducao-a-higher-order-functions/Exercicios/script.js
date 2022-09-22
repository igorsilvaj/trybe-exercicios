const newEmployees = () => {
    const employees = {
        id1: generateId('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: generateId('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: generateId('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const generateId = (name) => {
    const mail = `${name.split(' ').join('_').toLowerCase()}@trybe.com`;
    return { nome: name, email: mail };
};
// console.log(newEmployees(generateId));

const randomNumber = () => Math.floor(Math.random() * 5) + 1;
const lotery = (guess, func) => {
    return guess === func() ? 'Parabéns você ganhou' : 'Tente novamente';
};
// console.log(lotery(1, randomNumber));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'B', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const RIGHT_ANSWERS = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B'];
const STUDENT_ANSWERS = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];

const compare = (a, b) => {
    if (a === b) {
        return 1;
    }
    if (a === 'N.A') {
        return 0;
    }
    return -0.5;
}
const aval = (a, b, func) => {
    let score = 0;
    for (let index = 0; index < b.length; index += 1) {
        score += func(a[index], b[index]);
    }
    return score;
}

console.log(aval(STUDENT_ANSWERS, RIGHT_ANSWERS, compare));