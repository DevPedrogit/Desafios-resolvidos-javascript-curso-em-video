var button = document.getElementById('btn');

function boasVindas () {
    
    var nome = prompt('Qual é o seu nome?');
    var idade = prompt('Olá, ' + nome + '! Quantos anos você tem?');

    alert('Acabei de conhecer ' + nome + ', que tem ' + idade + ' anos de idade!');
    
}
button.addEventListener('click', boasVindas);