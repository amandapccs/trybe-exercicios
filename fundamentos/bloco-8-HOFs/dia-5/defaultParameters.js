//Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // Welcome usuário!
//Default é utilizando quando nenhum argumento é passado

//fixando:
const multiply = (number, value = 1) => number * value;
  
console.log(multiply(8));