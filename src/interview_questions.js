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



console.log("Example 4");

function outest() {
  var c = 500;
  function outer(b) {
    var a = 10;
    function inner() {
      console.log(a,b,c);
    }
    return inner;
  }
  return outer;
}

let a = 1111;

var close = (outest())("Unique Example")();// the call to the function  outer() to whihc the argument is been passed "Unique Example" and afte that we have () i.e. it as same meaning i.e. close() calling this function

