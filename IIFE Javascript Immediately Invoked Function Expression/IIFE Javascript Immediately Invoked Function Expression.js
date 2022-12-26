
/* #### We should always remember that anything should not declare in global scope. 
    At this sphere we can use immediately invoked function to separate various files code 
    from other files code when we attached in main html file.It's means among files are not pollute 
    by global scope.
*/



// const someWhat = function(){ // It's not function expression. because someWhat variable have value immediately.If we call this function then it will give value.
//     return 'hello';
// }
// console.log(someWhat());



const someWhat = (function(){ // function expression. It's immediately call and set value in someWhat
    return 'hello';
})() // this is called immediately invoked a function
console.log(someWhat);