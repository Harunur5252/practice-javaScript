
// function is object
// function person(){
//     const firstName = 'harun';
//     console.log(firstName);
// }
// person.lastName='roshid'; // function as object so, we can set key and value this way in object.
// person.fullName = function fullName (){ // we can set a function in the function object. Not only function we can set anything in function.
//    console.log('harunur roshid');
// }
// person.fullName();
// console.log(person.lastName); // for function we can call key by this way. 
// person(); // when we can this function firstName is showed but lastName is not showed.  
// console.dir(person); // we can see this function representation by dir() method.




// understanding prototype
// function Person(firstName,lastName){
//     this.firstName = firstName
//     this.lastName=lastName
//     this.fullName = function fullName(){
//        console.log(`${this.firstName} ${this.lastName}`); 
//     };
// }

// Person.prototype.fullNameProto=function fullNameProto () {
//     console.log(`${this.firstName} ${this.lastName}`);
// }

// const harun = new Person('harun','roshid');
// const samim = new Person('samim','fazlu');
// // console.log(Person.prototype === harun.__proto__);  // Person.prototype what indicates and harun.__proto__ indicates same things.For function prototype and for object __proto__.
// harun.fullNameProto();
// samim.fullNameProto();






// Inheritance

//Person constructor
// function Person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.fullName = function fullName(){
//        console.log(`${this.firstName} ${this.lastName}`); 
//     };
// }

// Person.prototype.fullNameProto=function fullNameProto () {
//     console.log(`${this.firstName} ${this.lastName}`);
// }


// // Profession constructor
// function Profession(firstName,lastName){
//    Person.call(this,firstName,lastName);  // here inheritance Person constructor.here this keyword means Profession and we know in any function to use call(),apply(),bind() but without arrow function.
// }


// Profession.prototype.fullNameProtoWithProf=function fullNameProtoWithProf () {
//     console.log(`${this.firstName} ${this.lastName}`);
// }


// const jamal = new Profession('jamal','mia','web deve;per');
// console.log(jamal.fullNameProtoWithProf());






// two way object create.
/* 1) object literal
    const myObj = {

    }
*/


/* 
2) 

 const myObj = Object.create({},{

})

*/


/* we can inheritance or Oop features create by an object.
    
    const myObj = Object.create({},{ // take two parameter as object

    })

*/

// const Person ={ // use always capital latter 
//     init : function(firstName,firstName){
//         this.firstName=firstName
//         this.lastName= this.lastName
//         return this
//     },
//     fullName : function fullName (){
//         console.log(this)
//         return `${this.firstName} ${this.firstName}`
//     }
// }

// const myObj = Object.create(Person,{ // inherit
//     profession :{
//         value : 'web developer',
//     },
//     income:{
//         value:250
//     },
//     fullNameWithObj:{
//         value:function fullNameWithObj (){
//             // console.log(this)
//             return `${this.firstName} ${this.lastName} ${this.profession}` // this indicate myObj
//         }
//     }
// })

// Person.init('kamal','mia')
// console.log(myObj.fullName())




// using class for Oop (easily get Oop features for es6)

// class Person{
//    constructor(firstName,lastName){
//       this.firstName = firstName
//       this.lastName=lastName
//    }
//    fullName(){
//      return `${this.firstName} ${this.lastName}`
//    }
//    static sayHi(){
//      console.log('hi this is static')
//    }
// }


// class Profession extends Person{ // inheriting
//     constructor(firstName,lastName,profession){
//         super(firstName,lastName) // call Person class ar constructor
//         this.profession=profession
//     }
//     fullNameWithProf(){
//         const withProf = super.fullName() // can call by super from parent class function
//         return `${withProf} ${this.profession}`
//     }
// }


// const harun= new Profession('harun','roshid','web developer') // if we pass arguments this way then must receive parameter by constructor function. But if don't do it then we can simple write by an example (name = 'harun' age=20) in class.
// console.log(harun.fullNameWithProf())
// Person.sayHi() // we can call this way an static function. But we can not call this function by Person class instance.