// accumulator -> snowball
const movements = [200, 500, 1000, -700, 3000];

const balance = movements.reduce((acc, curr, i, arr) => {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + curr
}, 0)
console.log(balance)
//movements.reduce((acc, curr) => acc + curr), 0);

//with for:
let balance2 = 0;
for (const mov of movements) balance2 += mov; /// in -> pega index / of -> pega elemento
console.log(balance2)

//getting max value in array:
const max = movements.reduce((acc, curr) => acc > curr ? acc : curr, movements[0])
//NEVER start maximum value with 0, there may be negative numbers
console.log(max)

//
const numbers = [2, 3, 6];
const sum = numbers.reduce((acc, curr) => acc + curr, 0)
console.log(sum);

// concanetar array de strings
const epic = ['A', 'long', 'time', 'ago,', 'in a', 'galaxy', 'far away'];

const phrase = epic.join(" ")
console.log(phrase)

const phraseReduce = epic.reduce((acc, word) => `${acc} ${word}`)
console.log(phraseReduce);

//array de objetos
const players = [
    {fullName: 'Adriano Imperador', email: 'didico@futebol.br'},
    {fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br'},
]

//inserindo entradas:
const playerObj = players.reduce((acc, player) => {
    acc[player.fullName] = player.email;
    return acc;
}, {})

const playerObj2 = players.reduce((acc, player) => {
    acc['fullName'] = player.fullName;
    return acc;
}, {})

console.log(playerObj)
console.log(playerObj2)