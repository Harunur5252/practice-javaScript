


const arr=['I','love','programming'];

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

// we can use loop in any string
const stringNew= 'I love Programming';
for (let index = 0; index < stringNew.length; index++) {
    const element = stringNew[index];
    console.log(element)
}

// forEach every times call inside function of forEach that's why this function is called callback function.
arr.forEach(function(el){
   console.log(el);
})





// flatten an array

// function flatten(arr) {
//     const result = []
  
//     arr.forEach(function(i) {
//       if (Array.isArray(i)) {
//         result.push(...flatten(i)) // recursive call 
//       } else {
//         result.push(i)
//       }
//     })
  
//     return result
//   }
  
//   // Usage
//   const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
  
//   console.log(flatten(nested));








// flatten an array


function flatten(arr) {
    const result = []
  
    arr.forEach(element => {
        
        if(Array.isArray(element)){
            element.forEach(newElement=>{
                if(Array.isArray(newElement)){
                    result.push(...newElement);
                }else{
                    result.push(newElement);
                }
            })
        }else{
            result.push(element); 
        }
    });
  
    return result
  }
  
  // Usage
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]
  
  console.log(flatten(nested)) //output-[1, 2, 3, 4, 5, 6, 7, 8, 9]














 
















