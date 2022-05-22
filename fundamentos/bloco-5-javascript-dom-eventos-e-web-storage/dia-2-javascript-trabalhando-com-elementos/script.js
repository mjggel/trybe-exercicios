//1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titulo1 = document.createElement('h1');
    titulo1.innerText = 'Exercício 5.2 - JavaScript DOM'
document.body.appendChild(titulo1);

//2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let main = document.createElement('main');
    main.className = 'main-content';
document.body.appendChild(main);

//3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section');
    section.className = 'center-content';
main.appendChild(section);

//4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p');
    paragraph.innerText = 'algum texto';
section.appendChild(paragraph);

//5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let section1 = document.createElement('section');
    section1.className = 'left-content';
main.appendChild(section1);

//6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let section2 = document.createElement('section');
    section2.className = 'rigth-content';
main.appendChild(section2);

//7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let img = document.createElement('img');
    img.className = 'small-image';
    Image.src = 'https://picsum.photos/200'
section2.appendChild(img);

//8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let list = document.createElemente('ul');
section2.appendChild(list);
    let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
        for (let i in numbers) {
            let listaNumbers = document.createElement('li');
                listaNumbers.innerHTML = numbers[i];
                list.appendChild(listaNumbers);
        }

//9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let sla = 0; index <= 2; index += 1){
    let titulos = document.createElement('h3');
}
main.appendChild(titulos);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//1. 🚀 Adicione a classe title na tag h1 criada;
titulo1.className = 'title';

//2. 🚀 Adicione a classe description nas 3 tags h3 criadas;
for (let sla = 0; index <= 2; index += 1){
    titulos.className = 'description';
}
    
//3. 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
main.removeChild(section2);

//4. 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
section2.style.marginRight = 'auto';

// 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
// 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
