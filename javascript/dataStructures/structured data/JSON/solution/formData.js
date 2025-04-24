const form = document.getElementById('form');
form.addEventListener('submit', function(formControl){
    formControl.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const hobbies = document.getElementById('hobbies').value;

    const user = {
        name: name,
        age: age,
        email: email,
        hobbies: hobbies
    }

    const userJS = JSON.stringify(user, null, 2);
    localStorage.setItem('user', userJS);


    document.getElementById('users').textContent = userJS;
    console.log(JSON.parse(userJS));
});

document.addEventListener("DOMContentLoaded", () => {
    const userJS = localStorage.getItem('user');
    if (userJS) {
        document.getElementById('users').textContent = userJS;
    }
});
