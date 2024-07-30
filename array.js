let student = ["aman", "shraddha", "onkar"];
console.log(student);
console.log(student[1]);    //shraddha
console.log(student[0]="pratik");   //pratik
console.log(student);   //pratik, shraddha, onkar

let info = ["onkar", 20, 99.9];
console.log(info);

let em = [];
console.log(em);    //empty array

//push
let cars = ["BMW", "Mercedes", "Toyota", "Land Rover"];
console.log(cars.push("Bentlay"));  //5
console.log(cars);  //BMW, Mercedes, Toyota, Land Rover, Bentlay

//POP
console.log(cars.pop());
console.log(cars);  //BMW, Mercedes, Toyota, Land Rover

//Unshift - add to start
console.log(cars.unshift("Ferrari"));   //5
console.log(cars);  //Ferrari,BMW, Mercedes, Toyota, Land Rover

//shift - remove from start
console.log(cars.shift());  //Ferrari
console.log(cars);  //BMW, Mercedes, Toyota, Land Rover

//Array Methods
//indexOf
console.log(cars.indexOf("Range Rover"));   //-1
console.log(cars.indexOf("Land Rover"));    //3

//includes
console.log(cars.includes("Range Rover"));  //false
console.log(cars.includes("Land Rover"));   //true

//concat
let tree = ["mango", "orange", "banana"];
let fruit = ["Mango", "Orange", "Banana"];
console.log(tree.concat(fruit));    //['mango', 'orange', 'banana', 'Mango', 'Orange', 'Banana']

//reverse
console.log(tree.reverse());    //['banana', 'orange', 'mango']

//slice
console.log(fruit.slice(0, 2));     //['Mango', 'Orange']
console.log(fruit.slice(-2));   //['Orange', 'Banana']

//splice
let color = ["red", "orange", "white", "yellow"];
console.log(color.splice(2));   //['white', 'yellow'] = deleted elements
console.log(color);     //['red', 'orange']
console.log(color.splice(0, 1));    //['red']
console.log(color);     //['orange']
console.log(color.splice(0, 1, "black", "grey"));   //['orange']=deleted
console.log(color);     //['black', 'grey']

//sort
let a = ["a", "b", "f", "z","p", "o"];
console.log(a.sort());      //['a', 'b', 'f', 'o', 'p', 'z']