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


const valorCusto = 100;
const valorVenda = 165;
let imposto = (20*valorCusto)/100;
let valorCustoTotal = valorCusto + imposto; 
let lucro = valorVenda - valorCustoTotal;
console.log("Seu lucro na venda do produto é de: ", lucro);

let inss = 0;
let ir = 0;
let salarioBruto = 0;
// let salarioBase = salarioBruto - inss;
let salarioBase = 0;
let salarioLiq = 0;

function calcula_inss(salarioBruto){
    if(salarioBruto>5189.82){
        inss = 570.88;
    }else if(salarioBruto>=2594.93 && salarioBruto<5189.82){
        inss = (11*salarioBruto)/100;
    }else if(salarioBruto>=1556.95 && salarioBruto<2594.92){
        inss = (9*salarioBruto)/100;
    }else if(salarioBruto<=1556.94){
        inss = (8*salarioBruto)/100;
    }else{
        inss = "Desempregado!";
    }
    return inss;
}
function calcula_ir(salarioBase){
    if(salarioBase>4664.68){
        ir = ((27.5*salarioBase)/100)-869.36;
    }else if(salarioBase>=3751.06 && salarioBase<4664.68){
        ir = ((22.5*salarioBase)/100)-636.13;
    }else if(salarioBase>=2826.66 && salarioBase<3751.05){
        ir = ((15*salarioBase)/100)-354.80;
    }else if(salarioBase>=1903.99 && salarioBase<2826.65){
        ir = ((7.5*salarioBase)/100)-142.80;
    }else if(salarioBase<=1903.98){
        ir = 0;
    }else{
        ir = "Desempregado!";
    }
    return ir;
}

console.log("-----------------------------------");
salarioBruto = 3000;
salarioBase = salarioBruto - calcula_inss(salarioBruto);
calcula_inss(salarioBruto);
calcula_ir(salarioBase);
salarioLiq = salarioBase - ir;
console.log("Seu salario bruto é: ", salarioBruto);
console.log("É deduzido de INSS: ", inss);
console.log("Salario base para calculo de IR: ", salarioBase);
console.log("É deduzido de IR: ", ir);
console.log("Seu salario liquido é: ", salarioLiq);