//HOF que imprime na tela cada valor do array:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

//estrutura
/*
Suas partes:
--- arrayOfValues - Nome do array que será percorrido;
--- .forEach - A HOF , pode ser, .find , .some , .every ;
--- element - Valor do elemento do array;
--- (element) => {console.log('Cada elemento do array:', element); --- função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyGrade .
*/

//o primeiro parâmetro de uma arrow function é o elemento do array.
meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});
//^ o exemplo acima com FOR EACH verifica se CADA ELEMENTO é % 2.

//Por outro lado, com FIND ele encontraria o PRIMEIRO elemento %.
meuArray.find(elemento => elemento % 5 === 0)
