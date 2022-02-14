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
  

//Exercício 1
  createDaysOfTheWeek();
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const days = document.getElementById('days');
  
  for(index = 0; index < dezDaysList.length; index+= 1) {
    let dayDez = document.createElement('li')
    dayDez.innerText = dezDaysList[index];
    dayDez.className = "day"
    if (dayDez.innerText == 24 || dayDez.innerText == 31 || dayDez.innerText == 25) {
        dayDez.className = "day holiday"
    }

    if (dayDez.innerText == 4 || dayDez.innerText == 11 || dayDez.innerText == 18 || dayDez.innerText == 25) {
        dayDez.className = "day friday"
    }

    days.appendChild(dayDez);
  }

  //Exercício 2

  let buttonContainer = document.querySelector('.buttons-container')

  function createButton(string) {
    const button = document.createElement('button');
    button.innerText = string;
    button.id = "btn-holiday";
    buttonContainer.appendChild(button)

  }

    createButton("Feriado")

//Exercício 3
const button = document.querySelector('#btn-holiday')
button.addEventListener('click', addColorHoliday)
let holidayColor = 'red';
let holidayOriginalColor = 'rgb(238,238,238)'

function addColorHoliday () {
    const holidays = document.getElementsByClassName('day holiday')
    for(let index = 0; index < holidays.length; index+= 1) {
        let dayHoliday = holidays[index];
       if (dayHoliday.style.background === holidayColor) {
           dayHoliday.style.background = holidayOriginalColor;
       } else {
           dayHoliday.style.background = holidayColor;
       }
    }
}


//Exercício 4
function createButtonFriday(string){
    const buttonFriday = document.createElement('button');
    buttonFriday.id = "btn-friday"
    buttonFriday.innerText = string;

    buttonContainer.appendChild(buttonFriday);
}

createButtonFriday("Sexta-feira")

//Exercício 5
const buttonFriday = document.querySelector('#btn-friday')
buttonFriday.addEventListener('click', modifyText);
const fridays = document.getElementsByClassName('day friday');

let fridayOriginalColor = '#666';
let fridayNewColor = 'pink'


function modifyText() {
    for (index = 0; index < fridays.length; index += 1) {
        if (fridays[index].style.color == fridayNewColor) {
            fridays[index].style.color = fridayOriginalColor;
        } else {
            fridays[index].style.color = fridayNewColor;
        }
    }
}

//Exercício 6
const calendarDays = document.querySelector('#days');

calendarDays.addEventListener('mouseover', zoomIn);
calendarDays.addEventListener('mouseout', zoomOut)

function zoomIn(event) {
    event.target.style.fontSize = "30px"
}

function zoomOut(event) {
    event.target.style.fontSize = "18px"
}

//Exercício 7
const divTasks = document.querySelector('.my-tasks')

function addAssignment(string) {
    let assignment = document.createElement('span');
    assignment.innerText = string;
    divTasks.appendChild(assignment)
}

addAssignment("cozinhar")

//Exercício 8
function addColorfulSubtitle (string) {
    let divSubtitle = document.createElement('div');
    divSubtitle.style.background = string;
    divSubtitle.className = "task";
    divTasks.appendChild(divSubtitle);
}

addColorfulSubtitle("pink");
addColorfulSubtitle("yellow")

//Exercicio 9
 const myTask = document.querySelector('.task');
 const selectedTask = document.getElementsByClassName('task selected');


 myTask.addEventListener('click', taskSelected)

 function taskSelected(event) {
    if (selectedTask.length === 0) {
        event.target.className = 'task selected';
    } else {
        event.target.className = 'task';
    }

}

//Exercicio 10
calendarDays.addEventListener('click', setTaskColorToDay)
let taskDiv = document.querySelector('.task')
let taskColor = taskDiv.style.backgroundColor;

function setTaskColorToDay(event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        event.target.style.color = selectedTask[0].style.backgroundColor;
    } else if (event.target.style.color == taskColor) {
        event.target.style.color = 'rgb(119,119,119)'
        console.log(eventTargetColor);
    }
}