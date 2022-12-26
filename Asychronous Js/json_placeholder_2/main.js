class Http{
    constructor(){

    }
    async getAll(path){
    try {
        const res  = await fetch(`${path}`)
        return await res.json()
    } catch (error) {
        return new Error(error)
    }
    }
    async getOne(path,id){
        try {
            const res  = await fetch(`${path}/${id}`)
            return await res.json()
        } catch (error) {
            return new Error(error)
        }
    }
    async getDelete(path,id){
        try {
            const res  = await fetch(`${path}/${id}`, {
                method: 'DELETE',
            })
            return await res.json()
        } catch (error) {
            return new Error(error)
        }
    }
    async update(path,id,obj){
        try {
            const res  = await fetch(`${path}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(obj),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            return await res.json()
        } catch (error) {
            return new Error(error)
        }
    }
    async add(path,obj){
        try {
            const res  = await fetch(`${path}`, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                'Content-type': 'application/json; charset=UTF-8',
                },
            })
            return await res.json()
        } catch (error) {
            return new Error(error)
        }
    }

}

const http = new Http()

class Todo{
    constructor(){

    }
    async  getTodos(){
    try {
     const todos = await http.getAll('http://localhost:3000/posts')
     console.log(todos)
    } catch (error) {
     console.log(error)
    }
    }
    async  getTodo(){
        try {
            const todo = await http.getOne('http://localhost:3000/posts',2)
            console.log(todo)
        } catch (error) {
            console.log(error)
        }
        
    }
    async  deleteTodo(){
        try {
            const todo = await http.getDelete('http://localhost:3000/posts',3)
            console.log(todo)
        } catch (error) {
            console.log(error)
        }
    }
    async  todoAdd(){
    try {
        const addTodo =  await http.add('http://localhost:3000/posts',{
            title: 'karim',
            author: 'mia',
        })
    const updateTodo =  await  http.update('http://localhost:3000/posts',4,{
            title: 'Harun1',
            author: 'roshid2',
        })
        console.log(addTodo)
        console.log(updateTodo)
    } catch (error) {
        console.log(error)
    }
    }
}

const todo = new Todo()

todo.getTodos()
todo.getTodo()
// todo.deleteTodo()
todo.todoAdd()



