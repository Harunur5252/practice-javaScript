/*
  scope : scope is chaining that check down to up to find exact output where it's declared.
*/

let a =10; // if we declare any variable without {} that means global scope and we can access it anyWhere.
const d = 100; // global scope
function outerFunc(){
  const d = 100; // It's not similar to above d variable because of scope(functional scope).
    a=20;
    console.log(a);
    let b=5; // functional scope or local scope or block scope.
   return  function innerFunc(){
       b=30;
       const c=2;
       console.log(a); // as a not found in this {} then innerFunc() check it outside(parent function) and then if don't find then  check up too.
       console.log(c);
       console.log(b);
    }
}

outerFunc()();

 var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
console.log(myFun())

const arr=[
  {name:'Harun'},
  {name:'Karim'},
  {name:'Jamal'}
];

function compareName(a,b){
  return a.name.localeCompare(b.name);
}
console.log(arr.sort(compareName));




























