//EXERCISE 1
// Q1
const arch = Array()

//Q2
let moreThanFive = ['Genesis', 'Exodus', 'Leviticus', 'Jeremiah', 'Moses']

//Q3
console.log(moreThanFive.length)

//Q4
console.log(moreThanFive[0])
console.log(moreThanFive[2])
console.log(moreThanFive[4])

//Q5
const mixedDataTypes = ['Emma', 1, 2, true, {country: 'Ghana', city: 'Accra'} ] 
console.log(mixedDataTypes.length)

//Q6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Q7
console.log(itCompanies)

//Q8
console.log(itCompanies.length)

//Q9
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

//Q10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

//Q11
console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

//Q12
console.log('Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.')

//Q13
let index = itCompanies.indexOf('Facebook')
if(index === -1){
    console.log('This company doesn\'t exist in the Array')
}else{
    console.log('This company exist in the Array')
}

//Q14
// console.log(itCompanies.match(/oo/g))

//Q15
console.log(itCompanies.sort())

//Q16
console.log(itCompanies.reverse())

//Q17
console.log(itCompanies.slice(0,3))

//Q18
console.log(itCompanies.slice(4))

//Q19
 console.log(itCompanies.slice(2,3))

 //Q20
 console.log(itCompanies.shift())

 //Q21
 console.log(itCompanies.slice(2,3))

 //Q22
 console.log(itCompanies.pop())

 //EXERCISE 2
 //Q1
 const countries = [
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
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ] 

const main = countries.concat(webTechs)
console.log(main)


//Q2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let charToRemove = ","
let removedSymbol = text.split(charToRemove).join("")
console.log(removedSymbol);
console.log(removedSymbol.length)

//Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart.pop())
console.log(shoppingCart.push('Sugar'))
shoppingCart[3] = 'Green Tea'

//Q4
let indexE = countries.indexOf('Ethiopia')
if(indexE === -1){
console.log(countries.push('Ethiopia'))
}else(
  console.log('ETHIOPIA')
)
console.log(countries)

//Q5
let indexW = webTechs.indexOf('Sass')
if(indexW === -1){
  console.log(webTechs.push('Sass'))
}else(
  console.log('Sass is a CSS preprocess')
) 
console.log(webTechs)

//Q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)



//EXERCISE: LEVEL 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log(Math.min(...ages))
console.log(Math.max(...ages))

//Average
const average = 252 / ages.length
console.log(average)


