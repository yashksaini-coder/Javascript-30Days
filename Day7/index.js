console.log("-------------------------------------------------");
console.log("Activity 1: ");

// Task 1: Create an object representing a book with properties like `title`, `author`, and `year`, and log the object to the console.

const book = {
    title: "Rich Dad Poor Dad",
    author: "Robert T Kiyosaki",
    year: "2020"
};
console.log(book);

// Task 2: Access and log the `title` and `author` properties of the book object.

console.log("The title of the Book is:- " + book.title);
console.log("The author of the book is:- " + book.author);

console.log("-------------------------------------------------");
console.log("Activity 2: ");

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.bookDetails = function() {
    return `The book ${this.title} is written by ${this.author}.`;
};

console.log(book.bookDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function(year) {
    this.year = year;
    return this;
};

console.log(book.updateYear("2021"));

console.log("-------------------------------------------------");
console.log("Activity 3: ");

// Task 5: Create a nested object representing a library with properties like `name` and `books` (an array of book objects), and log the library object to the console.

const library = {
    name: "Library of Congress",
    books: [
        {
            title: "EGO is the Enemy",
        }
    ]
};

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log("The name of the library is:- " + library.name);
console.log("The titles of the books in the library are:- " + library.books[0].title);  


console.log("-------------------------------------------------");
console.log("Activity 4: ");