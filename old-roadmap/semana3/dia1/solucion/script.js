class user {
    constructor(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this.actualAge = age;
    }

    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    despedida() {
        return `${me.name()}: Good bye, ${this.firstName}`;
    }
}

const me = new user('Cristian', 'Romero', 22);

console.log(`${me.name()} de ${me.actualAge} años`);

user.prototype.nationality = 'panameño';

console.log(`${me.name()} es ${me.nationality}`);

console.log(me.hasOwnProperty("lastName"));
console.log(Object.getPrototypeOf(me));
console.log(Object.keys(me));
console.log(Object.values(me));


const myFather = new user('Felix', 'Romero', 62, 'nada');
const myMother = new user('Noris', 'Salas', 42, 'nada');


// console.log(myFather.despedida())
// console.log(myMother.despedida())