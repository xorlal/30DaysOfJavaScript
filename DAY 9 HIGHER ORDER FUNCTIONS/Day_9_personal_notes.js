//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

//CALLBACK FUNCTIONS
// const callBack = (n) =>{
//     return n ** 2
// }

// function cube(callBack, n){
//     return callBack(n) * n
// }
// console.log(cube(callBack, 3))

//Returning functions: Higher order functions return function as a value​
// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//             return 2 * n + 3 * m + t
//         }
//         return doWhatEver
//     }
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10))

//Let us see were we use call back functions. For instance the forEach method uses call back
//Example 1
// const numbers = [1,2,3,4,5]
// const sumArray = arr => {
//     let sum = 0
//     const callback = function(element){
//         sum += element
//     }
//     arr.forEach(callback)
//     return sum

// }
// console.log(sumArray(numbers))

//Example 2
// const nums = [2,4,6,8,10]
// const totalSum = arr =>{
//     let total = 0
//     const backCall = function(element){
//         total += element
//     }
//     arr.forEach(backCall)
//     return total
// }
// console.log(totalSum(nums))

//Example 3
// const nums = [2,4,6,8,10]
// const points = [2,3,4,5,6,7]
// const addition = arr =>{
//     let allThePoints = 0
//     const callingBack = function(element){
//         allThePoints += element
//     }
//     arr.forEach(callingBack)
//     return allThePoints
// }
// console.log(addition(points))

//Shorter version
// const items = [2,3,41,5,6,7]
// const sumItems = arr =>{
//     let totalSum = 0
//     arr.forEach(function(element) {
//        totalSum += element
//     })
//     return totalSum
// }
// console.log(sumItems(items))

//SETTING TIME
// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.
// The two types are 
//1. SetInterval:In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

//Syntax
/*function callback(){
  //code goes here
}
setInterval(callBack, duration)
*/

//Example
// function sayHello(){
//     console.log('Hello')
// }
// setInterval(sayHello, 1000)


//2. setTimeout: In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.
//Syntax
/*function callBack(){
   //code goes in here
}
   setTimeout(callBack, duration)
*/

//Example
// function sayHi(){
//     console.log('Hi')
// }
// setTimeout(sayHi, 2000)

//FUNCTIONAL PROGRAMMING
//Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.

//forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.
//Example 1: storing an iterated array in a variable
// let sum = 0;
// const numbers = [1,2,3,4,5]
// numbers.forEach(num => console.log(num))
// console.log(sum) // Takes all the items in the 'numbers' array and iterates them into the 'num' array

//Example 2: calculating the sum of an array
// let total = 0
// const nums = [1, 2, 3, 4, 5, 6, 7]
// nums.forEach(i => total += i)
// console.log(total)

//Example 3: Capitalizing an array 
const countries  = ['Finland', 'Greece', 'Ghana', 'Nigeria']
countries.forEach((element) => console.log(element.toUpperCase()))

//MAP
//map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
/* 
Syntax
const modifiedArray = arr.map(function(element, index, arr){
return element
})
*/

//Example 1
const numbers = [1, 2, 3, 4, 5]
const numberSquare = numbers.map((num) => num * num)
console.log(numberSquare)

//Example 2
const names = ['Eyram', 'Selasi', 'Kafui', 'Xorlali']
const namesCapitalized = names.map((name) => name.toUpperCase())
console.log(namesCapitalized)

//Example 3
const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  const countiresToUpperCase = countries1.map((country) => country.toUpperCase())
  console.log(countiresToUpperCase)
  const firstThreeLetters = countries1.map((country) => country.toUpperCase().slice(0, 3))
  console.log(firstThreeLetters) // to take the first three letters of the country array item

  //FILTER
  //Filter: Filter out items which fufill filtering conditions and return a new array.
  /*
  syntax
  const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
  */
 //Example 1
 const countriesWithLand = countries1.filter((country) => country.includes('land'))
 console.log(countriesWithLand)

 //Example 2
 const countriesEnding = countries1.filter((country) => country.endsWith('ia'))
 console.log(countriesEnding)

 //Example 3
 const longCountries = countries1.filter((country) => country.length === 5)
 console.log(longCountries)

