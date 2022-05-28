// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// console.log(numbers);

//2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let soma = 0;
let media = 0
for(let i = 0; i < numbers.length; i += 1){
    soma +=numbers[i];
    media = soma / numbers.length;
    
}
 if(media>20){
    console.log("Valor maior que 20")
}else{
    console.log("Valor menor ou igual a 20")
}console.log(media);


