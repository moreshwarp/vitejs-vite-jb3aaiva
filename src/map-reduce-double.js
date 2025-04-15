const arr = [5, 10, 15, 20];

// Double - [10,20.30,40]
// Triple - [15,30,45,60]
// Binary - 

const double = function (num) {
    return num * num;
}


console.log("Original  "+ arr);

const output = arr.map(double);

console.log("Double"+ " "+ output);