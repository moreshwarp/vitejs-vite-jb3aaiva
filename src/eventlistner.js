console.log("Deep about Event listners");
// console.log(document.getElementById("clickme"));

// document.getElementById("clickme").addEventListener("click", function xyz () {
//   console.log("Button Clicked");
// });

// Here it's a callback fucntion, now when JS will execute the line of code the element with id="clcikme" will be selected and on the action of btn 'click' the btn will be pressed the function will be called which will print the value as "Button Clicked"

// we have attached the event handler / event listner to the btn.



// Closure with event listner (how many time the btn is clicked)
function attachEventListners() {
  let count = 0;
  document.getElementById("clickme").addEventListener("click", function counter() {
    console.log("Btn clicked", ++count);
  });
  
  // callback function will call the function counter() and update the value of count++ whenever the btns is clicked
}

// If we debuge this now and put the breakpoint at the console.log we will be the closure and its value we will see the coounter() will have an access to the value of count; i.e. closure, you can check this in callstack

attachEventListners();
