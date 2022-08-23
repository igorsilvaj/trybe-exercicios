let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        golden: 2, 
        silver: 3 
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log("A jogadora", player.name, player.lastName,"tem", player.age, "anos de idade, ela foi eleita a melhor do mundo por",
            player.bestInTheWorld.length,"vezes. A jogadora possui", player.medals.golden, "medalhas de ouro e", player.medals.silver, "medalhas de prata.");

let cars = ['Saab', 'Volvo', 'BMW'];
for (let index in cars) {
  console.log(cars[index]);
}

let car = {type:'Fiat', model:'500', color:'white',};
for (let index in car) {
    console.log(index, car[index]);
}

let food = ['hamburguer', 'bife', 'acarajé'];
for (let value of food) {
  console.log(value);
};

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};
for(let i in names){
    console.log("Olá",names[i]);
}

let car1 = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for(let i in car1){
    console.log(i,car1[i]);
}
console.log(car1.model);
 
let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
}
console.log('O cantor', singer.name, 'nasceu no', singer.bornInfo.city + ', tem o melhor album', singer.bestAlbuns[0]+".");

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log("Bem-vinda,", info.personagem);

info['recorrente'] = "Sim";
console.log(info.recorrente);

for(let i in info){
    console.log(i, info[i]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for(let i in info){
    if(i !== 'recorrente') console.log(info[i], 'e', info2[i]);
    else console.log('Ambos recorrentes')
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [{titulo: 'O Pior Dia de Todos', autor: 'Daniela Kopsch', editora: 'Tordesilhas',}]
};
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco',})
console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor.livrosFavoritos[0].titulo)
console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor.livrosFavoritos[1].titulo)
console.log(leitor.nome, "tem", leitor.livrosFavoritos.length, "livros favoritos.")












// 1
function palindromo(string){
    if(string.split("").reverse().join('') === string) return true;
    return false;
}
console.log(palindromo('arara'))
console.log(palindromo('desenvolvimento'))

// 2
let arrayTeste = [2, 3, 6, 7, 10, 1];
function returnIndexOfMax(array){
    return arrayTeste.indexOf(Math.max(...array));
}
console.log(returnIndexOfMax(arrayTeste));

// 3
let arrayTeste2 = [2, 4, 6, 7, 10, 0, -3];
function returnIndexOfMin(array){
    return arrayTeste2.indexOf(Math.min(...array));
}
console.log(returnIndexOfMin(arrayTeste2));