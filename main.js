//document.onclick = function() {
//    alert("You clicked somewhere in the document");
//}

//var myButton = document.getElementById("calculateBtn");
//myButton.onclick = function() {
//  alert("You clicked the button");
//}

function simpleMessage() {
  alert("Why does my addNumbers function not display the sum in my Answer field?")
}

setTimeout(simpleMessage,3000);

function simpleMessage2() {
  alert("It's very annoying.")
}

setTimeout(simpleMessage2,6000);

function simpleMessage3() {
  alert("Like these alert boxes ...")
}

setTimeout(simpleMessage3,9000);

 //1. Grab all of my elements on the page and store them in variables
var numOne = document.getElementById('#num_one');
var numTwo = document.getElementById('#num_two');
var answer = document.getElementById('#answer');
var calculateBtn = document.getElementById('#calculateBtn');


// 2. Create a function that will add two numbers together and return the sum
function addNumbers() {
return numOne + numTwo;
}



// 3. Add an event listener to my button that will preform (run) the addition function
calculateBtn.addEventListener('click', addNumbers);


