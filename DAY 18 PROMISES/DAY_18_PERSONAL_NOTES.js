//PROMISES: An Object that manages asynchronous operations.
//A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.


//Promise constructor
//We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are the resolve and reject functions.
/*
  Syntax
  const promise = new promise((resolve, reject) => {
    resolve('success')
    reject('failure')
    })
*/

//Example with the promise resolve
// const doPromise = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         const languages = ['Ewe', 'Twi', 'Ga']
//         if (languages.length > 0) {
//             reslove(languages)
//           }else{
//             reject('Something wrong has happened')
//           }
//     }, 2000)
// })

// doPromise
// .then(result => {
//     console.log(result)
// })
// .catch(error => console.log(error))


// //Example with the promise rejected
// const noPromise = new Promise ((reslove, reject) => {
//     setTimeout(() => {
//         const skill = ['HTML', 'CSS', 'JS']
//         if(skill.includes('Node')){
//             reslove('FullStack developer')
//         }else {
//           reject('Something wrong has happened')
//         }
//     }, 2000)
// })

// noPromise
// .then(result => {
//     console.log(result)
// })
// .catch(
//     error => console.log(error)
// )


//Fetch API: The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. In this challenge we will use fetch to request url and APIS. In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.
// const url = 'https://restcountries.com/v2/all' 
// fetch(url)
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
// .catch(error => console.error(error)) 



//Async and Await
//Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
// const square = async function (n) {
//     return n * n
// }
// console.log(square(2))
//The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.


//How do we access the value from the promise? To access the value from the promise, we will use the keyword await.
// const circle = async function (n) {
//     return n * n
// }
// const value = await circle(3)
// console.log(value)
//Now, as you can see from the above example writing async in front of a function create a promise and to get the value from a promise we use await. Async and await go together, one can not exist without the other.

//Let us fetch API data using both promise method and async and await method.

//The promise method
const web = 'https://restcountries.com/v2/all'
fetch(web)
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))

//the async and await method
const fetchData = async () => {
    try{
        const response = await fetch(web)
        const countries = await response.json()
        console.log(countries)
    } catch(err){
        console.error(err)
    }
}
console.log('===== async and await')
console.log(fetchData())

























  




// function walkDog(callBack){

//     setTimeout(() => {
//         console.log("You walk the dog 🐕‍🦺");
//         callBack()
//     }, 1500)
// }

// function cleanKitchen(callBack){

//        setTimeout(() => {
//         console.log("You clean the Kitchen ✨");
//         callBack()
//     }, 2500)
// }

// function takaeOutTrash(callBack) {

//     setTimeout(() => {
//         console.log("You take the trash out ♻");
//         callBack()
//     }, 500)
// }

// walkDog(() => {
//    cleanKitchen(() => {
//        takaeOutTrash(() => console.log("You finsined all the chores!"))
//    })
    
// })










// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback(false, skills)
//     }, 2000)
//   }
  
//   doSomething((err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   })

