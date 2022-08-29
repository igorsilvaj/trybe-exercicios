document.body.style.backgroundColor = "gray";
let newLi = document.createElement('li');
console.log(document.getElementById('dbz').innerText);
console.log(document.getElementById('dbz').firstElementChild.innerText);
console.log(document.getElementById('stark_childs1').previousElementSibling.innerText)

const tursao = document.createElement('h2');
tursao.innerText = 'Rei Arthur dos Bretões';
document.getElementById('Uther_Pendragon').appendChild(tursao);

let paraRemover = document.getElementById('cars').firstElementChild;
paraRemover.remove();
console.log(document.getElementById('avengers').nextElementSibling.innerText);

const img = document.createElement('img');
// img.src = "link";

document.getElementById('stark_childs').lastChild;

let criaP = document.createElement('p');
criaP.innerText = "TESTE";
criaP.className = 'Texto';
document.getElementById('stark_childs').appendChild(criaP);

console.log('Sinsalabim'.includes('bim'));