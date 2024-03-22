// DAY 2 
// DATA TYPES

// Primitive and Non-Primitive data types

// Primitive data type (can't be changes or it's immutable) 
/*
Numbers, strings , booleans, undefined, null, symbol
*/

let word = 'JavaScript'
word[0] = 'Y'

console.log(word)

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) 

let js = 'JavaCsript'
let py = 'Python'

console.log(js == py)

let lightsOn = true
let lightsOff = false

console.log(lightsOn == lightsOff)

//Non- Primitive data type (Can be changed, They cannot be compered by value)
// Arrays and objects

// let nums = [1, 2, 3]
//  nums[0] = 10
//  console.log(nums)

 //NUMBERS: Integers and decimals 

//Math objects

//Some maths objest are
// Math.round() - Round to the nearest number

// Math.floor() - Rounding down
// Math.ceil() -  Rounding up
// Math.min() -   Returns the minimum value
// Math.max() -   Returns the maximum value
// Math.abs() -   returns an absolute value of a number
// Math.sqrt() -  Returns the square root of the number


//To create a random number
const numb = Math.random() // Number from 0 to 0.999999
console.log(numb)

//To create a random number with a specific range 
//const newNum = Math.floor(Math.random()  * (max - min + 1)) + min
//So let's say a random number from 50 to 100
//const newNum = Math.floor(Math.random()  * (100-50 + 1)) + 50 


//To create a random number from 0 to 10
/*const no = Math.floor(Math.random() * 11)
console.log(no)*/

//Another way to create a random number
let randomNum = Math.random() * 11

let final = Math.floor(randomNum)
console.log(final)

//STRINGS
/*
String concatenation is adding two or more strings together
*/
// let firstName = 'Xorlali'
// let lastName = 'Agorsor'
// let city = 'Accra'
// let country = 'Ghana'
// let language = 'JavaScript'
// let age = 78

// let fullName = firstName + ' ' + lastName
// let personInfoOne = 'My name is ' + fullName + '. I am ' + age + '. I live in ' + country
// console.log(personInfoOne)
/*
Long literal strings
*/
//Escape sequence
// \n : new line
// \t : Tab mans 8 spaces
// \\ : Back slash
// \' : Single quote
// \" : Double quote

console.log('I\'m enjoying the 30 Days of JavaScript.\nAre you?')
console.log('1\t4\t6')
console.log('2\t3\t5')
console.log('3\t2\t4')
console.log('4\t1\t3')
console.log('\\This is a backlash symbol\\')
console.log('Every programming language started with \'Hello world\'')
console.log('Every programming language started with \"Hello world\"')

//Template literals(Template Strings)'The prefered way of writing strings(in my opinion). The using of back-ticks'

let firstName = 'Xorlali'
let lastName = 'Agorsor'
let city = 'Accra'
let country = 'Ghana'
let language = 'JavaScript'
let age = 24

let fullName = firstName + ' ' + lastName

console.log(`My name is ${fullName}, I am ${age} years old and I live in ${country}`)
 // you can add expressions to it too
 let a = 2
 let b = 3
 console.log(`${a} is greater than ${b}: ${a > b}`)

 //String methods

//Some string methods are 
// .length - to find the length of a string
let job = 'FrontEnd'
console.log(job.length)

//.toUpperCase() - changes the string to uppercase
let car = 'Toyota'
console.log(car.toUpperCase())

// .toLowerCase() - changes the string to lowercase
let weather = 'SUNNY'
console.log(weather.toLowerCase())
 
// NOTE: to find the last string = length of the string minus one

//Accessing a string by using it's index
let string1 = 'JavaScript'
let secondLetter = string1[1]
console.log(secondLetter)

//substring() - takes two arguements the starting and end but does not include the character at the end
let sub = 'JavaScript'
let newWord = sub.substring(4,10)
console.log(newWord)

//split() - splits a string at a specified place, note: puts the split value in an array
let splits = '30 Days of JavaScript'
console.log(splits.split(' '))

let splitName = 'Xorlali'
console.log(splitName.split(''))

//trim() - removes spaces at the begining and end of a string
let trimmed = '    This is awesome   '
let finalTrim = trimmed.trim()
console.log(finalTrim)

//includes() - takes an arguement and checks if that arguement exist in the string and returns a boolean, if it exists it returns true if not false. It is case sensitive
const sense = '30 Days of JavaScript'
console.log(sense.includes('Days'))
console.log(sense.includes('Ways'))

//replace() - takes  two parameters, first parameter is a string or regex to be replaced and second is srting replacing it
let aboutMe = 'I live in Chicago'
console.log(aboutMe.replace('Chicago', 'Ghana'))

//charAt() - takes the index and returns the value of that index
let myWord = '30 Days of JavaScript'
console.log(myWord.charAt(20))

let lastIndex = myWord.length - 1
console.log(lastIndex)

//indexOf() - takes a substring and if that substring exists returns the first position of the subsrting if it does not exist it returns -1

let statement = 'JavaScript is one of the best languages to exist'
console.log(statement.indexOf('i'))
console.log(statement.indexOf('exist'))

//lastIndexOf() - takes a substring and if it exists in the string retuns the last position of the substring if not it returns -1
let lastOne = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(lastOne.lastIndexOf('love'))

//concat() - takes any substring and joins them
let day = '30'
console.log(day.concat(' Days ', 'of ', 'JavaScript'))

let cont = 'Gh'
console.log(cont.concat('ana'))

//startsWith() - takes a string as an arguement and checks if the string starts with the specified substring. returns a boolean(true or false). note: it is case sensitive
let quote = 'Love is the greatest weapon known to man'
console.log(quote.startsWith('Love')) // True

//endsWith() - takes a string as an arguement and checks if the string ends with the specified substring. returns a boolean(true or false). note: it is case sensitive
let motiv = 'Love is the most powerful feeling in the world'
console.log(motiv.endsWith('world'))

//search()- it takes a substring as an argument and it returns the index of the FIRST match. The search value can be a string or a regular expression pattern.
let sea = 'I really love JavaScript. If you do not love JavaScript what else can you love.'
console.log(sea.search('love'))

//match() - takes a substring or REGULAR EXPRESSION pattern as an arguement and it returns an array if there is a match if not returns null.
let submarine = 'I really love JavaScript. If you do not love JavaScript what else can you love.'
console.log(submarine.match('love'))

let patternOne = /love/gi
console.log(submarine.match(patternOne))

// using regex in match to remove numbers in a text
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))

//repeat() - it takes a number as argument and it returns the repeated version of the string
let word1 = 'love'
console.log(word1.repeat(4))

// CHECKING DATA TYPES
//TO CHECK A DATA TYPE USE typeOf()
//Changing data type 

// From STRING TO INT we can use parseInt(), Number(), Plus sign(+)
let num = '13'
// let numInt = parseInt(num)
console.log(parseInt(num))

// From STRING TO FLOAT we can use parseFloat(), Number(), Plus sign(+)
let floating = '8.89'
console.log(parseFloat(floating))

//from FLOAT TO INT
let flo = 7.98
console.log(parseInt(flo)) 

