let inputAdultos = document.getElementById("Adultos");
let inputCrianacas = document.getElementById("Crianças");
let inputHoras = document.getElementById("Horas");
let resultado = document.getElementById("Resultado");
// console.log(inputAdultos, inputcrianaças, inputHoras); -> Só pega a estrutura, não oq tem no input
// console.log(inputAdultos.value, inputcrianaças.value, inputHoras.value); -> pega o valor q tem no input



function calcular() {
    console.log("Calculando....")

    adultos = inputAdultos.value;
    criancas = inputCrianacas.value;
    horas = inputHoras.value;

    let quantTotalCarne = (adultos * carnePP(horas)) + ((carnePP(horas) / 2) * criancas);

    let quantTotalCerveja = (adultos * cervejaPP(horas));

    let quantTotalBebidas = (adultos * bebidasPP(horas)) + ((bebidasPP(horas) / 2) * criancas);

    resultado.innerHTML = `<h3>Para uma duração de ${horas} horas:</h3>`
    resultado.innerHTML += `<p> ${quantTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p> ${quantTotalCerveja / 1000}L de Cerveja ≅ ${Math.ceil(quantTotalCerveja / 355)} Latas</p>`
    resultado.innerHTML += `<p> ${quantTotalBebidas / 1000}L de Bebidas (refri/água)</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}