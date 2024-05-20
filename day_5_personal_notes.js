//ARRAYS : is a data structure that allows you to store multiple values in a single variable
/*  HOW TO CREATE AN EMPTY ARRAY
//  **Using Array constructor
 const arr = Array() or let arr = new Arr()
 console.log(arr) // []

**Using square brackets NB; This is the most recomended way to create an array
 const arr = []
 console.log(arr)
*/

//CREATING ARRAYS WITH VALUES

/*const numbers = [0, 1, 2, 3, 4, 5, 6,] //array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] //array of strings, fruits
const vegetables = ['tomato', 'potato', 'cabbage', 'onion']
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const countries = ['Ghana', 'Togo', 'Sweden', 'Norway']

console.log('Numbers;', numbers)
console.log('Numbers of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('webTechs:', webTechs)
console.log('Number of webTechs:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)
*/

//NB: Arrays can have different data type
const arr = ['Asabeneh', 250, true, {country: 'Finland', city: 'Helsinki'}, {skills: ['HTML', 'CSS', 'JS', 'React', 'Python']} ]

console.log(arr)


//CREATING AN ARRAY USING SPLIT: 
let js = 'JavaScript'
const jsSlpit = js.split('')
console.log(jsSlpit) //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle'
const companies = companiesString.split(',')
console.log(companies) //['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle']

let txt = 'I love teaching and empowering people in HTML, CSS, JS, React and Python'
const words = txt.split(' ')
console.log(words)

//ACCSSING ARRRAY ITEMS USING INDEX

const myFruit = ['banana', 'orange', 'mango', 'lemon']
let secondFruit = myFruit[1]
console.log(secondFruit)// we are accessing the second item using its index

let lastFruit = myFruit[3]
console.log(lastFruit)

// Last index can be calculated as follows. Also for arrays that have a lot of items in them this way is preferred
let lastIndex = myFruit.length - 1
lastFruit1 = myFruit[lastIndex]
console.log(lastFruit1)