//  //Just testing myself
//  const theseCountries = countries1.filter((country) => (country.length === 7) ? console.log(country) : console.log('There are no long countries'))
//  console.log(theseCountries)

const scores = [
    {name: 'Asabenah', score: 95},
    { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]
 
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
const onlyNames = scores.filter((names) => names.length > 5 )
console.log(scoresGreaterEighty)

//REDUCE
//reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

//Syntax
/*arr.reduce((acc, cur) => {
   some operations goes here before returning a value
 return 
}, initialValue)
*/
//Exmaple 1
const train = [1, 2, 3, 4, 5]
const summ = train.reduce((acc, cur) => acc + cur, 0)
console.log(summ)

//Example 2
const grades = [75, 50, 90, 80, 65, 95]


const maximum = grades.reduce(getMax)
function getMax(accumulator, element){
  return Math.max(accumulator, element)
}
console.log(maximum) //Finding the maximum number im the score array


const miniMum = grades.reduce(getMin)
function getMin(accumulator, element){
  return Math.min(accumulator, element)
}
console.log(miniMum) //Finding the minimum number im the score array

//Example 3
const prices = [5, 30, 10, 25, 15]
const totals = prices.reduce((acc, cur) => acc + cur, 0)
console.log(`$${totals.toFixed(2)}`)

//EVERY
//every: Check if all the elements are similar in one aspect. It returns boolean
const naMe = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = naMe.every((name) => typeof name === 'string')
console.log(areAllStr)

//FIND
//find: Return the first element which satisfies the condition
//Example 1
const ages = [24, 22, 25, 32, 35, 18]
const findAge = ages.find((age) => age < 20)
console.log(findAge)

//Example 2
const topics = ['Maths', 'Science', 'Geography', 'History', 'French']
const longTopic = topics.find((topic) => topic.length > 7)
console.log(longTopic)

//Example 3
const results = [
  {name: 'Eyram', points: 100},
  {name: 'Xorlali', points: 97},
  {name: 'Richard', points: 88},
  {name: 'Annabell', points: 76}
]
const result = results.find((user) => user.points > 80)
console.log(result)

//FIND INDEX
//findIndex: Return the position of the first element which satisfies the condition 
const words= ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const positions = [24, 22, 25, 32, 35, 18]

const theName = words.findIndex((word) => word.length > 7)
console.log(theName)

const thePosition = positions.findIndex((position) => position < 20)
console.log(thePosition)

//SOME
//some: Check if some of the elements are similar in one aspect. It returns boolean
const names1 = ['Asabeneh', 'Mathias', 44, 'Brook', true, {}]
const bools = [true, true, true, true]

const allAreStr = names1.some((n) => typeof n === 'string')
console.log(allAreStr)

const someAreTrue = bools.some((b) => b === true)
console.log(someAreTrue)

//SORT
//sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method. 

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())// Sorts in alphabetical order

//SORTING NUMERIC VALUES
//As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

//Example 1
const theseNuts = [9.81, 3.14, 100, 37]
theseNuts.sort((a, b) => a - b)
console.log(theseNuts) // sorting in order from smallest to biggest

//Example 2
const phones = [1,4,2,6,5,3,9,10,8,7]
phones.sort((a, b) => a - b)
console.log(phones)// sorting in order from smallest to biggest

//Example 3
const reversal = [1,4,2,6,5,3,9,10,8,7]
reversal.sort((a,b) => b - a)
console.log(reversal) // sorting in reversal from the biggest to the smallest

//Sorting Object Arrays
//Whenever we sort objects in an array, we use the object key to compare. Let us see the example below.
const people = [{name: 'SpongeBob', age: 30, gpa: 3.0},
                {name: 'Patrick', age: 37, gpa: 1.5},
                {name: 'Squidward', age: 51, gpa: 2.5},
                {name: 'Sandy', age: 27, gpa: 4.0}
              ]

    people.sort((a, b) => a.age - b.age)
    console.log(people)


    const users = [
      { name: 'Asabeneh', age: 150 },
      { name: 'Brook', age: 50 },
      { name: 'Eyob', age: 100 },
      { name: 'Elias', age: 22 },
    ]

 users.sort((a, b) => {
  if (a.age < b.age) return -1 
  if (a.age > b.age) return 1
return 0
})   
console.log(users)
