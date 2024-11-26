let btn = document.getElementById('btn');
let essencia = document.getElementById('ess');
let concentracao = document.getElementById('conc');
let base = document.getElementById('base');

btn.addEventListener('click', function(){
    let essen = Number(essencia.value);
    let conc = Number(concentracao.value);
    let porc = conc/100;
    let calc = (essen/porc);
    // CASO FOR MUDAR O CALCULO PARA A PORCENTAGEM REAL, TROQUE A LINHA 10 PELA LINHA 12:
    // let calc = (essen/porc) - essen;
    let ml = `ml`
    alert(calc.toPrecision(4)+ml);
    base.placeholder = calc.toPrecision(4) + ml
})