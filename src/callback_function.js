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
}, 500);