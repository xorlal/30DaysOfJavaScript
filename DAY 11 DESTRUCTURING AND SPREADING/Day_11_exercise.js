//Exercises: Level 1
//Q1
const constants = [2.72, 3.14, 9.81, 37, 100]
let [E, PI, gravity, humanBodyTemp, waterBoilingtemp] = constants
console.log(E, PI, gravity, humanBodyTemp, waterBoilingtemp)

//Q2
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor )

//Q3
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let {width, height, area, perimeter} = rectangle
  console.log(width, height, area, perimeter)

  //Exercises: Level 2
  const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ]

    for(const {name, scores, skills, age} of users){
        console.log(name, scores, skills, age)
    }


const lessThanTwo = users.filter(user => user.skills.length < 2)
console.log(lessThanTwo)

//Exercises: Level 3
const count = [
    {
      name:'Ghana',
      capital:'Accra',
      population:4645654,
      languages:['English', 'Twi']
    },
    {
      name:'Nigeria',
      capital:'Lagos',
      population:324685,
      languages:['Igbo', 'English']
    },
    {
      name:'Togo',
      capital:'Lome',
      population:41541354,
      languages:['French', 'Ewe']
    },
    {
      name:'Sweden',
      capital:'Onslo',
      population:534655,
      languages:['Sewdish']
    }]

    let{name, capital, population, languages} = count
    console.log(count)

    //Q2
    const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
    let[stuName, stuSkills, [jsScore, reactScore] ] = student
    console.log(stuName, stuSkills, jsScore, reactScore)


    //Q3
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
      
      const convertArrayToObject = arr => {
        return arr.map(([name, skills, scores])  => ({
            name,
            skills,
            scores
        }))
      }

      const studentObject = convertArrayToObject(students)
      console.log(studentObject)

      //Q4
      const studs = {
        name: 'David',
        age: 25,
        skills: {
          frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
          ],
          backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
          ],
          dataBase:[
            { skill: 'MongoDB', level: 7.5 },
          ],
          dataScience:['Python', 'R', 'D3.js']
        }
      }

      const copiedStuds = {...studs}
      copiedStuds.skills.frontEnd.push({skill: 'BootStrap', level: 8})
      copiedStuds.skills.backEnd.push({skill: 'Express', level: 9})
      copiedStuds.skills.dataBase.push({skill: 'SQL', level: 8})
      copiedStuds.skills.dataScience.push("SQL")
      console.log(copiedStuds)