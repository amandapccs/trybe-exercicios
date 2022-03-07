// Exercício 1: Escreva uma função que dado um valor numérico retorne se o valor é par.

const isEven = (number) => n % 2 === 0 ? true : false;
// não precisa necessariamente do ternário, apenas: const isEven = (number) => n % 2 === 0

// Exercício 2: Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares. Se nenhum número for par, ou o array for vazio a soma deve ser zero.

function evenSum(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i += 1) {
    console.log(i, sum);
    if (numberArray[i] % 2 === 0) {
     sum += numberArray[i];
      }
    }
  return sum;
}

const teste = [2, 3, 4, 2];
// console.log(evenSum(teste));

const evenSumArrow = (numberArray) => {
  let sum = 0;
  for (let number of numberArray) {
    sum += number % 2 === 0 ? number : 0;
  }
  return sum;
}

console.log(evenSumArrow(teste));

// Exercício 3: Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.
const number = text => typeof text === 'number';
console.log(number('oi'));