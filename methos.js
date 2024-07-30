let msg = "   hello    ";
console.log(msg);
console.log(msg.trim());  //Strings are Immutable in js.

console.log(msg.toUpperCase());    //HELLO

//string methods with argument
let str = "My Name is Onkar";
console.log(str.indexOf("Name"));   //3

//slice
let name = "OnkarIjare";
console.log(name.slice(0,5));   //Onkar

//replace
let cod = "IloveCoding";
console.log(cod);   //IloveCoding
console.log(cod.replace("love","do"));  //IdoCoding

//repeat
console.log(cod.repeat(2));  //IloveCodingIloveCoding