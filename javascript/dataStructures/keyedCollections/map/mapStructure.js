let studentQualification = new Map([
    ["Cristian Romero", 1.9],
    ["Katherine Espinoza", 1.4]
]);

function student(name, age, id, career, yearCareer){
    this.name = name;
    this.age = age;
    this.id = id;
    this.career = career;
    this.yearCareer = yearCareer;
}

let student1 = new student('Cristian Romero', 22, '5-716-2358', 'Desarrollo de software', 4);
let student2 = new student('Katherine Espinoza', 25, '', 'Edificaciones', 3)

function infoStudent(obj) {
    let mapStudent = new Map(Object.entries(obj));
    let salida = "";
    mapStudent.forEach((value, key) => {
        salida += `${key}: ${value}\n`;
    });

    return salida;
}

console.log(infoStudent(student1));
console.log(infoStudent(student2));

studentQualification.forEach((value, key) => {
    console.log(`\n${key}: ${value}`);
});