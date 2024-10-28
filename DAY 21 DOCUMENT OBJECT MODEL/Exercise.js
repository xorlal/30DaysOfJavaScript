//EXERCISE LEVEL 1
//Q1
const firstP = document.querySelector('p')
console.log(firstP)

const thetag = document.getElementsByTagName('p')
console.log(thetag)

//Q2
const eachId = document.querySelector('#para')
console.log(eachId)

const byTheId = document.getElementById('para')
console.log(byTheId)

//Q3
const gettingAllP = document.querySelectorAll('p')
console.log(gettingAllP)

//Q4
for(let i = 0; i < gettingAllP.length; i++){
    console.log(gettingAllP[i])
}

//or

gettingAllP.forEach(title => console.log(title))


//Q5
gettingAllP[3].textContent = 'Paragraph Four'

//Q6
gettingAllP[0].className = 'text'
gettingAllP[1].className = 'text'
gettingAllP[2].className = 'text'
gettingAllP[3].className = 'text'
gettingAllP[0].setAttribute('id', 'para') 
gettingAllP[1].setAttribute('id', 'para') 
gettingAllP[2].setAttribute('id', 'para') 
gettingAllP[3].setAttribute('id', 'para') 
console.log(gettingAllP)

//Exercise Level 2
//First paragraph
gettingAllP[0].style.fontSize = '50px'
gettingAllP[0].style.backgroundColor = 'red'
gettingAllP[0].style.border = '2px solid'
gettingAllP[0].style.fontFamily = 'sans-serif'

//Second paragraph
gettingAllP[1].style.fontSize = '30px'
gettingAllP[1].style.backgroundColor = 'yellow'
gettingAllP[1].style.border = '2px solid'
gettingAllP[1].style.fontFamily = 'sans-serif'


gettingAllP[2].style.fontSize = '30px'
gettingAllP[2].style.backgroundColor = 'grey'
gettingAllP[2].style.border = '2px solid'
gettingAllP[2].style.fontFamily = 'sans-serif'



gettingAllP[3].style.fontSize = '25px' 
gettingAllP[3].style.backgroundColor = 'pink' 
gettingAllP[3].style.border = '2px solid' 
gettingAllP[3].style.fontFamily = 'sans-serif' 

console.log(gettingAllP)

//Q2
gettingAllP.forEach((para, i) => {
    if( i % 2 === 0){
        para.style.color = 'green'
    }else{
        para.style.color = 'red'
    }
})
console.log(gettingAllP)

//Q3

//For text content
gettingAllP[0].textContent = 'First Manipulation'
gettingAllP[1].textContent = 'Second Manipulation'
gettingAllP[2].textContent = 'Third Manipulation'
gettingAllP[3].textContent = 'Fourth Manipulation'

//For id
gettingAllP[0].setAttribute('id', 'Manipulations')
gettingAllP[1].setAttribute('id', 'Manipulations')
gettingAllP[2].setAttribute('id', 'Manipulations')
gettingAllP[3].setAttribute('id', 'Manipulations')

//For class
gettingAllP[0].classList.add('class1')
gettingAllP[1].classList.add('class2')
gettingAllP[2].classList.add('class3')
gettingAllP[3].classList.add('class4')

console.log(gettingAllP)

//EXERCISE LEVEL 3
