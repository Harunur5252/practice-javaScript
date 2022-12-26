const namePrefix = Symbol()
class Person{
    constructor(firstName,lastName,gender='male'){
        this.firstName = firstName
        this.lastName=lastName
        this.gender=gender
    }
    [namePrefix](){ // private method
        if(this.gender ==='male'){
            return 'Mr'+' '+this.firstName+' '+this.lastName
        }
    }
    get fName(){
        return this.firstName.toUpperCase()
    }
    get nameWithPrefix(){
        return this[namePrefix]()
    }
    set fName(firstName){
        if(firstName){
            this.firstName=firstName
        }
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const personObj = new Person('karim','faruk')
console.log(personObj.nameWithPrefix)


class professionalContact extends Person{
    constructor(firstName,lastName,profession){
       super(firstName,lastName)
       this.profession=profession
    }
    getTitle(){
        return super.fullName() + ' ' +this.profession
    }
}
const professionalContactObj = new professionalContact('harun','roshid','Sherpur')
console.log(professionalContactObj.getTitle())

class homeContact extends Person{
    constructor(firstName,lastName,location){
       super(firstName,lastName)
       this.location=location
    }
    getTitle(){
        return super.fullName() + ' ' + this.location
    }
}
const homeContactObj = new homeContact('samim','hasan','Gazipur')
console.log(homeContactObj.getTitle())



