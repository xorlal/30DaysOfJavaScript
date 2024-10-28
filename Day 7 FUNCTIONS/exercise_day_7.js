//EXERCISE LEVEL 1
//Q1
function fullname (){
    console.log('Emmanuel Afram')
}
fullname()



//Q2
function myfullName(){
    let firstOne = 'Xorlali'
    let lastOne = 'Agorsor'
    let space = ' '
    let fullN = firstOne + space + lastOne
    console.log(fullN)
}
myfullName()

//Q3
function addNumbers (){
    let num1 = 3
    let num2 = 4
    let sum = num1 + num2
    console.log(sum)
}
addNumbers()

//Q4
// function areaOfRectangle(){
//     let length = 4
//     let width = 6
//     let area = length * width
//     console.log(area)
// }
// areaOfRectangle()

//Q5
// function perimeterOfRectangle(){
//     let length1 = 7
//     let width1 = 9
//     let perimeter = 2 * (length1 + width1)
//     console.log(perimeter)
// }
// perimeterOfRectangle()


//Q6
function volumeOfRectPrism(){
 let length = 3
 let width = 6
 let height = 9
 let volume = length * width * height
 console.log(volume)
}
volumeOfRectPrism()

//Q7
function areaOfCircle(){
    let r = 3
    let area = Math.PI * r * r
    console.log(area)
}

areaOfCircle()

//Q8
function circumOfCircle(){
    let rad = 3
    let circumfrence = 2 * Math.PI  * rad
    console.log(circumfrence)
}
circumOfCircle()

//Q9
function densities(){
    let mass = 12
    let volume = 2
    let density = mass * volume
    console.log(density)
}
densities()

//Q10
function speed(){
    let distance = 23
    let object = 4
    let time = 10
    let flash = distance / (object / time )
    console.log(flash)
}
speed()

//Q11
// function calculateWeight(mass, gravity = 9.81){
//     let weight = mass * gravity
//     return weight
// }
// console.log(calculateWeight(10))

//Q12
function convertCelsiusToFahrenheit(celcius){
    let fahrenheight = (celcius * 9/5) + 32
    return fahrenheight

}
console.log(convertCelsiusToFahrenheit(25))

//Q13
function bodyMassIndex(weight, height){
    const bmi = weight / (height * height) 
    let categeory;
    if(bmi <= 18.5){
        categeory = 'Underweight'
    }else if(bmi >= 18.5 && bmi <= 24.9 ){
        categeory = 'Normal weight'
    }else if(bmi >= 25 && bmi <= 29.9){
        categeory = 'Normal weight'
    }else{
        categeory = 'Obese'
    }
    return {bmi: bmi.toFixed(2), categeory: categeory}
}
const weight = 50
const height = 1.70
const result = bodyMassIndex(weight, height)
console.log(`The BMI is ${result.bmi}, which is equal to categeory: ${result.categeory}`)

//Q14
function checkSeason(month){
    const monthLowerCase = month.toLowerCase();
    switch (monthLowerCase) {
        case 'december':
        case 'january':
        case 'february':
            return "Winter";
        case 'march':
        case 'april':
        case 'may':
            return "Spring";
        case 'june':
        case 'july':
        case 'august':
            return "Summer";
        case 'september':
        case 'october':
        case 'november':
            return "Autumn";
        default:
            return "Invalid month";
    }
}
const month = 'May'
console.log(`The season in ${month} is ${checkSeason(month)}`)

//Q15
function findTheMax(a, b, c){
let maxVal = a 
if (b > maxVal){
    maxVal = b
}

if(c > maxVal){
    maxVal = c

}
return maxVal
}
console.log(findTheMax(12,56,82))  



//EXERCISE LEVEL 2
//Q1
// function solveLinEquation(a, b, c, x){
//   let linearEquation = ax + by + c 
//   return linearEquation
// }
// console.log(4, 5, 6, 7, 2)// Do not understand this 

//Q2



//Q3
const printArray = (first, last) => {
 return `${first}, ${last}`
}
console.log('Xorlali', 'Agorsor')

//Q4
function showDateTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = String(now.getMonth() + 1).padStart(2, '0')
    let date = now.getDate()
    let hours = String(now.getHours()).padStart(2, '0')
    let minutes = String(now.getMinutes()).padStart(2, '0')
    let fullDate = `${date}/${month}/${year} ${hours}:${minutes}`
    return fullDate
}
console.log(showDateTime())

//Q5
function swapValues(x, y){
    console.log(`Before swap: x = ${x}, y = ${y}`)
  let store = x
  x = y
  y = store
  console.log(`After swap: x = ${x}, y = ${y}`)
}
let x = 5
let y = 10
swapValues(x, y)

//Q6
function reverseArray(arr){
    let reversedArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i])
    }
    return reversedArr
}

let array = ['A', 'B', 'C', 'D']
let reversed = reverseArray(array)
console.log(reversed)

//Q7
function capitalizeArray(arr){
    let newCap = []
    for(let i = 0; i < arr.length; i++){
        newCap.push(arr[i].toUpperCase())
    }
    return newCap
}
let capitalize = ['eyram', 'xorlali', 'kafui', 'selasi', 'akpene']
let capsLock = capitalizeArray(capitalize)
console.log(capsLock)

//Q8
let items = []
function addItem(item){
   items.push(item)
   return items
}
console.log(addItem('apple'))
console.log(addItem('mango'))
console.log(addItem('pinneapple'))

