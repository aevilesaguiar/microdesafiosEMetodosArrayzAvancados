//2)	Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let palavras = ['pedra','caminho','sozinho','fim'];
let numero=5;

let filtrarDados=palavras.filter((nomes)=>nomes.length<=numero);

console.log(filtrarDados);
