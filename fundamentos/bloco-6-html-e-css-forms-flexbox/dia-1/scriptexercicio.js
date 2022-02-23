// Usar preventDefault() no botão submit
const submitButton = document.querySelector("#submit");

function stopAction(event) {
  event.preventDefault();
}

submitButton.addEventListener("click", stopAction);
