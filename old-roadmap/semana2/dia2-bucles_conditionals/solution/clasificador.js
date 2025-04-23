document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const entrada = parseInt(document.getElementById('age').value);
    salida(entrada);
});

function clasificarEdad(edad) {
    let clasificacion = '';
    if(edad>=0) {
        if(edad<=12) {
            clasificacion = 'niños';
        } else if(edad<=17){
            clasificacion = 'adolescentes';
        } else if(edad<=64){
            clasificacion = 'adultos';
        } else if(edad>=65){
            clasificacion = 'adultos mayores';
        } 
    }
    return clasificacion
}

function salida(edad) {
    const title = document.getElementById('title');
    const salida = document.getElementById('salida');

    if(edad>=0 && edad<=120){
        const clasificacion = clasificarEdad(edad);

        title.textContent = `Su edad ingresada fue de ${edad} años.`;
        salida.innerHTML = `Su clasificación es para <b>${clasificacion}</b>`;
    } else {
        salida.textContent = 'Esta edad es invalida.';
        title.textContent = 'No hay clasificacion para esta edad.';
    }
}