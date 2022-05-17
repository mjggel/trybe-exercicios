// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


// console.log("Boas Vindas ", info.personagem);

// 🚀 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';

// console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto.

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

// for(let key in info){
//     console.log(key, ":", info[key]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e 
// Pato Donald e 
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

// let infoDois = {
    // personagem: 'Tio Patinhas',
    // origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    // nota: 'O último MacPatinhas',
    // recorrente: 'Ambos recorrentes',
//   };


//   for (let keys in info && infoDois){
    //   console.log(keys + ":", info[keys], "e", infoDois[keys])
//   } ****************************************************************** VOLTAR PARA RESOLVER ESSE ****************************************************************************************


// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// // console.log("O livro favorito de", leitor.nome,leitor.sobrenome,"se chama:" + leitor.livrosFavoritos.titulo);

// console.log(leitor.livrosFavoritos[])
//   } ********************************************************************** ESSE TAMBÉM ****************************************************************************************
