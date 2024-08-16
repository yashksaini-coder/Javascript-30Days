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

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

pattern = /\((\d{3})\)\s(\d{3})-(\d{4})/;
str = "(123) 456-7890";
matches = str.match(pattern);

console.log(matches);

//  Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

pattern = /(\w+)@(\w+\.\w+)/;
str = "yashsaini" + "@" + "gmail.com";
let email = "yashkumarsaini0123456789@gmail.com";
matches = email.match(pattern);

console.log(matches);


console.log("-------------------------------------------------");
console.log("Activity 4: ");

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

pattern = /\b\w+/g;
str = "Hello, World!";
matches = str.match(pattern);

console.log(matches);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

pattern = /\w+\b/g;
str = "The quick brown fox jumps over the lazy dog.";
matches = str.match(pattern);

console.log(matches);


console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let password = "Password@123";
let isValid = pattern.test(password);

console.log(isValid);

//  Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

pattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[a-zA-Z0-9-]+)*\/?$/;
let url = "https://www.google.com";
isValid = pattern.test(url);

console.log(isValid);

console.log("-------------------------------------------------");