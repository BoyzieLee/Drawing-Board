

// variable to state message
var msg = 'Sign up to recieve our newsletter!';
// function to tell js what to do
function updateMessage() {
  // variable telling js to get html element
  var test = document.getElementById('message');
  // ?????
  test.textContent = msg;
  // div.append(html);

}

updateMessage();

function sayHello() {
  document.write('sayHello');
}
// Calculate Area, Page 94//////////////
function calculatorArea(width, height) {
  var area = width * height;
  return area;
}
var wallOne = calculatorArea (3, 5);
var wallTwo = calculatorArea (8, 5);
console.log(wallTwo);

// Multiple Valuations, page 95 //////////////
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area * volume];
  return sizes;
}

var areaOne = getSize (3,2,3)[0];
var volumeOne = getSize (3,2,3,)[1];
console.log(areaOne);
console.log(volumeOne); /*why isn't ths one working?*/

// Order of Execution. pg 452/////////////
var greeting = greetUser();
function greetUser() {
  return 'Hello ' + getName();
}
function getName() {
  var name = 'Boyzie';
  return name;
}

alert (greeting);
