const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function listTech(evento) {
  let classe = document.getElementsByClassName('tech')
  classe.classList.remove('tech');
  evento.target.className = 'tech';
}
firstLi .addEventListener('click', listTech);
secondLi.addEventListener('click', listTech);   
thirdLi .addEventListener('click', listTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', function (evento) {
  let texto = document.getElementsByClassName('tech');
  texto.innerText = evento.target.value;
});
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', function() {
  window.location.replace('https://mjggel.github.io/');
});
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', function (evento) {
  evento.target.style.color = 'red';
});

myWebpage.addEventListener('mouseout', function (evento) {
  evento.target.style.color = 'unset';
});