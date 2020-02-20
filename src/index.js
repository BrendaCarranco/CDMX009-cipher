import cipher from './cipher.js';

continuarCode.onclick = function () {
    let word = document.getElementById('curpCode').value;
    let offset = parseInt(document.getElementById('mesesCode').value);
    let result = cipher.encode(word, offset);
    console.log(result);
    document.getElementById('resultado').innerHTML = 'Tú código es ' + result;
};

continuarUser.onclick = function () {                       //deshabilitar
    let word = document.getElementById('curpUser').value;
    let offset = parseInt(document.getElementById('mesesUser').value);
    let result = cipher.decode(word, offset);
    console.log(result);
    document.getElementById('resultadoDes').innerHTML = 'Tú código es: ' + result;
};







/*document.getElementById('continuarCode').onclick = function () {

    // 1.- necesitamos el texto y el numero
    let word = document.getElementById('curpCode').value;
    let offset = parseInt(document.getElementById('mesesCode').value);
    // 2.- usamos cipher para convertir
    let result = cipher.encode(word, offset);
    console.log(result); // (mostramos en consola para verificar que haga la f{})
    //3.- mostramos resultado en el html
    document.getElementById('resultado').innerText = ('Tu código es: ' + result);
}; */



console.log(cipher);