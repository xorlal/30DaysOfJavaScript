//EVENT LISTENERS
//Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. We can add event listener method to any DOM object. We use addEventListener() method to listen different event types on HTML elements. The addEventListener() method takes two arguments, an event listener and a callback function.

/*
selectedElement.addEventListener('eventlistner', e => {
    the activity you want to occur after the event will be in here 
    })
*/


// CLICK 
//To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.
//The following is an example of click type event.
// const buttonEl = document.querySelector('button')

// buttonEl.addEventListener('click', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
//     console.log('it actually works!!')
// })

//ONCLICK
//An event can be also attached directly to the HTML element as inline script.
// const clickMe = () => {
//     alert('We can attach event on the HTML element')
// }

//DOUBLE CLICK 
// To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

// The following is an example of click type event. Example: dblclick

// const btn = document.querySelector('button')
// btn.addEventListener('dblclick', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
//     console.log('It\'s practically the same method as the \'click\' event listener')
// })

//MOUSE ENTER
/*To attach an event listener to an element, first we select the element then we attach the addEventListener method. The event listener takes event type and callback functions as argument.

The following is an example of click type event.

Example: mouseenter */
// const butt = document.querySelector('button')
// butt.addEventListener('mouseenter', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
//     console.log('Mouse entered the element')
// })

/*
By now you are familiar with addEventListen method and how to attach event listener. There are many types of event listeners. But in this challenge we will focus the most common important events. List of events:

click - when the element clicked ✅
dblclick - when the element double clicked ✅
mouseenter - when the mouse point enter to the element ✅
mouseleave - when the mouse pointer leave the element 
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
Test the above event types by replacing event type in the above snippet code.
 */

//MOUSE LEAVE
// const mouseLeave = document.querySelector('button')
// mouseLeave.addEventListener('mouseleave', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
// })


//MOUSE MOVE
// const mouseMove = document.querySelector('button')
// mouseMove.addEventListener('mousemove', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
// })

//MOUSE OVER
// const mouseOver = document.querySelector('button')
// mouseOver.addEventListener('mouseover', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
// })

//MOUSE OUT
// const mouseOut = document.querySelector('button')
// mouseOut.addEventListener('mouseout', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
// })

// //INPUT
// const input = document.querySelector('button')
// input.addEventListener('input', e => {
//     console.log('e gives the event listener object:', e)
//     console.log('e.target gives the selected element: ', e.target)
//     console.log('e.target.textContent gives content of selected element:', e.target.textContent)
// })



//INPUT VALUE
// const mass = document.querySelector('#mass')
// const height = document.querySelector('#height')
// const button = document.querySelector('button')

// let bmi
// button.addEventListener('click', () => {
//  bmi = mass.value / height.value ** 2
//  alert(`your BMI is ${bmi.toFixed(2)}`)
//  console.log(bmi)
// })

//INPUT EVENT AND CHANGE
//In the above example, we managed to get input values from two input fields by clicking button. How about if we want to get value without click the button. We can use the change or input event type to get data right away from the input field when the field is on focus. Let us see how we will handle that.

// const input = document.querySelector('input')
// const p = document.querySelector('p')
// input.addEventListener('input', e => {
//     p.textContent = e.target.value
// })

// const input = document.querySelector('input')
// input.addEventListener('input', () => {
//     console.log('INPUT')
// })

// const myInput = document.querySelector('input')
// myInput.addEventListener('change', () => {
//     console.log('CHANGE')
// })


//BLUR EVENT
// const blurInput = document.querySelector('input')
// const p = document.querySelector('p')
// blurInput.addEventListener('blur', (e) => {
//   p.textContent = 'Field is required'
//   p.style.color = 'red'
// })


/*
THIS IS A SHORT STUDY FROM BRO CODE ON YOUTUBE ABOUT THE EVENT LISTENERS
const myButton = document.querySelector('button') 

myButton.addEventListener("click", () => {
    myBox.style.backgroundColor = 'tomato'
    myBox.textContent = 'OUCH! 🤕'
})

myButton.addEventListener("mouseover", () => {
    myBox.style.backgroundColor = 'yellow'
     myBox.textContent ="Don't do it 😲"
})

myButton.addEventListener("mouseout", () => {
    myBox.style.backgroundColor = 'lightgreen'
     myBox.textContent ="Click me 😁"
})*/


//KEYPRESS, KEYDOWN AND KEYUP
//We can access all the key numbers of the keyboard using different event listener types. Let us use keypress and get the keyCode of each keyboard keys.

// document.body.addEventListener("keypress", e => {
//     alert(e.keyCode)
// })

// const input = document.querySelector('input')
//         const p = document.querySelector('p')

//         input.addEventListener('blur', () => {
//             p.textContent = 'Field is required'
//             p.style.color = 'red'

//         })


//NOTE
/*
The "keypress" event is now considered deprecated and non-standard. It may not work consistently across all browsers and is not recommended for modern JavaScript development. Instead, you can use the "keydown" and "keyup" events, which provide more reliable and comprehensive functionality.
*/








