// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

/*const a = 50;
const b = 25;

// Adição (a + b)
let soma = a + b;
console.log(soma);

// Subtração (a - b)
let subtracao = a - b;
console.log(subtracao);

// Multiplicação (a * b)
let mulplicacao = a * b;
console.log(mulplicacao);

// Divisão (a / b)
let divisao = a / b;
console.log(divisao);

// Módulo (a % b)
let modulo = a % b;
console.log(modulo);*/

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. 
/*const a = 100;
const b = 50;

if(a>b){
    console.log("'a' é maior que 'b'")
}else{
    console.log("'b' é maior que 'a'")
}*/

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
/*const n1 = 100;
const n2 = 50;
const n3 = 25;

if(n1 > n2 && n1 > n3){
    console.log("n1 é o maior dos três")
}else if(n2 > n1 && n2 > n3){
    console.log("n2 é o maior dos três")
}else if(n3 > n1 && n3 > n2){
    console.log("n3 é o maior dos três")
}*/

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

/*const valor = 0;

if(valor > 0){
    console.log("positivo")
}else if(valor<0){
    console.log("negative")
}else{
    console.log("zero")
}*/

// 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

/*const a = 30; 
const b = 90;
const c = 90;

if((a+b+c) == 180){
    console.log("true")
}else if((a+b+c)!= 180 && (a || b || c)>0){
    console.log("false")
}else if((a || b || c) < 0){
    console.log("ERRO!!!!")
}*/

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "PeaO";
const piece = peca.toLowerCase();

switch(piece){
    case "bispo":
        console.log("Move-se na diagonal");
        break;
    case "peao":
        console.log("Move-se apenas uma casa em frente. Apenas captura peças na diagonal. Pode mover-se duas casas no primeiro movimento do jogo.");
        break;
    case "cavalo":
        console.log("Seu movimento é em forma de L. Pode pular outras peças em seu caminho.");
        break;
    case "rei":
        console.log("Move-se em todas as direções apenas uma casa por vez");
        break;
    case "rainha":
        console.log("Pode se mover em todas as direções quantas casas desejar.");
        break;
    case "torre":
        console.log("Movimenta-se apenas na vertical e horizontal. Quantas casas desejar.");
        break;
    default:
        console.log("Erro: peça inválida"); 
}