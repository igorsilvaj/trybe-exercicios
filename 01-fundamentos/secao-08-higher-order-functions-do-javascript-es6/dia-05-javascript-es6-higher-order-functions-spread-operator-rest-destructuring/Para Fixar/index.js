//*******Spread operator
const numbers1 = [1,2,3,4];
const numbers2 = [1,2,3,4];
const concatNumbers = [...numbers1, ...numbers2];
console.log(concatNumbers);

//*******Param rest
const soma = (...param) => param.reduce((acc, curr) => acc + curr);
console.log(soma(1,2,3,4,5));

//*******Obj destructuring
const livro = {
    a: {nome: 'a', nasc: '1999'},
    b: {materias:{materia:'Mat'}},
    c: 'Trybe',
}
const {
    a:{nome},
    b:{materias:{materia}},
    c,
} = livro;
console.log(livro.a.nome); // sem destructuring
console.log(nome); // com destructuring

//*******Arr destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá

const [ola, func] = saudacoes;

console.log(func(ola));
