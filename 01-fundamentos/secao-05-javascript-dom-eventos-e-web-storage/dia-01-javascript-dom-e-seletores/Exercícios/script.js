function mudaTexto() {
    let texto = document.getElementsByTagName('p')[1];
    texto.innerText = "Prometo pensar com carinho nisso depois :,)";
}
mudaTexto();

function mudaCorQuadradoAmarelo() {
    let cor = document.getElementsByClassName("main-content")[0];
    cor.style.backgroundColor = `rgb(${76},${164},${109})`;
}
mudaCorQuadradoAmarelo();

function mudaCorQuadradoVermelho(){
    let cor = document.getElementsByClassName("center-content")[0];
    cor.style.backgroundColor = 'white';
}
mudaCorQuadradoVermelho();

function corrigeTexto() {
    let texto = document.getElementsByClassName('title')[0];
    texto.innerText = "Exercício 5.1 - Javascript"
}
corrigeTexto();

function modificaTexto(){
    let tagsP = document.getElementsByTagName('p');
    for (let index = 0; index < tagsP.length; index += 1) {
        tagsP[index].style.textTransform = 'uppercase';
    }
    
}
modificaTexto();

function exibeConteudo(){
    let tagsP = document.getElementsByTagName('p');
    for (let index = 0; index < tagsP.length; index += 1) {
        console.log(tagsP[index].innerText);
    }
}
exibeConteudo();
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
        4. Crie e execute uma função que corrija o texto da tag <h1>.
        5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
        */