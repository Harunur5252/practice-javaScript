// **** Perfect(async,await) way structuring****
// #### Note : async and await returns promise
const http = {
    async getAll(path){
       try {
            const res= await fetch(path)
            return await res.json()
       } catch (error) {
           return new Error(error)
       }
    },
    async getOne(path,id){
       try {
            const res= await fetch(`${path}/${id}`)
            return await res.json()
       } catch (error) {
           return new Error(error)
       }
    },
   async add(path,data){
        try {
            const res= await fetch(path,{
                method:'POST',
                body:JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            return await res.json()
        } catch (error) {
            return new Error(error)
        }
    },
   async update(path,id,data){
        try {
            const res= await fetch(`${path}/${id}`,{
                method:'PATCH',
                body:JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            return await res.json()
        } catch (error) {
            return new Error(error)
        }
    },
   async delete(path,id){
       try {
        const res=await fetch(`${path}/${id}`,{
            method:'DELETE',
        })
         return await res.json()
       } catch (error) {
          return new Error(error)
       }
    }
}

async function getTodos(){
   const res = await http.getAll('http://localhost:3000/posts')
   console.log('get all posts',res)
}
console.log(getTodos())


// async function getTodo(){
//     const res = await http.getOne('http://localhost:3000/posts',2)
//     console.log('get single post',res)
// }
// console.log(getTodo())

//  async function getDeleteTodo(){
//     const res = await http.delete('http://localhost:3000/posts',2)
//     console.log('get delete post',res)
// }
// console.log(getDeleteTodo())

async function getAddTodo(){
    const res = await http.add('http://localhost:3000/posts',{
                title: 'Our Todo',
                completed: true
        })
    const res2 = await http.update('http://localhost:3000/posts',1,{
            title: 'Our Todo4',
            completed: false
        })
    console.log('added data post',res)
    console.log('update data post',res2)
}
getAddTodo()







// **** Good(promise) way structuring****
// const http = {
//     getAll(path){
//         return fetch(path)
//         .then(res=>res.json())
//         .then(data=>data)
//         .catch(err=>new Error(err))
//     },
//     getOne(path,id){
//         return fetch(`${path}/${id}`)
//         .then(res=>res.json())
//         .then(data=>data)
//         .catch(err=>new Error(err))
//     },
//     add(path,data){
//         return fetch(path,{
//             method:'POST',
//             body:JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//          .then(res=>res.json())
//          .then(data=>data)
//          .catch(err=>err)
//     },
//     update(path,id,data){
//         return fetch(`${path}/${id}`,{
//             method:'PATCH',
//             body:JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//         .then(res=>res.json())
//         .then(data=>data)
//         .catch(err=>err)
//     },
//     delete(path,id){
//         return fetch(`${path}/${id}`,{
//             method:'DELETE',
//         })
//          .then(res=>res.json())
//          .then(data=>data)
//          .catch(err=>new Error(err))
//     }
// }
//  http.getAll('http://jsonplaceholder.typicode.com/todos').then(data=>console.log('get all toto data',data)).catch(err=>console.log(err))
//  http.getOne('http://jsonplaceholder.typicode.com/todos',2).then(data=>console.log('get single todo data',data)).catch(err=>console.log(err))
// function addedTodo(){
//    return new Promise((resolve,reject)=>{
//         http.add('http://jsonplaceholder.typicode.com/todos',{
//         title: 'Our Todo',
//         completed: true
//        }).then(data=>{
//            resolve(data)
//        }).catch(err=>console.log(err))
//     })
// }
// addedTodo()
//  .then(data=>{
//      console.log('data added',data)
//     return http.update('http://jsonplaceholder.typicode.com/todos',2,{
//      title: 'Our Todo2',
//      completed: false
//    })
//  })
//  .then(data=>console.log('updated data',data))
//  .catch(err=>console.log(err))
//  http.delete('http://jsonplaceholder.typicode.com/todos',2).then(data=>console.log('get delete todo data',data)).catch(err=>console.log(err))





// **** Bad way structuring****
// function getTodos(){
//    return fetch('http://jsonplaceholder.typicode.com/todos')
//     .then(res=>res.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err))
// }

// function getTodo(){
//     return fetch('http://jsonplaceholder.typicode.com/todos/2')
//      .then(res=>res.json())
//      .then(data=>console.log(data))
//      .catch(err=>console.log(err))
//  }

//  function addTodo(){
//     return fetch('http://jsonplaceholder.typicode.com/todos',{
//         method:'POST',
//         body:JSON.stringify({
//             title: 'Our Todo',
//             completed: true
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//      .then(res=>res.json())
//      .then(data=>console.log(data))
//      .catch(err=>console.log(err))
//  }
//  function updateTodo(){
//     return fetch('http://jsonplaceholder.typicode.com/todos/2',{
//         method:'PATCH',
//         body:JSON.stringify({
//             title: 'Our Todo',
//             completed: true
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//      .then(res=>res.json())
//      .then(data=>console.log(data))
//      .catch(err=>console.log(err))
//  }
//  function deleteTodo(){
//     return fetch('http://jsonplaceholder.typicode.com/todos/2',{
//         method:'DELETE',
//     })
//      .then(res=>res.json())
//      .then(data=>console.log(data))
//      .catch(err=>console.log(err))
//  }
// getTodos()
// getTodo()
// addTodo()
// updateTodo()
// deleteTodo()