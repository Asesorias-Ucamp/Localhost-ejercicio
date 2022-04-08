function inicio(){
    document.querySelector('#guardar').addEventListener('click', function() {
        guardar()
    });
    document.querySelector('#eliminar').addEventListener('click', function() {
        eliminar()
    });
    document.querySelector('#limpiar').addEventListener('click', function() {
        limpiar()
    });

}

function guardar(){
    const key = document.querySelector('#key').value;
    const value = document.querySelector('#value').value;

    if(key && value !== ''){
        localStorage.setItem(key, value);
        document.querySelector('#key').value = '';
        document.querySelector('#value').value = '';
        if(localStorage.getItem(key)){
            alert('Se guardo correctamente');
        }
    }
}

function eliminar(){
    const key = document.querySelector('#key').value;
    if(localStorage.getItem(key)){
        localStorage.removeItem(key)
        alert('Se elimino correctamente');
    }
}

function limpiar(){
    localStorage.clear();
    alert('Se borro la base de datos local');
}

window.onload = inicio;