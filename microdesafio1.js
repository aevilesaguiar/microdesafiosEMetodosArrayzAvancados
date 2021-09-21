//1)	Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
// *A ideia do reduce, é produzir um único valor a partir de um array. 

let numero=[100,150,200,300,400,500];
let soma = numero.reduce(function(acumulador, numero){
    return acumulador + numero;
})
console.log(soma);

let operacao=numero.map(function(num){ // essa função por sua vez receberá um parâmetro que será os elementos do array
    return (num /soma);   //nesse caso temos tres elementos no arrau, então ele retornará os valores contidos no array numeros multiplicado por 2 3 vezes
});

console.log(operacao)

//com arrowFunction

let numero2=[100,150,200,300,400,500];
let soma2= numero2.reduce((acumulador, numero)=>acumulador+numero)
console.log(soma2);

let operacao1=numero2.map((num)=>(num/soma2));

console.log(operacao1);