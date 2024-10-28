//JSON : JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text or string only. JSON is a light weight data format for storing and transporting. JSON is mostly used when data is sent from a server to a client. JSON is an easier-to-use alternative to XML.

//NB: We don't use double quotes on numbers and booleans

//Example
// {
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }

//Converting JSON to JavaScript Object: Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration. In JavaScript the keyword JSON has parse() and stringify() methods. When we want to change the JSON to an object we parse the JSON using JSON.parse(). When we want to change the object to JSON we use JSON.stringify().

//JSON.PARSE()
/* SYNTAX
JSON.parse(json[, reviver])

*/

const userText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const jsonToObj = JSON.parse(userText, undefined, 4)

console.log(jsonToObj)



const userData = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const userDataOb = JSON.parse(userData, (key, value) =>{
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})

console.log(userDataOb)

//Converting Object to JSON :When we want to change the object to JSON we use JSON.stringify(). The stringify method takes one required parameter and two optional parameters. The replacer is used as filter and the space is an indentations. If we do not want to filter out any of the keys from the object we can just pass undefined.

/*
Syntax
JSON.stringify(obj, replacer, space)

*/
//Example
const staffInfo = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
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
  }
}
const txt = JSON.stringify(staffInfo, undefined, 4)
console.log(txt)

//USING FILTER ARRAY WITH JSON.STRINGIFY :Now, lets use the replacer as a filter. The user object has long list of keys but we are interested only in few of them. We put the keys we want to keep in an array as shown in an example and use it in place of the replacer.

const managingDirector = {
  firstName: 'Gregory',
  lastName: 'Savvidis',
  country: 'Greece',
  city: 'Theselonica',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 48,
  isLoggedIn: false,
  points: 30
}
const mDirect = JSON.stringify(managingDirector, ['firstName', 'LastName', 'country', 'city', 'age'], 4)
console.log(mDirect)