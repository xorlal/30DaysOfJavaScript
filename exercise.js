//EXERCISE LEVEL 1
// Q1
let firstName = 'Xorlali'
let lastName = 'Agorsor'
let country = 'Ghana'
let city = 'Accra'
let age = 24
let isMarried = false
let year = 2024
console.log(typeof (firstName))
console.log(typeof (lastName))
console.log(typeof (country))
console.log(typeof (city))
console.log(typeof (age))
console.log(typeof (isMarried))
console.log(typeof(year))


//Q2
let num = 10
let aux = '10'
console.log(num == aux)

//Q3
let pas = parseInt('9.8')
let war = 10
console.log(pas == war)

//Q4(i)
let first = 3 > 1
console.log(first) 

let second = 8 > 3
console.log(second) 

let third = 10 > 7
console.log(third) 

//Q4(ii)

let fourth = '20' === 20
console.log(fourth)

let fifth = "mango".length === "avocado".length
console.log(fifth)

let sixth = 10 !== 10
console.log(sixth)

//Q5
console.log(4 > 3)  //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) // false
console.log(4 == 4) //true
console.log(4 === 4) // true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4')//true
console.log(4 === '4')//false
console.log('python'.length != 'jargon'.length)

//Q6
console.log(4 > 3 && 10 < 12)//true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 > 12)//true
console.log(4 > 3 || 10 < 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//true
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'))//true
console.log('drag'.length == 'pyth'.length) // Having doubts about this one 

//Q7
let now = new Date()

//Year
console.log(now.getFullYear()) //2024

//Month
console.log(now.getMonth() + 1) // 3

//Date
console.log(now.getDate()) // 28

//Day
console.log(now.getDay()) // 4

//Hours
console.log(now.getHours())

//Minuets
console.log(now.getMinutes())

//Elapsed time from January 1, 1970 to now
console.log(now.getTime())

//LEVEL 2
// //Q1
// let base = prompt('Enter number', 'Number goes here')
// let height = prompt('Enter number', 'Number goes here')
// let area = 0.5 * base * height
// console.log(`Enter base: ${base}\nEnter height: ${height}\nThe area of the triangle is ${area}`)

// //Q2
// let sideA = parseInt(prompt('Enter side A', 'Enter a number'))
// let sideB = parseInt(prompt('Enter side B', 'Enter a number')) 
// let sideC = parseInt(prompt('Enter side C', 'Enter a number')) 
// let perimeter = sideA + sideB + sideC
// console.log(`Enter side a: ${sideA}\nEnter side b: ${sideB}\nEnter side c: ${sideC}\nThe perimeter of a triangle is ${perimeter}`)

// //Q3
// let length = parseInt(prompt('Enter length', 'Enter a number'))
// let width = parseInt(prompt('Enter width', 'Enter a number'))
// let area1 = length * width
// let perimeterOfRec = 2 * (length + width)
// console.log(`Enter length : ${length}\nEnter width : ${width}\nThe area of the rectangle is ${area1}\nThe perimeter of the rectangle is ${perimeterOfRec}`)

// //Q4
// let PI = 3.14
// let radius = parseInt(prompt('Enter radius'))
// let area51 = PI * radius * radius
// let circumfrence = 2 * PI * radius
// console.log(`Enter a radius: ${radius}\nThe area of a circle is : ${area51}\nThe circumfrence of the circle is ${circumfrence}`)


// //I did not know hwo to solve the slope questions so I skipped to Question 9 

// //Q9
// let hours = parseInt(prompt('Enter hours', 'Enter a number'))
// let ratePerHour = parseInt(prompt('Enter Rate Per Hour', 'Enter a number'))
// let weeklyEarnings = hours * ratePerHour
// console.log(`Enter hour: ${hours}\nEnter rate per hour: ${ratePerHour}\nYour weekly earning is ${weeklyEarnings}`)

//Q10
let myName = 'Emmanuel'


myName.length > 7
? console.log(`${myName} is longer than 7`) 
: console.log(`${myName} is shorter than 7`)

//Q11
let firstN = 'Emmanuella'
let lastN = 'Agorsor'

firstN.length > lastN.length ? console.log(`Your first name, ${firstN} is longer than your family name, ${lastN}`): console.log(`Your family name, ${lastN} is longer than your first name, ${firstN}`)


//Q12
let myAge = 36
let yourAge = 28
console.log(`I am ${myAge - yourAge} years older than you`)

//Q13
// const currentYear = new Date().getFullYear()
// let birthYear = parseInt(prompt('Enter your birth year'))
// let age1 = currentYear - birthYear

// age1 >= 18 ? console.log(`You are ${age1} years old. You are old enough to drive`): console.log(`You are ${age1} years old. You will be allowed to drive after ${18 - age1} years `)



//Q14
const yourYears = parseInt(prompt('Enter number of years you live'))
let secondsInYear = 365 * 24 * 60 * 60
let totalSeconds = yourYears * secondsInYear
console.log(`Enter number of years you live: ${yourYears}\nYou lived ${totalSeconds} seconds`) 

//Q15
const now1 = new Date()
let year1 = now.getFullYear()
let month = now.getMonth()
let date = now.getDate()
let hours1 = now.getHours()
let minutes = now.getMinutes() 

//(i)
console.log(`${year1}-${month}-${date} ${hours1}:${minutes}`)

//(ii)
console.log(`${date}-${month}-${year1} ${hours1}:${minutes}`)

//(iii)
console.log(`${date}/${month}/${year1} ${hours1}:${minutes}`)

//Q16
console.log(`${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')} ${hours1.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`)