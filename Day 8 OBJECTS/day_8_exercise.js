//Exercises: Level 1
//Q1
// const dog = {}


//Q2
// console.log(dog)

//Q3
const dog = {
    name: 'Benard',
    legs: 4,
    color: 'Black',
    age: 5,
    bark: function(){
        return `Woof woof`
    }
}

//Q4
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())

//Q5
dog.breed = 'German Shephered'
dog.getDogInfo = function() {
    let dogInfo = `${this.name} is a ${this.breed} that is ${this.age} years old he is ${this.color} and barks a lot`
    return dogInfo
}

console.log(dog.getDogInfo())

//Exercises: Level 2

//Q1
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let mostSkilledPerson = ''
  let maxSkills = 0
  for(const user in users){
    if(users[user].skills.length > maxSkills){
        mostSkilledPerson = user
        maxSkills = users[user].skills.length
    }
  }
  console.log(`${mostSkilledPerson} has the most skills with a total of ${maxSkills} skills`)

 //Q2

 let loggedInUsers = 0;
 let points = 0;
 for(const user in users){
    if(users[user].isLoggedIn){
        loggedInUsers++
    }
    if(users[user].points >= 50){
        points++
    }
 }

 console.log(`Logged in users: ${loggedInUsers}\nUsers with 50 or more points: ${points}`)

 
//Q3
let mernDevelopers = []
for(let user in users){
  let skills = users[user].skills
  if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')){
    mernDevelopers.push(user)
  }
}

console.log('MERN stack Developers are:', mernDevelopers)

//Q4
const copiedUser = Object.assign({}, users)
 copiedUser.Xorlali = {
    email: 'myname@myname.com',
    skills: ['HTML', 'CSS', 'Javascript', 'React'],
    age: 25,
    isLoggedIn: true,
    points: 20
   }

   copiedUser.Selasi = {
    email: 'selasiag@something.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 15
   } 

   console.log(copiedUser)

   //Q5
   const allTheKeys = Object.keys(users)
   console.log(allTheKeys)

   //Q6
   const alltheValues = Object.values(users)
   console.log(alltheValues)

   //Q7
   const countries = {
    Ghana: {
      capital: 'Accra',
      populations: '33.48 million',
      languages: ['Twi', 'Ewe', 'Ga', 'Hausa', 'Frafra']
    },
    Nigeria: {
      capital: 'Lagos',
      populations: '218.5 million',
      languages: ['Yoruba', 'Nigerian pidgin', 'Igbo', 'Fulfulde',]
    },
    Togo: {
      capital: 'Lome',
      populations: '8.849 million',
      languages: ['French', 'Ewe', 'Kabiye']
    },
    IvoryCoast: {
      capital: 'Yamoussoukro',
      populations: '28.16 million',
      languages: ['French']
    }
   }

console.log(countries)

//Exercises: Level 3
const personAccount = {
  firstName: 'Xorlali',  
  lastname: 'Agorsor',
  incomes: [
    {description: 'Salary', amount: 3000},
    {description: 'Freelance', amount: 1200}
  ],
  expenses: [ 
    {description: 'Rent', amount: 1000},
    {description: 'Groceries', amount: 300}
  ],

  totalIncome: function(){
    return this.incomes.reduce((acc, income) => acc + income.amount, 0)
  } ,
  totalExpense: function(){
    return this.expenses.reduce((acc, expenses) => acc + expenses.amount, 0)
  },
accountInfo: function(){
  return `Account Holder: ${this.firstName} ${this.lastname}\nTotal income: ${this.totalIncome()}\nTotal Expenses ${this.totalExpense()}\nAccount Balance ${this.accountBalance()}`
},
addIncome: function(description, amount){
  this.incomes.push({description, amount})
},
addExpenses: function(description, amount){
  this.expenses.push({description, amount})
},
accountBalance: function (){
  return this.totalIncome() - this.totalExpense()
}
}
console.log(personAccount.accountInfo())
personAccount.addIncome('Bonus', 500)
personAccount.addExpenses('Internet', 400)
console.log(personAccount.accountInfo())

//Q2
const anotherUser = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

//a 
// const addedUser = Object.assign({}, anotherUser)
// addedUser.signUp = function(){
//  if()
// }  