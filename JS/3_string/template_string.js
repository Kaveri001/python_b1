// template String

let age = 19;
let first_name= "kaveri";

// "my name is ishan and my age is 18 "

let about_me = "my name is "+first_name+ " and my age is " + age;
console.log(about_me);
let lastName="kaveri";
let collage="k.k.wagh poly";
console.log("My name is" + lastName + "I am from "+collage);
console.log(`My name is ${lastName} and i am from ${collage}`)
// ---------------------------------------------------
// other method
// template strings 

let about =`my name is ${first_name} and my age is ${age}`;
console.log(about);

/*
In JavaScript, the template string implements the string 
interpolation. A template string is defined by wrapping 
a sequence of characters into a pair of backticks 
`I'm template string` . 
The template string placeholders have the format ${expression} , 
for example `The number is ${number}` .

*/