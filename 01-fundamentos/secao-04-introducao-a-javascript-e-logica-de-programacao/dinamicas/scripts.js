// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// 1 - Inicie uma variavel com nome somaTotal com valor 0; 
// 2 - Inicie o comando for;
// 3 - Abra parenteses e coloque o contador inicial;
// 4 - Adicione o valor a ser percorrido, o loop deve ocorrer enquanto o index for menor que 51;
// 5 - Finalize o for com a forma que o contador será incrementado, index deve receber um incremento de 1;
// 6 - Abra chaves para o for;
// 7 - Dentro das chaves atribua a somaTotal o valor de somaTotal + index;
// 8 - Fora das chaves imprima o valor da variavel somaTotal com console.log;

let somaTotal = 0;
for(let index = 1; index < 51; index += 1){
    somaTotal = somaTotal + index;
    // console.log(index);
}
console.log("A soma total de 1 a 50 é:",somaTotal);

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// 1 - Inicie uma variavel com nome numDiv3 e valor 0;
// 2 - Inicie o comando for;
// 3 - Abra parenteses e coloque o contador iniciando em 2;
// 4 - Adicione o valor a ser percorrido, o loop deve ocorrer enquanto o index for menor ou igual a 150;
// 5 - Finalize o for com a forma que o contador será incrementado, index deve receber um incremento de 1;
// 6 - Abra chaves para o for;
// 7 - Escreva o comando if;
// 8 - No if verifique se o index é divisivel por 3;
// 9 - Se verdadeiro, adicione 1 para a variavel numDiv3;
// 10 - Se falso não faça nada;
// 11 - Fora do laço for escreva o comando if;
// 12 - Compare o valor da variavel numDiv3 com o número 50
// 13 - Se verdadeiro, log "mensagem secreta"

let numDiv3 = 0;
for(let index = 2; index <= 150; index += 1){
    if(index % 3 === 0){
        // console.log("Número",index,"é divisivel");
        numDiv3 += 1;
    }
}
if(numDiv3 === 50){
    console.log("mensagem secreta")
}

// // 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// // "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = '', player2 = '';
pedraPapelTesoura('Papel', 'Tesoura');

function pedraPapelTesoura(player1, player2){
    if(player1 === 'Papel' && player2 === 'Pedra' || player1 === 'Pedra' && player2 === 'Tesoura' || player1 === 'Tesoura' && player2 === 'Papel'){
        console.log("Player 1 won");
    }else if(player2 === 'Papel' && player1 === 'Pedra' || player2 === 'Pedra' && player1 === 'Tesoura' || player2 === 'Tesoura' && player1 === 'Papel'){
        console.log("Player 2 won");
    }else{
        console.log("A Ties");
    }
}

// //4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// //Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// //Bônus: Crie a condição utilizando operador ternário.

let idade = 19, respostaIdade = idade > 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade");

// // 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// // "Pessoa" é a mais nova.

let younger = '', Carolzita = 0, Murilo = 0, Baêta = 0;
whoIsYounger(80,80,80);
function whoIsYounger(Carolzita, Murilo, Baêta){
    // if(Carolzita < Murilo && Carolzita < Baêta){
    //     younger = "Carolzita";
    // }else if(Murilo < Baêta && Murilo < Carolzita){
    //     younger = "Murilo";
    // }else if(Baêta < Carolzita && Baêta < Murilo){
    //     younger = "Baêta";
    // }else{
    //     younger = "Todos tem a mesma idade";
    // }
    younger = Carolzita < Murilo && Carolzita < Baêta ? younger = "Carolzita é a pessoa mais nova." 
            : Murilo < Baêta && Murilo < Carolzita ? younger = "Murilo é a pessoa mais nova."
            : Baêta < Carolzita && Baêta < Murilo ? younger = "Baêta é a pessoa mais nova." : "Todos tem a mesma idade";
    return console.log(younger);
}