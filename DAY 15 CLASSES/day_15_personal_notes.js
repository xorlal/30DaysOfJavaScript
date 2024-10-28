//CLASSES
//To define a class in JavaScript we need the keyword *class*, the name of a class in CamelCase and block code(two curly brackets). Let us create a class name Person.
/* SYNTAX
class ClassName{
// code goes here
}
*/

//Example
class Person{
    //code goes here
}
//we have created a person class but there is nothing inside 

//Class Instantiation :Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.

class AnotherPerson {
    //code goes here
}
const person = new AnotherPerson()
console.log(person)

//Class Constructor
//The constructor is a builtin function which allows as to create a blueprint for our object. The constructor function starts with a keyword constructor followed by a parenthesis. Inside the parenthesis we pass the properties of the object as parameter. We use the this keyword to attach the constructor parameters with the class.

//All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties.Let us pass value at this time when we instantiate the class.
class Student{
constructor(firstname, lastName){
    this.firstname = firstname
    this.lastName = lastName
}
} // 
const student = new Student()
console.log(student)


//As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Staff class.
class Staff{
    constructor(firstname, lastName){
        console.log(this)
        this.firstname = firstname
        this.lastName = lastName
    }
} 

const staff1 = new Staff('Xorlali', 'Agorsor')
const staff2 = new Staff('Emmanueal', 'Afram')
const staff3 = new Staff('Humphery', 'Tetteh')

console.log(staff1)
console.log(staff2)
console.log(staff3)


//Using the class OnePerson we created three persons object. As you can see our class did not have many properties let us add more properties to the class.
class OnePerson{
    constructor(firstname, lastName, age, country, city){
        console.log(this)
        this.firstname = firstname
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
}

const onePerson1 = new OnePerson('Xorlali', 'Agorsor', 25, 'Ghana', 'Accra')
console.log(onePerson1)

//Default values with constructor
//The constructor function properties may have a default value like other regular functions.

class Member{
constructor(firstname = 'Eyram', lastName = 'Agorsor', age= 27, country='Ghana', city='Accra'){
    this.firstname = firstname
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
}
}

const newPerson = new Member()
const newPerson1 = new Member('Esther', 'Bediako', 33, 'Ghana', 'Accra')
console.log(newPerson)
console.log(newPerson1)

//CLASS METHODS
//The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.
class Personal {
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        // const aboutMyself = `My name is ${this.firstname} ${this.lastName} and I am ${this.age} years old, I come from ${this.country} and reside in ${this.city} `
        return fullName
    }
}

const personal1 = new Personal('David', 'Boateng', 26, 'Ghana', 'Accra')
const personal2 = new Personal('Selasi', 'Smith', 20, 'Minnesota', 'Minneapolis')

console.log(personal1.getFullName())
console.log(personal2.getFullName())


//PROPERTIES WITH INITAL VALUES
//When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.

class Develpoer{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getAllName(){
        const allName = this.firstName + ' ' + this.lastName
        return allName
    }
}

const fam1 = new Develpoer('Xorlali', 'Agorsor', 250, 'Ghana', 'Accra')
const fam2 = new Develpoer('Eliab', 'John', 37, 'USA', 'New York')

console.log(fam1.score)
console.log(fam2.score)
console.log(fam1.skills)
console.log(fam2.skills)

//A method could be regular method or a getter or a setter. Let us see, getter and setter.

//GETTER METHOD
//The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow.
class Senior{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getAllName(){
        const allName = this.firstName + ' ' + this.lastName
        return allName
    }

    get getScore() {
        return this.score
    }

    get getSkills() {
        return this.skills
    }
}

const senior1 = new Senior('Xorlali', 'Aboagye', 83, 'Ghana', 'Kumasi')
const senoir2 = new Senior('Abigail', 'Ansah', 23, 'Ghana', 'Takoradi')

console.log(senior1.getScore)

console.log(senoir2.getScore)
console.log(senoir2.getSkills)
console.log(senior1.getSkills)


//SETTER
//The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.

class Junior{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getAllName(){
        const allName = this.firstName + ' ' + this.lastName
        return allName
    }

    get getScore() {
        return this.score
    }

    get getSkills() {
        return this.skills
    }

    set setScore(score){
        this.score += score
    }

    set setSkills(skills){
        this.skills.push(skills)
    }

}

const junior1 = new Junior('Junior', 'Oscar', 32, 'Nigeria', 'Lagos')
const junior2 = new Junior('Issac', 'Lazarus', 3, 'Nigeria', 'Ibadan')

