let btn = document.getElementById('btn');
let essencia = document.getElementById('ess');
let concentracao = document.getElementById('conc');
let base = document.getElementById('base');
let ml = `ml - `


btn.addEventListener('click', function(){
let concFixa = 0.38;
let essen = essencia.value;
let conc = concentracao.value;
let porcento = '%'
let cc = '38%'

if (conc>0) {
    let calc = essen/(conc/100)
    // CALCULO CASO A CONCENTRAÇÃO SEJA DESCRITA COMO > 0%
    alert(calc.toPrecision(4)+ml+conc+porcento)
    base.placeholder = (calc.toPrecision(4)+ml)
} else { 
    let calc = essen/concFixa
    // CALCULO CASO A CONCENTRAÇÃO NAO SEJA DEFINIDA, UTILIZANDO 38% COMO VALOR PADRAO
    alert(calc.toPrecision(4)+ml+cc)
    base.placeholder = (calc.toPrecision(4)+ml)
}

// CASO QUEIRA MUDAR PARA A CONTA ORIGINAL:

// MUDE A LINHA 16 POR let calc = essen/(conc/100)-essen 

// E A LINHA 20 POR let calc = (essen/concFixa)-essen
})