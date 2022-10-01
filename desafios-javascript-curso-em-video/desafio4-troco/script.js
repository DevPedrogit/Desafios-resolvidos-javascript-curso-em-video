let btnComprar = document.getElementById('btnComprar');

function comprarProduto () {
    let nomeDoProduto = prompt('Que produto você está comprando?');
    let precoDoProduto = prompt('Quanto custa o ' + nomeDoProduto + ' que você está comprando?');
    let valorEntregado = prompt('Qual foi o valor que você deu para pagar ' + nomeDoProduto + '?');
    alert('Você comprou ' + nomeDoProduto + ' que custou R$ ' + precoDoProduto + '.');

    alert('Deu R$ ' + valorEntregado + ' em dinheiro e vai receber R$ ' + (valorEntregado - precoDoProduto) + ' de troco.');

    alert('Volte sempre!!');

}
btnComprar.addEventListener('click', comprarProduto);