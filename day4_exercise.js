//exercise 

//Q1
// let birth = parseInt(prompt('Enter your age'))

// if(birth >= 18){
//     console.log(`You are old enough to drive.`)
// }else{
//     console.log(`You are left with ${18 - birth} years to drive`)
// }

//Q2
// let myAge = parseInt(prompt('Enter my age'))

// let yourAge = parseInt(prompt('Enter your age'))

// if(yourAge > myAge){
//    console.log(`Enter your age : ${yourAge}\nYou are ${yourAge - myAge} years older than me`)
// }else{
//     console.log(`Enter your age : ${myAge}\nI am ${myAge - yourAge} years older than you`)
// }

//Q3
// let a = 4
// let b = 3

// if(a > b){
//     console.log(`${a} is greater than ${b}`)
// } else{
//     console.log(`${b} is greater than ${a}`)
// }

// a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`)

//Q4
// let evenNum = parseInt(prompt('Enter a number'))

// if(evenNum % 2 == 0){
//     console.log(`Enter a number : ${evenNum}\n${evenNum} is a even number`)
// }else{
//     console.log(`Enter a number : ${evenNum}\n${evenNum} is an odd number`)
// }

//LEVEL 2

//Q1
// let score = 65

// if (score >= 80 && score <= 100){
//     console.log('A')
// }else if(score >= 70 && score <= 89){
//     console.log('B')
// }else if(score >= 60 && score <= 69){
//     console.log('C')
// }else if (score >= 50 && score <= 59){
//     console.log('D')
// }else if(score >= 0 && score <= 49){
//     console.log('F')
// }else{
//     console.log('Invalid score')
// }

// //Q2
// let month = 'May'
// if(month === 'September' || month === 'October' || month === 'November'){
//     console.log('The season is Autumn')
// }else if(month === 'December' || month === 'January' || month === 'February'){
//     console.log('The season is Winter')
// }else if(month === 'March' || month === 'April' || month === 'May'){
//     console.log('The season is Spring')
// }else if(month === 'June' || month === 'July' || month === 'August'){
//     console.log('The month is Summer')
// }else{
//     console.log('The month entered is invalid')
// }

// //Q3
// let day = prompt('Enter a day')
// let realDay = day.charAt(0).toUpperCase() + day.slice(1)
// switch(realDay){
//          case 'Sunday':
//             console.log(`${realDay} is a weekend`)
//             break;
//         case 'Monday':
//              console.log(`${realDay} is a working day`)
//              break;
//          case 'Tuesday':
//              console.log(`${realDay} is a working day`)
//              break;
//          case 'Wednesday':
//              console.log(`${realDay} is a working day`)
//              break;
//          case 'Thursday':
//              console.log(`${realDay} is a working day`)
//              break;
//          case 'Friday':
//              console.log(`${realDay} is a working day`)
//              break;
//          case 'Saturday':
//              console.log(`${realDay} is a weekend`)
//              break;
//              default: 
//              console.log('It is not a week day')
//      }
    

     //LEVEL 3

     //Q1

     let month1 = prompt('Enter a month')
     let newMonth = month1.charAt(0).toUpperCase() + month1.slice(1)
     if(newMonth === 'September' || newMonth === 'April' || newMonth === 'June' || newMonth === 'November'){
        console.log(`Enter a month: ${newMonth}\n${newMonth} has 31 days `)
     }else if(newMonth === 'January' || newMonth === 'March' || newMonth === 'July' || newMonth === 'October' || newMonth === 'December' || newMonth === 'May' || newMonth === 'August'){
        console.log(`Enter a month: ${newMonth}\n${newMonth} has 30 days`)
     }else if(newMonth === 'Feburary'){
        console.log(`Enter a month: ${newMonth}\n${newMonth} has 28 days`)
     }else {
        console.log('This month is not valid')
     }

  
     