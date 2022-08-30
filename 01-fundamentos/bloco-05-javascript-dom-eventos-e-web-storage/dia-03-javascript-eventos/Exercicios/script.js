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


// 1
let decemberDaysList = [27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let Ul =  document.querySelector("#days");

function addElement(parent, child) {
    parent.appendChild(child);
}

function makeLi(classes, valores) {
    let newLi = document.createElement('li');
    newLi.classList.add(...classes);
    newLi.innerText = valores;
    return newLi;
}
for(let item of decemberDaysList) {
    addElement(Ul, makeLi(['day'], item));
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

function makeButton(content, param) {
    let newButton = document.createElement('button');
    newButton.innerText = content;
    newButton.className = param;
    return newButton;
}

addElement(document.querySelector(".buttons-container"), makeButton('Feriados', 'btn-holiday'));

// 3
function mudaBg() {
    const button1 = document.querySelector(".btn-holiday");
    button1.addEventListener('click', function(){
        let elements = document.getElementsByClassName("holiday");
        for (let index = 0; index < elements.length; index += 1){
            if(elements[index].style.backgroundColor === 'black') {
                elements[index].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                elements[index].style.backgroundColor = 'black';
            }
        }
    });
}
mudaBg();