/*
const stringOne = 'karim is bad boy';
const stringTwo = 'karim is \"bad\" boy';

console.log(stringOne);
console.log(stringTwo);


const intNumber = 43;
const newString = '43';

console.log(typeof intNumber);
console.log(typeof newString);
*/


/*
If We declarer a variable value in double or single 
citation then JavaScript will take this as string type. 
Although it seems like a number but here variable value 
declarered in single citation that's why JavaScript will 
take this as string type.

If We declare a variable value as a number without using
double or single citation then JavaScript will take this as number type
*/


/*
const name        = 'I am Harunur Roshid.';
const age         = 'I am 23.';
const profession  = 'I\'m a Web Developer.';
const habit       = 'I love \"JavaScript\"';

console.log(name.concat(age,profession,habit))

const addAllInfo = `${name}${age}${profession}${habit}`;

console.log(addAllInfo);

function bioInfo(name,age,profession,habit){
  const bio = 'I am'+' '+name+'.'+'I am'+' '+age+'.'+'I\'m a'+' '+profession+'.'+'I love'+' '+habit;
  return bio;
}

const output = bioInfo('harun',23,'web developer','\"javascript\"');
console.log(output);

*/



/*
const movie = [
    {
       id:1,
       name:'demo movie',
       rating:1,
       category:'sci-fi'
    },
    {
       id:2,
       name:'demo movie2',
       rating:2,
       category:'sci-fi-2'
    },
    {
       id:3,
       name:'demo movie3',
       rating:3,
       category:'sci-fi-3'
    },
    {
       id:4,
       name:'demo movie4',
       rating:4,
       category:'sci-fi-4'
    },
    {
       id:5,
       name:'demo movie5',
       rating:5,
       category:'sci-fi-5'
    },
    {
       id:6,
       name:'demo movie6',
       rating:6,
       category:'sci-fi-6'
    },
    {
       id:7,
       name:'demo movie7',
       rating:7,
       category:'sci-fi-7'
    },
    {
       id:8,
       name:'demo movie8',
       rating:8,
       category:'sci-fi-8'
    },
    {
       id:9,
       name:'demo movie9',
       rating:9,
       category:'sci-fi-9'
    },
    {
       id:10,
       name:'demo movie10',
       rating:10,
       category:'sci-fi-10'
    },
 ];

 function movieData(movie){
    const movieIndex = movie[0];
    const movieInfo = `movie name ${movieIndex.name}, movie category ${movieIndex.category}, movie rating ${movieIndex.rating}, movie id ${movieIndex.id}`;
    return movieInfo;
 }

const output =  movieData(movie);
console.log(output);

*/


/*
  ########### code exercise ############
*/


//Write a JavaScript program to create a new string without the first and last character of a given string and string length must be 3 or more
// function without_first_end(str) {
//    if(typeof str==='string'){
//        if(str.length>=3){
//        console.log(str.slice(1,-1));
//      }
//      return false;
//    }else{
//      return 'please provide a string value'
//    }
   
//  }
//   console.log(without_first_end('JavaScript')); //avascrip
 //  console.log(without_first_end('JS')); //false
 //  console.log(without_first_end('PHP')); //H
 
 
 
 
 
  //Write a JavaScript program to convert a given number to hours and minutes
//  function time_convert(num)
//  { 
//    const hour = parseInt((num/60))
//    const minute = (num%60)
//    return `${hour}:${minute}`;
       
//  }
 
//  console.log(time_convert(71));//1:11
//  console.log(time_convert(450)); //7:30
//  console.log(time_convert(1441)); //24:1
 
 
 
 
 // Exercise - 1 (What will be the result and explain why?)
 // const x =10;
 // const y="a";
 
 // console.log(y==="b" || x>=10);
 /*
   Result will be true. Here, first part will check value amd type are equals or not.If it's equal then result will come true
   otherwise false and as first part it seems false then check the second part that is true.so, here short
   circuit has not occurs.
 */
 
 
 // Exercise - 2 (What will be the result and explain why?)
//  const x=3; 
//  const y=8;
//  console.log(!(x=="3" || x===y) && !(y!=8 && x<=y));
 /*
   Result will be false. Here, first part(x=='3') of (x=="3" || x===y) will check value and type conversion are equals or not.If it's equal then result will come true
   otherwise false and as first part(x=='3') it seems true then no need to check the second part(x===y).so, here short
   circuit has occurs but !(x=="3" || x===y) is false. The first part(y!=8) of (y!=8 && x<=y) will check only value is equals or not.If it's equal then result will come true
   otherwise false as it seems false and need to check the second part(x<=y) is true and here short circuit has occurs.so (y!=8 && x<=y) is false but !(y!=8 && x<=y) is true.
   !(x=="3" || x===y) is false and !(y!=8 && x<=y) is true. so, !(x=="3" || x===y) && !(y!=8 && x<=y) is false and short circuit
   has occurs as at first has come false so no need to check the second part.
 */
 
 
 
 // Exercise -3(Get the boolean value) 
