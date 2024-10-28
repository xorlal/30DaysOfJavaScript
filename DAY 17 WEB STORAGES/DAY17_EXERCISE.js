 //Exercises
//Exercises: Level 1
//Q1
localStorage.setItem('firstName', 'Xorlali')
localStorage.setItem('lastName', 'Agorsor')
localStorage.setItem('age', 32)
localStorage.setItem('country', 'Ghana')
localStorage.setItem('city', 'Accra')
console.log(localStorage)


//Exercises: Level 2
//Q1
const student = {
    firstName: 'Emmanuel',
    lastName: 'Smith',
    age: 21,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    country: 'Ghana',
}

const stringedStudent = JSON.stringify(student, undefined, 4)
localStorage.setItem( 'student', stringedStudent)
console.log(localStorage)

//Exercises: Level 3
//Q1
const personalAccount = {
    firstName: 'Xorlali',
    lastName: 'Agorsor',
    incomes: [],
    expenses: [],

    totalIncome(){
    return this.incomes.reduce((total, income) => total + income.amount, 0)
    },

    totalExpense(){
     return this.expenses.reduce((total, expense) => total + expense.amount, 0)
    },

    accountInfo(){
    return `Name: ${this.firstName} ${this.lastName}, Total Income: $${this.totalIncome()}, Total Expense: $${this.totalExpense()}`
    },

    addIncome(description, amount){
    this.incomes.push({description, amount})
    },

    addExpense(description, amount){
    this.expenses.push({description, amount})
    },

    accountBalance(){
     return this.totalIncome() - this.totalExpense()
    }
}

personalAccount.addIncome('Salary', 5000)
personalAccount.addIncome('Freelancing', 2500)

personalAccount.addExpense('Rent', 1200)
personalAccount.addExpense('Groceries', 700)

console.log(personalAccount.accountInfo())