//Example 1
const myNumbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers
console.log(myNumbers.length) // => to know the size of the array, which is 6
console.log(myNumbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(myNumbers[0])  //  -> 0
console.log(myNumbers[5])  //  -> 100

// to get the last index of the array
let lastIndex1 = myNumbers.length - 1
console.log(myNumbers[lastIndex1])

//Example 2
const webCom = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux',  'Node', 'MongoDB'] // List of web technologies
console.log(webCom) // all the array items
console.log(webCom.length) //=> to know the size of the array, which is 7
console.log(webCom[0])
console.log(webCom[6])

let lastOne = webCom.length - 1
console.log(webCom[lastOne])

//Modifying an array: an aray can be chaned or modified 
//Example 1
const aluNUmbers = [1, 2, 3, 4, 5]
aluNUmbers[0] = 10 // targeting the first item and changing it to 10
aluNUmbers[1] = 20 // targeting the second item and changing it to 20
console.log(aluNUmbers)

//Example 2
const country = ['Ghana', 'Togo', 'Benin', 'Ethiopia', 'Germany', 'Nigeria']
country[0] = 'Afghanistan' // Replacing Ghana
let lastOf = country.length - 1
country[lastOf] = 'Korea' // Replacing the last item Nigeria with Korea
console.log(country)

//METHODS TO MONIPULATE AN ARRAY

//TO CREATE AN ARRAY
 const arra = Array()
 console.log(arra) //crates an empty array

 const twoEmpty = Array(2)
 console.log(twoEmpty)


// CREATING STATIC ARRAY WITH FILL
const fille = Array(5).fill('X') // it creates five element values filled with 'X'
console.log(fille)

const elle = Array(8).fill('H') // it creates five element values filled with 'X'
console.log(elle)

//CONCATINATION USING ARRAY CONCAT
const firstCell = [1,2,3]
const secondCell = [4,5,6]
const thirdCell = firstCell.concat(secondCell)
console.log(thirdCell) //[1, 2, 3, 4, 5, 6]

const fruit1 = ['banana', 'orange', 'mango', 'lemon']
const veges1 = ['Tomato', 'potato', 'cabbage', 'onion', 'Carrot']
const fruitsAndVegetables = fruit1.concat(veges1)
console.log(fruitsAndVegetables)

//GETTING LENGTH OF AN ARRAY
const bonj = [1,2,3,4,5,6,7,8] 
console.log(bonj.length) // the size of the array is 8

//GETTING INDEX OF AN ARRRAY ELEMENT
//indexOf //To check if an item exist in an array. If it exists it returns the index else it returns -1.
const avoir = [1, 2, 3, 4, 5, 6]
console.log(avoir.indexOf(2)) // the index is 1
console.log(avoir.indexOf(5)) // the index is 4
console.log(avoir.indexOf(6)) // the index is 5
console.log(avoir.indexOf(20)) // The output -1 because 20 is not in the array

// ALSO USED TO CHECK IF AN ELEMENT EXIST IN AN ARRAY
const baggage = ['banana', 'orange', 'pawpaw', 'mango']
console.log(baggage.indexOf('banana'))
console.log(baggage.indexOf('pear'))
let index = baggage.indexOf('banana')

if(index === -1){
    console.log('This fruit does not exist in the array')
}else(
    console.log('This fruit exist in the array')
) // The fruit exsit in the array

index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit exsit in the array') // The fruit exsit in the array 

let indexOfAvocado = baggage.indexOf('avocado')
if(indexOfAvocado === -1){
    console.log('This fruit does not exist in the array')
}else{
    console.log('This fruit exist in the array')
} // The fruit does not exist in the array

//GETTING LAST ELEMENT OF AN ARRAY : It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
const topChoco = [1, 2, 3, 1, 5, 2, 7, 8]
console.log(topChoco.lastIndexOf(8)) //  7
console.log(topChoco.lastIndexOf(0)) // -1 because it is not in the array
console.log(topChoco.lastIndexOf(1)) // looks for the last index of 1 THAT IS 3 


//INCLUDES : To check if an item exist in an array. If it exist it returns the true else it returns false
const webApps = ['Tinder', 'Facebook', 'Instagram', 'Whatsapp', 'Telegram']
console.log(webApps.includes('Whatsapp'))
console.log(webApps.includes('pintrest'))


// isArray : To check if the data type is an array
const consul = [1, 3, 5, 7, 9, 11]
console.log(Array.isArray(consul))


//toString : Converts array to string
const nuno = [1, 2, 3, 4, 5]
console.log(nuno.toString())

const super1 = ['Xorla ', 'Emmanuel ', 'Abigail ', 'Albert']
console.log( super1.toString())

//JOINING ARRAY ELEMENTS (join()) : It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const joinery = [1, 2, 3, 4, 5, 6]
console.log(joinery.join()) // 1,2,3,4,5,6

const names = ['Asabeneh', 'Mathias', 'Xorlali', 'Jeremiah']
console.log(names.join()) //Asabeneh,Mathias,Xorlali,Jeremiah
console.log(names.join('')) //AsabenehMathiasXorlaliJeremiah
console.log(names.join(' ')) //Asabeneh Mathias Xorlali Jeremiah
console.log(names.join(', ')) //Asabeneh, Mathias, Xorlali, Jeremiah
console.log(names.join(' / ')) //Asabeneh / Mathias / Xorlali / Jeremiah

const weber = ['HTML', 'CSS', 'JavaScript', 'React']
console.log(weber.join())
console.log(weber.join(' # '))

//SLICE : To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const slicer = [1,2,3,4,5,6,7,8]
console.log(slicer.slice()) //-> it copies all  item
console.log(slicer.slice(0)) //-> it copies all  item
console.log(slicer.slice(0, slicer.length)) //-> it copies all  item
console.log(slicer.slice(2,6)) // -> [3,4,5,6] it doesn't include the ending position

//SPLICE: It takes three parameters: Starting position, number of times to be removed and number of items to be added.
const splicer = [1,2,3,4,5,6,7]
// splicer.splice()
// console.log(splicer)
splicer.splice(0,2)
console.log(splicer)
splicer.splice(3,3,7,8,9,)
console.log(splicer)

//PUSHING AN ARRAY WITH .push() : adding item in the end. To add item to the end of an existing array we use the push method.
const arr1 = ['Mango', 'Pear', 'Orange']
arr1.push('Pawpaw')
console.log(arr1) 

//REMOVING AN ARRAY WITH .pop() : Removing item in the end.
const rem = [1,2,3,4,5,6]
rem.pop()
console.log(rem)

//REMOVING ONE ARRAY ELEMNT IN THE BEGINNING: Removing one array element in the beginning of the array.
const shifter = ['Hate', 'Love', 'Happiness', 'Joy']
shifter.shift()
console.log(shifter)

//ADDING AN ELEMENT FROM THE BEGINING USING .unshift() : Adding array element in the beginning of the array.
const addi = [1,2,3,4]
addi.unshift(0)
console.log(addi)

//REVERSING AN ARRAY USING .reverse() : reverse the order of an array.
const rev = [1,2,3,4]
rev.reverse()
console.log(rev)

//SORTING AN ARRAY USING .sort() : arrange array elements in ascending order
const sorte = ['HTML',
'CSS',
'JavaScript',
'React',
'Redux',
'Node',
'MongoDB']
sorte.sort()
console.log(sorte)

//ARRAY OF ARRAYS : Array can store different data types including an array itself. Let us create an array of arrays


