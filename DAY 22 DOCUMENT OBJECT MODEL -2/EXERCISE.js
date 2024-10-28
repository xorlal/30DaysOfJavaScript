//EXERCISES
//Exercises: Level 1
//Q1
const body = document.querySelector('body')
const headingH1 = document.querySelector('h1')
const h2 = document.createElement('h2')
const p = document.createElement('p')
const containerDiv = document.querySelector('div')
let otherDivs 

//Styling the body
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.fontFamily = 'Courier New'



//Styling the h1
headingH1.className = 'heading'
headingH1.style.fontSize = '40px'
headingH1.style.bottom = '30px'
headingH1.textContent = 'Number Generator'
headingH1.style.position = 'relative'

//Styling the h2
h2.className = 'secondElement'
h2.style.fontSize = '20px'
h2.textContent = '30DaysOfJavaScript:DOM Day 2'
h2.style.textDecoration = 'underline'
h2.style.position = 'absolute'
h2.style.top = '3%'
document.body.appendChild(h2)

//Creating and syling the p element
p.className = 'para'
p.style.fontSize = '17px'
p.textContent = 'Author:Xorlali Agorsor'
p.style.textDecoration = 'underline'
p.style.position = 'absolute'
p.style.top = '6%'
p.style.fontWeight = 'bold'
document.body.appendChild(p)

//Styling the 
containerDiv.style.display = 'flex'
containerDiv.style.flexDirection = 'row'
containerDiv.style.position = 'absolute'
containerDiv.style.top = '10%'
containerDiv.style.flexWrap = 'wrap'
containerDiv.style.gap = '5px' 
containerDiv.style.width = '70%'
containerDiv.style.textAlign = 'center'

//function for the other divs
function isPrime(num){
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}
for(let i = 0; i < 102; i++){
    otherDivs = document.createElement('h1')
    otherDivs.classname = 'numberDiv'
    otherDivs.style.fontSize = '40px'
    otherDivs.textContent = i
    otherDivs.style.margin = '1px auto'
    otherDivs.style.padding = '3px 3px'
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

