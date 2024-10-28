//DOM PART-2
//CREATING AN ELEMENT : document.createElement()
//To create an HTML element we use tag name. Creating an HTML element using JavaScript is very simple and straight forward. We use the method document.createElement(). The method takes an HTML element tag name as a string parameter.

//EXAMPLE
// let title = document.createElement('h1')
// title.className = 'title'
// title.style.fontSize = '24px' 
// title.textContent = 'Creating HTML element DOM Day 2'
// console.log(title)


//TO CREATE MULTIPLE ELEMENTS
//To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want. After we create the element we can assign value to the different properties of the HTML object.

//EXAMPLE
// let tithe
// for(let i = 0; i < 3; i++){
//     tithe = document.createElement('h1')
//     tithe.className = 'tithe'
//     tithe.style.fontSize = '24px'
//     tithe.textContent = i
//     console.log(tithe)
// }

//APPENDING A CHILD TO A PARENT 
//To see a created element on the HTML document we should append it to the parent as a child element. We can access the HTML document body using document.body. The document.body support the appendChild() method. See the example below.

//EXAMPLE
// let offer
// for(let i = 0; i < 3; i++){
//     offer = document.createElement('h1')
//     offer.className = 'offer'
//     offer.style.fontSize = '24px'
//     offer.textContent = i
//     document.body.appendChild(offer)
// }

//REMOVING A CHILD ELEMENT FROM A PARENT NODE
//After creating an HTML, we may want to remove element or elements and we can use the removeChild() method.
// const ul = document.querySelector('ul')
// const lists = document.querySelectorAll('li')
// for(const list of lists){
//     ul.removeChild(list)
// }

//OR YOU CAN USE THE innerHTML WAY TO REMOVE CHILD ELEMENTS
const ul = document.querySelector('ul')
ul.innerHTML = ''