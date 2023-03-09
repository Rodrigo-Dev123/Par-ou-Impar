const numero = Number(prompt('Digite um número para verificar se é Impar ou Par: '));

const numeroDocument = document.querySelector('.title');
const div = document.querySelector('.div');
const btn = document.querySelector('.botao');

let resultado = ''

if (numero % 2 === 0) {
    resultado = 'O número é Par.';
} else {
    resultado = 'O número é Ímpar.';
}

btn.addEventListener("click", function() {
    
    location.reload();
});

div.innerHTML += `<h1 class="title">${resultado}</h1>`
div.innerHTML += `<p class="p">Por favor, para verificar novamente recarregue a página!</p>`