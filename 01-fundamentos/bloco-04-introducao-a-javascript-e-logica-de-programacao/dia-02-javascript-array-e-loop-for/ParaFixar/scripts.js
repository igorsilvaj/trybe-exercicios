let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(menuServices);
console.log(indexOfPortfolio);
menu.push("Contato");
console.log(menu);

let a = 0;
let b = a++; // now b == 0 and a == 1
let c = ++a; // now c == 2 and a == 2
let d = (a += 1); // now d == 3 and a == 3

console.log(a);
console.log(a,b,c,d);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let each in groceryList){
    console.log(groceryList[each]);
}
for(let off of groceryList){
    console.log(off);
}

// function dice () { 
//     return Math.ceil(Math.random() * 6);
// }
// let d1 = dice();
// let d2 = dice();
// while (d1 !== d2) {
//     console.log(d1);
//     console.log(d2);
//     d2 = dice();
//     if(d1 != d2){
//         console.log("Diferente!");
//     }else{
//         console.log("Igual!");
//     }
// }