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
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  //Exercício 1
  function addDays() {
    for(let i = 0; i < dezDaysList.length; i+= 1) {
      let days = document.createElement('li');
      days.innerText = dezDaysList[i];
      let daysList = document.querySelector('#days')
      days.className = "day"
      if (days.innerText == 24 || days.innerText == 25 || days.innerText == 31) {
        days.className = "day holiday"
      }

      if (days.innerText == 4 || days.innerText == 11 || days.innerText == 18 || days.innerText == 25) {
        days.className = "day friday"
      }

      if (days.innerText == 25) {
        days.className = "day holiday friday"
      }
      daysList.appendChild(days);
    }
    
  }

  addDays()

  //exercicio 2
  const divButtonsContainer = document.querySelector('.buttons-container')

  function createButton(string) {
    let button = document.createElement('button');
    button.innerText = string;
    button.id = 'btn-holiday';
    divButtonsContainer.appendChild(button);
  }
  createButton("Feriado");

  //exercicio 3
  const button = document.querySelector('#btn-holiday');
  const holidayDays = document.getElementsByClassName('holiday')

  button.addEventListener('click', changeHolidayColor);

  function changeHolidayColor() {
    for(i = 0; i < holidayDays.length; i+= 1) {
      if (holidayDays[i].style.background == "red") {
        holidayDays[i].style.background = "rgb(238,238,238)";
      } else {
        holidayDays[i].style.background = "red";
      }
    }
  }

  //exercicio 4
  function createFridayButton(string) {
    let button = document.createElement('button');
    button.innerText = string;
    button.id = "btn-friday";
    divButtonsContainer.appendChild(button);
  }
  createFridayButton('Sexta-feira');

  //exercício 5
  const fridayButton = document.getElementById('btn-friday');
  const fridayDays = document.getElementsByClassName('friday')
  fridayButton.addEventListener('click', changeFridayColor);

  function changeFridayColor() {
    for(i = 0; i < fridayDays.length; i+= 1) {
      if (fridayDays[i].style.color == "pink") {
        fridayDays[i].style.color = "#777";
      } else {
        fridayDays[i].style.color = "pink"
      }
    }
  }

  //exercício 7
  divMyTasks = document.querySelector('.my-tasks')

  function addAssignment(string) {
    let assign = document.createElement('span');
    assign.innerText = string;
    divMyTasks.appendChild(assign)
  }

  addAssignment("cozinhar")

  const tarefa = document.querySelector(".my-tasks span")
  tarefa.addEventListener('click', crossedOut);

  function crossedOut(event) {
    if(event.target.style.textDecoration == "line-through") {
      event.target.style.textDecoration = "none"
      } else {
      event.target.style.textDecoration = "line-through"
    }
  }

  //exercicio 8
  function addSubtitle(cor) {
    let subtitle = document.createElement('div')
    subtitle.style.background = cor;
    subtitle.className = "task";
    divMyTasks.appendChild(subtitle)

  }

  addSubtitle("pink")