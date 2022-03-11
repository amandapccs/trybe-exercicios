//Ao invés de fazer um for loop para ver se o aluno foi aprovado:
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]



////////////////////////Fazer um forEach()!
const students2 = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students2.forEach((student, index) => {
      if (student.grade >= 60) {
        students2[index].approved = 'Aprovado';
      } else {
        students2[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students2);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]




  ///Outro exemplo sem HOFs, encontrando primeiro divisível por 5:
  const numbers1 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5is;
for (let index = 0; index < numbers1.length; index += 1) {
  if (numbers1[index] % 5 === 0) {
    firstMultipleOf5is = numbers1[index];
    break;
  }
}

console.log(firstMultipleOf5is);
// 50


//Com .find():
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
firstMultipleOf5 = numbers.find((element) => element % 5 === 0)

console.log(firstMultipleOf5);
// 50


///parâmetros de FOR EACH:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});


//tabuada do 2:
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numeros.forEach(multipliesFor2);

//exemplo com index
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, array) => {
  array[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]