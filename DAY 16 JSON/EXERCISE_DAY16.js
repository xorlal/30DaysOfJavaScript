//EXERCISE 
//Exercises Level 1
//Q1 
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

const jsonSkills = JSON.stringify(skills, undefined, 4)
console.log(jsonSkills)

//Q2
let age = 250;
const onlyAge = JSON.stringify(age, undefined, 4)
console.log(onlyAge)

//Q3
let isMarried = true
const onlyMarry = JSON.stringify(isMarried, undefined, 4)
console.log(onlyMarry)

//Q4
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }

  const stringStudent = JSON.stringify(student, undefined, 4)
  console.log(stringStudent)

//Exercises Level 2
//Q1
const onlySomeStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(onlySomeStudent)

//Exercises Level 3
//Q1
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

const parsedTxt = JSON.parse(txt, undefined, 4)
console.log(parsedTxt)

//Q2
const users = JSON.parse(txt)


let mostSkilledUser = '';
let maxSkills = 0

for(const user in users){
    const skillsCount = users[user].skills.length 
    if(skillsCount > maxSkills){
        maxSkills = skillsCount
        mostSkilledUser = user
    }   
}
console.log(`${mostSkilledUser} has the most skills with the count of ${maxSkills}`)
