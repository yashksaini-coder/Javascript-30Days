// console.log("-------------------------------------------------");
// console.log("Activity 1: ");

// // Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds");
//     }, 2000);}
// );

// // promise.then((message) => {
// //     console.log(message);
// // });


// // Task 2: Create a promise that resolves with a message after a 2-second timeout and handle the error using catch().
// const promise2 = new Promise((resolve, reject) => {
//     let success = false;
//     setTimeout(() => {
//         if (!success) {
//             reject("Promise rejected after 3 seconds");
//         } else {
//             resolve("Promise resolved after 3 seconds");
//         }
//     }, 3000);}  
// );

// promise2.then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// });


// console.log("-------------------------------------------------");
// console.log("Activity 2: ");


// // Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("First data received from server");
//     }, 3500);
// });

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Second data received from server");
//     }, 3500);
// });

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Third data received from server");
//     }, 3500);
// });

// promise3.then((message) => {
//     console.log(message);
//     return promise4;
// }).then((message) => {
//     console.log(message);
//     return promise5;
// }).then((message) => {
//     console.log(message);
// });

// console.log("-------------------------------------------------");
// console.log("Activity 3: ");

// // Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

// let promise6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise after 5 seconds");
//     },5000);
// })

// async function asyncFunc(){
//     let result = await promise6;
//     console.log(result);
// }

// asyncFunc();

// // Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// promise8= new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         reject("Promise rejected after 5 seconds");
//     },5000);
// })

// async function asyncFunc2(){
//     try{
//         let result = await promise8;
//         console.log(result);
//     } catch(error){
//         console.log(error);
//     }
// }

// asyncFunc2();


// console.log("-------------------------------------------------");
// console.log("Activity 4: ");

// // Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.

// let promise9 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             resolve(data);
//         })
//         .catch(error => {
//             reject(error);
//         });
//     }, 6000);
// });

// promise9.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// // Task 7: Use the `fetch` API to get data from a public API and log the response data to the console using async-await.

// let promise10 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data => {
//             resolve(data);
//         })
//         .catch(error => {
//             reject(error);
//         });
//     }, 6500);
// });

// async function asyncFunc3(){
//     try{
//         let result = await promise10;
//         console.log(result);
//     } catch(error){
//         console.log(error);
//     }
// }

// asyncFunc3();

console.log("-------------------------------------------------");
console.log("Activity 5: ");

// Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.

let promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First data received from server");
    }, 3500);
});

let promise12 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second data received from server");
    }, 3500);
});

let promise13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third data received from server");
    }, 3500);
});

Promise.all([promise11, promise12, promise13]).then((values) => {
    console.log(values);
});


// Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.

let promise14 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First data received from server");
    }, 3500);
});

let promise15 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Second data received from server");
    }, 3500);
});

let promise16 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third data received from server");
    }, 3500);
});


Promise.race([promise14, promise15, promise16]).then((value) => {
    console.log(value);
});
