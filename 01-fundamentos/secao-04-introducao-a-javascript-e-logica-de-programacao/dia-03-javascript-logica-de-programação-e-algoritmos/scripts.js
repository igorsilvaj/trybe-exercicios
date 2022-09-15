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
    return console.log("Resultado da fatoração:",valorInicial);
}
retornaFatoracao(10);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let retorno = '';
invertePalavra(word);
// function invertePalavra(word){
//     return console.log(word.split("").reverse().join(''));
// }
// invertePalavra(word);
function invertePalavra(word){
    for(let index = word.length-1; index >= 0; index-=1){
        retorno += word[index];
    }
    return console.log("Palavra invertida:",retorno);
}

// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let tamanho  = 0;
let palavras = '';
let maiorIndex = 0;
let menorIndex = 0;
maiorNumerodaLista(array);
menorNumerodaLista(array);

function maiorNumerodaLista(lista){
    for(let i = 0; i < lista.length; i+=1){
        palavras = lista[i];
        if(palavras.split("").length > tamanho){
            tamanho = palavras.split("").length;
            maiorIndex = i;
        }
    }
    return console.log("A maior palavra é",array[maiorIndex],"com incriveis",tamanho,"caracteres");
}
function menorNumerodaLista(lista){
    for(let i = 0; i < lista.length; i+=1){
        palavras = lista[i];
        if(tamanho === 0){
            tamanho = palavras.split("").length;
            menorIndex = i;
        }else if(palavras.split("").length < tamanho){
            tamanho = palavras.split("").length;
            menorIndex = i;
        }
    }
    return console.log("A menor palavra é",array[menorIndex],"com incriveis",tamanho,"caracteres");
}

// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, 
// ou seja, é divisível por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// função para checar se o número é primo.
function testaNumPrimo(numeroParaTestar){
    for(let index = 2; index < numeroParaTestar; index += 1){
        if(numeroParaTestar % index === 0) return false;
    }
    return numeroParaTestar > 1;
}
// Cria lista e checa pelor números primos.
let listaNums = [];
for(let index = 2; index <= 50; index += 1){
    if (testaNumPrimo(index)){
        listaNums.push(index);
    }
}
// Checa qual o maior número da lista.
let maiorNum = 0;
for(let i in listaNums){
    if(listaNums[i] > maiorNum){
        maiorNum = listaNums[i];
    }
}
console.log("O maior número primo da lista fornecida é:", maiorNum);