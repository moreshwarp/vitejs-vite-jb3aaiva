// Most important in Javascript

console.log("Callback functions in Javascript");

console.table("Will deep dive into folowing Questions");

// 1. What is callback function in JS?

// 2. JS is Synscronous and  single threaded language

// 3. Blocking the main thread 

// 4. Deep about Event listners?

// 5. Closures demo with Event listners?

// 6. Scope Demo with the Event listners

// 7. Garbage Collections & removeEventListener?


// Fucntions are 1st class Citizens in Javascript
console.log("What is callback function in JS?");

// You can take a function and pass it to an another function, this function which you take and pass it on as an argument to an another function 
// is know as callback function 


// This feature is more powerfull as it give us whole asyncronous world in single synchrounous and single threaded language 


// Let's deepdive using setTimeout function 

setTimeout(function () {
  console.log("Timer");
}, 5000);

// setTimeOut function will be called and here the callback function is been passed as an argument to the setTimeOut also along with it after 5000ms the function will be called and print the value or whatever code is about to execute mean while this function be store in an seprate memory loaction and a timer of 5000ms will be attached to it and as JS is single threaded language 

// Here it will callback function, this offers the power of asynchronous, even though being an synchronous, single threaded laguage, also by doing this as JS exextion dont wait for 5000ms and it quickly moves to the next line.

function x(y) {
  console.log("x"); // will print x
  y(); // calling the argument i.e. another callback function and print y.
}  // Now, while the flow of execution here, it would store the copy of this functionin the memory.

x(function y() {
  console.log("Y"); 
});

// here the function is been called and argument to is been passed i.e. also a function i.e callback fucntion it will print the value for fucntion 

// Hence, 1st "x" will be printed and then the value "y" will be printed and then once the 5000ms are done the value "Timer" will be printed or logged on the console

// In conclusion the setTimeOut asynchronous operation is not possible without the callback function
// We gave the call back to setTimeOut and it executed after some time i.e 5000ms

// if you see in the call stack the x and y are there in the call stack i.e. these functions are there in the callstack and once after the 5000ms are done the setTimeOut Function will be pop up in the call stack 

// So now every execution that takes place in JS is using the Call Stack, so when there any opertion that blocks the call stack then this is  know as blocking the main thread

// Suppose your fucntion either x() or y()  have humangous line of code to execute so it would take muach time to execute the code and till that time other fucntions and code has to wait. 

// And hence everything will be blocked.

// Till that time no other code or all the other code apart form x() and y() will have to wait for the execution as JS has only one CALL STACK and one MAIN THREAD, it JS engine won't be able to execute the other code.

// hence, we say and follow the rule i.e. we should never block our main thread i.e. CALL STACK 

// Hence, we should alway take use of async operation given in the JavaScript, one of the example of SetTimeOut in order to prevent it from halting i.e. Blocking the main thread i.e. CAll STACK i.e also know as main thread.

// If JS did not had the callback functions, and 1st class functions, we could not have pass this functions to an another functions We wont be able to perform asynchronous oprations

// So Using the web API i.e. setTimeOut and callback functions, we are able to do the asynchronous operations in JS

