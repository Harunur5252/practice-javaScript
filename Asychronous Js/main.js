// from now youTube exercise
//Synchronous Programming example one complete then go for another
// javaScript is single threaded


// console.log(1)
// console.log(2)
// console.log(3)


// Asynchronous Programming
// javaScript is single threaded and asynchronous in nature
// console.log(1)
// setTimeout(()=>{ // as this function is execute after 2s so, that's why js will give undefined output.
//     console.log('calling after 2 sec')
//     console.log(2)
// },2000)
// console.log(3)



// console.log(1)
// console.log(getNumber(2)) // as time is needed that's why undefined is output.
// console.log(3)

// function getNumber(num){
//     setTimeout(()=>{
//         return num
//     },2000)
// }




// Deal with Asynchronous Programming
   // 1) callback
   // 2) promise
   // 3) async await(behind the scene works with promise)

  //  console.log(1)
  //  getNumber(2,function(num){
  //     console.log(num)
  //  })
  //  console.log(3)
   
  //  function getNumber(num,callback){
  //      setTimeout(()=>{
  //          console.log('calling after 2 sec')
  //          callback(num)
  //      },2000)
  //  }





// using callback
//1.getting user -2s
//2.course enrollment-2s
//3.price of the course-2s

// callback hell(called christmas tree)
// getUser(1,function(user){
//     console.log(user)
//     enrollCourse(user.name,function(courses){
//        console.log(courses)
//        price(courses[0],function(price){
//           console.log('js course price 4000')
//        })
//     })
// })
// function getUser(id,callback){
//     setTimeout(()=>{
//         callback({
//             id,
//             name:'Harun',
//             profession:'learning js'
//         })
//     },2000)
// }

// function enrollCourse(firstName,callback){
//    setTimeout(()=>{
//         callback(['js','react','node.js'])
//    },2000)
// }

// function price(courseName,callback){
//   setTimeout(()=>{
//       callback()
//   })
// }




// working with promise
  // promise has three steps pending ,resolve,reject
// when result is ready then it will show the actual output otherwise show error  
// const result = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('I will be done after 2 sec')
//         reject(new Error('some error'))
//     },2000)
// })

// result.then((text)=>{
//     console.log(text)
// }).catch((err)=>{
//     console.log(err.message)
// })



// using promise
//1.getting user -2s
//2.course enrollment-2s
//3.price of the course-2s

// getUser(1)
//  .then(user=>{
//      console.log(user)
//      return enrollCourse(user.name)  // return promise that can catch by then()
//  })
//  .then(course=>{
//     console.log(course)
//     return price(course[0])  // return promise that can catch by then()
//  })
//  .then(price=>{
//      console.log(price)
//  })
//  .catch((err)=>{
//      console.log(new Error(err))  // if any error occurred catch() it handled and show error message.
//  })

// function getUser(id){
//    return new Promise((resolve,reject)=>{  // return promise that can catch by then() if any error occurred catch() it handled and show error message.
//          setTimeout(()=>{
//             resolve({
//                 id,
//                 name:'Harun',
//                 profession:'learning js'
//             })
//         },2000)
//     })
// }
// function enrollCourse(firstName){
//     return new Promise((resolve,reject)=>{  // return promise that can catch by then() if any error occurred catch() it handled and show error message.
//         setTimeout(()=>{
//           resolve(['js','react','node.js',firstName])
//         },2000)
//     })
// }
// function price(courseName){
//     return new Promise((resolve,reject)=>{  // return promise that can catch by then() if any error occurred catch() it handled and show error message.
//         setTimeout(()=>{
//             reject(courseName+' '+'price is '+2000)
//         })
//     })
// }





// promise- all.If data comes from different case that's means not dependent to others then use Promise.all(). Promise.all() is return resolve value if all value is resolve. 
// const p1 = Promise.resolve('step1')
// const p2 = Promise.resolve('step2')
// const p3 = Promise.resolve('step3')

// Promise.all([p1,p2,p3]) // Promise.all() is return resolve value if all value is resolve.
// .then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })

// // promise- race. If data comes from different case that's means not dependent to others then use Promise.race(). Promise.race() is return resolve value if only one is resolve.
// Promise.race([p1,p2,p3]) // Promise.race() is return resolve value if only one is resolve.
// .then(result=>{
//     console.log(result)
// }).catch(err=>{
//     console.log(err)
// })




