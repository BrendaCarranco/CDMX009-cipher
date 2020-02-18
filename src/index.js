/* import cipher from './cipher.js';

document.getElementById('continuarCodigo').onclick = function () {

    // 1.- necesitamos el texto y el numero
    let texto = document.getElementById('curpCode').value;
    let offset = parseInt(document.getElementById('mesesCode').value);
    // 2.- usamos cipher para convertir
    let result = cipher.encode(texto, offset);
    console.log(result);
    //3.- mostramos resultado en el html
    document.getElementById('resultado').innerText = ('Tu código es: ' + result);
};

console.log(cipher);

 */

import cipher from './cipher.js';

let word = '';
let offset = 0;
let cifrar = document.getElementById('continuarCodigo');
let descifrar = document.getElementById('continuarUsuario');


cifrar.onclick = function () {
    // 1.- necesitamos el texto y el numero     
    let word = document.getElementById('curpCode').value;
    let offset = parseInt(document.getElementById('mesesCode').value);
    // 2.- usamos cipher para convertir
    let result = cipher.code(word, offset);
    console.log(result);
    //3.- mostramos resultado en el html
    document.getElementById('resultado').innerText = ('Tu código es: ' + result);
}; 

descifrar.onclick = function () {
let wordUser = document.getElementById('codeUser').value;
let offsetUser = parseInt (document.getElementById('mesesUser').value);
let resultUser = cipher.decode (wordUser, offsetUser);
document.getElementById('resultadoUser').innerHTML = ('Tú codigo es ' + resultUser);

};