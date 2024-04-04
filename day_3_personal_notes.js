// //Day 3 BOOLEANS, OOPERATORS AND DATE

// //Boolean : data type that has only two values true oe false
// //Example: Boolean Values
// //  let isLightOn = true
// //  let isRaining = false
// //  let isHungry = false
// //  let isMarried = true
//  /*
// Truthy Values
// . all are positive numbers except 0
// . All strings are true except an empty string
// . the boolean true (obviously)

// Falsy Values
// . 0
// . On
// . null
// . undefined
// . NaN
// . boolean false
// . empty string

//  */

// //Undefined : if a variable is decleared without a value and also if a function is not returning the value it will be undefined
// let firstNam 

// //Null : Empty means there's no value
// let empty = null // means no value


// //OPERATORS
// //The types of Operators are Assignment operators, Arithmetic operators, Comparison operators, Logical operators

// //Assignment Operators :The use of equal sign  '=' '+=' '-=' '*=' '/=' '%=' '**='
// let firstName = 'Xorlali'
// let country = 'Ghana'

// //Arithmetic Operators : Arithmetic operators are mathematical operators
// /*
// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b
// */
// let numOne = 4
// let numTwo = 3
// let sum = numOne + numTwo
// let diff = numOne - numTwo
// let mult = numOne * numTwo
// let div = numOne / numTwo
// let remainder = numOne % numTwo
// let powerOf = numOne ** numTwo
// console.log(sum, diff,  mult, div, remainder, powerOf)

// //Examples 
// const PI = 3.14
// let radius  = 100

// //Calculate the area of a circle
// let areaOfCircle = PI * radius * radius
// console.log(areaOfCircle)

// const gravity = 9.81
// let mass = 72 // in kilograms
// //Calculate the weight of an object
// let weightOfObj = mass * gravity
// console.log(weightOfObj)

// const boilingPoint = 100
// const bodyTemp = 37

// // Concatenating string with numbers using string interpolation
// console.log(`The boiling point of water is ${boilingPoint} oc\nHuman body temperature is ${bodyTemp} oc\nThe gravity of earth is ${gravity} m / s2`)

// //Comparison Operators : Used to compare values and gives a boolean output of either true or false ['==', '===', '!=', '>', '<', '>=', '<=']
// console.log(3 > 2)              // true, because 3 is greater than 2
// console.log(3 >= 2)             // true, because 3 is greater than 2
// console.log(3 < 2)              // false,  because 3 is greater than 2
// console.log(2 < 3)              // true, because 2 is less than 3
// console.log(2 <= 3)             // true, because 2 is less than 3
// console.log(3 == 2)             // false, because 3 is not equal to 2
// console.log(3 != 2)             // true, because 3 is not equal to 2
// console.log(3 == '3')           // true, compare only value
// console.log(3 === '3')          // false, compare both value and data type
// console.log(3 !== '3')          // true, compare both value and data type
// console.log(3 != 3)             // false, compare only value
// console.log(3 !== 3)            // false, compare both value and data type
// console.log(0 == false)         // true, equivalent
// console.log(0 === false)        // false, not exactly the same
// console.log(0 == '')            // true, equivalent
// console.log(0 == ' ')           // true, equivalent
// console.log(0 === '')           // false, not exactly the same
// console.log(1 == true)          // true, equivalent
// console.log(1 === true)         // false, not exactly the same
// console.log(undefined == null)  // true
// console.log(undefined === null) // false
// console.log(NaN == NaN)         // false, not equal
// console.log(NaN === NaN)        // false
// console.log(typeof NaN)         // number

// console.log('mango'.length == 'avocado'.length)  // false
// console.log('mango'.length != 'avocado'.length)  // true
// console.log('mango'.length < 'avocado'.length)   // true
// console.log('milk'.length == 'meat'.length)      // true
// console.log('milk'.length != 'meat'.length)      // false
// console.log('tomato'.length == 'potato'.length)  // true
// console.log('python'.length > 'dragon'.length)   // false

// //NB: It is safer to use '===' than using '=='

// //Logical Operators : The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true. 

// // && ampersand operator example

// const check1 = 4 > 3 && 10 > 5         // true && true -> true
// const check2 = 4 > 3 && 10 < 5         // true && false -> false
// const check3 = 4 < 3 && 10 < 5         // false && false -> false

// // || pipe or operator, example

// const check4 = 4 > 3 || 10 > 5         // true  || true -> true
// const check5 = 4 > 3 || 10 < 5         // true  || false -> true
// const check6 = 4 < 3 || 10 < 5         // false || false -> false

// //! Negation examples

// let check7 = 4 > 3                     // true
// let check8 = !(4 > 3)                  //  false
// let isLightOn = true
// let isLightOff = !isLightOn           // false
// let isMarried = !false                // true

// //Increment operator
// /*
// Pre-increment 
// let count = 0
// console.log(++count)
// console.log(count)

// Post-increment
// let count = 0
// console.log(count++)
// console.log(count)
// */


// //Decrement operator
// /*
// Pre-increment 
// let count = 0
// console.log(--count)
// console.log(count)

// Post-increment
// let count = 0
// console.log(count--)
// console.log(count)
// */

// //Ternary Operators : allows you to write a condition
// let isCloudy = true
// isCloudy ? console.log(`You don't need a rain coat.`) : console.log(`You need a rain coat.`)
// console.log(isCloudy)

// let uncertain = 5
// uncertain ? console.log(`${uncertain} is a positive number`) : console.log(`${uncertain} is a negative number`)
// console.log(uncertain)

// //Windows alert() method : displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.
// //alert('Welcome to 30 Days of JavaScript')


// //Windows prompt() method : display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.
// // let enterNum = prompt('Enter a number', 'number goes here' )
// // console.log(enterNum)

// //Window confirm() method : displays a specified message with 'OK' or 'CANCEL' button. It is used to ask permission from the user to execute a task. 'OK' yeilds true while 'CANCEL' yeilds false
// // const agree = confirm('Are you sure you want to delete this?')
// // console.log(agree)


// //DATE OBJECT
// //Creating a time object
// const now = new Date()
// console.log(now)

// //Get full year (getFullYear()): to get the full year from the time object
// // didn't create the time object because it's already been decleared using 'const' keyword so its best to just extract other information from that time. This will run through all the 
// console.log(now.getFullYear())

// //Get month (getMonth()) : get the month from a time object.
// console.log(now.getMonth()) // 2 because month is march. count starts from 0-11

// //Get date (getDate()) : get the date of the month from a time object.
// console.log(now.getDate()) 

// //Get day (getDay()) : get the day of the week from a time object.
// console.log(now.getDay()) // 2 because count starts from 0-6 and Sunday is 0

// //Get Hours (getHours()) : get the hours from a time object.
// console.log(now.getHours())

// //Get minutes (getMinutes()) : get the minutes from the time object
// console.log(now.getMinutes())

// //Get seconds (getSeconds()) : get the Seconds from a time object
// console.log(now.getSeconds())

// //Getting Time : This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:
// // (getTime())
// console.log(now.getTime())   //OR   

// //Using Date.now()
// const allSeconds = Date.now()
// console.log(allSeconds)


// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`)