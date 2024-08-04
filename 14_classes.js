class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }

    updateAge(newAge) {
        this.age = newAge
    }

    static greetingMessage() {
        return 'Hello, World! I am a static method.'
    }
}

class Student extends Person {
    static studentCount = 0
    constructor(name, age, studentId) {
        super(name, age)
        this.studentId = studentId
        Student.studentCount++
    }

    greet() {
        console.log(`Hi, I am ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`);
    }

    static getStudentCount() {
        return Student.studentCount
    } 
}

const person1 = new Person("Himanshu", 24)
person1.greet()
person1.updateAge(135)
person1.greet()

const student1 = new Student("Ramu", 17, 12345) 
const student2 = new Student("Ramu", 17, 12345) 
const student3 = new Student("Ramu", 17, 12345) 
const student4 = new Student("Ramu", 17, 12345) 
const student5 = new Student("Ramu", 17, 12345) 
const student6 = new Student("Ramu", 17, 12345) 
student1.greet()

console.log(Person.greetingMessage())
console.log(Student.getStudentCount())