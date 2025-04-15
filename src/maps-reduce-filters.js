const arr = [5,2,4,3];

// The above arry should be transform into the following results 

// Double - [10 , 4, 8, 6]
// Triple - [15 , 6, 12, 9]
// Binary - ["101", "10", "100", "11"]


let output = arr.map(double)// will need to pass the function into the map


// double is the function 

function double(num) {
    return num * 2;
}

console.log(arr);

console.log(output);

output = arr.map(triple)
console.log(output);

// Triple the number
function triple(num) {
    return num * 3;
}
// Binary
// function binary(num) {
//     return num.toString(2);  // Built in function 
// }

// output = arr.map(binary);
// console.log(output);

//  Altertive function

// Here we have passed the function as an argument and its completly valid in javascript 

// output = arr.map(function (num) {
//     return num.toString(2);
// });

// console.log(output);

// In some cases you can also find it in as arrow function 

output = arr.map((num) => {
    // return num.toString(2); // When there is an arrow function we can remove the return statment 
    num.toString(2); // Also we can remove the { } bracses
})
// Here when you say arr.map you are mapping each value of the arr [];
// In above example you map each and every value arr to binary value.
console.log(output);



// Now lets see what Filter does in Javascript

// Let say we want to filter out the values in the array in specific format here we shall be using the filter.

console.log("Filters in Array ");

// output = arr.filter(function (num) {
//     if (num % 2 === 0) {
//         return num;
//      }
// })
// Even Number in. the array
// console.log(output);

// Odd number in the array

// output = arr.filter(function (num) {
//     if (num % 2 !== 0) {
//         return num;
//      }
// })
// console.log(output);

// To check teh value if the number in the array is greater then or equal to 3
//  >=3
// output = arr.filter((num) => {
//     return num >= 3;
// })
// console.log(output);


//  What is the reduce in Javascript

// NOTE: It does not reduce anything 
// // Used at the place you take all the values present in the array and come up with the single value out of them 

// // just for fun we are assigning the value of arr to num  
// let num89 = arr;

// // let num = [444, 4, 55, 6, 7, 77, 7733, 4345, 44];
// console.log(num89);
// output = function sum(num) {
//     let result = 0;

//     for (let index = 0; index < num89.length; index++) {
//      result = result + num89[index];
//     }

//     return result;
// }

// console.log(output());

// // How to use the reduce 

// // this reduce function takes the 2 arguments accumulator and current

// // current : curent values of an array
// // accumulator where the result will be stored i.e. it would accumaulate all the values

// output = arr.reduce(function (accumulator, current) { // reduce will be run againts the each value of the array arr.
//     accumulator = accumulator + current;
//     return accumulator;
// }); // here we have passed the inital value of the accumumator i.e. 0 and it would add the sum for all the values present in the arr i.e. Array
// // Like wise you can attact any value to and accumulator 








// Now we are using the same reduce function and tring to find the max. number from the array


output = arr.reduce(function findSum(accumaulate, currentValue) {
    if (accumaulate < currentValue) {
			accumaulate = currentValue;
    }
    return accumaulate;
}, 0) // We have initilized the the value of accumulator to 0 and then have comapred it with all of the existing values.

console.log(output);


