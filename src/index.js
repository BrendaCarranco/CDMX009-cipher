import cipher from './cipher.js';

let continueCode = document.getElementById('continueCode');
let continueUser = document.getElementById('continueUser');

continueCode.onclick = function () {
    let word = document.getElementById('curpCode').value;
    let offset = parseInt(document.getElementById('mesesCode').value);
    let result = cipher.encode(offset, word);
    document.getElementById('resultado').innerHTML = 'Tú código es:  ' + result;
};

continueUser.onclick = function () {
    let word = document.getElementById('curpUser').value;
    let offset = document.getElementById('mesesUser').value;
    let result = cipher.decode(offset,word);
    document.getElementById('resultadoDes').innerHTML = 'Tu usuario es: ' + result;
};

let btnCode = document.getElementById('noCode');
let btnUser = document.getElementById('noUser');

btnCode.onclick = function () {
    document.getElementById('p1').classList.add('hide');
    document.getElementById('p2').classList.remove('hide')
}

btnUser.onclick = function () {
    document.getElementById('p1').classList.add('hide');
    document.getElementById('p3').classList.remove('hide');
}