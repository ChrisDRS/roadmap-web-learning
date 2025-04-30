form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);

    const user = {
        name: name,
        age: age
    }

    try {
        if(!user.name) {
            throw new SyntaxError("Nombre invalido");
        } else if (!user.age) {
            throw new SyntaxError("Edad invalida");
        } else if (user.age>0 && user.age<=120){
            document.getElementById('result').textContent = 'Puede entrar';
        } else {
            document.getElementById('result').textContent = 'No puede entrar';
        }
    } catch(error){
        document.getElementById('result').textContent = error.message;
    } finally {
        document.getElementById('output').textContent = `${user.name} de ${user.age} años...`;
    }
})