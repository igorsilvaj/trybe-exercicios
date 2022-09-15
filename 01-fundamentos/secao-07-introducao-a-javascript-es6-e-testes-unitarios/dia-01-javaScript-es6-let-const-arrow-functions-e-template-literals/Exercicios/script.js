// 🚀 Exercício 1
// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
        console.log(elseScope);
    }
}
testingScope(true);

// Crie uma função que retorne um array em ordem crescente.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddsAndEvens = () => oddsAndEvens.sort((a, b) => a - b);
console.log(`Números iniciais (${oddsAndEvens})\nNúmeros ordenados (${sortOddsAndEvens()})`);

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Com base nessas informações:
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
// Dentro da função crie uma variável result, que será o retorno final da função.
// Crie a lógica para retornar o fatorial de N!.
// Imprima no terminal 'Esse é o fatorial resultado da função' (Lembre-se de utilizar template literals nesse momento).
// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
const factorial = (num) => num === 1 ? 1 : num * factorial(num - 1);
console.log(factorial(4));

// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
const longestWord = (phrase) => phrase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// Crie uma página HTML que possua um contador de cliques.
const h1 = document.getElementsByTagName('h1')[0];
const input = document.getElementsByTagName('input')[0];
h1.addEventListener('click', () => input.value = parseInt(input.value) + 1);

// Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: 'Bebeto'
// Retorno: 'Tryber Bebeto aqui!'
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    return frase.replace('x', nome);
}
const minhasSkills = (substituaX) => {
    const skills = ['HTML', 'CSS', 'JS'];
    let concat = `${substituaX}
Minhas três principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}`
    return concat;
}

console.log(minhasSkills(substituaX('Igor')));