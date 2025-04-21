function user(first, last, age, alergic) {
    this.firstName = first;
    this.lastName = last;
    this.actualAge = age;
    this.actualAlergic = alergic;
}

const me = new user('Cristian', 'Romero', 22, 'camarones');

user.prototype.name = function() {
    return `${this.firstName} ${this.lastName}`;
}

console.log(`${me.name()} de ${me.actualAge} años`);

user.prototype.nationality = 'panameño';

console.log(`${me.name()} es ${me.nationality}`);

console.log(me.hasOwnProperty("lastName"));
console.log(Object.getPrototypeOf(me));
console.log(Object.keys(me));


const myFather = new user('Felix', 'Romero', 62, 'nada');
const myMother = new user('Noris', 'Salas', 42, 'nada');

user.prototype.despedida = function() {
    return `${me.name()}: Good bye, ${this.firstName}`;
} 

// console.log(myFather.despedida())
// console.log(myMother.despedida())