// from now live video class exercise
// callback
// function getOne(){
//   return 1
// }
// function getTwo(){
//   return 2
// }
// function getThree(callback){
//   setTimeout(()=>{
//      callback(3) 
//   },2000)
// }
// function getFour(callback){
//   setTimeout(()=>{
//     callback(4) 
//   })
// }
// console.log(getOne())
// console.log(getTwo())
// console.log(getThree(function(num){
//    console.log(num)
//    getFour((num)=>{
//    console.log(num)
//   })
// }))
// console.log()





//using promise
// function getThree(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('call getThree func')
//     },2000)
//   })
// }
// function getFour(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('call getFour func')
//     },2000)
//   })
// }
// function getFive(){
//   return new Promise((resolve,reject)=>{ // return promise that can catch by then() if any error occurred catch() it handled and show error message.
//     setTimeout(()=>{
//       reject('call getFive func')
//     },2000)
//   })
// }
// getThree()
//  .then(name=>{
//     console.log(name)
//     return getFour() // return promise that can catch by then() 
//  })
//  .then(name=>{
//    console.log(name)
//    return getFive() // return promise that can catch by then() 
//  })
//  .then(name=>{
//   console.log(name) 
// })
//  .catch(err=>{
//   console.log(new Error(err)) // if any error occurred catch() it handled and show error message.
//  })




//using async and await
function getThree(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('call getThree func')
    },2000)
  })
}
function getFour(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('call getFour func')
    },2000)
  })
}
function getFive(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('call getFive func')
    },2000)
  })
}


async function getAllAction(){
  try {
    const three = await getThree()
    const four = await getFour()
    const five = await getFive()
    console.log(three,four,five)
  } catch (error) {
    console.log(error)
  }
}

getAllAction()





// using sync and await (behind the scene async and await works with Promise)
//1.getting user -2s
//2.course enrollment-2s
//3.price of the course-2s
// function getUser(id){
//    return new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             resolve({
//                 id,
//                 name:'Harun',
//                 profession:'learning js'
//             })
//         },2000)
//     })
// }
// function enrollCourse(firstName){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(['js','react','node.js',firstName])
//         },2000)
//     })
// }
// function getPrice(courseName){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(courseName+' '+'price is '+2000)
//         },2000)
//     })
// }
// async function getResult(){
//   const user = await getUser(1)
//   console.log(user)
//   const course = await enrollCourse(user.name)
//   console.log(course)
//   const price = await getPrice(course[0])
//   console.log(price)
// }
// getResult()






// using sync and await (behind the scene async and await works with Promise)
//1.getting user -2s
//2.course enrollment-2s
//3.price of the course-2s
// function getUser(id){
//   return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve({
//                id,
//                name:'Harun',
//                profession:'learning js'
//            })
//        },2000)
//    })
// }
// function enrollCourse(firstName){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           resolve(['js','react','node.js',firstName])
//        },2000)
//    })
// }
// function getPrice(courseName){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            reject(courseName+' '+'price is '+2000)
//        },2000)
//    })
// }

// we know async and await return promise this is the example.
// async function getResult(){
//   const user = await getUser(1)
//   console.log(user)
//   const course = await enrollCourse(user.name)
//   return [...course,user]   // return promise

// }

// getResult()
//    .then(result=>{
//      console.log(result)
//    })
//    .catch(err=>{
//     console.log(new Error(err))
//    })


// but above example async and await has a problem that is if any error occur in async then how show error. we know promise has special catch() for error handle.
// try {
//   async function getResult(){
//     const user = await getUser(1)
//     console.log(user)
//     const course = await enrollCourse(user.name)
//     console.log(course)
//     const price = await getPrice(course[0])
//     console.log(price)
//   }
//   getResult()
  
// } catch (error) {
//   console.log(error)
// }  





// using promise
// const result = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('one')
//   },2000)
// })

// const result2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('two')
//   },2000)
// })

// const result3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('three')
//   },2000)
// })


// result
//  .then(name=>{
//    console.log(name)
//    return result2
//  })
//  .then(name=>{
//   console.log(name)
//   return result3
//  })
//  .then(name=>{
//   console.log(name)
//  })
//  .catch(err=>{
//    console.log(err)
//  })


 // using async and await. if you await before an function then must use async in whole function
  // async function getAllResult(){
  //    const one = await result
  //    console.log(one)
  //    const two = await result2
  //    console.log(two)
  //    const three = await result3
  //    console.log(three)
  // }
  // getAllResult()