// DESTRUCTURING ANS SPREADING
// Destructuring: Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

//EXAMPLES: DECONSTRUCTING ARRAYS
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree) //1 2 3

const names = ['Xorlali', 'Humphry', 'Alex', 'Eyram']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) //Xorlali Humphry Alex Eyram

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
console.log(e, pi, gravity, bodyTemp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd, backEnd)


//If we like to skip one of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const points = [1, 2, 3]
let [numberOne, , numberTwo] = points
console.log(numberOne, numberTwo)

const calling = ['Xorlali', 'Humphry', 'Alex', 'Eyram']
let [, secondName, , fourthName] = calling
console.log(secondName, fourthName)


//We can use default value in case the value of array for that index is undefined:
const player = [undefined, 'Ella', 'Joe' ]
let [firstOne = 'Xorlali', secondOne, thirdOne, fourthOne = 'John'] = player
console.log(firstOne, secondOne, thirdOne, fourthOne)


//We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)


//Destructuring during iteration: Using 'For of loop'
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
for(const [country, city] of countries){
    console.log(country, city)
}

const webDev = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for(const [first, second, third] of webDev){
    console.log(first, second, third)
}


//DESTRUCTURING AN OBJECT: When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}

let {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter) //20 10 200 undefined


//Renaming during destructuring
const square = {
    width: 20,
    height: 30,
    area: 200
}
let {width: w, height: h, area: a, perimeter: p} = square
console.log(w, h, a, p)


//If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.
const circle = {
    sideA: 20,
   sideB: 30,
    overAll: 10
}

let {sideA, sideB, overAll, perimeter1 = 60} = circle

console.log(sideA, sideB, overAll, perimeter1)



//When the key is found in the object and a value is passed on later with the same key, the one in the object will override the second declaration 
const hexa = {
    pointA: 10,
    pointB: 20,
    pointC: 30,
    param: 80
}
let {pointA, pointB, pointC, param = 60} = hexa 
console.log(pointA, pointB, pointC, param)

//Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

//Object parameter without destructuring
// const rect = {
//     widthr: 20,
//     heightr: 10
// }
// const calculatedPerimeter = rectang => {
//     return 2 *(rectang.widthr + rectang.heightr)
// }
// console.log(calculatedPerimeter(rect)) // 60


//Another Example
const person = {
    firstName: 'Xorlali',
    lastName: 'Agorsor',
    age: 25,
    country: 'Ghana',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['French', 'English', 'Suomi(Finnish)']
  }

  // Let us create a function which give information about the person object without destructuring
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length -1]} He speaks ${formattedLanguages} and a little bit of ${languages[2]}`

    return personInfo
  }
  console.log(getPersonInfo(person))





  //Object parameter with destructuring
const box = {
    length: 20,
    height: 10
}

  const calculateParam = ({length, height}) => {
    return 2 * (length + height)
  }

  console.log(calculateParam(box)) // 60 


  const getDetailsOfPerson = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')

    personalInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
        skills[skills.length - 1]
      }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

      return personalInfo
  }

  console.log(getDetailsOfPerson(person))


  //Destructuring object during iteration
const todoList = [
    {
        task:'Prepare JS Test',
        time:'4/1/2020 8:30',
        completed:true
      },
      {
        task:'Give JS Test',
        time:'4/1/2020 10:00',
        completed:false
      },
      {
        task:'Assess Test Result',
        time:'4/1/2020 1:00',
        completed:false
      }
]

for(const {task, time, completed} of todoList){
    console.log(task, time, completed)
}


//SPREAD OR REST OPERATOR
//Spread operator to get the rest of array elements
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [nu1, nu2, nu3, ...others] = num
console.log(nu1, nu2, nu3)
console.log(rest)

const country = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  let [gem, fra, , ...nordicCountries] = country
  console.log(gem)
  console.log(fra)
  console.log(nordicCountries)
  

  //Spread operator to copy array
  const evens = [0, 2, 4, 6, 8, 10]
  const evenNumbers = [...evens]
  console.log(evenNumbers)

  const odd = [0, 3, 5, 7, 9, 11, 13]
  const oddNumbers = [...odd]
  console.log(oddNumbers) 


  const frontEnder = ['HTML', 'CSS', 'JS', 'REACT']
  const backEnder = ['Node', 'Express', 'MongoDB']
  const fullStacker = [...frontEnder, ...backEnder ]
  console.log(fullStacker)

  //Spread operator to copy object
  const user = {
    name: 'Xorlali',
    title: 'Programmer',
    country: 'Ghana',
    city: 'Accra'
  }


  const copier = {...user}
  console.log(copier)

  //Modifying or changing the object while copying
  const user1 = {
    name: 'Xorlali',
    title: 'Programmer',
    country: 'Ghana',
    city: 'Accra'
  }
  const copiedUser1 = {...user1, title:'Fullstack developer'}
  console.log(copiedUser1)

  //Spread operator with arrow function
//Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.
const sumAllNums = (...args) => {
  console.log(args)
}

console.log(sumAllNums(1, 2, 3, 4, 5))

const sumAllNum = (...args) => {
  let sum = 0
  for(const num of args){
    sum += num
  }
  return sum
}
console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8))
