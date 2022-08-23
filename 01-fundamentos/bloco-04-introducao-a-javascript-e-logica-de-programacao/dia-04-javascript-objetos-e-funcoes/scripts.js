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
 