//HTML5 Web Storage
//Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie. We Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and access the same data.

/*The two types of Web storage are sessionStorage & localStorage
  but we will focus on the localStorage only
*/

//LOCALSTORAGE: localStorage in JavaScript is a feature of the Web Storage API that allows developers to store key-value pairs in a web browser persistently. This data remains available even after the browser is closed and reopened, making it different from sessionStorage, which is cleared when the browser session ends.
//There are five methods to work on local Storage: setItem(), getItem(), removeItem(), clear(), key().

/*Use case of Web Storages
Some use case of Web Storages are

* store data temporarily
* saving products that the user places in his shopping cart
* data can be made available between page requests, multiple browser tabs, and also between  browser sessions using localStorage
* can be used offline completely using localStorage
* Web Storage can be a great performance when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
* can be used for user authentication method
*/

//HTML5 WEB STORAGE OBJECTS: Provides two objects for storing data on the client.
/*
* window.localStorage - stores data with no expiration date
* window.sessionStorage - stores data for one session (data is lost when the browser tab is  closed)Most modern browsers support Web Storage, however it is good to check browser support for localStorage and sessionStorage. Let us see the available methods for the Web Storage objects.
*/

/*
Web Storage objects:
localStorage - to display the localStorage object
localStorage.clear() - to remove everything in the local storage
localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.
*/

//Setting Item to the local storage: When we set data to be stored in a localStorage, it will be stored as a string. If we are storing an array or an object, we should stringify it first to keep the format unless otherwise we lose the array structure or the object structure of the original data.

/*Syntax: localStorage.setItem('key', 'value')
*/

//Storing a string in a localStorage
localStorage.setItem('firstName', 'Xorlali')
console.log(localStorage)

//Storing a number in a localStorage
localStorage.setItem('age', 233)
console.log(localStorage) 

const skills = ['HTML', 'CSS', 'JS', 'React']

const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)


let expertise = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]

  let expertiseJSon = JSON.stringify(expertise, undefined, 4)
  localStorage.setItem('expertise', expertiseJSon)
  console.log(localStorage) 

//Storing an Object in localStorage, you must first stringify the object 

const staff = {
  firstName: 'Eyram',
  age: 27,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const stringifyObj = JSON.stringify(staff, undefined, 4)
localStorage.setItem('staff', stringifyObj)

//GETTING ITEM FROM A LOCAL STORAGE: We get data from the local storage using localStorage.getItem() method.
/* Syntax
localStorage.getItem('key')
*/
let firstName = localStorage.getItem('firstName')
let age= localStorage.getItem('age')
let skill = localStorage.getItem('skills')
console.log(firstName, age, skill)

//As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.
let skilll = localStorage.getItem('skills')
let skillObj = JSON.parse(skilll, undefined, 4)
console.log(skillObj)  

localStorage.clear()