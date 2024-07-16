console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

loop = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

loop();

// Task 2: Write a program to print the multiplication table of 5 using a for loop

table = () => {
    for(let i=0; i<=10; i++){
        console.log(5*i);
    }
}

table();

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

function sum(){
    let i = 1;
    let sum = 0;
    while(i<=10){
        sum += i;
        i++;
    }
    console.log(sum);
}

sum();

// Task 4: Write a program to print numbers from 10 to 1 using a while loop

function print(){
    let i = 10;
    while(i>=1){
        console.log(i);
        i--;
    }

}

print();

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop

// let j = 1;
// do {
//     console.log(j);
//     j++;
// } while (j <= 5);


// Task 6: Write a program to calculate the factorial of a number using a do...while loop

// factorial = (n) => {
//     let fact = 1;
//     let i = 1;
//     do{
//         fact *= i;
//     }while(i<=n);
//     console.log(fact);
// }

// factorial(5);

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Write a program to print a pattern using nested for loops:

// *
// **
// ***
// ****
// *****

function pattern(){
    for (let i = 1; i <= 5; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

pattern();


console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the `continue` statement.

function skip(){{
    for(let i=1; i<=10; i++){
        if(i==5){
            continue;
        }
        console.log(i);
        }
    }
}

skip();

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement.

function stop(){
    for(let i=1; i<=10; i++){
        if(i==7){
            break;
        }
        console.log(i);
    }
}

stop();