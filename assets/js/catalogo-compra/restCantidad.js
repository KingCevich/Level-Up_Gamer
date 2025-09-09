var cantidad = document.getElementById('cantidad');

function restCantidad(){
    if(parseInt(cantidad.innerText)>1){
                cantidad.innerText = parseInt(cantidad.innerText) -1;
        act();

    }
}