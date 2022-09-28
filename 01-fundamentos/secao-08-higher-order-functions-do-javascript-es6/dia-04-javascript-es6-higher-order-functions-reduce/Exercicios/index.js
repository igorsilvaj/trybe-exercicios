const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// const flatten = (array) => {
//     return array.reduce((acc, atual) => {
//         atual.forEach(element => acc.push(element));
//         return acc;
//     });
// }
const flatten = (array) => array.reduce((acc, act) => acc.concat(act));
console.log(flatten(arrays));

const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// const reduceNames = (books) => {
//     return books.map((autor) => autor.author.name).reduce((acc, curr) => {
//         // console.log('acc:', acc, ',curr:', curr);
//         return `${acc}, ${curr}`;
//     });
// }
// const reduceNames = (books) => {
//     return books.reduce((acc, curr) => { 
//         return `${acc} ${curr.author.name},`, '';
//     });
// }
const reduceNames = (books) => books.reduce((acc, curr) =>  `${acc} ${curr.author.name}.`, '')

console.log(reduceNames(books));

// const names = [
//     'Aanemarie', 'Adervandes', 'Akifusa',
//     'Abegildo', 'Adicellia', 'Aladonata',
//     'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const expectedResult = 20;

// function containsA() {
// }

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// function studentAverage() {
//     // escreva seu código aqui
// }

// const expected = [
//     { name: 'Pedro Henrique', average: 7.8 },
//     { name: 'Miguel', average: 9.2 },
//     { name: 'Maria Clara', average: 8.8 },
// ];