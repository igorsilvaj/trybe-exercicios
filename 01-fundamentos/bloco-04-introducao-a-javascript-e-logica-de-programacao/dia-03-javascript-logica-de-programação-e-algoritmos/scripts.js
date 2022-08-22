// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Copiar
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
let valorInicial = 0;
// let valorParaFatorar = 10;
function retornaFatoracao(valorParaFatorar){
    for(let index = valorParaFatorar; index > 0; index -= 1){
        if(valorInicial === 0){
            valorInicial = index;
        }else{
            valorInicial = valorInicial * (index);
        }
    }
    return console.log(valorInicial);
}
retornaFatoracao(10);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let retorno = '';
// function invertePalavra(word){
//     return console.log(word.split("").reverse().join(''));
// }
// invertePalavra(word);
for(let index = word.length-1; index >= 0; index-=1){
    retorno += word[index];
}
console.log(retorno);

// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

console.log(Math.floor(Math.random()*100+1))

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
