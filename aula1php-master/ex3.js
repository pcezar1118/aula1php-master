

document.querySelector('button').addEventListener('click', soma);


function soma() {

let primeiroN = document.querySelector("#primeiroN").value;
let segundoN = document.querySelector("#segundoN").value;

document.querySelector("#resultado").innerHTML = resultado(primeiroN, segundoN);

}


function resultado(primeiroN, segundoN) {
    const DECIMAL = 10;
    return parseInt (primeiroN, DECIMAL) + parseInt(segundoN, DECIMAL);

}

