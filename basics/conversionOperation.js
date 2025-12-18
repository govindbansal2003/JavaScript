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





