//LOOPS: are used for repetitive actions
//for loop
for(let i = 0; i <= 5; i++){
    console.log(i)
} // looping from 0 to 5 in increament

for(let i = 5; i >= 0; i--){
    console.log(i)
}// looping from 5 to 0 in decreament

for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase()) // PUSHES THE CAPITALIZED VERSION OF COUNTRIES TO newArr CREATING A NEW ARRAY
}
console.log(newArr)

// ADDING ALL ELEMENTS IN AN ARRAY
const numbs = [1, 2, 3, 4, 5, 6, 7]
let sum = 0
for(let i = 0; i < numbs.length; i++){
    sum = sum + numbs[i] // can be shorten, sum sum += numbs[i]
}
console.log(sum)

//CREATING A NEW ARRAY BASED ON AN EXSITING ARRAY
const alusynco = [1, 2, 3, 4, 5, 6]
const newAlusynco = []
for(let i = 0; i < alusynco.length; i++){
    newAlusynco.push(alusynco[i] ** 2)
}
console.log(newAlusynco)

const names = ['eyram', 'xorlali', 'kafui', 'selasi', 'akpene']
const capNames = []
for(let i = 0; i < names.length; i++){
    capNames.push(names[i].toUpperCase())
}
console.log(capNames)

//WHILE LOOP
// let i = 0
// while(i <= 5){
//     console.log(i)
//     i++
// }// 0 1 2 3 4 5


//DO WHILE LOOP
// let i = 0
// do{
//     console.log(i)
//     i++
// } while(i <= 5)

let i = 0
do{
    console.log(i)
    i++
} while(i <= 5)

// 0 1 2 3 4 5

//FOR OF LOOP

// Syntax: for(const element of arr){
//     // code goes here
// }

const aluTrade = [1, 2, 3, 4, 5]
//  for(const num of aluTrade){
//     console.log(num)
//  }
 // 1 2 3 4 5

 //ADDING ALL THE NUMBERS  

 let summ = 0
for (const numb of aluTrade){
    summ = summ + numb
}

console.log(summ)// 15

const webTechs =  [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  for(const tech of webTechs){
    console.log(tech.toUpperCase())
  }

  
  const county = ['Accra', 'Lome', 'New York', 'Nairobi']
  const newCounty = []
  for(const count of county){
    newCounty.push(count.toUpperCase())
  }

  console.log(newCounty)

//BREAK : USED TO INTERRUPT A LOOP

/*
SYNTAX
for(let i = 0; i <= 5; i++){
    if (i == 3){
        break
    }
    console.log(i)
}
*/

for(let i = 0; i <= 10; i++){
    if(i == 3){
        break
    } 
    console.log(i)
}

//CONTINUE : We use the keyword continue to skip a certain iterations.
for(let i = 0; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i)
}
  




