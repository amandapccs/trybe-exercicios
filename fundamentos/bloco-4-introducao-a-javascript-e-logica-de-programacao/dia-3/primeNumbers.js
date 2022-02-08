//4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let primeNumbers = [];

for(let number = 0; number <= 50; number+= 1) {
    let isPrime = true;
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            isPrime = false;
        }
    }
    if(isPrime) {
        primeNumbers.push(number)
    }
}
console.log(primeNumbers);

////Maior número primo
highestPrime = 0;
for(let index = 0; index < primeNumbers.length; index+= 1) {
    if(primeNumbers[index] > highestPrime) {
        highestPrime = primeNumbers[index]
    }
}
console.log(highestPrime);