
    import cipher from './cipher.js';

    let palabra = " ";
    let mes = 0;
    let cifrar = document.getElementById ('continuarCodigo');
    
    function obtenerDatos () {
        palabra = document.getElementById('continuarCodigo');
        mes = parseInt(document.getElementById('mesesCode');
    }

    cifrar.onclick = function () {
        obtenerDatos(palabra,mes);
        document.getElementById('resultadoCifrado').value = cipher.cifrado (palabra,mes);
        document.getElementById('resultadoCifrado').innerHTML = cipher.cifrado(palabra,mes);
    }

    console.log(cipher);
    
    




