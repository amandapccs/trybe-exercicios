//achar o primeiro elemento que satisfaça a condição passada.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12

//Find não altera o array a qual foi acionado.

//Exemplos:
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];

function isCherries(element) {
    return element.name === 'cerejas'; //retorna elemento (inventory[2]) cujo name contem cerejas
}

console.log(inventory.find(isCherries));
// { name: 'cerejas', quantity: 5 }
//melhor com arrow:
const result = inventory.find( element => element.name === 'cherries' );


////////////////////////////////////
//Exercícios:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    const find = numbers.find((element) => element % 3 === 0 && element % 5 === 0);
    return find;
}

console.log(findDivisibleBy3And5())


//Exercicio 2:
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const find = names.find((element) => element.length === 5)
  return find;
}

console.log(findNameWithFiveLetters());

//Exercício 3:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    const findSong = musicas.find((element) => element.id === id);
    return findSong;
  }
  
  console.log(findMusic('31031685'))