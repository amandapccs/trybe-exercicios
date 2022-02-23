// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

// FUNÇÕES
function stopDefault(event) {
  event.preventDefault();
}

function onlyAs(event) {
  if (event.key !== "a") {
    event.preventDefault();
  }
}

// ADDEVENTLISTENERS
HREF_LINK.addEventListener("click", stopDefault);
INPUT_CHECKBOX.addEventListener("click", stopDefault);
INPUT_TEXT.addEventListener("keypress", onlyAs);