//  const name=!"Hello World"; //At first check string that is true then it will reverse for !(Not operator)
//  console.log(name);
 
//  const emptyString=!""; //At first check empty string that is falsy value then it will reverse for !(Not operator)
//  console.log(emptyString);
 
//  const nullValue = !null; //At first check null that is falsy value then it will reverse for !(Not operator)
//  console.log(nullValue);
 
//  const zeroValue = !0; //At first check 0 that is falsy value then it will reverse for !(Not operator)
//  console.log(zeroValue);
 
//  const negativeValue = !-1; //At first check -1 that is truthy value then it will reverse for !(Not operator)
//  console.log(negativeValue);
 
//  const notANumber = !NaN; //At first check NAN that is falsy value then it will reverse for !(Not operator)
//  console.log(notANumber);
 
 
 // Exercise -4(What will be the result and explain why?)
//  const str="";
//  const msg = "haha!";
//  const isFunny="false";
 
//  console.log(!((str||msg) && isFunny));
 
 /*
    At first check str value of (str||msg) is falsy and need to check msg value is truthy and no short circuit will happen.
    so, (str||msg) is true(real value is "haha!") for || operator. isFunny value is truthy as it's a string. ((str||msg) && isFunny) is 
    true(real value is "false") but !((str||msg) && isFunny) is false(boolean) as !(true && true) is false. 
 */
 

 // find first element of array but if 'n' th value is given from argument with an array argument then it will
 // given according value with nth form of that array.   
// function arrayNth(arr,elem){
//    return !elem ? arr.slice(0,1):arr.slice(0,elem);
//    // if(!elem){
//    //    return arr.slice(0,1);
//    // }
//    // return arr.slice(0,elem);
// }
// console.log(arrayNth([1,2,3,5,6],-3));





//Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
// function array_max_diff(arr) {

//    const max = Math.max(...arr);
//    const min = Math.min(...arr);
//    return max-min;
// }
// console.log(array_max_diff([1, 2, 3, 8, 9])) //lowest value-1 ,highest value-9 //result will be 9-1 = 8
// console.log(array_max_diff([1, 2, 3, 18, 9])) //17
// console.log(array_max_diff([13, 2, 3, 8, 9]))//11



//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
// function near_100(x, y) {
//    //Todo -write your code here
//    // const max = Math.max(x,y);
//    // if(x===y){
//    //    return false;
//    // }
//    // return max<100 && max;
//    if(x>y){
//       return x;
//    }else if(x===y){
//       return false;
//    }
//    return y;
// }
   
// console.log(near_100(90, 89));//90
// console.log(near_100(-90, -89));//-89
// console.log(near_100(10, 98));//98
// console.log(near_100(10, 10));//false







//Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive
// function max_townums_range(x, y){	
//    if( (x >= 40 && x <= 60) && (y >= 40 && y <= 60) ){
//    if(x === y){
//    return "Numbers are the same";
//    }else if (x > y){
//    return x;
//    }else{
//    return y;
//    }
//    }else{
//    return "Numbers don't fit in range";
//    }
//    }
   
   
//    console.log(max_townums_range(45, 60));
//    console.log(max_townums_range(25, 60));
//    console.log(max_townums_range(45, 80));

//Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// function match_Character(str, char){
  
//    // return str.includes(char);

//    // using for of loop
//    let result = false;
//    for (const name of str) {
//       if(name===char){
//          result = true;
//          break;
//       }
//    }
//    return result;
   
//  }
//  console.log(match_Character('javascript', 'q')) //true
//  console.log(match_Character('python', 'y')) //false
//  console.log(match_Character('console', 'o')) //false




//  const age=5;
//  if(age<10){
//     console.log('stay home under your mom supervision');
//  }else if((age>10 && age<15) || age==10){
//    console.log('Try to gain knowledge from outside of home');
//  }
//  else if((age>15 && age<18) || age==15){
//    console.log('Prepare to cast vote');
//  }
//  else if(age>18){
//    console.log('cast your vote');
// }else{
//    console.log('unknown');
// }



