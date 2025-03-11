// Function Statement
// This is nothing but the fucntion statment


// function x() {
//   console.log("Function x called");
// }

// x();

// Function Expression 
// Ex. The function expression is when the function is been assigned to a variable that fucntion can be anonymous function.

// var y = function() {
// console.log("Function Expression, y() is been called ");
// }

// y();

// x();  // function x will be called 
// function x() {
//   console.log("Function x called");
// }

// Diff. between Function Statment and Function Statment
// - Hosting as the y is variable if we try to print the y i.e. console.log(y) it would give undefined and 
// - as its a variable and we are calling it in for y() i.e. invoking the function which even does not exist.
// y();  // Will give an error that the y is not the function 

// console.log(y);
// var y = function() {
//   console.log("Function Expression, y() is been called ");
// }

// Function Decleration
//  Function Decleration and Fucntion Statment is one and the same thing.



// Anonymous Function 

//  Anonymous Fuction is the function which can't be indentified 
// Ex.
// function () {
//   console.log("Ananomyus Fucntion");
// }
// However on execution this function would give the error and hence this function needs to be assigned to a variable, hence 
// ananymous functions are used where functions are used as value, similar exaample as function expression.

// Named Function Expression

// Function with name is been assigned to variable is know as NAMED FUNCTIONS
// Ex.
// var xcx = function hh() {
//   console.log("INVOKED NAMED FUNCTION");
//   // hh(); // Recursive mode 
// }
// xcx();

// Difference between Parameters & Arguments ?

// function xx(param1, param2) {
//   console.log(param1 , param2);
// }

// var argu2, argu1;
// xx(argu1, argu2); // undefined undefined // as global variable will be binded to window object.

// First Class Functions

//  When a function is been used as the parameter or the function is been returened.
//  The ablility of the JS Engine to use the, function as the paramter i.e. as value and return the function is known as First class Fucntion.


// Arrow Functions
// Came up in ES6 standardization, all these Function expression, Function Statment can be covered in Arrow Functions.


