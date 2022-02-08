//Functions
//Modularizam programas -> em partes menores
//Funções podem ter parâmetros ou não:
//se a função tiver o objetivo de cumprimentar a pessoa que está executando o programa pelo nome, tal como: "Bom dia, João!", ela vai precisar receber o nome da pessoa como parâmetro.
//Porém, se ela foi desenvolvida apenas para dar "Bom dia!", um parâmetro não é necessário.

function bomDiaTryber(nome) {
    console.log('Bom dia, ' + nome);
  }
  
  bomDiaTryber('João'); // Bom dia, João
  bomDiaTryber('Julia'); // Bom dia, Julia
  bomDiaTryber('Marcelo'); // Bom dia, Marcelo



///////////////////sem parametro
  function bomDia() {
    return 'Bom dia!';
  }
  
  console.log(bomDia()); // Bom dia!





///////////////////sem parametro
let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado



///////////////// com parametro
function soma(a, b) {
    return a + b;
  }
  
console.log(soma(5, 2)); // 7





///////////com parametro

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
      return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
      return segundoNum + ' é maior que ' + primeiroNum;
    } else {
      return 'Os números são iguais';
    }
  }
  
  console.log(maiorNum(10, 20)); // 20 é maior que 10
  console.log(maiorNum(2, -5)); // 2 é maior que -5
  console.log(maiorNum(1, 1)); // Os números são iguais