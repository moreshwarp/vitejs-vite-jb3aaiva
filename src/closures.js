// function x() {
//     var a = 7;
//     function y() {
//         console.log(a); // A function with its lexical scope is nothing but closure
//     }
//     y()
// }
// x();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a); // A function  with its lexical scope is nothing but closure
//   }
//   return y;
// }

// var z = x(); //returned function y with its lexical scope

// console.log(z);

// z(); // invoking the closure


// Closure comes with the corner cases as well 

// console.log("Corner cases in closure");

// function x() { // Mini EC created 

//   var a = 7; // variable a is given space in the memory (memory allocation) will have a reference of lexiacal scope pointing 
//             // towards GEC

//   function y() { // function y() is stored as is mini EC of x()
//     console.log(a);
//   }

//   a = 100; // a is allready allocated in memory and is bind to global object i.e. window
//   return y; // here y function is retunrned along with its lexical scope i.e. its lexiacl scope of y 
//   // which include lexical scope of x() as well 
// }

// var z = x(); // Function z() invoked GEC created // closure is returned here 
//             // when we say closure is returned in that case i.e. it will also have a value of 'a' as 100 i.e. the updated value of a from 7 to 100
// console.log(z); // will print the closure i.e. function ();

// z(); // Function z() invoked EC created  and print value of a as 100

// console.log(z.a = 7);



function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}

z();