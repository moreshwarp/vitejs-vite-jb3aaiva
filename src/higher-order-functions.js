// Array of radius of 4 circle 

const radius = [3, 2, 5, 8];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
      output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const calculateCircumference = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
      output.push(Math.PI * 2 * radius[i]);
    }
    return output;
}

const calculateDiamater = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
      output.push(radius[i] + radius[i]);
    }
    return output;
}
console.log("Diameter");
console.log(calculateDiamater(radius));

console.log("Circumference");
console.log(calculateCircumference(radius));

console.log("Area");
console.log(calculateArea(radius));


// Above is the hopless method 
//  lets make it on DRY Principal, also Modular and Reusable component....

const area = function (radius) {
  return Math.PI * radius * radius;
}

const circumference = function (radius) {
  return 2 * Math.PI * radius;
}

const diameter = function (radius) {
  return 2 * radius;
}

const calculate = function (radius) {
  const output =[];
  for (let index = 0; index < array.length; index++) {
    output.push(area(radius[index]));
  }
  return output;
}