console.log("Hello World!");
console.error("Error Happened!");
console.warn("Warningggg!!");

//variable
// string = "Words" , "wowoowwo" , "123"
// number = 123, 434e, 2398.12
// boolean = true, false
// object = ["apple", "banana"], [1,2,3,4]
// ["apple", 3, true]

// typeof
// console.log(typeof(["apple", "banana"]))

//Declaration of Variables
let name = "Nina", //string
lastname = `Fabro`, //string
age = 10; // number
let isProf = true; // boolean
let hobbies = ["Watch TV", "Dancing"], // object
run = function () {
    console.log("Im running.");
}; // function
console.log(name, age, isProf, hobbies);
console.log(typeof run);
console.table(hobbies);
console.log("My name is" + name + " " + lastname);
console.log(`My name is ${name} ${lastname}`);
