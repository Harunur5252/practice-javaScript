/*
*** ১। কোনটা রেফারেন্স আর কোনটা বাই ভ্যালু হিসাবে পাস করেছি কিভাবে বুঝবো?

উঃ জাভাস্ক্রিপ্ট এর ফাংশনে যখন আপনি কোনো( প্রিমিটিভ ডাটা টাইপ) আর্গুমেন্ট পাস 
করবেন ঐটা সবসময় ভ্যালু হিসাবে পাস হবে। তবে আপনি যদি নন-প্রিমিটিভ ডাটা টাইপ(বা 
আরেকনামে রেফারেন্স ডাটা টাইপ) যেমনঃ অবজেক্ট, অ্যারে পাস করে এতে কোনো পরিবর্তন 
করেন(পুশ, বা অবজেক্ট এর প্রপার্টি) তাহলে সেটা বাই রেফারেন্স পাস হবে(যেহেতু এরা রেফারেন্স 
ডাটা টাইপ) এবং আপনার অরিজিনাল ডাটাতে সেটার ইফেক্ট পড়বে

*/





// preemptive data type value just copy but declarable value not changeable.

function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
}

var a = 100; // here a will copy(as a preemptive data type) and perform other actions but a value is not changed(a=100);
console.log('Value of a before changing function is applied: ' + a);
console.log(changeValue(a)) // output is 10 
console.log('Value of a after changing function is applied: ' + a); // output is 100. As a preemptive data type declarable value is not changeable.





 // reference type :  reference data type value changeable.

const name={
    name:'harun',
}

function myName(name){
  console.log(name.name);
  name.name='roshid';
  console.log(name.name);

}

myName(name);
console.log(name) // output is roshid. As it had update in function inside. main name object value has changed. 






/*

 For more example : 

const a =10;

function passByValue(){
    let b=a; // copy a value
    b=20;
    console.log(b);
}
passByValue();
console.log(a);


const aObj={
    num:10
}
function passByReference(aObj){
   let bObj=aObj; // copy aObj reference/memory location not copy value
   bObj.num=20;
   console.log(bObj);
}
passByReference(aObj);

console.log(aObj);

*/
