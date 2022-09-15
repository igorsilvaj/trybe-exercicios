// console.log(document.getElementById('start').nextSibling) // nó
// console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// 1. Acesse o elemento elementoOndeVoceEsta.
let whereYouE = document.querySelector("#elementoOndeVoceEsta");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
whereYouE.parentElement.style.color = "red";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector("#primeiroFilhoDoFilho").innerText = "um texto a ele";

// 4. Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").children[0];

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
whereYouE.previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
whereYouE.nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
whereYouE.nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai").children[2];


// Parte II - Criando elementos
// 1. Crie um irmão para elementoOndeVoceEsta.
newSec = document.createElement('section');
document.querySelector("#pai").appendChild(newSec);

// 2. Crie um filho para elementoOndeVoceEsta.
whereYouE.appendChild(newSec);

// 3. Crie um filho para primeiroFilhoDoFilho.
document.querySelector("#primeiroFilhoDoFilho").appendChild(newSec);

// 4. A partir desse filho criado, acesse terceiroFilho.
document.querySelector("#primeiroFilhoDoFilho").children[0].parentElement.parentElement.nextElementSibling;

// Parte III - Removendo elementos
// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let paiDoPaiChildrensArray = document.querySelector("#paiDoPai").childNodes;

// Percorrer a array da posição zero até a ultima não funciona pq ao remover a posição 0 outro item toma essa posição.

for (let index = paiDoPaiChildrensArray.length; index >= 0; index -= 1) {
    if (paiDoPaiChildrensArray[index] !== undefined) {
        if (paiDoPaiChildrensArray[index].id !== 'pai') {
            paiDoPaiChildrensArray[index].remove();
        }
    }
}

let paiChildrens = document.querySelector("#pai").childNodes;
for (let index = paiChildrens.length; index >= 0; index -= 1) {
    if (paiChildrens[index] !== undefined) {
        if (paiChildrens[index].id !== 'elementoOndeVoceEsta') {
            paiChildrens[index].remove();
        }
    }
}
document.getElementById('segundoEUltimoFilhoDoFilho').remove();