//compare array 
// function checkArray(array1, array2) {
 
   // alternative way
   // const firstArrayLength  = array1.length;
   // const secondArrayLength = array2.length;
   // let result = false;
   // if(firstArrayLength===secondArrayLength){
   //    array1.sort();
   //    array2.sort();
   //     for (let index = 0; index < firstArrayLength; index++) {
   //        if(array1[index]===array2[index]){
   //           result = true;
   //        }else{
   //          result=false;
   //        }
   //     }
   // }
   // return result;

 // alternative way
   // const firstArrayLength  = array1.length;
   // const secondArrayLength = array2.length;
   //  let result = false;
   // if(firstArrayLength===secondArrayLength){
   //   return array1.every(function(num,index){
   //       return num===array2[index];
   //    })
   // }

   // alternative way
//    if(firstArrayLength!==secondArrayLength) return false;
//    for (const index in array1) {
//       if(array1[index]===array2[index]){
//          result=true;
//       }else{
//          result=false;
//          break;
//       }
//    }
//    return result;
// }
// console.log(checkArray([1,2,3],[1,2,3]));



//Write a JavaScript program to swap the first and last elements
// of a given array of integers. The array length should be at least 1.

// function swap(array) {
   // alternative way
   // const firstEle = array[0];
   // const lastEle  = array[array.length-1];
   // if(array.length>=1){
   //    array.splice(0,1,lastEle);
   //    array.splice(array.length-1,1,firstEle);
   //    return array;
   // }

// alternative way
//   let b = array.length-1;
//   let c=0;
//   c=array[0];
//   array[0]=array[b];
//   array[b]=c
//   return array   


// alternative way
// const firstElem = array[0];
// const lastElem  = array[array.length-1];
// if(array.length>1) return [lastElem,...array.splice(1,array.length-2),firstElem];
// else return array;

// }
// console.log(swap([1, 2, 3, 4]));  //[4, 2, 3, 1]
// console.log(swap([0, 2, 1]));  //[1,2,0]
// console.log(swap([3]));  //[3]




// const num =1;
// while(num<=10){
//   console.log(num);
//   num+=2; // reassign is not possible to num variable for const
// }


// let num =1;
// while(num<=20){
//    if(num%4===0){
//       console.log(num);
//    }
//   num++; // reassign is not possible to num variable for const
// }




// let num = 100;
// while(num<150){
//    console.log(num+1);
//    num--;
// }




// const num = 6;
// for (let i = 0; i < num; i++) {
//   for (let j = 0; j <=i; j++) {
//      console.log('d')
//   }
// }



function max(a,b){
   return Math.max(a,b)
}
console.log(max(10,25))



function num(num){
   let result=[];
   for (let index = 0; index < num; index++) {
      result.push(index);
   }
   return result.join();
}
console.log(num(10));



function addition(num){
   let sum=0;
   for (let index = 0; index < num; index++) {
      sum+=index;
   }
   return sum;
}
console.log(addition(10));



function calculateAverage(arr){
   let result=''
   for (const num in arr) {
      if(arr[num]<60){
         result+='F'
      }else if(arr[num]>=60 && arr[num]<=69){
         result+='D'
      }else if(arr[num]>=70 && arr[num]<=79){
         result+='C'
      }else if(arr[num]>=80 && arr[num]<=89){
         result+='B'
      }else if(arr[num]>90){
         result+='A'
      }
   }
   return result
}

console.log(calculateAverage([60,70,90,50,55]))



const movie={
   title:'a',
   releaseYear:2018,
   rating:'b',
   director:'b'
}
console.log(Object.entries(movie))
function showProperties(movieData){
   let result=``;
  for (const [key,value] of Object.entries(movieData)) {
    if(typeof value ==='string'){
       result += `${key} : ${value} , `;
    }
  }
  return result;
}
console.log(showProperties(movie));




const array=[0,null,undefined,'',2,3];
function countTruthyValue(array){
   let countValue=0;
  for (const value of array) {
     console.log(value)
     if(Boolean(value)===true){
        countValue++;
     }
  }
  return countValue;
}
console.log(countTruthyValue(array));


function sum(array){
   let sum=0;
   console.log(array)
  if(!Array.isArray(array)) return 'provide an array';
  for (const value of array) {
     sum+=value;
  }
  return sum;
}
console.log(sum([1,2,3,4]));


function count(words){
  let obj={};
  for (let index = 0; index < words.length; index++) {
     if(obj[words[index]]){
        obj[words[index]]++;
     }else{
        obj[words[index]]=1;
     }
    
  }
  return obj;
}
console.log(count('samim'));





// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
 for(let i of s){
   newArray.push(i);
 }
  // Only change code above this line
  console.log(newArray)
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);













