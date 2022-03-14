//Reduce possui 1 parâmetro a mais que é o ACUMULADOR.
//Acumula dentro de si resultados
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (acc, curr) => acc + curr;
const sumNumbers1 = numbers.reduce(getSum);
console.log(sumNumbers1); // 113

//Reduce recebe 2 parâmetros (função) e (valor inicial)
const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers2 = numbers2.reduce(getSum2, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers2); // 113


//O valor inicial (segundo parâmetro reduce) pode começar com outros valores
const sum = numbers2.reduce((acc, curr) => acc + curr, 10)
console.log('-------', sum) //123

//encontrar maior valor em um array
const numeros = [50, 85, -30, 3, 15];
const biggestNumber = numeros.reduce((acc, curr) => curr > acc ? acc = curr : acc, 0)
//ou
const getBigger = (bigger, number) => ((bigger > number) ? bigger : number); //uma vez que o resultado der bigger -> ele fica com aquele resultado -> chegou no 85, compara 85 e -30 -> ainda é bigger -> 85 e 3 -> bigger ainda é 85 -> 85 e 15 -> bigger.
const bigger = numeros.reduce(getBigger, 0);
console.log(biggestNumber);
console.log(bigger);



//somando valores pares do array
const numbersArray = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const getEven = numbersArray.filter((number) => number % 2 === 0);
console.log(getEven);
const sumEven = getEven.reduce((acc, number) => acc + number, 0);
console.log(sumEven);

//apenas reduce:
const reduceSumEven = numbersArray.reduce((acc, number) => number % 2 === 0 ? acc + number : acc, 0);
console.log(reduceSumEven)