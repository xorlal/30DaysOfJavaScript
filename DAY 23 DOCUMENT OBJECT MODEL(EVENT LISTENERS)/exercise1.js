//Exercise 1
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p = document.querySelector('p')
const containerDiv = document.querySelector('div')
const input = document.querySelector('input')
const topDiv = document.querySelector('#topDiv')
const button  = document.querySelector('button')
const genP = document.querySelector('#genP')
let otherDivs



//Styling the body
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.fontFamily = 'Courier New'

//Styling the h1
h1.className = 'headingTitle'
h1.style.fontSize = '60px'
h1.textContent = 'Number Generator'
h1.style.bottom = '30px'
h1.style.position = 'relative'
h1.style.color = 'lightgreen'

//styling the h2
h2.className = 'SecondTitle'
h2.style.fontSize = '25px'
h2.textContent = '30DaysOfJavaScript:DOM Day 3'
h2.style.position = 'absolute'
h2.style.top = '6%'


//styling the p
p.className = 'author'
p.style.fontSize = '20px'
p.textContent = 'Author: Xorlali Agorsor'
p.style.position = 'absolute'
p.style.top = '10%'
p.style.fontWeight = 'bold'

//styling the containerDiv and the elements in it
containerDiv.style.display = 'flex'
containerDiv.style.position = 'absolute'
containerDiv.style.top = '17%'
containerDiv.style.flexWrap = 'wrap'
containerDiv.style.gap = '5px' 
containerDiv.style.width = '70%'
containerDiv.style.height = 'auto'
// containerDiv.style.textAlign = 'center'
// containerDiv.style.justifyContent = 'flex-start'

topDiv.style.display = 'flex'
topDiv.style.gap = '10px' 
topDiv.style.justifyContent = 'center'
topDiv.style.top = '30%'
topDiv.style.width = '100%'
topDiv.style.padding = '10px'


input.style.width = '60%'
input.style.border = '2px solid lightgreen'
input.style.fontSize = '15px'
input.style.width = '60%'
input.style.borderRadius = '4px'

genP.style.position = 'absolute'
genP.style.color = 'red'
genP.style.left = '60px'
genP.style.bottom = '15px'






button.style.fontFamily = 'Courier New'
button.style.fontWeight = 'bold'
button.style.backgroundColor = 'lightgreen'
button.style.color = 'white'
button.style.border = 'none'
button.style.fontSize = '15px'
button.style.borderRadius = '4px'



button.addEventListener("input", () => {
    if(input.value === String){
        genP.textContent = 'Input value must be a number'
       }else if (input === null){
        genP.textContent = 'Enter number value on the inupt flield to generate numbers'
       }else {
        genP.textContent = ''
       }
})



button.addEventListener("click", () => {
    function isPrime(num){
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}
for(let i = 0; i < input.value ; i++){
    otherDivs = document.createElement('h1')
    otherDivs.classname = 'numberDiv'  
    otherDivs.style.fontSize = '40px'
    otherDivs.textContent = i
     otherDivs.style.margin = '0'
     otherDivs.style.textAlign = 'center'
    otherDivs.style.width = '15%'
if (isPrime(otherDivs.textContent)){
    otherDivs.style.backgroundColor = 'red'
}else if(otherDivs.textContent % 2 === 0){
    otherDivs.style.backgroundColor = 'green'
}else{
    otherDivs.style.backgroundColor = 'yellow'
}

    containerDiv.appendChild(otherDivs)
}
 
})



button.addEventListener("dblclick", () => {
    function isPrime(num){
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}
for(let i = 0; i < input.value ; i++){
    otherDivs = document.createElement('h1')
    otherDivs.classname = 'numberDiv'  
    otherDivs.style.fontSize = '40px'
    otherDivs.textContent = i
     otherDivs.style.margin = '0'
     otherDivs.style.textAlign = 'center'
    otherDivs.style.width = '15%'
if (isPrime(otherDivs.textContent)){
    otherDivs.style.backgroundColor = 'red'
}else if(otherDivs.textContent % 2 === 0){
    otherDivs.style.backgroundColor = 'green'
}else{
    otherDivs.style.backgroundColor = 'yellow'
}

    containerDiv.appendChild(otherDivs)
}
 
})









