var blocos = document.querySelectorAll('button');

function bloco1 () {
    alert('Voçê clicou no bloco 1')
}
blocos[0].addEventListener('click', bloco1);

function bloco2 () {
    alert('Voçê clicou no bloco 2')
}
blocos[1].addEventListener('click', bloco2);

function bloco3 () {
    alert('Voçê clicou no bloco 3')
}
blocos[2].addEventListener('click', bloco3);
