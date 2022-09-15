// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
function criaH1(id, texto) {
    const newH1 = document.createElement('h1');
    newH1.id = id;
    newH1.innerText = texto;
    return newH1;
}
document.body.appendChild(criaH1('headerText', 'Exercício 5.2 - JavaScript DOM'));

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;
const newMain = document.createElement('main');
newMain.className = 'main-content';
document.body.appendChild(newMain);

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
function criaSection(id, classe) {
    const newSection = document.createElement('section');
    newSection.id = id;
    newSection.className = classe;
    return newSection;
}
newMain.appendChild(criaSection('section1', 'center-content'));
let section1 = document.querySelector("#section1");

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const newP = document.createElement('p');
newP.innerText = 'algum texto';
newP.style.textAlign = 'center';
section1.appendChild(newP);

// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
newMain.appendChild(criaSection('section2', 'left-content'));

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
newMain.appendChild(criaSection('section3', 'right-content'));

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let newImg = document.createElement('img');
newImg.classList.add('small-image');
newImg.src = "https://picsum.photos/200";
document.querySelector('#section2').appendChild(newImg);

// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let newUl = document.createElement('ul');
document.querySelector('#section3').appendChild(newUl);
let numExt = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
function criaListItems(param) {
    let newLi = document.createElement('li');
    newLi.innerText = param;
    newUl.appendChild(newLi);
}
for(let index = 0; index < numExt.length; index += 1) {
    criaListItems(numExt[index]);
}

// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
function criaH3(id, texto) {
    const newH3 = document.createElement('h3');
    newH3.id = id;
    newH3.innerText = texto;
    return newH3;
}
newMain.appendChild(criaH3('H3_1', 'DOM'));
newMain.appendChild(criaH3('H3_2', 'É'));
newMain.appendChild(criaH3('H3_3', 'DEMAIS'));

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// 1. 🚀 Adicione a classe title na tag h1 criada;
document.querySelector('#headerText').className = 'title';

// 2. 🚀 Adicione a classe description nas 3 tags h3 criadas;
document.querySelector('#H3_1').className = 'description';
document.querySelector('#H3_2').className = 'description';
document.querySelector('#H3_3').className = 'description';

// 3. 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
let mainContent = document.querySelector(".main-content");
let sectionEsq = document.querySelector('.left-content');
mainContent.removeChild(sectionEsq);

// 4. 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
document.querySelector("#section3").style.marginRight = 'auto';

// 5. 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
document.querySelector("#section1").parentElement.style.backgroundColor = 'green';

// 6. 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
let lista1 = document.querySelector("ul");
lista1.removeChild(lista1.lastElementChild)
lista1.removeChild(lista1.lastElementChild)