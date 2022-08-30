function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let btnContainer = document.querySelector(".buttons-container");

// 1
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
let decemberDaysList = [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let ul = document.querySelector("#days");

function addElement(parent, child) {
    parent.appendChild(child);
}

function makeLi(classes, valores) {
    let newLi = document.createElement('li');
    newLi.classList.add(...classes);
    newLi.innerText = valores;
    return newLi;
}
for (let item of decemberDaysList) {
    addElement(ul, makeLi(['day'], item));
}
function addClassDays(position, className) {
    const day = document.querySelector(`#days :nth-child(${position})`);
    day.classList.add(className);
}
let holidays = [28, 29, 34];
let fridays = [6, 13, 20, 27, 34];
for (let index = 0; index < fridays.length; index += 1) {
    addClassDays(fridays[index], 'friday');
}
for (let index = 0; index < holidays.length; index += 1) {
    addClassDays(holidays[index], 'holiday');
}

// 2
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
function makeButton(content, id) {
    let newButton = document.createElement('button');
    newButton.innerText = content;
    newButton.id = id;
    return newButton;
}

addElement(btnContainer, makeButton('Feriados', 'btn-holiday'));

// 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
function mudaBgHoliday() {
    const button1 = document.querySelector("#btn-holiday");
    button1.addEventListener('click', function () {
        let itens = document.getElementsByClassName("holiday");
        for (let index = 0; index < itens.length; index += 1) {
            if (itens[index].style.backgroundColor === 'rgb(159, 242, 159)') {
                itens[index].style.backgroundColor = 'rgb(238, 238, 238)';
            } else {
                itens[index].style.backgroundColor = 'rgb(159, 242, 159)';
            }
        }
    });
}
mudaBgHoliday();

// 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
addElement(btnContainer, makeButton('Sexta-feira', 'btn-friday'));

// 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. 
// Adicione ao botão "Sexta-feira" um evento de "click" 
// Modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
let dias = [];
function mudaBgFriday() {
    const button2 = document.querySelector("#btn-friday");
    button2.addEventListener('click', function () {
        let itens = document.getElementsByClassName("friday");
        for (let index = 0; index < itens.length; index += 1) {
            if (itens[index].innerText !== 'Sextou!') {
                dias.push(itens[index].innerText);
            }
            if (itens[index].innerText === 'Sextou!') {
                itens[index].innerText = dias[index];
            } else {
                itens[index].innerText = 'Sextou!';
            }
        }
    });
}
mudaBgFriday();

// 6
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.
let daysSelect = document.querySelectorAll(".day");
function controlZoom() {
    for (let index = 0; index < daysSelect.length; index += 1) {
        daysSelect[index].addEventListener('mouseover', zoomIn);
        daysSelect[index].addEventListener('mouseout', zoomOut);
    }
}
function zoomIn(elemento) {
    elemento.target.style.transform = 'scale(2)';
    // elemento.target
}
function zoomOut(elemento) {
    elemento.target.style.transform = 'scale(1)';
}
controlZoom();

// 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addTask(string) {
    let newSpan = document.createElement('span');
    newSpan.innerText = string;
    document.querySelector(".my-tasks").appendChild(newSpan);
}
addTask('Cozinhar');

// 8
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// * Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`.
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addSubtitle(cor) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('task', 'circular-btn');
    newDiv.style.backgroundColor = cor;
    document.querySelector(".my-tasks").appendChild(newDiv);
}
addSubtitle('red');
addSubtitle('green');

// 9
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, 
// atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
function controlSelectTask() {
    for (let index = 0; index < daysSelect.length; index += 1) {
        daysSelect[index].addEventListener('click', function () {
            if (daysSelect[index].classList.contains('selected') === false) {
                daysSelect[index].classList.add('task', 'selected');
            } else {
                daysSelect[index].classList.remove('task', 'selected');
            }
        });
    }
}
controlSelectTask();
// 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário.
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119)
let circularBtn = document.querySelectorAll(".circular-btn");
let subtitleColor = 'blue';
function pickColor() {
    for (let index = 0; index < circularBtn.length; index += 1) {
        circularBtn[index].addEventListener('click', function () {
            subtitleColor = circularBtn[index].style.backgroundColor;
        });
    }
}
pickColor();
// subtitleColor.addEventListener('click', )
function controlColor() {
    for (let index = 0; index < daysSelect.length; index += 1) {
        daysSelect[index].addEventListener('click', function () {
            if (daysSelect[index].classList.contains('selected') === false) {
                daysSelect[index].style.color = 'rgb(119,119,119)';
            } else {
                daysSelect[index].style.color = subtitleColor;
            }
        });
    }
}
controlColor();