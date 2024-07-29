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

// Task 5: Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person3 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    static genericGreet(){
        console.log("Hello, nice to meet you!");
    }
}   

Person3.genericGreet();

// Task 6: Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student3 extends Person{
    static totalStudents = 0;
    constructor(name, age, studentId){
        super(name, age);
        this.studentId = studentId;
        Student3.totalStudents++;
    }

    getStudentId(){
        console.log(`Student ID: ${this.studentId}`);
    }
}       

const student3 = new Student3("John", 25, 12345);

console.log(`Total number of students: ${Student3.totalStudents}`);

console.log("-------------------------------------------------");
console.log("Activity 4: ");