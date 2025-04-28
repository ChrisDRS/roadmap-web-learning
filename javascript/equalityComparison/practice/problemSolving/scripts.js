form = document.getElementById('form');
form.addEventListener('submit', function(formControl) {
    formControl.preventDefault();

    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const selectedType = document.querySelector('input[name="type"]:checked').id;

    let output;
    switch(selectedType){
        case 'looseEquality':
            output = value1 == value2;
        case 'strictEquality':
            output = value1 === value2;
        case 'sameValue':
            output = Object.is(value1, value2);
            break;
    }

    document.getElementById('output').textContent = `That's ${output}.`
});