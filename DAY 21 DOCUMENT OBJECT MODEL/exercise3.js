const body = document.querySelector('body')
const divEl = document.querySelector('div')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const ul = document.querySelector('ul')
const li = document.querySelectorAll('li')
const p = document.querySelector('p')
const heading = document.getElementById('heading')


const yearsColors = ['red', 'blue', 'green', 'purple', 'orange']
const datetimeColors = ['lightblue', 'lightgreen', 'lightcoral', 'lightpink', 'lightyellow']

let yearColorIndex = 0
let datetimeColorIndex = 0


//Function for the year color change 1 second 
const changeYearColor = () => {
  const fullText = heading.textContent
  let newText = fullText.replace('2020', `<span style="color: ${yearsColors[yearColorIndex]};font-size:70px">2020</span>`)
  heading.innerHTML = newText
  yearColorIndex = (yearColorIndex + 1) % yearsColors.length
}
setInterval(changeYearColor, 1000)



//Function for the date and 1 second color change
const changeDateColor = () => {
 const now = new Date()
 p.innerHTML = `${now.toDateString()} ${now.toLocaleTimeString()}`
 p.style.backgroundColor = datetimeColors[datetimeColorIndex]
 datetimeColorIndex = (datetimeColorIndex + 1) % datetimeColors.length
}
setInterval(changeDateColor, 1000)

//Styling of the paragraph 
p.style.textAlign = 'center'
p.style.width = '40%'
p.style.margin = '0px  auto'
p.style.padding = '10px'


divEl.style.display = 'flex'
divEl.style.flexDirection = 'column'
h2.style.textAlign = 'center'

ul.style.listStyle = 'none' 

h1.style.paddingBottom = '5px'
h2.style.textDecoration = 'underline'


//Styling the body 
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'

//Styling the list 
li.forEach((li, i) => {
  li.style.padding = '10px'
  li.style.margin = '3px'
 if( i == 0){
  li.style.backgroundColor = 'green'
 }else if(i == 1){
  li.style.backgroundColor = 'yellow'
 }else{
  li.style.backgroundColor = 'red'
 }
})

