import cipher from './cipher.js';

let palabra = " ";
let mes = 0;
let cifrar = document.getElementById('continuarCodigo');

function obtenerDatos() {
    palabra = document.getElementById('curpCode').value;
    mes = parseInt(document.getElementById('mesesCode').value);

}

document.getElementById('continuarCodigo').onclick = function () {
    console.log("click")
    // 1.- necesitamos el texto y el numero
    let texto = document.getElementById('curpCode').value
    let offset = parseInt(document.getElementById('mesesCode').value)
    // 2.- usamos cipher para convertir
    let result = cipher.encode(texto, offset)
    console.log("apostamos a que devuelve vacio?", result)
    //3.- mostramos resultado en el html
    document.getElementById('resultado').innerText = ('Tu código es: ' + result)
};
//document.getElementById('resultadoCifrado').value = cipher.cifrado(palabra, mes);
console.log(cipher);

