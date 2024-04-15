// //CONDITIONALS
// /*Contitionals are used to make decisions based on diffrent circumstance
// Ways to implement Conditionals
// if, if else, if else if else, switch, ternary operator
// */

// //If :used check if a condition is true and to execute the block code
// /*
// if (condition) {
//   //this part of code runs for truthy condition
// }
// */
// //Example 1
// let num = 3
// if(num > 0){
//     console.log(`${num} is a positive number`)
// } // 3 is a positive number

// //NB : As compared to the example above if the condition ids false we don't see any results. if we want to see a falsy condition we add another block the 'else'
// /*
// Example 2
// let isRaining = true
// if (isRaining) {
//   console.log('Remember to take your rain coat.')
// }
// */

// //IF ELSE : If condition is true the first block will be executed, if not the else condition will be executed.

// /*
// if (condition) {
//   // this part of code runs for truthy condition
// } else {
//   // this part of code runs for false condition
// }
// */

// //Exmaple 1
// let numb = 5
// if(numb > 0){
//     console.log(`${numb} is a positive number`)
// }else{
//     console.log(`${num} is a negative number`)
// }

// //Example 2
// let ano = -5 
// if(ano > 0){
//     console.log(`${ano} is a positive number`)
// }else{
//     console.log(`${ano} is a negative number`)
// }


// // using conditionals- eg1
// let isMarried = true
// if (isMarried){
//     console.log(`You are already married`)
// }else{
//     console.log(`You need to get married`)
// }
// //You are already married

// // using conditionals- eg2
// let inRelationship = false
// if (inRelationship){
// console.log(`You are already in a relationship`)
// }else{
//     console.log(`You must be in a relationship by now`)
// }
// //You must be in a relationship by now

// //NB: to have more than two conditions we use the else if conditions


// //IF ELSE IF ELSE : Used when we have multiple conditions
// /*
// // syntax
// if (condition) {
//      // code
// } else if (condition) {
//    // code
// } else {
//     //  code
// }
// */

// //Example 1
// let a = 0
// if (a > 0){
//     console.log(`${a} is a postive number`)
// }else if (a < 0){
//     console.log(`${a} is a negative number`)
// }else if (a == 0){
//     console.log(`${a} is Zero`)
// }else{
//     console.log(`${a} is not a number`)
// }
 
// //Example 2
// let weather = 'Sunny'
// if (weather === 'Rainy'){
//     console.log('You need a rain coat.')
// }else if( weather === 'Cloudy'){
//     console.log('Might be cold, you need a jacket.')
// }else if (weather === 'Sunny'){
//   console.log('Go out freely.')
// } else{
//     console.log('No need for rain coat')
// }


// //SWITCH : is an alternative for 'if else if else else' 
// /*
// switch(caseValue){
//   case 1:
//     // code
//     break
//   case 2:
//    // code
//    break
//   case 3:
//    // code
//    break
//   default:
//    // code
// }
// */

// // let workoutDay = prompt('What day is it today at the gym ?')
// // let day = workoutDay.toLowerCase()

// // switch(day){
// //     case 'sunday':
// //         console.log('Today is rest day')
// //         break;
// //     case 'monday':
// //         console.log('Today is leg day')
// //         break;
// //     case 'tuesday':
// //         console.log('Today is shoulders day')
// //         break;
// //     case 'wednesday':
// //         console.log('Today is rest day')
// //         break;
// //     case 'thursday':
// //         console.log('Today is back day')
// //         break;
// //     case 'friday':
// //         console.log('Today is full body workout')
// //         break;
// //     case 'saturday':
// //         console.log('Today is cardio day')
// //         break;
// //         default: 
// //         console.log('It is not a week day')
// // }

// // let trafficLight = 'yellow'
// // switch(trafficLight){
// //     case 'red':
// //         console.log('Stop at the traffic light')
// //         break;
// //     case 'yellow':
// //         console.log('Get ready to move')
// //         break;
// //     case 'green':
// //         console.log('You can go now')
// //         break;
// //         default:
// //             console.log('That is not a traffic light color')
// // }

// //Using conditions in cases
// // let fig = prompt('Enter number')
// // switch(true){
// //     case fig > 0:
// //         console.log('Number is positive')
// //         break;
// //     case fig < 0:
// //         console.log('Number is negative')
// //         break;
// //     case fig == 0:
// //         console.log('Number is zero')
// //         break;
// //     default:
// //         console.log('The entered charcter is not a number')
// // } 


// //Ternary operators
// // let isRaining = true
// // isRaining
// //   ? console.log('You need a rain coat.')
// //   : console.log('No need for a rain coat.')