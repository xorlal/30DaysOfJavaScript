// //CLOSURE:JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the variables of outer function then it is called closure.

// function outerFunction(){
//     let count = 0

//     function innerFunction(){
//         count++
//         return count
//     }
//     return innerFunction
// }

// const innerFunc = outerFunction()
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


// //More examples of inner functions
// function outer(){
//     let count = 0
//     function plusOne(){
//         count++
//         return count
//     }
//     function minusOne(){
//         count--
//         return count
//     }


//     return {plusOne, minusOne}
// }

// const innerFunct = outer()
// console.log(innerFunct.plusOne())
// console.log(innerFunct.minusOne())

 


