//3)	Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os 
let alunos = [
    { nome: 'José', nota: 10 },
    { nome: 'Pedro', nota: 3 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Helen', nota: 5 },
    { nome: 'Sandra', nota: 10 }
];

 let result= alunos.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
  });

  console.log(result)

  let result2= alunos.sort(function (a, b) {
    if (a.nota < b.nota) {
      return 1;
    }
    if (a.nota > b.nota) {
      return -1;
    }
    return 0;
  });
  console.log(result2)