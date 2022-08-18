let myName = "Igor";
const birthCity = "Campinas";
let birthYear = 1999;
birthYear = 2030;
// birthCity = "Hortolândia";
console.log(myName, birthCity, birthYear);
console.log("// --------------------------------------------------------------------------------------- //")

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';
console.log(typeof(patientInfo))
console.log("// --------------------------------------------------------------------------------------- //")

const base = 5;
let height = 8;
const area = base * height;
const perimeter = 2*base + 2*height;
console.log('area do retangulo: '+area+' - perimetro do retangulo: '+perimeter);
console.log("// --------------------------------------------------------------------------------------- //")

const nota = 60;
if(nota >= 80){
    console.log("Parabéns, você foi aprovada(o)!");
}else if(nota < 80 && nota >= 60){
    console.log("Você está na nossa lista de espera");
}else{
    console.log("Você foi reprovada(o)");
}
console.log("// --------------------------------------------------------------------------------------- //")

const currentHour = 1;
let message = '';
if(currentHour >= 22){
    message = "Não deveríamos comer nada, é hora de dormir";
}else if(currentHour >=18 && currentHour < 22){
    message = "Rango da noite, vamos jantar :D";
}else if(currentHour >=14 && currentHour < 18){
    message = "Vamos fazer um bolo pro café da tarde?";
}else if(currentHour >=11 && currentHour < 14){
    message = "Hora do almoço!!!";
}else if(currentHour >=11 && currentHour < 14){
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);
console.log("// --------------------------------------------------------------------------------------- //")

let weekDay = 'quarta-feira';
if(weekDay == 'segunda-feira'||'terça-feira'||'quarta-feira'||'quinta-feira'||'sexta-feira'){
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}else if(weekDay == 'sabádo'||'domingo'){
    console.log('FINALMENTE, descanso merecido UwU');
}else{
    console.log('digitação incorreta.');
}
console.log("// --------------------------------------------------------------------------------------- //")

//Vale lembrar que o conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos.
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);
console.log("// --------------------------------------------------------------------------------------- //")

// Nesse exemplo o "switch/case" deverá imprimir no terminal a classificação de quais filmes podem ser assistidos
// de acordo com a faixa etária de uma pessoa.
let faixaEtaria = 'adulto';

switch (faixaEtaria) {
  case 'adolescente':
    // Caso a variável seja "adolescente" então entraremos na lógica abaixo.
    console.log('Consulte a classificação do filme');
    // Quando a pessoa for adolescente essa será a mensagem impressa no console.
    break;
    // O "break" serve para que o código não continue rodando caso seu resultado já tenha sido atingido
  case 'adulto':
    // Após implementar a lógica de um case, você pode abrir outro case.
    // Agora vamos fazer a lógica do que deve ocorrer se a pessoa for adulta
    console.log('A pessoa adulta é classificada para assistir qualquer filme')
    //caso seja adulto essa mensagem deverá aparecer no terminal
    break;
    // Interrompemos o fluxo novamente caso a pessoa seja adulta
    case 'idoso':
      // Repetimos o mesmo processo para o case "idoso"
      console.log('A pessoa idosa é classificada para assistir qualquer filme');
      break
  default:
    // O "default" é utilizado como um retorno padrão caso o valor passado não encaixe em nenhum dos cases
    // Ou seja, se a pessoa, for criança, recém nascida, ou pertencente à qualquer outra faixa etária, essa será a lógica implementada.
    console.log('só pode assistir filmes livres');
    // note que não é necessário utilizar o break após o default. Como todo o código já foi executado, não precisamos interromper o funcionamento do mesmo.
}
mes = 'maio';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
}
console.log(estacaoDoAno); // 'Outono'

let resultado = 'aprovada';
switch(resultado){
    case 'aprovada':
        console.log(resultado);
        break;
    case 'lista':
        console.log(resultado);
        break;
    case 'reprovada':
        console.log(resultado);
        break;
    default:
        console.log('não se aplica');
}
console.log("// --------------------------------------------------------------------------------------- //")

