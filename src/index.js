import cipher from './cipher.js';

document.getElementById('continuarCodigo').onclick = function () {

    // 1.- necesitamos el texto y el numero
    let texto = document.getElementById('curpCode').value
    let offset = parseInt(document.getElementById('mesesCode').value)
    // 2.- usamos cipher para convertir
    let result = cipher.encode(texto, offset)
    console.log(result)
    //3.- mostramos resultado en el html
    document.getElementById('resultado').innerText = ('Tu código es: ' + result)
};

console.log(cipher);