junior1.setScore = 1
junior1.setSkills = 'HTML'
junior1.setSkills = 'CSS'
junior1.setSkills = 'JavaScript'


junior2.setScore = 1
junior2.setSkills = 'Planning'
junior2.setSkills = 'Management'
junior2.setSkills = 'Organizing'

console.log(junior1.score)
console.log(junior2.score)

console.log(junior1.skills)
console.log(junior2.skills)


//Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method you are good. Let us add regular method called getPersonInfo in the Person class.

class DevStaff{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getAllName(){
        const allName = this.firstName + ' ' + this.lastName
        return allName
    }

    get getScore() {
        return this.score
    }

    get getSkills() {
        return this.skills
    }

    set setScore(score){
        this.score += score
    }

    set setSkills(skills){
        this.skills.push(skills)
    }

    getPersonInfo (){
        let fullName = this.getAllName()
        let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length -1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age} years old. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }

}

const devStaff1 = new DevStaff('Kafui', 'komla', 21, 'Ghana', 'Accra' )
const devStaff2 = new DevStaff('Akpene', 'Sefa', 28, 'Nigeria', 'Abuja')
const devStaff3 = new DevStaff('Micheal', 'Agbotse', 25, 'USA', 'Mitichigan')

devStaff1.setScore = 3
devStaff1.setSkills = 'HTML'
devStaff1.setSkills = 'CSS'
devStaff1.setSkills = 'JavaScript'

devStaff2.setScore = 5
devStaff2.setSkills = 'Planning'
devStaff2.setSkills = 'Management'
devStaff2.setSkills = 'Organizing'

devStaff3.setSkills = 'Accounting'
devStaff3.setSkills = 'Business relations'

console.log(devStaff1.getScore)
console.log(devStaff2.getScore)
console.log(devStaff3.getScore)


console.log(devStaff1.getSkills)
console.log(devStaff2.getSkills)
console.log(devStaff3.getSkills)

console.log(devStaff1.getPersonInfo())
console.log(devStaff2.getPersonInfo())
console.log(devStaff3.getPersonInfo())

//STATIC METHOD 
//The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.

class Rotary{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = [] 
    }
    getNames(){
        const names = this.firstName + ' ' + this.lastName
        return names
    }
    get theScore(){
        return this.score
    }
    get theSkills(){
        return this.skills 
    }

    set giveScore(score){
        this.score += score
    }

    set giveSkills(skill){
        this.skills.push(skill)
    }

    getRotInfo(){
        let allName = this.getNames()
        let theSkills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills - 1]}`;
        let edittedSkills = theSkills ? `He knows ${skills}` : ''
        let information = `${allName} is ${this.age}. He lives ${this.city}, ${this.country}. ${edittedSkills}`
        return information
    }

    static favoriteSkill(){
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }

    static showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10){
        minutes = '0' + minutes
    }
    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }


}

console.log(Rotary.favoriteSkill())
console.log(Rotary.showDateTime()) 


//INHERITANCE
//Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

/*
Syntax
class childClassName extends{

}
*/

class Rot extends Rotary{
    saySomething(){
        console.log('I am a child of the Rotary class')
    }
}

const s1 = new Rot('Xorla', 'Stephen', 22, 'Zambia', 'Tusla')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getNames())
console.log(s1.getRotInfo())



//OVERRIDING METHODS
class Pupil extends Rotary{
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }

   sayingSomething(){
    console.log('I am a child of the Rotary class')
   }
getPeronalInfo(){
    const longName = this.getNames()
    let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(', ') + ` and ${this.skills[this.skills.length - 1]}`
    let theSkills = skills ? `He knows ${skills}` : ''
let pronoun = this.gender == 'Male' ? 'He' : 'She'

let inform = `${longName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${theSkills}`
return inform
}

}

const p1 = new Pupil('Dominion', 'Adobgeman', 32, 'Ghana', 'Accra', 'Male')

const p2 = new Pupil('Freda', 'Asare', 34, 'Ghana', 'Accra', 'Female')

p1.setScore = 2
p1.setSkills = 'HTML'
p1.setSkills = 'CSS'
p1.setSkills = 'JavaScript'

p2.setScore = 3
p2.setSkills = 'Organizing'
p2.setSkills = 'Management'
p2.setSkills = 'Planning'

console.log(p1)
console.log(p2)

console.log(p1.sayingSomething())

console.log(p1.getNames())
console.log(p1.getPeronalInfo())

console.log(p2.getPeronalInfo())
