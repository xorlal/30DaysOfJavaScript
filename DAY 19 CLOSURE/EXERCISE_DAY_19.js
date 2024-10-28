//EXERCISE LEVEL 1
//Q1
//  function increment(){
//     let count = 0

//     function inner(){
//         count++
//         console.log(`Count increment is: ${count}`)
//     }
//     return {inner}
//  }

//  const counter = increment()

//  counter.inner()
//  counter.inner()
//  counter.inner()

//  //Exercises: Level 2

// function createGame(){
//     let score = 0

//  function increaseScore(points){
//     score += points
//     console.log(`+${score}pts`)
//  }

//  function decreaseScore(points){
//     score -= points
//     console.log(`-${score}pts`)
// }

// function getScore(){
//     return score;
//     // console.log(`Score is ${score}pts`)
// }

// return {increaseScore, decreaseScore, getScore}
// }

// const game = createGame()
 
// game.increaseScore(5)
//  game.increaseScore(6)
//  game.decreaseScore(5)
//  console.log(`The current score is ${game.getScore()}pts`)

 //Exercises: Level 3
 function personAccount(firstName, lastName){
    let incomes = []
    let expenses = []

   function totalIncome(){
    return incomes.reduce((total, incomes) => total + incomes.amount, 0)
   }

   function totalExpense(){
    return expenses.reduce((total, expense) => total - expense.amount, 0)
   }

   function accountInfo(){
    return `Account Holder: ${firstName} ${lastName}\n Total Income: $${totalIncome()}\n Total Expense: $${totalExpense()}`
   }

   function  addIncome(description, amount){
    incomes.push({description, amount})
   }
   function addExpense(description, amount){
    expenses.push({description, amount})
   }

   function accountBalance(){
    return totalIncome() - totalExpense()
   }
   
   return{totalIncome, totalExpense, accountInfo, addIncome, addExpense, accountBalance}
  

 }

 const myAccount = personAccount('Xorlali', 'Doe')
 myAccount.addIncome('Salary', 6000)
 myAccount.addIncome('Frelancing', 2500)
 myAccount.addExpense('Groceries', 1000)
 myAccount.addExpense('Rent', 500)

 console.log(myAccount.accountInfo())