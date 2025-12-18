console.log(2>1); // true
console.log(2<1); // false
console.log(2>=2); // true
console.log(2<=2); // true
console.log(2==2); // true
console.log(2!=2); // false




console.log("2">1); // true
console.log("02" > 1); // true

// but js allows this but typescript does not allow comparing two different types


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true 

// this is wierd but js works on type coercion and conversion
// > < converts null to a 0 so that why >=0 is true


console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false


/// === strict check value and dataType both it check

console.log(2==="2"); // false





//SO in js Many conversions can put you in confusion be careful while comparing values