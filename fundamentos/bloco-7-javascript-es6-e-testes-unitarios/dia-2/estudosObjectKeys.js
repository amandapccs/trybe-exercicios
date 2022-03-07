const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    author: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  
  for (const property in coolestTvShow) {
    console.log(property); // <-- for in pega chave
  }
  
  // name
  // genre
  // author
  // favoriteCharacter
  // quote
  // seasons



// MAS HÁ UMA FORMA MAIS ROBUSTA DE TRABALHAR OBJETOS E SEUS VALORES:
// --> Object.keys(objeto) <--
// É usado para LISTAR AS CHAVES de um obj, retornando-as em um array.

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]





// Exercício de fixação
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  //Meu jeito, bem mais fácil:

  const getSkills = object => {
    for (const index in object) {
        console.log(`Habilidade ${index}, nível ${object[index]}`);
    }
}
getSkills(student1);