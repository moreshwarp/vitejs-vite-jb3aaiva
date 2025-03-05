// function x() {
//     var i =1;
//     setTimeout(function () {
//         console.log(i);
//     }, 3000);
//     console.log("Moreshwar JS Expert "); // It will be printed 1st then the value of iu i.e. 1 will be printed after 3000  mill seconds
// }

// x();

// function x() {
//   for (var index = 1; index <= 5; index++) {
//     setTimeout(function () {
//       console.log(index);
//     }, index * 3000); // idex is pointing the global reference where its vlaue is been stored hence it prints 6 6 6 6 6
//   }

//   console.log("Moreshwar JS Expert ");
// }

// x();

// fix the above 6666 issue

// function x() {
//   for (var index = 1; index <= 5; index++) {
//     function close(index) {
//       setTimeout(function () {
//         console.log(index);
//       }, index * 3000); // technically here 5 different coipes for call back function are creacted fro each updated value of index
//     }
//     close(index);
//   }
//   console.log("Moreshwar JS Expert ");
// }
// x();

// function x() {
//   for (let index = 1; index <= 5; index++) {
//     setTimeout(function () {
//       console.log(index); // every time the new copy of index and setTimeOut will be created
//     }, index * 3000);
//   }

//   console.log("Moreshwar JS Expert ");
// }

// x();
