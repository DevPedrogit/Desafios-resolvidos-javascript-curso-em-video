
let btnCalcular = document.getElementById('calcular');

function calcular () {
        let num = document.getElementById('num').value;

        if (num == 0) {
            alert('Você deve digitar um numero');
        } else {

            for (let i = 1; i <= 10; i++) {
                let createTr = document.createElement('tr');
                let createTh = document.createElement('th');
        
                let createTexTh = document.createTextNode((num + ' X ' + i) + ' = ' + (num * i));
        
                createTh.appendChild(createTexTh);
                createTr.appendChild(createTh);
                document.querySelector('table').appendChild(createTr);

            }

            btnCalcular.setAttribute('disabled', '');
        }
}
btnCalcular.addEventListener('click', calcular);