const button = document.getElementById('add-button'); //pegou botão
const input = document.getElementById('phrases-input'); //pegou input
const list = document.getElementById('phrases-list'); //espaço para lista de frases

function insertPhraseInDOM() {
  const phrasesList = JSON.parse(localStorage.getItem('phrases')); //pegou phrases que foi atualizada (oldList.push)
  const listLength = phrasesList.length - 1; //o tamanho da lista phrases é length-1(tipo index)
  const phraseText = phrasesList[listLength]; //phrases na posição [index]
  const phrase = document.createElement('li'); //cria li
  phrase.innerText = phraseText; //texto da li phrase vai ser phrases[index]
  list.appendChild(phrase); //add. li phrases à lista
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases')); //pega chave phrases
  const phraseText = input.value; //o que for digitado no input é phraseText 
  oldList.push(phraseText); //empurra o que foi digitado no input para phrases
  localStorage.setItem('phrases', JSON.stringify(oldList)); //phrases é "atualizada" com novos valores
  insertPhraseInDOM(); //chama função
}

function initialRenderization() {
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};