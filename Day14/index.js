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

