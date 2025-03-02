// console.log("Exp.# 1");


// function a() {
//   console.log(b);
// }
// var b = 10;
// a();

console.log("Exp.# 2");

function a() {
  var b = 100;
  c();
  function c() {
      console.log(b);
  }
}

a();
