'use strict';
function persona(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
}

function presentacionPersona(){
    console.log(`Hola, soy ${this.name}, tengo ${this.age} años y soy ${this.profession}.`);
}

const persona1 = new persona('Cristian', 22, 'programador');
const persona2 = new persona('Katherine', 25, 'arquitecta');

// Uso de call, explicit binding
presentacionPersona.call(persona1);
presentacionPersona.call(persona2);

// Uso de apply, explicit binding
presentacionPersona.apply(persona1);
presentacionPersona.apply(persona2);

// Uso de bind, explicit binding
const presentacionPersona1 = presentacionPersona.bind(persona1);
const presentacionPersona2 = presentacionPersona.bind(persona2);
/*
    A diferencia de call y apply, en bind se debe crear otra variable
    para poder ejecutar la función.
*/
presentacionPersona1();
presentacionPersona2();