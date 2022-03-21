// operações assíncronas
setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000);
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

  // os console logs dentro do setTimeout são executados depois
  // É muito comum que esta função (setTimeout) seja utilizada para simular comportamentos assíncronos

////////////////////////////////
// Exercício de fixação

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]

////////////////////////
// Para que o console.log mostre o array correto, é necessário chamá-lo após os 3000 milissegundos

setTimeout(() => console.log(numbers), 3000);