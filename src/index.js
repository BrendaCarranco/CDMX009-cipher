/* import cipher from './cipher.js'; 

console.log(cipher); 

let info = document.getElementById("mes");
	let result = info.options[e.selectedIndex].value;
    prompt(result); //ID002 *///////////////////////// RIP


    import cipher from './cipher.js';

    let paterno = '';
    let mes = 0;
    let cifrar = document.getElementById('botonCifrar');
    let desCifrar = document.getElementById('botonDesCifrar');
    
    function obtenerDatos() {
        paterno = document.getElementById('cifrar').value;
        mes = parseInt(document.getElementById('movimientos').value);
    }
    
    cifrar.onclick = function() {
        obtenerDatos(paterno, mes);
        document.getElementById('resultadoCifrado').value = cipher.cifrado(paterno, mes);
    
        document.getElementById('resultadoCifrado').innerHTML = cipher.cifrado(paterno, mes);
    };
    
    desCifrar.onclick = function() {
        obtenerDatos(paterno, mes);
        document.getElementById('resultadoDesCifrado').value = cipher.desCifrado(paterno, mes);
    
        document.getElementById('resultadoDesCifrado').innerHTML = cipher.desCifrado(paterno, mes);
    } 
    
    console.log(cipher);
    
    