//Q9
let removableItems = [1, 2, 3, 4, 5, 6]
function removeItem(){
   removableItems.pop()
   return removableItems
}
console.log(removeItem())

//Q10
function sumOfNumbers(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
const numbersSum = [1,2,3,4,5,6]
console.log(sumOfNumbers(numbersSum))

//Q11
function sumOfOdd(n){
    let sumOdd = 0;
    for(let i = 1; i <= n; i++  ){
        if(i % 2 !== 0){
            sumOdd += i
        }
    }
    return sumOdd
}
console.log(sumOfOdd(10))

//Q12
function sumOfEven(n) {
    let evenSum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        }
    }
    return  evenSum;
}
console.log(sumOfEven(10))

//Q13
// function evensAndOdds(param){
//  let even = 0;
//  let odd = 0;
//  for(let i = 0; i <= param.length; i++){
//     if(i % 2 === 0){
//         console.log(`The number of even are ${even}`)
//     }else {
//         console.log(`The number of odds are ${odd}`)
//     }
//  }
//  return even
// }
// console.log(evensAndOdds(100))     

//Q14
function sumOfAll(){
    let sumOfIt = 0;
    for(let i = 0; i < arguments.length; i++){
        sumOfIt += arguments[i] 
    }
return sumOfIt
}
console.log(sumOfAll(1,2,3))

//Q15
function randomUserIp(){
    function randomByte(){
        return Math.floor(Math.random() * 265)
    }
    const part1 = randomByte()
    const part2 = randomByte()
    const part3 = randomByte()
    const part4 = randomByte()

    const ipAdress = `${part1}.${part2}.${part3}.${part4}`

    return ipAdress
}
console.log(randomUserIp())

//Q16
function randomMacAdress(){
    function randomByteMac(){
        return ('00' + Math.floor(Math.random() * 256).toString(16)).slice(-2)
    }
    const mac1 = randomByteMac()
    const mac2 = randomByteMac()
    const mac3 = randomByteMac()
    const mac4 = randomByteMac()
    const mac5 = randomByteMac()
    const mac6 = randomByteMac()
    const macAddress = `${mac1}:${mac2}:${mac3}:${mac4}:${mac5}:${mac6}`
    return macAddress
}
console.log(randomMacAdress())

//Q17
function randomHexaNumberGenerator(){
    const random = Math.floor(Math.random() * 16 ** 6)
    const hexNumber = random.toString(16)

    return hexNumber.padStart(6, '0')
}
console.log(randomHexaNumberGenerator())

//Q18
function userIdGenerator(){
    const randomId = Math.floor(Math.random() * 16 ** 7)
    const userId = randomId.toString(16)
    return userId.padStart(7, '0').toUpperCase()
}
console.log(userIdGenerator())

//EXERCISE LEVEL 3 : HARD

//Q1


//Q2
function rgbColorGenerator(){
    function randomRgb(){
        return Math.floor(Math.random() * 256)
    }
    const rgb1 = randomRgb()
    const rgb2 = randomRgb()
    const rgb3 = randomRgb()

    const rgbGenerator = `rgb(${rgb1}, ${rgb2} ,${rgb3})`

    return rgbGenerator
}
console.log(rgbColorGenerator())

//Q3
function getRandomHexColor(){
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return `#${hex.padStart(6, '0')}`
}
function arrayOfHexaColors(numColors){
    const colors = []
    for(let i = 0; i < numColors; i++){
        colors.push(getRandomHexColor())
    }
    return colors
}
console.log(arrayOfHexaColors(5))






//Q4
function arrayOfRgbColors(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`

}
function arrayOfRgb(rgbArr){
    const rgbColors = []
    for(let i = 0; i < rgbArr; i++){
        rgbColors.push(arrayOfRgbColors())
    }
    return rgbColors
}
console.log(arrayOfRgb(4))


//Q5
function convertHexaToRgb(hexa){
if(hexa.startsWith('#')){
    hexa = hexa.slice(1)
}

const r1 = parseInt(hexa.slice(0, 2), 16)
const g1 = parseInt(hexa.slice(2, 4), 16)
const b1 = parseInt(hexa.slice(4, 6), 16)

return `rgb(${r1}, ${g1}, ${b1})`
}
console.log(convertHexaToRgb('#ff7392'))


//Q6
function componentToHex(component) {
    const hex = component.toString(16);
    return hex.padStart(2, '0');
}

function convertRgbToHexa(rgb) {
    const result = rgb.match(/\d+/g);
    if (!result || result.length !== 3) {
        throw new Error("Invalid RGB color format");
    }

    const r = parseInt(result[0]);
    const g = parseInt(result[1]);
    const b = parseInt(result[2]);

    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

console.log(convertRgbToHexa('rgb(235, 87, 51)')); 

//Q7

//Q8
 function shuffleArray(array){
 const shuffledArray = array.slice()
 for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
}
 return shuffledArray
 } 
 const originalArray = [1,2,3,4,5,6,7]
 const shuffled = shuffleArray(originalArray)
 console.log(shuffled)
console.log(originalArray)

//Q9
function factorial(numb){
   if(numb < 0){
    console.log(`Error: Input must be a non-negative number`)
   }
   let resultant = 1
   for(let i = 1; i <= numb; i++){
    resultant = resultant * i
   }
   return resultant
}

console.log(factorial(5))

//Q10
function isEmpty(param){
    if(param === null){
        return true
    }
}
console.log(isEmpty(null))


 