var button = document.getElementById('btn');

function antesEdepois () {
    var numero = parseInt(prompt('Digite um numero inteiro qualquer'));
    
    alert('antes do ' + numero + ', temos o numero ' + (numero - 1));
    alert('Depois do ' + numero + ', temos o numero ' + (numero + 1));
}
button.addEventListener('click', antesEdepois);