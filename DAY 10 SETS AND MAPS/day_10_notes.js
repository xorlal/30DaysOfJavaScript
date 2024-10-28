//SETS:Set is a collection of elements. Set can only contains unique elements. Let us see how to create a set in the section below.
//CREATING AN EMPTY SET
// const companies = new Set()
// console.log(companies)


//CREATING SETS FROM AN ARRAY
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

//SETS are iterable; they can be repeated, throught each element
for(const language of setOfLanguages){
    console.log(language)
}

//Adding an elemnt to a set
const companies = new Set()
companies.add('Google')
companies.add('Facebook')
companies.add('Amazon')
companies.add('Microsoft')
console.log(companies.size)
 console.log(companies)

//Looping to add elemnt to sets
//NB: IF YOU WANT TO LOOP THROUGH A SET IT IS PREFFERED TO USE FOR OF LOOP 
const comp = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for(const company of comp){
    setOfCompanies.add(company)
}
console.log(setOfCompanies)

//DELETING AN ELEMNT FROM A SET: We can delete an element from a set using a delete method.
console.log(setOfCompanies.delete('Google'))
console.log(setOfCompanies.size)

//CHECKING IF AN ELEMNT IS IN THE SET
 console.log(setOfCompanies.has('Apple'))
 console.log(setOfCompanies.has('Facebook'))


 //CLEARING THE SET : Removes all the elements from the set 
 setOfCompanies.clear()
 console.log(setOfCompanies)


 //EXAMPLES ON HOW TO USE SETS
 const speak = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
]

const lanSet = new Set(speak)
console.log(lanSet)
console.log(lanSet.size)

const counts = []
const count = {}

for(const l of lanSet){
    const filteredLang = speak.filter((lng) => lng === l)
    console.log(filteredLang)
     counts.push({lang: l, count: filteredLang.length})
}
console.log(counts)

//Other use case of set. For instance to count unique item in an array
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)
console.log(setOfNumbers)


//UNION OF SETS: To find a union to two sets can be achieved using spread operator. Let's find the union of set A and set B (A U B)
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C) // Set(6) {1, 2, 3, 4, 5, …}


// INTERSECTION OF SETS:To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)
let d = [1, 2, 3, 4, 5]
let e = [3, 4, 5, 6]

let D = new Set(d)
let E = new Set(e)

let f = d.filter((num) => E.has(num))
let F = new Set(f)

console.log(F)

//DIFFERENCE OF SETS: To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

let g = [1, 2, 3, 4, 5]
let h = [3, 4, 5, 6]

let G = new Set(g)
let H = new Set(h)

let i = g.filter((num) => !H.has(num))
let I = new Set(i)
console.log(I)




//MAP
//Creating an empty Map from array
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
const map = new Map(countries)
console.log(map)
console.log(map.size)

//ADDING VALUES TO MAP
const countriesMap = new Map()
console.log(countriesMap.size)
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
countriesMap.set('Ghana', 'Accra')
console.log(countriesMap)
console.log(countriesMap.size)

//GETTING A VALUE FROM MAP
console.log(countriesMap.get('Finland'))

//CHECKING KEY IN MAP:Check if a key exists in a map using has method. It returns true or false
console.log(countriesMap.has('Ghana'))

//GETTING ALL VALUES FROM MAP USING LOOP
for(const country of countriesMap){
    console.log(country)
}
//  output
/*
 (2) ['Finland', 'Helsinki']
 (2) ['Sweden', 'Stockholm']
 (2) ['Norway', 'Oslo']
 (2) ['Ghana', 'Accra']
*/

for(const [country, city] of countriesMap){
  console.log(country, city)
}

