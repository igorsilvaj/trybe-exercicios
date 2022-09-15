let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for(let i in numbers){
    console.log(numbers[i]);
}
// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for(let i in numbers){
    sum += numbers[i];
}
console.log(sum);
// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = sum / numbers.length;
console.log(media);
// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media>20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}
// 5.🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNum = 0;
for(let i in numbers){
    if(numbers[i]>maiorNum){
        maiorNum = numbers[i];
    }
}
console.log("Maior número da array:", maiorNum);
// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let odds = 0;
for(let i in numbers){
    if(numbers[i]%2===0){
        odds += 1;
    }
}
if(odds === 0){
    console.log("nenhum valor ímpar encontrado");
}else{
    console.log("Quantidade de números ímpares:",odds);
}
// 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorNum = numbers[0];
for(let i in numbers){
    if(numbers[i]<menorNum){
        menorNum = numbers[i];
    }
}
console.log("Menor número da array:", menorNum);
// 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let arr1 = [];
for(let index = 1; index <= 25; index+=1){
    arr1.push(index);
}
console.log(arr1);
for(let div of arr1){
    div = div / 2;
    console.log(div);
}

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Array crescente", numbers1.sort().reverse());
console.log("Array decrescente", numbers1.sort());

numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArr = [];
for(let i = 0; i < numbers1.length; i+=1){
    if(i+1<numbers.length){
        newArr.push(numbers1[i] * numbers1[i+1]);
    }else{
        newArr.push(numbers1[i]*2);
    }
}
console.log("Nova Array:",newArr);