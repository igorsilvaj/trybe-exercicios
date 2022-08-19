// JavaScript - Primeiros passos - Variaveis
// 🚀 Vamos praticar o que aprendemos no vídeo? 💪
// Abra o seu VS Code e faça os exercícios a seguir.
// *Dica: Com o plugin Code Runner que vimos no vídeo você pode executar o seu código no VS Code com o atalho ctrl + alt + n. Aqui você encontra mais sobre o Code Runner e sobre outras extensões úteis para o VS Code!
// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔
// 
// let myName = "Igor";
// const birthCity = "Campinas";
// let birthYear = 1999;
// birthYear = 2030;
// // birthCity = "Hortolândia";
// console.log(myName, birthCity, birthYear);

//Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas
// 🚀 Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los? Você pode consultar a lista de operadores na tabela JavaScript Arithmetic Operators disponível nesse link se tiver dúvidas. Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.
// Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8.
// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.
//
// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = 2*base + 2*height;

//Condições If e Else
// 🚀 Criar estruturas condicionais com operadores if/else e operadores lógicos será algo muito comum na sua carreira de pessoa desenvolvedora. Então vamos praticar o que aprendemos no vídeo?
// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam;
// 
// const nota = 60;
// if(nota >= 80){
//     console.log("Parabéns, você foi aprovada(o)!");
// }else if(nota < 80 && nota >= 60){
//     console.log("Você está na nossa lista de espera");
// }else{
//     console.log("Você foi reprovada(o)");
// }

// JavaScript - Primeiros passos - Pratica Ex. 5
// 🚀 Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

// function verifica_triangulo(a1, a2, a3){
//     return a1+a2+a3 === 180 ? true : false;
// }
// console.log(verifica_triangulo(a1,a2,a3));
//
// Ex. 8
// 🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// const numero1 = 10;
// const numero2 = 56;
// const numero3 = 62342;
// let temAlgumPar = numero1 || numero2 || numero3 % 2 === 0 ? true : false;
// let temAlgumImpar = numero1 || numero2 || numero3 % 2 !== 0 ? true : false;
// console.log(temAlgumPar === true ? "Tem" : "Não tem");
// console.log(temAlgumImpar === true ? "Tem" : "Não tem");

// JavaScript - Array e loop For - Ex. 5
// 5.🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let maiorNum = 0;
// for(let i in numbers){
//     if(numbers[i]>maiorNum){
//         maiorNum = numbers[i];
//     }
// }
// console.log(maiorNum);