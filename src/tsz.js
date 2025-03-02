
// console.log("Example 1");

// let a = 10;
// console.log(b);
// var b = 100;
// console.log(b);


console.log("Example 2");

// variable with let a is not avalaible to access its in TDZ 

// console.log(a);  // not imitilized error but why?

// Temporal Dead zone cant access before initilization but yes a and b both variable are hosited

let a = 10; // initilized 

// variable with let a is not avalaible to access its in TDZ 


// The time when the variable a was hosted till the time variable a was initilized is know as TDA TEMPORAL DEAD ZONE(this time is nothing but)

console.log(b);

var b = 100;

console.log(b);

console.log(window.a); // undefined 

console.log(window.b); // 100

console.log("########### Example for const");

// const k;
// k= 100; // Syntax Error as the syntax says that the value of k should be initilized at the time of decleration only

const k = 10000;

// k = 50000; // Type error as we are assinging the new value to k which is already been defined


console.log(k);

console.log(j); // Reference error : j is not defined





