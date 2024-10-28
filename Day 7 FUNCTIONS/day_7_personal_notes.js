//FUNCTIONS:A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses ()
 
/*
A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function
 */

//declaring a function without a parameter
function functionName() {
    // code goes here
  }
  functionName() // calling function by its name and with parentheses


  // FUNCTION WITHOUT PARAMETER AND RETURN: Function can be declared without a parameter.
 /*Examples
    function myName (){
     let firstName = 'Xorlali'
     console.log(firstName)
   }

  myName()

  example 2.
   function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
 }
 square()

 example 3.
 function addTwoNumbers(){
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
 }
 addTwoNumbers()

 example 4.
 function printFullName (){
    let firstName = 'Xorlali'
    let lastName = 'Agorsor'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
 printFullName() 
  */

 //FUNCTION RETURNING VALUE: Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

 //Exapmle 1.
// function box(){
//     let numb = 4
//     let sqrt = numb * numb
//     return sqrt
// }
// console.log(box())

//Example 2.
// function addingThings(){
//     let thing1 = 56
//     let thing2 = 10
//     let addedThings = thing1 + thing2
//     return addedThings
// }
// console.log(addingThings())

//Example 3.
// function allNames(){
//  let name1 = 'Xorlali'
//  let name2 = 'Agorsor'
//  let air = ' '
//  let allName = name1 + air + name2
//  return allName
// }
// console.log(allNames())

//FUNCTION WITH A PARAMETER: In a function we can pass different data types(number, string, boolean, object, function) as a parameter.
/*
SYNTAX
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed
*/

/*
Example
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
 console.log(areaOfCircle(10))

 function square(number){
  return number * 2
 }
 console.log(square(60))
*/


//FUNCTIONS WITH TWO (2) PARAMETERS
/*
// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters
*/

//Example 1.
// function sumTwoNumbers(firstOne, secondTwo){
//    let totalSum = firstOne + secondTwo
//    return totalSum
// }
// console.log(sumTwoNumbers(15, 20))


// function displayFullName (firstNme, LastNme){
// return `${firstNme} ${LastNme}`
// }
// console.log(displayFullName('Xorlali', 'Agorsor'))

//FUNCTION WITH MANY PARAMETERS
/*
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
*/
//Example
// function sunArrayValues(arr){
//    let sum = 0
//    for(let i = 0; i < arr.length; i++){
//       sum = sum + arr[i];
//    }
//    return sum
// }
// const numbers = [1, 2, 3, 4, 5] 
// console.log(sunArrayValues(numbers))


//FUNCTION WITH UNLIMITED NUMBER OF PARAMETERS
//USING REGULAR FUNCTION 
function sumAllNums(){
   let sum = 0
   for(let i = 0; i < arguments.length; i++){
      sum = sum + arguments[i]
   }
   return sum
}

console.log(sumAllNums(1,2,3,4))
console.log(sumAllNums(2,4,6,8,10))

//USING ARROW FUNCTIONS:Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name. Any thing we passed as argument in the function can be accessed as array in the arrow function.
const addALLNums = (...args)=>{
   let add = 0
   for(const element of args){
      add += element
   }
   return add
}

console.log(addALLNums(1,2,3,4,5))
console.log(addALLNums(2,4,6,8))
console.log(addALLNums(10,20,30,40))


//ANONYMOUS FUNCTIONS: THEY ARE WITHOUT A NAME
const anonymousFun  = function(){
   console.log('I am an anonymous function and my value is stored in anonymousFun')
}

anonymousFun()

//EXPRESSION FUNCTION: Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below

const circle = function(n){
   return n * n
}
console.log(circle(3))

//SELF INVOKING FUNCTIONS :Self invoking functions are anonymous functions which do not need to be called to return a value.
// (function(n) {
//    console.log(n * n)
// })(2)

let triangle = (function(w){
   return w * w
})(10)

console.log(triangle)

/*ARROW FUNCTION: Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
*/

function rectangle(h) {
   return h * h
}
console.log(rectangle(2))// NORMAL FUNCTION DECLARATION 


const rec1 = h => {
   return h * h
}
console.log(rec1(3))// ARROW FUNCTION 

// const rec1 = h => h * h
// console.log(rec1(5)) if we have only one line in the code block, it can be written as follows, explicit return

const changeToUpperCase = arr => {
   const newArr = []
   for(const element of arr){
      newArr.push (element.toUpperCase())
   }
   return newArr
}

const countries = ['Findland', 'Ghana', 'Togo', 'Germany']

console.log(changeToUpperCase(countries))//['FINDLAND', 'GHANA', 'TOGO', 'GERMANY']

const getFullName = (firstN, lastN) => {
   return `${firstN} ${lastN}`
}
console.log(getFullName('Xorlali','Agorsor'))


//The above function has only the return statement, therefore, we can explicitly return it as follows.
const anotherName = (first1, last1) => `${first1} ${last1}`
console.log(anotherName('Joseph', 'Ankrah'))// explicitly return


//FUNCTION WTIH DEFAULT PARAMETERS
/*
SYNTAX
Declaring a function
function functionName(param = value) {
  //codes
}

 Calling function
functionName()
functionName(arg)

*/

//EXAMPLES USING FUNCTION DECLARATION 
function greetings(name = 'Peter'){
   let message = `${name}, welcome to 30 Days of Javascript`
   return message
}
console.log(greetings())
console.log(greetings('Xorlali'))


function generateFullName(fName = 'Xorlali', lName = 'Agorsor'){
   let brethe = ' '
   let fullNames = fName + brethe + lName
   return fullNames

}

console.log(generateFullName())
console.log(generateFullName('Albert', 'Ansong'))

function calculateAge(birthYear, currentYear = 2024){
   let age = currentYear - birthYear
   return age
}
console.log('Age:', calculateAge(2001))


function weightOfObject(mass, gravity = 9.81){
 let weight = mass * gravity + ' N'
 return weight
}
console.log('Weight of an object is Newton: ', weightOfObject(100))
console.log('Weight of an object is Newton: ', weightOfObject(12, 1.62))

//EXAMPLES USING ARROW FUNCTIONS