// Primitive -  String,Number,Boolean,null,Symbol,BigInt

// Non-Primitive OR ReferenceTYPES -> Array,Objects,Functions

// Primitive datatypes are stored in stack memory
// Reference datatypes are stored in heap memory


// Javascript is a dynamically typed language
// we dont need to specify datatype while declaring a variable
// datatype is decided based on the value assigned to the variable


const number= 100;
const scoreValue = 100.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined
let userEmail2 = undefined;

const id = Symbol('12345');
const anotherId = Symbol('12345');

console.log(id === anotherId); // false these will not be same


const bigNumber = 1234567890123456789012345678901234567890n;   // putting n at last make variables as bigInt
console.log(bigNumber);


// Reference Types

const herNames = ["Doramon","bentan","powerRangers"]; // array

let myOBj = {
    name: "SHINCHAN",
    age: 5,
    isCute: true
}

console.log(typeof myOBj); // object


const myFunction = function(){
    console.log("Hello World");
} // in js function can be stored in a variable


console.log(typeof myFunction); // function

// for all typeof answers refer image in this directory names image.png


