//DOCUMENT OBJECT MODULE (DOM)
//HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

//GETTING ELEMENTS

// <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <title>Document Object Model</title>
//     </head>
//     <body>

//      <h1 class='title' id='first-title'>First Title</h1>
//      <h1 class='title' id='second-title'>Second Title</h1>
//      <h1 class='title' id='third-title'>Third Title</h1>
//      <h1></h1>

//     </body>
//   </html>

//GETTING ELEMENT BY TAG NAME
//getElementByTagName():
/* syntax
document.getElementByTagName('tagname')
*/
//Example
const allTitles = document.getElementsByTagName('h1')
console.log(allTitles)
console.log(allTitles.length)

for(let i = 0; i < allTitles.length; i++){
    console.log(allTitles[i])
}


//GETTING ELEMENTS BY CLASS NAME
//getElementsByClassName():method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements
/* syntax
document.getElementsByClassName('classname')
*/
//Eaxmple
const className = document.getElementsByClassName('title')
console.log(className)
console.log(className.length)

for(let i = 0; i < className.length; i++){
    console.log(className[i])
}


//GETTING ELEMENTS BY ID
//getElementsById: targets a single HTML element. We pass the id without # as an argument.
/* syntax
document.getElementsById('first-title')
*/
//Example
let firstTitle = document.getElementById('first-title')
let secondTitle = document.getElementById('second-title')
console.log(firstTitle)
 console.log(secondTitle)

 //GETTING ELEMENT BY USING QUERY SELECTOR METHODS
 //querySelector(): can be used to select HTML element by its tag name, id or class. If the tag name is used it selects only the first element.

let oneTitle = document.querySelector('h1') // select the first available h1 element
let twoTitle = document.querySelector('#first-title') // select id with first-title
let threeTitle = document.querySelector('.title') // select the first available element with class title
 
//querySelectorAll(): can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

const everyTitle = document.querySelectorAll('h1')
console.log(everyTitle.length)

for(let i = 0; i < everyTitle.length; i++){
    console.log(everyTitle[i])
}

everyTitle.forEach(title => console.log(title))
const classTitle = document.querySelectorAll('.title')
console.log(classTitle)


//ADDING ATTRIBUTE
//An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.
//Example
const title = document.querySelectorAll('h1')
/*
title[3].className = 'title'
title[3].id ='fourth-title' 
console.log(title)*/

//ADDING ATTRIBUTE USING setAttribute()
//The setAttribute() method set any html attribute. It takes two parameters the type of the attribute and the name of the attribute. Let's add class and id attribute for the fourth title.

//Example
/*const settingAtt = document.querySelectorAll('h1')
settingAtt[3].setAttribute('class', 'title')
settingAtt[3].setAttribute('id', 'fourth-title')
console.log(settingAtt)*/

//ADDING ATTRIBUTE WITHOUT USING setAttribute()
//We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class
 title[3].className = 'title'
 title[3].id = 'fourth-title'


//ADDING CLASS USING classList
//The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.
title[3].classList.add('title', 'header-title')
console.log(title)

//REMOVING CLASS USING REMOVE
//Similar to adding we can also remove class from an element. We can remove a specific class from an element.
 title[3].classList.remove('title', 'header-title')

 //ADDING TEXT TO HTML
 //An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property textContent or *innerHTML.

 //ADDING TEXT CONTENT USING TEXTCONTENT
 // The textContent property is used to add text to an HTML element.
 //Example
 title[3].textContent = 'Fourth Title'
 console.log(title)


 //ADDING TEXT CONTENT USING INNERHTML
 //Most people get confused between textContent and innerHTML. textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

 

 //Inner HTML
//We use innerHTML property when we like to replace or a completely new children content to a parent element. It value we assign is going to be a string of HTML elements.

 const lists = `
            <li>30DaysOf Python Challenge Done</li>
            <li>30DaysOf JavaScript Challenge Ongoing</li>
            <li>30DaysOf React Challenge Coming</li>
            <li>30DaysOf FullStack Challenge Coming</li>
            <li>30DaysOf DataAnalysis Challenge Coming</li>
            <li>30DaysOf ReactNative Challenge Coming</li>
            <li>30DaysOf MachineLearning Challenge Coming</li>
            <li>30DaysOf Reading Challenge Coming</li>
            <li>30DaysOf Sprinting Challenge Coming</li>
              `
            const ul = document.querySelector('ul')
            ul.innerHTML = lists

// To remove innerHTML
//The innerHTML property can allow us also to remove all the children of a parent element. Instead of using removeChild() I would recommend the following method.
 ul.innerHTML = ''

 //ADDING STYLE

 //ADDING STYLE COLOR
 //Let us add some style to our titles. If the element has even index we give it green color else red.
title.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if(i % 2 === 0){
        title.style.color = 'red'
    }else {
        title.style.color = 'green'
    }
})
            
//ADDING BACKGROUND COLOR
//Let us add some style to our titles. If the element has even index we give it green color else red.
title.forEach((title, i) => {
    title.style.fontSize = '24px'
    if(i % 2 ===0){
        title.style.backgroundColor = 'green'
    }else {
        title.style.backgroundColor = 'red'
    }
})

//ADDING STYLE TO FONT SIZE
//Let us add some style to our titles. If the element has even index we give it 20px else 30px
title.forEach((title, i) => {
    title.style.fontSize = '24px'
    if(i % 2 ===0){
        title.style.fontSize = '20px'
    }else {
        title.style.fontSize = '30px'
    }
})