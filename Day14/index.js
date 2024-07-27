console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Define a class `Person` with properties `name` and `age`, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("John", 25);
person.greet();


// Task 2: Add a method to the `Person` class that updates the `age` property and logs the updated age.

class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    set setage(age){
        this.age = age;
    }
}

const person2 = new Person2("John", 25);
person2.greet();
person2.setage = 30;
person2.greet();

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Define a class `Student` that extends the `Person` class. Add a property `studentId` and a method to return the student ID. Create an instance of the `Student` class and log the student ID.

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId(){
        console.log(`Student ID: ${this.studentId}`);
    }
}       

const student = new Student("John", 25, 12345);
student.getStudentId();

// Task 4: Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.

class Student2 extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}.`);
    }
}           

const student2 = new Student2("John", 25, 12345);
student2.greet();

console.log("-------------------------------------------------");
console.log("Activity 3: ");