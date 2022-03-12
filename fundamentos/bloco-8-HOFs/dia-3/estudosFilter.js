const enviarEmail = (pessoaAprovada) => {
    const mensagem = `${pessoaAprovada.email}: Parabéns ${pessoaAprovada.nome}! Sua nota foi de ${pessoaAprovada.nota}`
    console.log(mensagem);
}

const listaDePessoasAprovadas = [
    {nome: 'Jerry Mors', email: 'jerry@example.com', nota: 51},
    {nome: 'Ada Lovelace', email: 'ada@example.com', nota: 150},
    {nome: 'Rabbit Jessica', email: 'jess@example.com', nota: 101},
    {nome: 'Carla Neta', email: 'carla@example.com', nota: 99}
]

const pessoasFiltradas = listaDePessoasAprovadas.filter((pessoa) => pessoa.nota > 100);
console.log(pessoasFiltradas);

pessoasFiltradas.forEach(enviarEmail) ///pessoasFiltradas.forEach(pessoa) => enviarEmail(pessoa))

//Filter recebe como parâmetros: elemento, index e array.

///////////////////////////////////////////////////////////
//Outro exemplo:
const numbers = [19, 21, 30, 3, 45, 22, 15];
const isEven = (number) => number % 2 === 0;
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
//ou
const evenNumbers2 = numbers.filter((number) => number % 2 === 0)


//////////////////////////////////////////////////////////////
//Outro exemplo: Pessoas que ainda não podem dirigir
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

const cantDrive = objPeople.filter((person) => person.age < 18)
console.log(cantDrive)

//ou
const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
);
  
console.log(verifyAgeDrive(objPeople));

//////////////////////////////////////////////////////////////
//Outra forma de usar filter é tirar o que não queremos:
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const removeStudentByName = (name, listStudents) => listStudents.filter((student) => student !== name);

const removeRicardo = removeStudentByName('Ricardo', arrayMyStudents);
console.log(removeRicardo)
