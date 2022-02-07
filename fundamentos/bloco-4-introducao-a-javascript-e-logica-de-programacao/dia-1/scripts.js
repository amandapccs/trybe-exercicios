const myName = 'Amanda';
const birthCity = 'Brasilia';
let birthYear = 1995;


console.log(myName, birthCity, birthYear);
///////////////////////////////////////////

// Tipos de referência e tipos de valores //

let movie = 'Avengers'; //string literal
let score = 10.89; //number literal
let isValid = true; //boolean
let name; //undefined
let color = null; //espera redefinição de valor

///////////////////////////////////////////

// Operadores aritméticos:

let salary = 3500;
// console.log(salary + salary);
// console.log(salary - salary);
// console.log(salary * salary);
// console.log(salary / salary);
// console.log(3 ** 3);

//incrementar ++
//decrementar --

salary++
console.log(salary)

///////////////////////////////////////////

// Exercício typeof

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)
// console.log(typeof isEnrolled)
// console.log(typeof patientInfo)
// console.log(typeof patientEmail)
// console.log(typeof patientAge) //undefined

///////////////////////////////////////////

//Exercício 2
const base = 5;
let height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2);
console.log(area, perimeter);

///////////////////////////////////////////

//If, else
let trybe = 15;

if (trybe >= 14 && trybe < 14.40) {
    console.log('Esquenta');
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log('Aula ao vivo');
}
else if (trybe >= 19.40 && trybe < 20) {
    console.log('Fechamento')
} else {
    console.log('Fora dos momentos síncronos')
}
//Exercício if, else
const nota = 75;

if (nota >= 80) {
    console.log('Parabéns, você foi aprovade!')
}
else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera')
} else {
    console.log('Você foi reprovade')
}

///////////////////////////////////////////
//Operadores lógicos
//&&, || e ! -> and, or e not


//AND &&
const comida = 'pão na chapa';
const bebida = 'cafézinho';


if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo); //FALSE

//Exercício &&
const currentHour = 4;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
    message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) {
    message = 'Hmm, cheiro de café recém passado';
}

console.log(message)

//Exercício OR ||
weekDay = 'sábado';

if (weekDay === 'segunda' || weekDay === 'terça' || weekDay === 'quarta' || weekDay === 'quinta' || weekDay === 'sexta') {
    console.log('Oba, mais um dia de aprendizado na Trybe :D')
} else {
    console.log('FINALMENTE, descanso merecido!')
}

//Operador NOT !
//Podemos gerar valor oposto fazendo !variavel
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

//truthy e falsy
//STRINGS
const squirtle = "melhor pokemon inicial";
console.log(!squirtle); // false

//NUMBERS
console.log(!42); // false
console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

//VALORES NULOS
console.log(!null); // true

//UNDEFINED
console.log(!undefined); // true

//SWITCH CASE
let trafficLight = 'blah';
switch (trafficLight) {
  case "vermelho":
    console.log('Pare!');
    break;
  
  case "amarelo":
   console.log('Atenção');
   break;

 case "verde":
    console.log('Siga');
    break;
  default: //quando nenhum é atendido
    console.log('Valor não identificado')
}

//Exercício switch case
let situação = 'lista';
switch (situação) {
  case "aprovado":
    console.log('Você foi aprovade!')
    break;
  case "lista":
    console.log('Você está na nossa lista de espera')
    break;
  case "reprovado":
    console.log('Você foi reprovade')
    break;
  default:
    console.log('Não se aplica')
}