let btn = document.querySelector('button');

function converter () {
    let metros = prompt('Digite uma distância em metros (m)');

    let h2 = document.querySelector('h2');
    h2.innerHTML = 'A distância de ' + metros + ' metros, corresponde a...';

    let km = {nome: 'quilômetros (Km)', conta: metros / 1000}
    let hm = {nome: 'hectômetros (Hm)', conta: metros / 100}
    let dam = {nome: 'decâmetros (Dam)', conta: metros / 10}
    let dm = {nome: 'decimetros (dm)', conta: metros * 10}
    let cm = {nome: 'centimetros (cm)', conta: metros * 100}
    let mm = {nome: 'milimetros (mm)', conta: metros * 1000}
    
    let escalas = [km, hm, dam, dm, cm, mm];
    
    
    
    for (let i = 0; i < escalas.length; i++) {
        let resultado = document.querySelector('.resultados');
        let p = document.createElement('p')
        let text = document.createTextNode(escalas[i].conta + ' ' + escalas[i].nome);
        p.appendChild(text);
        resultado.appendChild(p);
        
    }
}


btn.addEventListener('click', converter);