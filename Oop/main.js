
// const person = {
//     firstName :'harun',
//     lastName:"rohsid",

//     fullName(){
//         return this.firstName+" "+this.lastName;
//     },
//     get fName(){
//         return this.firstName.toUpperCase()
//     },
//     set fName(firstName){
//         if(firstName){
//             this.firstName=firstName
//         }
//     }
// }

// person.fName='kamal'
// console.log(person)



// constructor function and inheritance
// function Person(firstName,lastName){
//     this.firstName = firstName
//     this.lastName  = lastName
   
//     Object.defineProperties(this,{
//         fName:{
//             get(){
//                 return this.firstName.toUpperCase()
//             },
//             set(firstName){
//                 if(firstName){
//                     this.firstName=firstName
//                 }
//             }
//         }
//     })
    
// }
// Person.prototype.fullName=function(){
//     return `${this.firstName} ${this.lastName}`
// }
// const p1 = new Person('harun','roshid')

// // console.log(p1)

// function Contact(firstName,lastName,profession){
//     Person.call(this,firstName,lastName)
//     this.profession=profession
// }

// Contact.prototype=Object.create(Person.prototype)
// Contact.prototype.constructor=Contact

// Contact.prototype.professionalTitle= function(){
//     return this.firstName+' '+this.lastName+' '+this.profession
// }

// const c1 = new Contact('Khalil','hasan','Graphics Designer')
// console.log(c1.fullName())



// abstraction in constructor function
// function Person(firstName,lastName,gender){
//     this.firstName = firstName
//     this.lastName=lastName
//     this.gender=gender
//     // abstraction
//     function prefixName(){
//         if(gender==='male'){
//             return 'Mr'+' '+firstName+' '+lastName
//         }
//     }

//     Object.defineProperties(this,{
//         fName:{
//             get(){
//                 return this.firstName.toUpperCase()
//             },
//             set(firstName){
//                 if(firstName){
//                     this.firstName=firstName
//                 }
//             },
//         },
//         nameWithPrefix:{
//             get(){
//                 return prefixName()
//             }
//         }
//     })
// }
// const p1 = new Person('harun','rohsid','male')
// console.log(p1.nameWithPrefix)



// polymorphism in constructor function
function Person(firstName,lastName){
    this.firstName = firstName
    this.lastName  = lastName
    Object.defineProperties(this,{
        fName:{
            get(){
                return this.firstName.toUpperCase()
            },
            set(firstName){
                if(firstName){
                    this.firstName=firstName
                }
            }
        }
    })
}
Person.prototype.fullName=function(){
    return `${this.firstName} ${this.lastName}`
}

// professionalContact constructor function
function professionalContact(firstName,lastName,profession){
  Person.call(this,firstName,lastName)
  this.profession=profession
}
professionalContact.prototype=Object.create(Person.prototype)
professionalContact.prototype.constructor=professionalContact
professionalContact.prototype.getTitle= function(){
    return this.firstName+' '+this.lastName+' '+this.profession
}

// homeContact constructor function
function homeContact(firstName,lastName,location){
    Person.call(this,firstName,lastName)
    this.location=location
}
homeContact.prototype=Object.create(Person.prototype)
homeContact.prototype.constructor=homeContact
homeContact.prototype.getTitle = function(){
    return this.firstName+' '+this.lastName+' '+this.location
}

const p1  = new Person('harun','roshid')
const pc1 = new professionalContact('Khalil','hasan','Graphics Designer')
const hc1 = new homeContact('samim','mia','Gazipur')













  