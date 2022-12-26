/*
  Where we can use arrow function(that means has some limitations).

    Does not have its own bindings to this or super, and should not be used as methods.
    Does not have arguments, or new.target keywords.
    Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
    Can not be used as constructors.
    Can not use yield, within its body.
    arrow function does not use as methods in an object.
    Arrow functions do not have their own this.
    The call, apply and bind methods are not suitable for Arrow functions.
*/


const arrowFun = ()=>10+10; // if a single statement then arrow function is return by own.
console.log(arrowFun())


const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

  const a  = materials.map(element=>{ // here four input is given and map return four output. it's a map characterize.
     return element;
  })

  console.log(a.length);


// #####  Comparing traditional functions with arrow functions

// Traditional Function
// function (a){
//     return a + 100;
//   }
  

// Arrow Function Break Down
  
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
//   (a) => {
//     return a + 100;
//   }
  

// 2. Remove the body brackets and word "return" -- the return is implied.
//   (a) => a + 100;
  


//  3. Remove the argument parentheses
//   a => a + 100;


const arrow=([a])=>{
    console.log(a)
   return a.a;
}
console.log(arrow([{a:10,b:20}]))



// how arrow function is use in object method.

var obj = {
    count : 10,
    doSomethingLater : function(){ // of course, arrow functions are not suited for methods. If this label we use arrow function then 'this' is not available because arrow function is not parent function(plane function).
        console.log(this)
        setTimeout( () => { 
            this.count++; // here this indicates obj. we know arrow function is not this but arrow function this call by their parent function this.
            console.log(this.count);
            console.log(this)
        }, 300);
    }
}

console.log(obj.doSomethingLater())



// how arrow function is use in object method.

// var obj = {
//     count : 10,
//     doSomethingLater : function (){
//         console.log(this)
//         setTimeout(function(){ // the function executes on the window scope
//             console.log(this)
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }

// console.log(obj.doSomethingLater())


