const botao = document.getElementById('botao');
const fetchPersonagens = async () => {
  const url = 'https://swapi.dev/api/people';
  const personagens = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.results)
  .catch((error) => error.toString());
  return personagens;
};
//dúvida --> Caique utilizou async/await sem then. E além disso, disse que try/catch só se for desse jeito...não utilizar try com than?
const criaResumoPersonagem = async () => {
  const personagens = await fetchPersonagens();
  const resumo = document.getElementById('resume');
  const selectPersonagens = document.getElementById('personagens');
  const personagemEscohido = selectPersonagens.options[selectPersonagens.selectedIndex].value;
  const objPersonagem = personagens.find((element) => element.name === personagemEscohido);
  resumo.innerText = `Nome: ${objPersonagem.name},
  Altura: ${objPersonagem.height}cm,
  Peso: ${objPersonagem.mass}kg,
  Cor do cabelo: ${objPersonagem.hair_color},
  Cor dos olhos: ${objPersonagem.eye_color},
  Ano de nascimento: ${objPersonagem.birth_year},
  Genero: ${objPersonagem.gender}.`
};
  botao.addEventListener('click', criaResumoPersonagem);
window.onload = () => {
  // botao.addEventListener('click', criaResumoPersonagem);
};