/*
**** First Class Function rules
     1.normal function 
     2.we can assign a function in a variable
     3.we can return a function 
     4.we can pass a function as argument that is called callback function
     5.If a function can return another function or receive a function as parameter is called higher order
       function.If a function is return or receive as parameter is called callback function.
       if a function is not return anything then it will given undefined value.
*/


// normal function 
function name(){
    console.log('harun');
}
name();


// we can assign a function in a variable
const productName = function(){
    console.log('Jackfruit');
}
productName();


// we can return a function 
function outerFunc(){
    return function innerFunc(){
        console.log('inner function called');
    }
}
outerFunc()();


// we can pass a function as argument that called callback function
function myFunc(innerFunc){ // myFunc is higher order function
   return innerFunc()
}

let a = myFunc(function myInnerFunc(){ // myInnerFunc is callback function
    return 'inner function called';
});

console.log(a)



