// function x() {
//     var a = 7;
//     function y() {
//         console.log(a); // A function with its lexical scope is nothing but closure
//     }
//     y()
// }
// x();

function x() {
  var a = 7;
  function y() {
    console.log(a); // A function  with its lexical scope is nothing but closure
  }
  return y;
}

var z = x(); //returned function y with its lexical scope

console.log(z);

z(); // invoking the closure
