// // linhaDeProducao.js

// const TWO_SECONDS = 2000;

// setTimeout(() => {
//     console.log('Comprar parafusos'); // Comprar parafusos
//     console.log('Adicionar ao estoque'); // Adicionar ao estoque
// }, TWO_SECONDS);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// // Saída:
// // 1 - Receber roda
// // 2 - Encaixar parafusos
// // 3 - Fixar roda no carro
// // Comprar parafusos
// // Adicionar ao estoque

// // pushNumberAsync.js

// const pushNumber = (list, number) => list.push(number);

// const numbers = [];

// const THREE_SECONDS = 3000;

// setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), THREE_SECONDS);

// // Saída:
// // [2, 3]

// despesas.js

// // Declaramos nossa variável de despesas
// const minhasDespesas = [
//     {
//       academia: 99,
//     },
//     {
//       ifood: 200,
//     },
//     {
//       celular: 60,
//     },
//     {
//       internet: 100,
//     },
//   ];

//   // Declaramos nossa renda
//   const minhaRenda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;

//     console.log(`Balanço do mês:
//       Recebido: R$${renda},00
//       Gasto: R$${despesaTotal},00
//       Saldo: R$${saldoFinal},00 `);
// };

// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => {
//         const soma = acc + curr[0];
//         // acc é a sigla para accumulator (acumulador)
//         // curr é a sigla para current_value (valor atual)
//         return soma;
//     }, 0);
//     return despesaTotal;
// };

// // Executamos a função principal com as variáveis renda, despesas
// // e a nossa função somaDespesas
// // callback = somaDespesas
// despesaMensal(minhaRenda, minhasDespesas, somaDespesas);

// // callbacks-para-fixar-01.js

// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

// const getUser = (callback) => {
//     const user = {
//         firstName: 'Ivan',
//         lastName: 'Ivanovich',
//         nationality: 'Russo',
//     };
//     return callback(user);
// };

// console.log(getUser(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
// console.log(getUser(userNationality)); // Retorno esperado: "Ivan é Russo"

// callbacks-para-fixar-02.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo