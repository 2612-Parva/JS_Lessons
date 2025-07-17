// Declartive Function

function helloOne() {
    console.log("Hello One");
}

helloOne();

// Anonymous Function

var helloTwo = function(){
    console.log("Hello Two");
}
helloTwo();

// ES6 syntax for function

var helloThree= () =>{
    console.log("Hello Three");
}
helloThree();

// Function with parameters

function HelloFour(firstname, lastname){
    console.log(firstname + " " + lastname);
}
HelloFour("Parva", "Patel");

// function with the return

function multiplybyTwo(num){
   var myresult= num *2;
   return myresult;
}
var result = multiplybyTwo(5);
console.log(result);

// importing a function from another file

import {printAge} from './helpers/printhelper.js';

printAge(22);

import * as helper from './helpers/printhelper.js';
helper.printAge(25);