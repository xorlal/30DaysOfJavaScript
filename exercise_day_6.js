//EXERCISE DAY 6 LEVEL 1
//Q1
// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// // let i = 0
// // while(i <= 10){
// //     console.log(i)
// //     i++
// // }

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i <= 10)



//Q2
for(let i = 10; i >= 0; i--){
    console.log(i)
}

// let i = 10
// while(i >= 0){
//     console.log(i)
//     i++
// }

let i = 10
do{
    console.log(i)
    i--
}while(i >= 0)


//Q3

 let n = 5;
for(let i = 0; i <= n; i++){
    console.log(i)
}


//Q4
// for(let i = 0; i <= ; i++){
//     console.log()
// }


//Q5
for(let i = 0; i < 11; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

//Q6
// for(let i = 0; i < )





//Q7
let evenSum = 0
for(let i = 0; i < 101; i=i+2){
    evenSum = evenSum + i
}// for even numbers




//Q8
let oddSum = 0
for(let i = 1; i < 101; i=i+2){
    oddSum = oddSum + 1
}// for odd numbers




//Q9




//Q10
let sum = 0
for(let i = 0; i < 101; i++ ){
    sum = sum + i
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}`) 

//Q11
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`)


 //Q12
 console.log(`[${evenSum}, ${oddSum}]`)

 //Q13
 let randomNumber = []
 for(let i =0; i < 5; i++){
   let randNumGen = Math.floor(Math.random() * 100); // Generates random numbers between 0 and 99
    randomNumber.push(randNumGen)
 }

 console.log(randomNumber)

 //Q14
 let uniqueNumb = []
 for(let i = 0; i < 5; i++){
    let uniqueGen = Math.floor(Math.random() * 100);
    uniqueNumb.push(uniqueGen)
 }
 console.log(uniqueNumb)

 //Q15
 let randomUni = ['ABCDEFGHIJKLabcdefghijkl1234567890']
 let newRandom = '';
 for(let i = 0; i < 6; i++){
    let uniqer = Math.floor(Math.random() * randomUni.length)
    let randomChar = randomUni.push(uniqer)
    newRandom += randomChar
 }
 console.log(newRandom)

 

 //EXERCISE LEVEL 2

 //Q1

 //Q2

 //Q3

 //Q4
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

  let newCountries = []
  for(let i = 0; i < countries.length; i++){
    newCountries.push(countries[i].toUpperCase())
  }
  console.log(newCountries)

 //Q5
 for(let i = 0; i < countries.length; i++){
    console.log(countries[i].length)
 }

 //Q6
 for(let i = 0; i < countries.length; i++){
    console.log(`${countries[i]}, ${countries[i].length}`)
 }

 //Q7 
const countriesWithLand = []
for(let i = 0; i < countries.length; i++){
    if (countries[i].includes('land')){
        countriesWithLand.push(countries[i])
    }
}
if(countriesWithLand.length > 0){
    console.log(countriesWithLand);
}else{
    console.log('All these countries are without \'land\'')
}

//Q8
const countriesWithAi = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('ia')){
        countriesWithAi.push(countries[i])
    }
}
if(countriesWithAi.length > 0){
    console.log(countriesWithAi);
}else{
    console.log('All these countries are without \'land\'')
}
 
//Q9
let longestCountry = ''
for(let i = 0; i < countries.length; i++){
   if(countries[i].length > longestCountry.length){
     longestCountry = countries[i]
   }
}
  console.log(longestCountry);


  //Q10
  let shortestCountry = []
  for(let i = 0; i < countries.length; i++){
     if(countries[i].length === 5){
       shortestCountry.push(countries[i])
     }
  }
    console.log(shortestCountry);

//Q11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let longestWebTech = []
  for(let i = 0; i < webTechs.length; i++){
    if(webTechs[i].length > longestWebTech.length){
        longestWebTech = webTechs[i]
    }
  }
 console.log(longestWebTech)

 //Q12
 const techWithLength = []
 for(let i = 0; i < webTechs.length; i++){
    const arrayOfWebTechs = [webTechs[i], webTechs[i].length]
    techWithLength.push(arrayOfWebTechs);
 }
 console.log(techWithLength)

 //Q13
 const mernStack = ['MongoDB', 'Express', 'React', 'Node'] //not yet
for(const myStack of mernStack){
    console.log(myStack[0])
}

 //Q14
 for(let i = 0; i < webTechs.length; i++){
    console.log(webTechs[i])
 }

 //Q15
 const fruits = ['banana', 'orange', 'mango', 'lemon'] 
 const revwesedArray = []
 for(let i = fruits.length - 1; i >= 0; i--){
    revwesedArray.push(fruits[i])
 }
console.log(revwesedArray)

//Q16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const oneFullStack = []
  for(let i = 0; i < fullStack.length; i++){
    for(let j = 0; j < fullStack[i].length; j++){
        console.log(fullStack[i][j].toUpperCase())
    }
  }

  //EXERCISE LEVEL 3
  //Q1
  for(let i = 0; i < countries.length;  i++){
        console.log(countries[i].slice())
  }
//Q2
const sortedCountries = []
for(let i = 0; i < countries.length; i++){
    const copyArray = countries.sort()
    sortedCountries.push(copyArray[i]) 
}
console.log(sortedCountries)
//Q3
console.log(webTechs.sort())
console.log(mernStack.sort())

//Q4
const newCountryLand = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].includes('land')){
        newCountryLand.push(countries[i])
    }
}
console.log(newCountryLand)

//Q5
let highestNumCountry = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].length > highestNumCountry.length){
        highestNumCountry = (countries[i])
    }
}
console.log(highestNumCountry)

//Q6
// let shortestCountry = []
// for(let i = 0; i < countries.length; i++){
//    if(countries[i].length === 5){
//      shortestCountry.push(countries[i])
//    }
// }
//   console.log(shortestCountry);

const onlyFourChar = []
for(let i = 0; i < countries.length; i++){
    if(countries[i].length === 4){
        onlyFourChar.push(countries[i])
    }
}
console.log(onlyFourChar)

 