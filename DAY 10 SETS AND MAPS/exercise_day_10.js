//EXERCISE: LEVEL 1
//Q1
const emptyOne = new Set()

//Q2
const container = [0,1,2,3,4,5,6,7,8,9,10]
const setOfContainer = new Set(container)
console.log(setOfContainer)

for(const contain of container){
    console.log(contain)
}

//Q3
console.log(setOfContainer.delete(6))
console.log(setOfContainer.size)

//Q4
console.log(setOfContainer.clear())
console.log(setOfContainer)

//Q5
const arrOfSrings = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const setOfStrings = new Set(arrOfSrings)
console.log(setOfStrings)

//Q6
const mappedCountries = [
    ['Ghana', 233],
    ['Nigeria', 234],
    ['Togo', 235],
    ['Ivory coast', 236]
]

const map = new Map(mappedCountries)
console.log(map)

//EXERCISE: LEVEL 2
//Q1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const c = [...a, ...b]

const A = new Set(a)
const B = new Set(b)
const C = new Set(c)
console.log(C) 

//Q2
const interA = new Set(a)
const interB = new Set(b)
const interC = a.filter((num) => interB.has(num))

const newC = new Set(interC)

console.log(newC)


//Q3
const difA = new Set(a)
const difB = new Set(b)
const difC = a.filter((num) => !difB.has(num))
const ansC = new Set(difC)

console.log(ansC)

//EXERCISE:LEVEL 3
