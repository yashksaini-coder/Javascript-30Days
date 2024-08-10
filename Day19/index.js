console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

let pattern = /JavaScript/g;
let str = "JavaScript is a scripting language. JavaScript is used for web development. JavaScript makes web pages interactive.";
let matches = str.match(pattern);

console.log(matches);

//  Task 2: Write a regular expression to match all digits in a string. Log the matches.

pattern = /\d/g;
str = "There are 12 months in a year.";
matches = str.match(pattern);

console.log(matches);


console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

pattern = /[A-Z][a-z]+/g;
str = "The quick brown fox Jumps over the lazy dog.";
matches = str.match(pattern);

console.log(matches);

//  Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

pattern = /\d+/g;
str = "There are 12 months in a year.";
matches = str.match(pattern);

console.log(matches);


console.log("-------------------------------------------------");
console.log("Activity 3: ");



console.log("-------------------------------------------------");
console.log("Activity 4: ");



console.log("-------------------------------------------------");
console.log("Activity 5: ");



console.log("-------------------------------------------------");