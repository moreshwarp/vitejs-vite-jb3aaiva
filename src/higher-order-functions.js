// Array of radius of 4 circle 

const radius = [3, 2, 5, 8];

const calculateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++){
      output.push(Math.pi * radius[i] * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));