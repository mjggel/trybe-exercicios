// Acesse o elemento elementoOndeVoceEsta.
let whereIam = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let father = whereIam.parentElement;
    father.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let firstSonFirst = whereIam.firstElementChild;
    firstSonFirst.innerText = 'qlq coisa';

// Acesse o primeiroFilho a partir de pai.
let firstSonTst = father.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let firstSonTst1 =  whereIam.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let tst = whereIam.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let thirdSon = whereIam.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
let thirdSon1 = father.lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta.
let fatherElement = document.querySelector('#pai');
let siblingElement = document.createElement('section');
    fatherElement.appendChild(siblingElement);


// Crie um filho para elementoOndeVoceEsta.
let whereIamSon = document.createElement('section');
    whereIam.appendChild(whereIamSon);

// Crie um filho para primeiroFilhoDoFilho.
let firstSonFirstSon = document.createElement('section');
    firstSonFirst.appendChild(firstSonFirstSon);

// A partir desse filho criado, acesse terceiroFilho.
let thirdSon2 = firstSonFirstSon.parentElement.parentElement.nextElementSibling;