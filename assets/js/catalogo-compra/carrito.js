var cantidad = document.getElementById('cantidad');
var tu = document.getElementById('total-u');
var tp = document.getElementById('total-p');
var pu = document.getElementById('precioUnitario');

function act(){
    tu.innerText = cantidad.innerText; 
    tp.innerText = parseInt(cantidad.innerText) * parseInt(pu.innerText.replace('$',''));
}
