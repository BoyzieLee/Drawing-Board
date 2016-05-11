(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


// variable to state message
'use strict';

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
var wallOne = calculatorArea(3, 5);
var wallTwo = calculatorArea(8, 5);
console.log(wallTwo);

// Multiple Valuations, page 95 //////////////
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area * volume];
  return sizes;
}

var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
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

alert(greeting);

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
