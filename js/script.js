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

let resultado  = document.getElementById("resultado");

function calcular(){
    let homem = inputHomem.value;
    let mulher = inputMulher.value;
    let crianca = inputCrianca.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePMulher(duracao) * mulher + carnePHomem(duracao) * homem + (carnePCrianca(duracao)/2 * crianca);
    let qtdTotalCerveja = cervejaPP(duracao) * mulher + cervejaPP(duracao) * homem;
    let qtdTotalRefrigerante = refrigerantePP(duracao) * homem + refrigerantePP(duracao) * mulher + (refrigerantePP(duracao)/2 * crianca);
    
    resultado.innerHTML = `<h1>Você vai precisar de </h1>`
    resultado.innerHTML += `<span><img src="./imagens/carvão.png" alt="carvão">${Math.round((qtdTotalCarne/1000) / 1.2)  }Kg</span>`
    resultado.innerHTML += `<span><img src="./imagens/bife.png" alt="carne">${qtdTotalCarne/1000}Kg</span>`
    resultado.innerHTML += `<span><img src="./imagens/cerveja.png" alt="cerveja">${Math.ceil(qtdTotalCerveja/1000)}L ou ${Math.ceil(qtdTotalCerveja/355)} Latas</span>`
    resultado.innerHTML += `<span><img src="./imagens/refrigerante.png" alt="refrigerante">${Math.ceil(qtdTotalRefrigerante/1000)}L ou ${Math.ceil(qtdTotalRefrigerante/2000)} Grr de 2L </span>`
    


}
function carnePHomem (duracao) {
    if (duracao >=6 ){
        return 650;
    }else{
        return 400;
    }
}
function carnePMulher (duracao) {
    if (duracao >=6 ){
        return 550;
    }else{
        return 300;
    }
}
function carnePCrianca (duracao) {
    if (duracao >=6 ){
        return 325;
    }else{
        return 200;
    }
}
function cervejaPP (duracao) {
    if (duracao >=6 ){
        return 2000;
    }else{
        return 1200;
    }
}
function refrigerantePP (duracao) {
    if (duracao >=6 ){
        return 1500;
    }else{
        return 1000;
    }
}

/*
let inputHomem = document.getElementById("homem");
let inputMulher = document.getElementById("mulher");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado  = document.getElementById("resultado");

function calcular(){
    let homem = inputHomens.value;
    let mulher = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePHomem(duracao) * homem + carnePMulher(duracao) * mulher + (carnePCrianca(duracao));
    let qtdTotalCerveja = cervejaPP(duracao) * (homem + mulher);
    let qtdTotalRefrigerante = refrigerantePP(duracao) * (homem + mulher) + (refrigerantePP(duracao)/2 * criancas);
    
    resultado.innerHTML = `<h1>Você vai precisar de </h1>`
    resultado.innerHTML += `<span>${qtdTotalCarne/1000}Kg de Carne </span>`
    resultado.innerHTML += `<span>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja </span>`
    resultado.innerHTML += `<span>${Math.ceil(qtdTotalRefrigerante/2000)} Garrafas de Refrigerante </span>`

}

function carnePHomem (duracao) {
    if (duracao >=6 ){
        return 650;
    }else{
        return 400;
    }
}
function carnePMulher (duracao) {
    if (duracao >=6 ){
        return 550;
    }else{
        return 300;
    }
}
function carnePCrianca(duracao) {
    if (duracao >=6 ){
        return 325;
    }else{
        return 200;
    }
}
function cervejaPP (duracao) {
    if (duracao >=6 ){
        return 2000;
    }else{
        return 1200;
    }
}
function refrigerantePP (duracao) {
    if (duracao >=6 ){
        return 1500;
    }else{
        return 1000;
    }
}*/