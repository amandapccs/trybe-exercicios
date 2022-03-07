// new operator
// cria uma instancia de um tipo de objeto

//SINTAXE: new construtor[([argumentos])]
//construtor: Uma função que especifica o tipo da instancia do objetivo.
//argumentos: Uma lista de valores

function Carro() {}
carro1 = new Carro();

console.log(carro1.cor);    // undefined

Carro.prototype.cor = null;
console.log(carro1.cor);    // null

carro1.cor = "preta";
console.log(carro1.cor);   // preta

//Exemplos:
function Car(fabricante, modelo, ano) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
  }

  var meucarro = new Car("Eagle", "Talon TSi", 1993);
  var carrodoken = new Car("Nissan", "300ZX", 1992);

//Mais exemplos:
function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  
var rand = new Pessoa("Rand McNally", 33, "M");
var ken = new Pessoa("Ken Jones", 39, "M");

//Mais exemplos:
function Carr(fabricante, modelo, ano, dono) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
  }

var carro1 = new Carr("Eagle", "Talon TSi", 1993, rand);
var carro2 = new Carr("Nissan", "300ZX", 1992, ken);

//Ao invés de passar uma string ou valor inteiro quando criar os novos objetos, as definições acima passam objetos rand e ken como os parâmetros para os donos. Para descobrir o nome do dono do carro2, você pode acessar a seguinte propriedade:
carro2.dono.nome
