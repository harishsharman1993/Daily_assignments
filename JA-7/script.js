// Task -1. Using setTimeout
// Write a program that displays a message "Hello, world!" after 3 seconds

setTimeout(() => {
  console.log("hello world!");
}, 3000);

//Task-2 using set interval
// Write a program that prints "Tick" every 2 seconds.
const trick = "trick";
const myInterval = setInterval(() => {
  console.log(trick);
}, 2000);

//task3-Clear Interval
// Modify the previous program to stop printing "Tick" after it has printed 5
// times.
var count = 0;

const myInterval1 = setInterval(() => {
  if (count <= 5) {
    console.log("trick", count);
    count++;
  } else {
    clearInterval(myInterval);
  }
});

// Task-4  Simple Callback Function
function greet(name) {
  console.log("hello!", name);
}

const processUserInput = (greet) => {
  console.log("welcome1");

  greet("akhilesh");
};

processUserInput(greet);

//Using Callbacks with Timing Functions
function greet(name) {
    console.log( name);
  }
  
  const processUserInput1 = (greet) => {
    setTimeout(()=>{console.log("hello")},1000)
  
    setTimeout(()=>{greet("world");
  },2000);
}
  processUserInput1(greet)


//   Reflection Questions
//   1. What did you learn about JavaScript timing events and callbacks through this
//   task?
// Ans:i)javascript timing events  are handled by using web apis like settimeout and setInterval,clearInterval
// settimeout is used to execute asynchronous actions by event loop in call back queue
// wheras setInterval used to have repeated action as outcopme until heap memory is full in call stack.but we can limit these repeated action
// using clearInterval.
//   ii)In call back function we learnt how to pass the another function as an arguement to main function
// so that inner function is invoked without disturbing the main outer function.
// if the multiple call back functions are called within a main function will create a situation of the
// "call back hell"








//   2. How do setTimeout and setInterval differ in their usage?
// Ans:settimeout is a asynchronous call back function will execute simulataneously without disturbing main function of program
// settimeout can print a function only once after timer is been set
// the syntax of it is:setTimeout(function(){consolde.log("working")},timeout(secs))
// whereas
// setInterval is a asynchronous call back function will create an interval of few seconds, So that
// repeated times function will be invoked without interuppting the main thread of the program .
//  the syntax is difeerent from other async call back functions:
// setInterval(function(){console.log("working")},timeinterval(secs))





//   3. What are the advantages of using callbacks in JavaScript?
// Ans:1. it helps to async events and make the execution faster and simpler
// 2. using acll back function we can intregrate the one function with another function
//  in order to get required outcome
// 3. call back functions are main pillars to understand and will support promises concept 
// in javascript to make Jscript more modular aand easier to implement





