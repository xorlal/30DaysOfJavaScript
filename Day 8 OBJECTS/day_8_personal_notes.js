//SCOPE:


//OBJECTS:
/*
Syntax
const person = {}
*/

//CREATING AN OBJECT WITH VALUES
//Examples
// const rectangle = {
//     length: 20,
//     width: 20
// }
// console.log(rectangle)


// const person = {
//     firstName:'Xorlali',
//     lastName: 'Agorsor',
//     age: 20,
//     country: 'Ghana',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python'],
//     isMarried: false

// }
// console.log(person)

//GETTING VALUES FROM AN OBJECT: TWO WAY TO GET VALUES IS (.) DOT NOTATION OR ([])BRACKET NOTATION
// const person1 = {
//     firstName:'Xorlali',
//     lastName: 'Agorsor',
//     age: 20,
//     country: 'Ghana',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python'],
//     isMarried: false,
//     getFullName: function(){return `${this.firstName} ${this.lastName}`},
//     'phone Number': '+23358387768' // to access the phone number we only use the square bracket method
// }
//  console.log(person1.firstName)
//  console.log(person1.lastName)
//  console.log(person1.age)
//  console.log(person1.getFullName())
//  console.log(person1["phone Number"]) //to access the phone number we only use the square bracket method


//CREATING OBJECT METHODS: AN OBJECT METHOD IS A FUNCTION WITHIN AN OBJECT
// NB: We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself
// const person2 = {
//     firstName: 'Emmanuel',
//     lastName: 'Afram',
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
  
//   console.log(person2.getFullName())

//SETTING NEW KEY FOR AN OBJECT: An object is a mutable data structure and we can modify the content of an object after it gets created.
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() { 
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true
  
//   person.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())


//OBJECT METHODS:There are different methods to manipulate an object. Let us see some of the available methods

//Object.assign: To copy an object without modifying the original object

const person = {
    firstName: 'Xorlali',
    age: 250,
    country: 'Ghana',
    city:'Accra',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'Frontend Developer',
    address: {
      street: 'Kpone, P.S Global',
      pobox: 2002,
      city: 'Accra'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }

  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

//Getting object keys: 
//Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson)
console.log(keys)
const address = Object.keys(copyPerson.address)
console.log(address)

//Getting object values using Object.values()
//Object.values:To get values of an object as an array
const entries = Object.values(copyPerson)
console.log(entries)

//Checking properties using hasOwnProperty()
//hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('score'))
