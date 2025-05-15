'use strict';

function presentacionPersona(){
    console.log(`Hola, soy ${this.name}, tengo ${this.age} años y soy ${this.profession}.`)
}

const persona1 = {
    name: 'Cristian',
    age: 22,
    profession: 'programador'
}

const persona2 = {
    name: 'Katherine',
    age: 25,
    profession: 'arquitecta'
}

presentacionPersona.call(persona1);
presentacionPersona.call(persona2);