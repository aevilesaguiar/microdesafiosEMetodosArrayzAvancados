//Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
//Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:

let infoFazenda=[
    {nome:'Pedro', preco:10, qtdeVendida:10},
    {nome:'Mariana ', preco:15, qtdeVendida:60},
    {nome:'João', preco:5, qtdeVendida:70},
    {nome:'Fernanda', preco:30, qtdeVendida:50},
];

//1.	Calcular o lucro total de todos os produtos;

let lucroTotal = infoFazenda.reduce(function (acu, atual) {
    return acu + atual.qtdeVendida * atual.preco;
},0);

console.log(lucroTotal);

//com arrowFunctions
let lucroTotal2 = infoFazenda.reduce((acu, atual)=> acu + atual.qtdeVendida * atual.preco,0);

console.log(lucroTotal2);

//2.	Permitir pesquisar um produto pelo nome e calcular seu lucro total;

