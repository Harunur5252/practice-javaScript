

function Product(productName,productPrice,productIsAvailable,productQuantity){
    
    this.productName=productName;
    this.productPrice=productPrice;
    this.productIsAvailable=productIsAvailable;
    this.productQuantity=productQuantity;
    this.showProductInfo=()=>{
        return `${this.productName} ${this.productPrice} ${this.productIsAvailable} ${this.productQuantity}`;
    }
}
 Product.prototype.showProductProto=function(){ // this function is create a single copy in prototype.
    return `${this.productName} ${this.productPrice} ${this.productIsAvailable} ${this.productQuantity}`;
 }     
 // when we call this way(new keyword) then every time Product function call and return output with inside function of Product function. But if we declare function out of Product function that means in prototype object then each time call Product function it will not copy outside functions. 
const product1  =  new Product('Mango',40,true,10); 
const product2  =  new Product('Jackfruit',50,true,50);

console.log(product1)
console.log(product2)





// using class
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');
  console.log(zeus)


// getters and setters method
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);














  

  // inheritance(Oop) in js
// function Person(firstName,lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = () => {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// Person.prototype.fullNameProto = function ()  {
//     return `${this.firstName} ${this.lastName}`
// }

// function Profession (firstName,lastName){
//    Person.apply(this,[firstName,lastName])
// }
// Profession.prototype.__proto__ = Person.prototype


// const cse = new Profession('kamal','mia')
// const harun = new Person('harun','roshid')
// console.log(cse.fullNameProto())




// alternative way inheritance and proto chaining
// const person ={
//     init(firstName,lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     },
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// person.init('harun','roshid')

// const Profession = Object.create(person,{
//     profession:{
//         value:'cse'
//     },
//     fullNameWithProf:{
//         value:function(){
//             return `${this.firstName} ${this.lastName} ${this.profession}`
//         }
//     }
// })
// const harun = Object.create(Profession)

// console.log(Profession.fullNameWithProf())




// es6 class(Oop)

// class Person {
//     name='harun'
//     constructor(firstName,lastName){
//         this.firstName = firstName
//         this.lastName= lastName
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Profession extends Person {
//     profession='cse'
//     constructor(firstName,lastName){
//         super(firstName,lastName)
//     }
//     fullNameWithProf(){
//         const withProf = super.fullName() // accessing parent class methods
//         return `${withProf} ${this.profession}`
//     }
// }
// const harun = new Profession('harun','roshid')
// console.log(harun.fullNameWithProf())