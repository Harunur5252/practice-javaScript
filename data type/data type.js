/*
statement : statement means command or complete line.
   const productName = 'potato';

comment : write comment for description to better understand. Two type of comment single or multiple line.
         Example : //(single) or /** /(multiple)

                  const productName = 'potato'
                  const productPrice = 30
                  const productQuantity = 4
                  const productIsAvailable = true

                  // show all information about a product
                  console.log(productName + ' '+ productPrice + ' '+ productQuantity + ' ' + productIsAvailable)

concatenation : you can use to add two or more string this (+) sign.Just add two or more string parts.This called concatenation.
              Example : console.log('potato' + 'rice');

Data type is two type.preemptive and Object or Reference or Complex data Type
preemptive data type->string, number,boolean,null,undefined,symbol,bigint(permeative)
                      preemptive data type is single value and defined.

  string data type : anything wrapped quotation '' or "".
  number data type : any value with or without decimal number.
  boolean data type : either true or false.
  undefined : if you declare a variable without initializing a value then it will return undefined.
              Example : let productName; // give a undefined value and javaScript set undefined by own.
  null : if you directly write a variable value null that means here is no value or empty but not use undefined;
         Example : let productName=null; // give a null or empty value and set null value by own.
  symbol : generate a uniq value.it's a function.
        Example : const player1=symbol(1)
                  const player2=symbol(1)
                  console.log(player1===player2) // answer is false.
          
  bigint : you can works large number.


  typeof : typeof is a operator to check a variable is which data type.
           typeof null : show 'object'(it's a javaScript bug). 
                        Example : let firstName = null; 
                                  typeof firstName // will show 'object'
     
Object or Reference or Complex data Type : Array,Object,Function. Object is a multiple value.

     1.Array : grouping of related data. you can store all types of data that support javaScript.
             syntax is : const profile = ['harun',25,23,'web developer'];
             if you want to get a data from an array then call by index where first value indicate index 0.
             that means array counting start with 0 index.
             like  : profile[0]; // give harun value.
             you can also take more than one value from array like : profile[0]+''+profile[1];
             you can update an array slot like : profile[0]='samim';   // output will show is ['samim',25,23,'web developer'];
             you can also add item in array Like : profile[4]='enjoy'; // output will show is ['samim',25,23,'web developer','enjoy'];
             you can declare an array as empty like : const profile=[];
             you can also declare an array Like : const profile = new Array() // This is uncommon.
             you can get array length by using length property in array  
             and always counting length by 1 first then gradually will update like : console.log(profile.length); // output is 5
       *** for array traversing you can use for of loop.

    2.Object : you can declare an Object like : 
         *** array data type is not clear about information.But an object data type we can say it's productName is potato,
         price is 20. so, it's better than array data type.Object is key value pair and keys work as a variable.

         const demoProfile = {
         firstName:'harun',
         lastName:'roshid',
         age:23,
         profession:'development',
         'harun loop':23 // if you need to keep a gap of key then declare key in ''.
      }

      console.log(demoProfile.age); // accessing object info. output is 23
      console.log(demoProfile['age']); // accessing object info. like an array. but it's accessing type is for dynamic value(as a string).output is 23

      const a = 'profession'; // you can assign an object key in another variable. then call demoProfile[a] this way.
      console.log(demoProfile[a]); // output is development

      demoProfile.habit='programming'; //  you can add an object key and value from out of object  
      console.log(demoProfile);
      console.log(demoProfile["harun loop"]); // output is 23 // if you want to access an invalid key value.

      *** for object traversing you can use for in loop.
      *** for all type data(multiple data represent) grouping we can use array,object.But object is clear than array.
*/




//practice Array

/*const profile = ['harun',25,'roshid',true];

console.log(profile[0]+' '+profile[2]);
profile[3]=false; // update by index
console.log(profile);
profile[4]='sherpur'; // adding as a last index
console.log(profile);

console.log(profile.length);
*/



/*
***array exercise
*** write your bio (by grouping closely related data);using -> I am harun and 23.I'm a web developer.I love "Javascript";
                                                                  1              2                 3
1. declare an array
2. assign those value
3. addition all values;
4. store it a reference
5. call by reference

const bio = ['harun',23,'developer','\"Javascript\"'];
const addBio = `I am ${bio[0]} and ${bio[1]}.I\'m a web ${bio[2]}.I love ${bio[3]}`;

console.log(addBio);


/*
****practice Object

const demoProfile = {
   firstName:'harun',
   lastName:'roshid',
   age:23,
   profession:'development',
   'harun loop':23,
}


console.log(demoProfile.age);
demoProfile.age=25; // update value
demoProfile.age +=1;// increasing value
const a = 'profession';
console.log(demoProfile[a]);
demoProfile.habit='programming'; // to add property/key;
console.log(demoProfile["harun loop"]);
console.log(demoProfile);

make an empty object and then add to it
const product={}
product.name='potato';
product.quantity=23;
product.quality='good';
console.log(product);

another way to initialize an object

const person = new Object();
person.name='harun';
person.age=23;
console.log(person.name);
*/


/*
***objects can hold all sorts of data

const animal ={
   name:'chicken',
   age:22,
   works:{
      feed:true,
      drink:'yes',
      egg:true,
   },
   friends:['chicken','hen',23]
}
console.log(animal.friends[0]);
*/


/*
***object exercise

const bio = {
   name:'harun',
   age:23,
   profession:'web developer',
   habit:'\"JavaScript\"'
}

const addAllInfo = `I am ${bio.name} and ${bio.age}.I\'m a ${bio.profession}.I love ${bio.habit}`;
console.log(addAllInfo);
*/


/*
***object exercise

const someObject = {}

someObject._name='Hedwig'; // Object property name is similar like  a variable.
someObject.age=6;
someObject.123=true; // Object property name is similar like  a variable and we can not declare a invalid property name without single citation or double.
const prop='color';
someObject[prop]='red'; // as third bracket notation always keeps a string and it is valid
console.log(someObject);
*/




// *** Array splice method use
// const harun = [1,2,3,4,5,6,7,8];

// // insert specific value at specific index without changing of that index value
//  harun.splice(2,0,10); // here 2 means second index.0 means no delete and 10 means add 10 at second index without changing second index.
//  console.log(harun);

// // remove specific item 

// harun.splice(2,1); // here 2 means second index.1 means delete one item of that index
// console.log(harun);

// // update specific item of array
// harun.splice(2,1,10); // here 2 means second index.1 means will delete one item and 10 means update  second index by 10.
// console.log(harun);




/*
 *** Array Destructuring
const newArray =['harun','roshid',23];
console.log(newArray[0]); // instead of using index we can use array destructuring.

const [firstName,,age]=newArray;  // here we can use any variable name in [] and according to exact order index we can give name and skip an index using , separator.

console.log(firstName);
// console.log(lastName);
console.log(age);

*/



/* 
**** very important for multiple object with destructuring.
const obj={
   firstName:'harun',
   another:{
      value1:1,
      value2:2
   },
   array:{
      arr1:[1,2,3,4],
      arr2:[5,6,7,8],
   }
}

const {firstName,another:{value1,value2},array:{arr1,arr2}}=obj;
console.log(arr2);
*/










