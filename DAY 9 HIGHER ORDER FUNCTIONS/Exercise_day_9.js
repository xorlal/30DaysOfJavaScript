//EXERCISE
//Q1
//ForEach: is a method that allows you to iterate over an array and perform an operation on each element of the array 
//map: is a method that iterates an array element and modify the array elements,it takes a callback function with element, index, array parameter and return a new array.
//filter: a method that filters out items with meets the conditions and returns the new array
//reduce: takes a callback function that takes an accumulator, current and an optional initial value as a parameter and returns a single value.

//Q2 Callback Function: a call back function is a function that takes another function as a parameter.

//Q3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach((country) => console.log(country))


//Q4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((name) => console.log(name))

//Q5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((num) => console.log(num))

//Q6
const toUpperUpper = countries.map((country) => country.toUpperCase())
console.log(toUpperUpper)

//Q7
const lengthy = countries.map((country) => country.length)
console.log(lengthy)

//Q8
const square = numbers.map((num) => num * num)
console.log(square)

//Q9
const namesToUpper = names.map((name) => name.toUpperCase())
console.log(namesToUpper)

//Q10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

  const allPrices = products.map((product) => product.price)
  console.log(allPrices)

  //Q11
  const filteredLand = countries.filter((country) => country.includes('land'))
  console.log(filteredLand)

  //Q12
  const sixCountry = countries.filter((country) => country.length === 6)
  console.log(sixCountry)

  //Q13
  const sixOrMore = countries.filter((country) => country.length >= 6)
  console.log(sixOrMore)

  //Q14
  const startsWith = countries.filter((country) => country.startsWith('E'))
  console.log(startsWith)

  //Q15
  const onlyPirces = products.filter((product) => product.price !== '' && product.price !==' ')
  console.log(onlyPirces)

  //Q16
  function getStringLists(arr){
    return arr.filter((item) => typeof item === 'string')
  }
  const theArray = ['The', 12, true, {}, 384.38, 'Open up']
  const theStingArray = getStringLists(theArray)
  console.log(theStingArray)

  //Q17
  const allRoundUp = numbers.reduce((acc, cur) => acc + cur, 0)
  console.log(allRoundUp)

  //Q18

 const stringCounty = countries.reduce((acc, country, index ) => {
  if(index === 0){
    return country 
  }else if(index === country.length -1){
    return `${acc}, and ${country}`
  }else{
     return `${acc}, and ${country}`
  }
 }, '')

 const answer = `${stringCounty} are north Eurpoean countries`
 console.log(answer)

 //Q19
 
 console.log('The some() method is used to check if some element are similar in one aspect whiles every() method is used to check if all the element are similar in one aspect.')

 //Q20
const checkSome = names.some((name) => name.length > 7)
console.log(checkSome)

//Q21
const containEvery = countries.every((county) => county.includes('land'))
console.log(containEvery)


//Q22
console.log('The find method returns the first element which satisfies the condition whiles the findIndex method returns the position of the first element which satisfies the condition')


//Q23
const firstCountry = countries.find((country) => country.length === 6)
console.log(firstCountry)

//Q24
const lookingFor = countries.findIndex((country) => country === 'Norway')
console.log(lookingFor)


//Q25
const findingNemo = countries.findIndex((country) => country === 'Russia')
console.log(findingNemo)

//Exercises: Level 2

//Q1
const totalPrice = products.map((product) => product.price).filter((price) => typeof price === 'number' && price > 0).reduce((acc, price) => acc + price, 0)
console.log(totalPrice)

//Q2
const sumOfPrice = products.reduce((acc, product) => acc + product.price, 0)

//Q3
function categorizeCountries(patterns){
  return countries.filter(country => {
    return patterns.some(pattern => country.toLowerCase().includes(pattern.toLowerCase()))
  })
}

const patterns = ['land', 'ia', 'island', 'stan']
const categorizedCountries = categorizeCountries(patterns)
console.log(categorizedCountries)

//Q4
function countStartingLetters(countries){
const letterCounts = {}
countries.forEach(country => {
  const startingLetter = country.charAt(0).toUpperCase() 
  if(letterCounts[startingLetter]){
    letterCounts[startingLetter]++
  }else{
    letterCounts[startingLetter] = 1;
  }
})

return Object.keys(letterCounts).map(letter => ({
  letter: letter,
  count: letterCounts[letter]
}))
}

const result = countStartingLetters(countries)
console.log(result)






 


