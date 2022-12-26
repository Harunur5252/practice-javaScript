/*
  আমাদের কোডে মাঝেমধ্যে কিছু লাইন ভ্যালু প্রডিউস করে। যেমন ১০ + ১০ সমান ২০ হয়। 
  আবার কিছু কোড আছে যেগুলো শুধুমাত্র অ্যাকশন নেয়। যেমন কন্ডিশনাল স্ট্যাটমেন্টগুলো। 
  এগুলো কোনো ভ্যালু প্রডিউস করে না, জাস্ট কিছু নির্দিষ্ট কিছু অ্যাকশন নেয়। এগুলোর উপর 
  ভিত্তি করেই আমরা স্ট্যাটমেন্ট আর এক্সপ্রেশনকে পার্থক্য করে থাকি। সোজা বাংলায় 
  এক্সপ্রেশন ভ্যালু প্রডিউস করে আর স্ট্যাটমেন্ট শুধুমাত্র অ্যাকশন নেয়।

  নিচের উদাহরণে ১০ যোগ ১০ করা হয়েছে। এখানে ভ্যালু প্রডিউস হয়েছে যেহেতু
 তাই এটা এক্সপ্রেশনঃ
 10 + 10;

 but if we save this value(10 + 10) in a variable then will call it as a statement
 const myVar = 10+10; // it is statement because not give a value.
 As a variable value we can not set any statement.

 স্ট্যাটমেন্টঃ

আর অন্যদিকে স্ট্যাটমেন্ট জাস্ট কিছু অ্যাকশন নিবে। যেমন লুপ, কন্ডিশনাল স্ট্যাটমেন্টসহ আরো অনেক|

** In template string we can write any expression.  
*/



if(10 < 20) {
    console.log('Yeah! It is true');
 } else {
    console.log('No! It is not True');
 }
//***** we can store in a variable is expression not a statement.statement is command and expression means value.
// *** In curly brackets {} we can write an expression





 