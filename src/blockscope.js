
// {
//     var z = 10;
//     let x = 100;
//     const y = 10000; 


// console.log(z);
// console.log(x);
// console.log(y);
// }

// console.log("Example # 1");

// console.log(z); 


// var z =300;
// {
//     var z = 10; // shadowing the value of global variable z from z = 300. to z =10;
//     let x = 100;
//     const y = 10000; 

// console.log(z);
// console.log(x);
// console.log(y);
// }

// console.log("Example # 2");

// console.log(z); // will print the updated value of z from the block scope

// let x = 5000; // 5000 is value of x in other scope 
 
// {
// 	var z = 10;
// 	let x = 100; // 100 is value of x in the current scope.

// 	console.log(z);
// 	console.log(x); // will print value of x as 100 i.e. shadoweded value.

// 	const y = 450000;
// 	console.log(y);
// }

// console.log("Example # 3");
// console.log(x); 
// {
//     var z = 10;
//     let x = 100;
//     const y = 10000; 

// console.log(z);
// console.log(x);
// console.log(y);
// }

// console.log("Example # 4");

// const y = 45000;
// {
//     var z = 10;
//     let x = 100;
//     const y = 10000; 

// console.log(z);
// console.log(x);
// console.log(y);
// }

// console.log("Example # 1");

// console.log(x); // will print x value as 5000
// console.log(y); // will print y value as 45000



// console.log("Illeagal shadowing");
// let  a = 100;

// function x () {
// 	var a  = 200; // you can't over shadow it its called illegal shadowing
//   console.log(a); // 200
// }

// x();

// console.log(a); // 100

// // Block also follow the lexical enviorenment 

const a = 20;
console.log(a);
{
	const a =  100;
console.log(a);
	
	{
		const a = 500;
console.log(a);
	
		function c() {
			const a = 46000;
			console.log(a);
		}
	}

}

console.log(a);
