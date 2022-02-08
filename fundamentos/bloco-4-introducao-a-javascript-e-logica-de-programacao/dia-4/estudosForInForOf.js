//pedidos de pizza
let pizzas = {
    sabor: 'palmito',
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(key); //mostra três propriedades
}

for (let key in pizzas) {
    console.log(pizzas)//mostra 3x o objeto completo
}


for (let key in pizzas) {
    console.log(pizzas.preco); //mostra 3x a chave preco
}

for (let key in pizzas) {
    console.log(pizzas[key]); //mostra valor dentro das propriedades
}

///////////////////
let pizzasDoces = ['chocolate', 'banana', 'morango'];
for (let key in pizzasDoces) {
    console.log(key); //mostra as posições do array: 0, 1 e 2
}

///EXEMPLOS FOR IN
let cars = ['Saab', 'Volvo', 'BMW'];

for (let index in cars) {
  console.log(cars[index]);
}

for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
}

//EXEMPLOS:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

for (let index in car) {
    console.log(index, car[index]); 
  }

// type Fiat
//model 500
//color white

/////////////////////////////////
//For of
//For in PERCORRE AS ->PROPRIEDADES<- DOS OBJETOS que forem enumeráveis ---> ou seja, for in retorna os índices/propriedades/chaves e NÃO os valores.
//For of retorna os valores das propriedades.
//Exemplo:
let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
};
//resultado: 0, 1, 2;

for (let value of food) {
    console.log(value);
  };
  //resultado: hamburguer, bife, acarajé;

////////////////////EXERCÍCIOS DE FIXAÇÃO
//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let key in names) {
    console.log('Olá ' + names[key]);
}
for (let value of names) { //names não é iterável??????????
    console.log('Olá ' + value);
}

//2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(index in car) {
    console.log(index, car[index])
}
