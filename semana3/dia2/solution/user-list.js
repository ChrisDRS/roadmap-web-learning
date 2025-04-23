function user(firstName, lastName, currentAge) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.currentAge = currentAge;
}

const user1 = new user('Cristian', 'Romero', 22);
console.log(Object.keys(user1));
console.log(Object.values(user1));

