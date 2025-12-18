let score = "33";
console.log(typeof score); // number
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber); // number


//NOW
let temp = "3ABC";
let valueInNumber2 = Number(temp);
console.log(valueInNumber2);
console.log(typeof valueInNumber2); // number // but this is not an number NaN(Not a number)

// sometimes you convert something into number but it is not actually a number 


let valueInNumber3 = Number(null);
console.log(valueInNumber3); // 0

let valueInNumber4 = Number(true);
console.log(valueInNumber4); // 1


// "33" -> 33
// "3ABC" -> NaN
// null -> 0
// true -> 1
// false -> 0
// undefined -> NaN



let isLogginIn = 1;
let booleanValue = Boolean(isLogginIn);
console.log(booleanValue);


// "" to boolean -> false
// "***" to boolean -> true


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



// **************************** Operations **************************** //

let value = 3;
let negValue = -value;
console.log(negValue); // -3


console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(10/2);
console.log(10%3); // modulus operator gives remainder
console.log(2**3); // 2 to the power 3 = 2*2*2 = 8

let str1 = "Hello ";
let str2 = "World";
console.log(str1 + str2); // concatenation

console.log(1 + "2"); // "12"
console.log("2" + 1); // "21"


console.log("1" + 2 + 2); // "122"
console.log(2 + 2 + "1"); // "41"  // left to right evaluation

console.log(+true); // 1
console.log(+false); // 0
// console.log(true+); // error
console.log(+""); // 0


let num1,num2,num3;
num1 = num2 = num3 = 2+2;
console.log(num1,num2,num3);

let gameCounter = 100;\
gameCounter++;
console.log(gameCounter);
gameCounter--;
console.log(gameCounter);







