/*
Homem Carne - 400 gr por pessoas + de 6 horas - 650
mulher Carne - 300 gr por pessoas + de 6 horas - 550
cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml

crianças valem por 0,5
*/
let inputHomem = document.getElementById("homem");
let inputMulher = document.getElementById("mulher");
let inputCrianca = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

let outputCarvao = document.querySelector('#carvao');
let outputCarne = document.querySelector('#carne');
let outputRefrigerante = document.querySelector('#refrigerante');
let outputCerveja = document.querySelector('#cerveja');

function calcular() {
    let homem = inputHomem.value;
    let mulher = inputMulher.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePMulher(duracao) * mulher + carnePHomem(duracao) * homem + (carnePCrianca(duracao) / 2 * crianca);
    let qtdTotalCerveja = cervejaPP(duracao) * mulher + cervejaPP(duracao) * homem;
    let qtdTotalRefrigerante = refrigerantePP(duracao) * homem + refrigerantePP(duracao) * mulher + (refrigerantePP(duracao) / 2 * crianca);

outputCarvao.value = `${Math.round((qtdTotalCarne / 1000) / 1.2)} Kg`
    outputCarne.value = `${(qtdTotalCarne / 1000)} Kg`
    outputRefrigerante.value = `${Math.ceil(qtdTotalRefrigerante / 1000)} L`
    outputCerveja.value = `${Math.ceil(qtdTotalCerveja / 269)} Latas`

}

function carnePHomem(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function carnePMulher(duracao) {
    if (duracao >= 6) {
        return 550;
    } else {
        return 300;
    }
}
function carnePCrianca(duracao) {
    if (duracao >= 6) {
        return 325;
    } else {
        return 200;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function refrigerantePP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

