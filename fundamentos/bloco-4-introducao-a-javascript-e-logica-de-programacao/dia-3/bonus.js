//1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
//declarar variável n com qualquer valor
//declarar variavel com valor *
//declarar variavél vazia para somar os * -> concatenar *****
// fazer for para variavél vazia ir "guardando" cada *, por quantas vezes valer n
//fazer outro for para exibir n vezes a variavel com os * que foram guardados

let n = 5;
let star = '*'
let multi = "";
// for (let index = 1; index <= n; index++) {
//     multi += star;
//     // console.log(star + multi) inprime ** *** **** *****
    
// }
// for (let index = 1; index <= n; index++) {
//     console.log(multi)
    
// } 


// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
for (let index = 1; index <= n; index++) {
    multi += star;
    console.log(multi);
    
}