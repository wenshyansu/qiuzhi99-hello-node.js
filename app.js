// console.log("Hello World");

// setTimeout(() => {
//     console.log("3 seconds have passed");
// }, 3000);

// setTimeout(function() {
//     console.log("3 seconds have passed");
// }, 3000);

// setInterval(() => {
//     console.log("2 seconds have passed");
// }, 2000);

var time = 0;

setInterval(() => {
    time += 2;
    console.log(time + " seconds have passed");
}, 2000);