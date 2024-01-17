/*DOM PARA INICIANTES
O que é o DOM*/
/*DOCUMENT OBJECT MODEL (DOM)
É uma interface que representa documentos HTML e XML através de objetos. 
Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.*/
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
//Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

/*WINDOW E DOCUMENT
São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.*/
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1
document.body; // Retorna o body
/*window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.*/

/*NODE
Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. 
Element é um tipo de objeto Node.*/
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

function callbackh1(){
  console.log("Clicou em " , titulo.innerText);
}

titulo.addEventListener('click', callbackh1());
// ativa a função callback ao click no titulo

/*EXERCÍCIO*/
// Retorne o url da página atual utilizando o objeto window
const pagina = window.location.href;
console.log("1 - ", pagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log("2 - ", elementoAtivo);

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log("3 - ", linguagem);

// Retorne a largura da janela 
const largura = window.innerWidth;
console.log("4 - ", largura);
