//1) this indicate window(global scope). window is the top most object of browser.
console.log(this) 

//2) this indicate parent object , if you declare inside method
const product = {
    productName:'Banana',
    productPrice:50,
    productQuantity:6,
    productIsAvailable:true,
    rice:{
        name:'kalogira',
        riceMethod(){  // we can directly declare a function this way in object by es6 system.
            console.log(this);
            return `${this.name}`;
        },
    },
    showProductInfo(){  // we can directly declare a function this way in object by javaScript es6 system.
        function innerFunc(name){
            console.log(name)
            console.log(this.productName);
        }
        innerFunc.call(product,'hello'); // In .call method we have told this means product object. we can call a function.call() instead of normal function() because of this binding to say
        // innerFunc.apply(product,['hello']); // apply is similar to call method but as a second arguments we have passed in array then it will receive as parameter. we can call a function.apply() instead of normal function() because of this binding to say

        // function innerFunc(){
        //     console.log(this) // so this means global window
        // }
        // innerFunc(); // plane way call 
        return `${this.productName} ${this.productPrice} ${this.productQuantity}`;
    }
}

console.log(product.rice.riceMethod());
const demoProduct = product.showProductInfo // just product object to catch showProductInfo function reference in demoProduct variable but not call.
// console.log(demoProduct()); // call plane way for this reason this is showed undefined result.
console.log(demoProduct.call(product)); // when we call demoProduct function plane way then it's inside method return this undefined value. But when we call demoProduct function then we can tell this means by .call method.


// 3) this indicate object created based on constructor function
function Product(productName,productPrice,productQuantity,productIsAvailable){
   this.productName=productName;
   this.productPrice=productPrice;
   this.productQuantity=productQuantity;
   this.productIsAvailable=productIsAvailable;
   this.showProductInfo=function(){
    return `${this.productName} ${this.productPrice} ${this.productQuantity} ${this.productIsAvailable}`;
   }
}

const product1 = new Product('Wheat',50,10,true); // this indicate product1 object
console.log(product1);


// 4) this indicate window object in non strict mode but undefined in strict mode
// 'use strict'
function sampleFunc(){
    console.log(this);
}
sampleFunc();



// solution this is defined by how you call the function
/*   
  ###### what this indicates(rules)
       1) global context-window
       2) how you call function defines this inside function
       3) new constructor object (that returned by calling the constructor)
       4) function inside this behavior :
          1) function can call by call,apply method.
          2) function (this) reference created by bind method.
          3) call-(this,arguments)
          4) apply-(this,[arguments])
          5) If function is bound once can't be bound again
          6) arrow function has no personal opinion in 'this'
  
*/ 

// practice more this,call(),apply()


// 1) 
// var firstName='harun'
// console.log(this.firstName) // this means global window object




// ##  practice call(),apply(),bind() method in function

// 1. understanding call method.
// function sayHi(profession){
//     console.log(profession)
//     console.log(this.firstName)
// }

// sayHi.call({firstName:'harun'},'programming') // any function.call() method first arguments take for this keyword and second arguments is parameter for function.


// const profile = {
//     firstName : 'harun',
//     lastName  :'roshid',
//     profession : 'web developer',
//     bio: function(){
//         return `${this.firstName}  ${this.lastName}`;
//     }
// }
// console.log(profile.bio())

// sayHi.call(profile,'programming') // the power of call() method and this




// 2. understanding apply method.
// function sayHi(profession,isProfessionAvailable,years){
//     console.log(profession,isProfessionAvailable,years) 
//     console.log(this.firstName)
// }

// const profile = {
//     firstName : 'harun',
//     lastName  :'roshid',
//     profession : 'web developer',
//     bio: function(){
//         return `${this.firstName}  ${this.lastName}`;
//     }
// }
// console.log(profile.bio())

// sayHi.apply(profile,['programming',true,25]) // the power of apply() method and this





// 3. understanding bind method.
// const profile = {
//     firstName : 'harun',
//     lastName  :'roshid',
//     profession : 'web developer',
//     bio: function(){
//         console.log(this)
//         const $this = this
//         function bioProfession(){
//             console.log($this.firstName,$this.lastName,$this.profession)
//         }
//         bioProfession()
//         return `${this.firstName}  ${this.lastName}`;
//     }
// }

// const bio = profile.bio.bind(profile) // if after bio we give call() or apply() then it will immediately call bio function at this moment but if we give bind() after bio function then it will not call bio function immediately just create function reference to variable, after we can call function by variable.
// console.log(bio())




// During function declare we can say what is this keyword. On that moment function will be an expression.
const profile = {
    firstName : 'harun',
    lastName  :'roshid',
    profession : 'web developer',
    bio: function(){
       const bioProfession = function bioProfession(){
            console.log(this.firstName,this.lastName,this.profession)
            // return `${this.firstName} ${this.lastName} ${this.profession}`;
        }.bind(this) // this way to say what is this keyword in the bioProfession(). bind(this) means take this keyword from upper bio(). If we use call() or apply() in this case then don't need to call  bioProfession(); this way. call() or apply() call a function immediately. 
        bioProfession();
        // bioProfession.call({firstName:'Rohim',lastName:'Mia'}); // If we call a function immediately by bind() method and say what is this means then again bioProfession.call({firstName:'Rohim',lastName:'Mia'}) way  call  is not changed before this keyword means. 


    // arrow function is not own this keyword. So, in this case arrow function takes this keyword from upper or parent function. But arrow function we can not set bind(),call() and apply() method. 
    // const bioProfession = ()=>{
    //     console.log(this.firstName,this.lastName,this.profession)
    //     // return `${this.firstName} ${this.lastName} ${this.profession}`;
    // } 
    // bioProfession();
    

        return `${this.firstName}  ${this.lastName}`;
    }
}

const bio = profile.bio.bind(profile); // after if bio we give call() or apply() method then it will immediately call bio function on that moment but if we give bind() method after bio function then it will not call bio function immediately just create function reference to variable, after we can call function by variable.
console.log(bio());





// 2) 
// function func(){
//     console.log(this)
// }
// func.call(this); // this means global window object and we can call a function.call() instead of normal function() because of this binding to say.



// best way call function and say to inner function  what is this 
// const obj = {
//     firstName:'harun',
//     lastName:'rohsid',
//     fullName(){
//         const $this = this;  // best way to say inner func what means 'this' without using call,apply method.
//        return function inner(){
//             return $this.firstName+' '+ $this.lastName;
//         }
//     }
// }
// const secondCall = obj.fullName();
// console.log(secondCall())



// using call by call method(this) 
// const obj = {
//     firstName:'harun',
//     lastName:'rohsid',
//     fullName(){
//        return function inner(){
//             return this.firstName+' '+ this.lastName;
//         }
//     }
// }
// const secondCall = obj.fullName();
// console.log(secondCall.call(obj))



// using arrow function (this)
// const obj = {
//     firstName:'harun',
//     lastName:'rohsid',
//     fullName:()=>{
//        return  ()=>{ // this arrow function has not this so, it's check upper parent that means fullName function have this but unfortunate it's also arrow function so, it's also check upper label but upper label this is global window object.
//             return this.firstName+' '+ this.lastName; // this is not usable for arrow function if the upper function has no this.
//         }
//     }
// }
// const secondCall = obj.fullName();
// console.log(secondCall())







