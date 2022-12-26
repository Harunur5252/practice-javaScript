const string4 = new String("A String object");
console.log(string4.toString());

const text = 'I love programming';

console.log(text.length); // like an array has string length
console.log(text[0]); // like an array we can see string output


console.log(text.charAt(0)); // finding character value by index

console.log(text.indexOf('I')); // finding 'I' first index value by character

console.log(text.toUpperCase()) // string uppercase

console.log(text.toLowerCase()) // string lowercase

console.log(text.includes('love')) // check whether text is included or not

console.log(text.slice(0,6)) // pulling out text and last 6 indicate index 6.
console.log(text) // not changing main string

console.log(text.substr(0,6)); // pulling out text and last 6 indicate length 6.
console.log(text) // not changing main string

console.log(text.concat('!')) // concat string

console.log(text.split(' ')) // converting/creating an array form string



const name = '   harun'  
console.log(name.trimStart().length); // remove space first

const name2 = 'roshid   '  
console.log(name2.trimEnd().length); // remove space last

// string comparison

// function isEqual(str1, str2)
// {
//     return str1.toUpperCase() === str2.toUpperCase()
// } 

// console.log(isEqual('harun', 'harun'))


let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"






