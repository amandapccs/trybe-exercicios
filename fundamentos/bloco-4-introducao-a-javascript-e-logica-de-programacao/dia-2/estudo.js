//ARRAYS
let pizzas = ['4 queijos', 'frango com catupiry', 'marguerita', 'palmito', 'chocolate'];
//            ^ posição 0     ^ 1                   ^ 2          ^ 3

pizzas[5] = 'peito de peru' //corro risco de sobscrever
pizzas.push('calabresa') //não corro risco de sobscrever, vai para última posição

console.log(pizzas)
console.log(pizzas.sort());
console.log(pizzas.length)
console.log(pizzas[0]);

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);
}

//Acessando informações nas arrays:
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask); // Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask); // Brincar com o cachorro

//Manipulando array:
tasksList.push('Fazer exercícios da Trybe');  // adiciona ao final
tasksList.unshift('Acordar') //adiciona ao início
console.log(tasksList)

tasksList.pop() //remove última tarefa
tasksList.shift() //remove primeira tarefa
console.log(tasksList)

let indexOfTask = tasksList.indexOf('Reunião'); //descobrir o índice de um item
console.log(indexOfTask);

///////////////////////////////
//EXERCÍCIO 1 - Obtenha o valor "Serviços" do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2 - Procure o índice do valor "Portfólio" do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercício 3 - Adicione o valor "Contato" no final do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato')
console.log(menu);

////////////////////////////////////////////////////////////////////
//FOR
let numero = 7;
for(let index = 1; index <= 9; index++) {
    console.log(numero * index);
}

let listaDePessoas = ['Amanda', 'Mateus', 'Henry'];
for(let index = 0; index < listaDePessoas.length; index+= 1) {
    console.log('Boas vindas, ' + listaDePessoas[index] + '!')
}

//Exercício 1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

/////////////////////////////////////////////////////////////////
//For/of
//O for/of nos permite criar loops em objetos iteráveis como strings, arrays, entre outros.
//Ele NÃO altera o array/objeto/string, apenas traz seus valores.

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

let word = 'Hello';
for (let letter of word) {
    console.log(letter)
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

let arrayOfNumbers = [10, 20, 30];
for (let sum of arrayOfNumbers) {
    sum += 1;
    console.log(sum);
}
// resultado:
// 11
// 21
// 31

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let eachName of names) {
    console.log(eachName)
}