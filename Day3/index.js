console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

checker = (num) => {
    result = "";
    if (typeof num === "number") {
        if (num < 0){
            result = "Negative";
        }
        else if (num > 0){
            result = "Positive";
        }
        else{
            result = "Zero";
        }
        console.log(`The given number '${num}' is:- ${result}`);
    }
    else{
        console.log("Error encountered, Please provide a valid number.");
    }
}

checker(3);
checker(-3);
checker(0);

console.log("-------------------------------------------------");
// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

eligible = (age) => {
    if(typeof age === "number"){
        if (age >= 18){
            console.log(`The person is eligible to vote.`);
        }
        else{
            console.log(`The person is not eligible to vote.`);
        }
    }
    else(
        console.log("Error encountered, Please provide a valid age.")
    )
}

eligible(18);
eligible(17);

console.log("-------------------------------------------------");
console.log("Activity 2: ");
// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

largest = (num1, num2, num3) => {
    if(typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number"){
        if(num1 > num2){
            if(num1 > num3){
                console.log(`The largest number is: ${num1}`);
            }
            else{
                console.log(`The largest number is: ${num3}`);
            }
        }
        else{
            if(num2 > num3){
                console.log(`The largest number is: ${num2}`);
            }
            else{
                console.log(`The largest number is: ${num3}`);
            }
        }
    }
}
console.log("Given numbers are: 1, 2, 3");
largest(1, 2, 3);


console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console

day = (num) => {
    if (typeof num === "number"){
        switch(num){
            case 1:
                console.log("Day is: Sunday");
                break;
            case 2:
                console.log("Day is: Monday");
                break;
            case 3:
                console.log("Day is: Tuesday");
                break;
            case 4:
                console.log("Day is: Wednesday");
                break;
            case 5:
                console.log("Day is: Thursday");
                break;
            case 6:
                console.log("Day is: Friday");
                break;
            case 7:
                console.log("Day is: Saturday");
                break;
            default:
                console.log("Invalid day number. Please provide a valid number between 1-7.");
        }
    }
    else{
        console.log("Error encountered, Please provide a valid number.")
    }
}

day(4);

console.log("-------------------------------------------------");
// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

grade = (score) => {
    if (typeof score === "number"){
        switch(score){
            case score >= 90:
                console.log("Grade is: A");
                break;
            case score >= 80:
                console.log("Grade is: B");
                break;
            case score >= 70:
                console.log("Grade is: C");
                break;
            case score >= 60:
                console.log("Grade is: D");
                break;
            default:
                console.log("Grade is: F");
        }
    }
    else{
        console.log("Error encountered, Please provide a valid score.")
    }
}

grade(85);

console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

evenOdd = (num) => {
    if (typeof num === "number"){
        num % 2 === 0 ? console.log("Number is even.") : console.log("Number is odd.");
    }
    else{
        console.log("Error encountered, Please provide a valid number.")
    }
}

evenOdd(30);

console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

leap = (year) => {
    if (typeof year === "number") {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            console.log(`${year} is a leap year.`);
        } else {
            console.log(`${year} is not a leap year.`);
        }
    } else {
        console.log("Error encountered, Please provide a valid year.");
    }
}

leap(2020);
leap(2021);