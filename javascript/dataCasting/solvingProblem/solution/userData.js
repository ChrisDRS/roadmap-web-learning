const form = document.getElementById('form');
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Esto evita que el submit recargue la pagina
    
    // Captura de datos
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;
    const sub = document.getElementById('subscribe').checked;
    const ingreso = document.getElementById('stonks').value;
    const condiciones = document.getElementById('terms').value;

    // Guardar usuario
    const user = {
        name: nombre,
        age: Number(edad),
        sub: Boolean(sub),
        stonk: Number(ingreso),
        terms: Boolean(condiciones)
    }

    // test
    console.log(user)
});