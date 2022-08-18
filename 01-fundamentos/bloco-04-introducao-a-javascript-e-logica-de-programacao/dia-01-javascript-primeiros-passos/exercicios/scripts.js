let a = 0;
let b = 0;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let mod = a % b;

let maiorNum = a > b ? a : b;
let menorNum = a > b ? b : a;

let checkpositive = a === true ? "positive" 
                  : a === false ? "negative" 
                  :"zero";

let a1 = 90;
let a2 = 40;
let a3 = 50;

function verifica_triangulo(a1, a2, a3){
    return a1+a2+a3 === 180 ? true : false;
}
console.log(verifica_triangulo(a1,a2,a3));

let nome_peca = '';
function pecas_xadrez(nome_peca){
    nome_peca.toLowerCase();
    let pecas = {
        torre: "retas", 
        cavalo:"em L", 
        bispo:"diagonais", 
        rei:"1 casa para qualquer lado", 
        raina:"diagonais e retas", 
        peao:"frente 1 casa", 
        peão:"frente 1 casa"};
        console.log(pecas);
    return pecas[nome_peca] !== undefined ? "A peça "+nome_peca+" se move: "+pecas[nome_peca] : "Digite corretamente o nome da peça";   
}

console.log(pecas_xadrez("bispo"));

function toAmericanRating(nota){
    let valor = parseInt(nota.replace(/(%)|,/g, ''));
    if(valor >= 90){
        return "A";
    }else if(valor >= 80){
        return "B"
    }else if(valor >= 70){
        return "C"
    }else if(valor >= 60){
        return "D"
    }else if(valor >= 50){
        return "E"
    }else if(valor < 50){
        return "F"
    }else{
        return "Valor incorreto."
    }
}
console.log(toAmericanRating("10%"));

const numero1 = 10;
const numero2 = 56;
const numero3 = 62342;
let temAlgumPar = numero1 || numero2 || numero3 % 2 === 0 ? true : false;
let temAlgumImpar = numero1 || numero2 || numero3 % 2 !== 0 ? true : false;
console.log(temAlgumPar === true ? "Tem" : "Não tem");
console.log(temAlgumImpar === true ? "Tem" : "Não tem");
