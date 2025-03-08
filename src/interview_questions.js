// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// var close = outer(); // this will return the function i.e. in tis case the inner function

// console.log(close); // // will print the function

// console.log("Example 2")
// function outer() {
//     var a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// var close = outer(); // this will return the function i.e. in tis case the inner function

// console.log(close); // // will print the function

// // Now if I do the following

// outer()(); // here the second () for will give a call to the inner function i.e in this case "inner()", and will print value of a. i.e. 10

// // logically we can say that the outer()() === close() i.e. in this case the close() will give call to inner function

// console.log("Example 3");

// function outest() {
//   function outer() {
//     var a = 10;
//     function inner() {
//       console.log(a);
//     }
//     return inner;
//   }
//   return outer;
// }

// var close = outest()();
// close(); // 10

// OR

// outest()()(); // 10

// OR

// let close = outest()()();



// console.log("Example 4");

// function outest() {
//   var c = 500;
//   function outer(b) {
//     var a = 10;
//     function inner() {
//       console.log(a,b,c);
//     }
//     return inner;
//   }
//   return outer;
// }

// let a = 1111;

// var close = (outest())("Unique Example")();// the call to the function  outer() to whihc the argument is been passed "Unique Example" and afte that we have () i.e. it as same meaning i.e. close() calling this function

// Advangates of closures 

// 1. Module patters 
//2. Function Curry
//3. Highorder Function
//4. Data Hiding and excaplution


// console.log("Data Hiding and excaplution");

// var counter = 0;

// function incrementCounter() {
//   counter++;
// }

// any one can access counter in our code 

// to overcome it 

// function counter() {
//   var count = 0;

//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   }
// }


// var x= counter();
// x(); // the count get update everytime as its value is update every time.
// x();
// x();


// here it would treat it as a fresh function call and y as altogeather differenct variable, here new independent copy will be created

// new counter altogeather and again will start from count = 1
// var y = counter();
// y();
// y();
// y();


// counter()();
// 1 // here you are just calling the function i.e. counter() which returns inner function along wit its scope and iven if you call it multiple time count value wont change.

// counter()();
//1 // here you are just calling the function i.e. counter() which returns 

// Error will take place where you can't access the variable count which is scope of counter()

// safty handled with the help of closure 

// explain the encapculstion and data safty using the closure 


console.log("Encapsulations"); // with sclable code 
function counter() { // counter function 
  var count = 0; // initilization 
  this.incrementCounter = function () { // this.incrementCounter bundle with window object and function which is assigned to it with no name is anonymous function 

    count++; // value incrementation 
    console.log(count); // print the count 
  }

  this.decremeantCounter = function () { // same way the variable this.decrementCounter is com
    count--; // value decremented 
    console.log(count); // print the count 
  }
}

var counter1 = new counter(); // new keyword is specificng call to the function constructor

counter1.incrementCounter();
counter1.decremeantCounter();
counter1.incrementCounter();
counter1.decremeantCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decremeantCounter();
counter1.incrementCounter();


counter1.decremeantCounter();
counter1.incrementCounter();
counter1.decremeantCounter();
counter1.decremeantCounter();
counter1.decremeantCounter();
counter1.decremeantCounter();
counter1.decremeantCounter();
counter1.decremeantCounter();

//  Garbage collector in JS Engine or Browser V8 , Spider Monkey

function a() {
  var x = 10, z = 50;
 return function b() {
    console.log(x);
  }
}

var o = a();
o()

// now in csole if you try to access the var z in console via browser the value wont be there 

